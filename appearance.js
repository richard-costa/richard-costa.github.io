// Appearance switcher: one content tree, five presentations.
// The early initializer in _includes/appearance-head.html sets the theme
// before the first paint, including when navigating between Quarto pages.
(() => {
  "use strict";
  const appearance = window.rcAppearance;
  if (!appearance) return;

  const labels = [
    ["auto", "Auto · day of week"],
    ["original", "Original"],
    ["garden", "Codex"],
    ["revival", "Web Revival"],
    ["kissaten", "Kissaten"],
    ["nordic", "Nordic Minimal"]
  ];
  const names = Object.fromEntries(labels);
  const wrapper = document.createElement("li");
  wrapper.className = "nav-item appearance-item";
  wrapper.innerHTML = `
    <details class="appearance-switcher">
      <summary aria-label="Choose website appearance">◐ <span>appearance</span></summary>
      <div class="appearance-panel">
        <div class="appearance-panel-title">choose a look</div>
        <fieldset aria-label="Website appearance">
          <legend class="visually-hidden">Website appearance</legend>
          ${labels.map(([value, label]) =>
            `<label class="appearance-option"><input type="radio" name="site-appearance" value="${value}"><span>${label}</span></label>`
          ).join("")}
        </fieldset>
        <p class="appearance-caption"></p>
      </div>
    </details>`;

  const navbar = document.querySelector("#quarto-header .navbar-nav") ||
    document.querySelector("header .navbar-nav") ||
    document.querySelector(".navbar-nav");
  if (navbar) {
    navbar.appendChild(wrapper);
  } else {
    // Should Quarto change its navbar markup, keep the control available.
    wrapper.classList.add("appearance-fallback");
    document.body.appendChild(wrapper);
  }

  // The original stays untouched. These three visual identities gain a
  // semantic rail; the same route links also remain in Quarto's navbar.
  const rail = document.createElement("aside");
  rail.className = "theme-rail";
  rail.innerHTML = [
    '<a class="theme-rail-mark" href="/" aria-label="Home"><span class="nordic-rune" aria-hidden="true">ᛟ</span><span class="codex-mark" aria-hidden="true">✥</span><span class="kissaten-sun" aria-hidden="true"></span></a>',
    '<nav class="theme-rail-nav" aria-label="Theme navigation">',
    '<a href="/" data-route="/">about</a>',
    '<a href="/writing.html" data-route="/writing.html">writing</a>',
    '<a href="/projects.html" data-route="/projects.html">projects</a>',
    '<a href="/now.html" data-route="/now.html">now</a>',
    '<a href="/bookmarks.html" data-route="/bookmarks.html">bookmarks</a>',
    '<a href="/changelog.html" data-route="/changelog.html">changelog</a>',
    '</nav>',
    '<div class="theme-rail-foot"><span>são paulo, br</span><span class="theme-rail-seal" aria-hidden="true">ᛃ</span></div>'
  ].join("");
  document.body.appendChild(rail);
  const currentPath = window.location.pathname.replace(/\/$/, "/") || "/";
  for (const link of rail.querySelectorAll("a[data-route]")) {
    if (link.getAttribute("data-route") === currentPath || 
        (link.getAttribute("data-route") === "/" && currentPath === "/index.html")) {
      link.setAttribute("aria-current", "page");
    }
  }

  // The illustrated themes place wallpaper after recent content.
  // Original and Web Revival keep the same live player in the introduction.
  const media = document.querySelector(".home-media-section");
  const originalMediaParent = media?.parentElement ?? null;
  const originalMediaNextSibling = media?.nextSibling ?? null;
  const shell = document.querySelector(".home-shell");
  function syncMediaPlacement() {
    if (!media || !shell || !originalMediaParent) return;
    const mediaInHero = ["original", "revival"].includes(appearance.getTheme());
    if (mediaInHero) {
      if (media.parentElement !== originalMediaParent) {
        originalMediaParent.insertBefore(media, originalMediaNextSibling);
      }
    } else if (media.parentElement !== shell || media !== shell.lastElementChild) {
      shell.appendChild(media);
    }
  }

  const details = wrapper.querySelector("details");
  const caption = wrapper.querySelector(".appearance-caption");
  const inputs = [...wrapper.querySelectorAll("input")];

  function giscusTheme() {
    return ["garden", "nordic"].includes(appearance.getTheme())
      ? "light"
      : "https://richard-costa.github.io/giscus-theme.css";
  }

  function updateGiscus() {
    // Giscus is in an iframe, so host CSS cannot recolor it.
    const frame = document.querySelector("iframe.giscus-frame");
    if (!frame?.contentWindow) return;
    frame.contentWindow.postMessage({
      giscus: { setConfig: { theme: giscusTheme() } }
    }, "https://giscus.app");
  }

  function synchronize() {
    syncMediaPlacement();
    const choice = appearance.getChoice();
    const theme = appearance.getTheme();
    for (const input of inputs) input.checked = input.value === choice;
    caption.textContent = choice === "auto"
      ? "Today: " + names[theme] + " · São Paulo time"
      : names[theme] + " · saved on this device";
    updateGiscus();
  }

  wrapper.addEventListener("change", (event) => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement) || input.name !== "site-appearance") return;
    appearance.setChoice(input.value);
    synchronize();
    details.open = false;
    details.querySelector("summary").focus();
  });

  document.addEventListener("pointerdown", (event) => {
    if (!wrapper.contains(event.target)) details.open = false;
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && details.open) {
      details.open = false;
      details.querySelector("summary").focus();
    }
  });
  window.addEventListener("storage", (event) => {
    if (event.key !== "richard-costa-appearance") return;
    appearance.restore();
    synchronize();
  });

  // Open tabs also follow the calendar after midnight without a reload.
  window.setInterval(() => {
    if (appearance.getChoice() === "auto") {
      const previous = appearance.getTheme();
      appearance.refresh();
      if (appearance.getTheme() !== previous) synchronize();
    }
  }, 60_000);

  // Giscus may load lazily long after the switcher initializes.
  const observer = new MutationObserver(() => {
    const frame = document.querySelector("iframe.giscus-frame");
    if (!frame || frame.dataset.appearanceObserved === "true") return;
    frame.dataset.appearanceObserved = "true";
    frame.addEventListener("load", updateGiscus);
    updateGiscus();
  });
  observer.observe(document.body, { childList: true, subtree: true });
  synchronize();
})();
