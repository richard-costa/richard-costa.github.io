(() => {
  const ACCENT = getComputedStyle(document.documentElement)
    .getPropertyValue("--site-accent")
    .trim() || "#7e99c3";
  let mathJaxPromise = null;

  document.querySelectorAll(".js-404-path").forEach((node) => {
    node.textContent = window.location.pathname;
  });

  const changelog = document.getElementById("git-changelog");
  if (changelog) {
    fetch("/changelog.json")
      .then((response) => {
        if (!response.ok) throw new Error("changelog unavailable");
        return response.json();
      })
      .then((entries) => {
        changelog.textContent = "";

        if (!Array.isArray(entries) || entries.length === 0) {
          changelog.textContent = "No recent changes found.";
          return;
        }

        let currentDate = "";

        for (const entry of entries) {
          if (entry.date !== currentDate) {
            const heading = document.createElement("h2");
            heading.textContent = entry.date;
            changelog.appendChild(heading);
            currentDate = entry.date;
          }

          const item = document.createElement("p");
          const link = document.createElement("a");
          const sha = document.createElement("code");

          link.href = entry.url;
          link.textContent = entry.subject;
          sha.textContent = entry.short_sha;

          item.append(link, " · ", sha);
          changelog.appendChild(item);
        }
      })
      .catch(() => {
        changelog.textContent = "Recent Git history was unavailable for this render.";
      });
  }

  const homeMedia = document.getElementById("home-media");
  if (homeMedia) {
    const TIME_ZONE = "America/Sao_Paulo";
    const FADE_DURATION = 400;
    const ROTATION_INTERVAL = 30_000;
    const mobileMedia = window.matchMedia("(max-width: 680px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = navigator.connection;
    let mediaEntries = [];
    let selectedSource = null;
    let isUpdating = false;

    function hideHomeMedia() {
      homeMedia.classList.remove("is-visible");
      homeMedia.replaceChildren();
      homeMedia.hidden = true;
    }

    function hash(value) {
      let result = 2166136261;
      for (const character of value) {
        result ^= character.charCodeAt(0);
        result = Math.imul(result, 16777619);
      }
      return result >>> 0;
    }

    function dailySequence(entries, date) {
      const shuffled = [...entries];
      let state = hash(date);
      for (let index = shuffled.length - 1; index > 0; index -= 1) {
        state = (Math.imul(state, 1664525) + 1013904223) >>> 0;
        const swapIndex = state % (index + 1);
        [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
      }
      return shuffled;
    }

    function currentDateAndSlot() {
      const parts = new Intl.DateTimeFormat("en-CA", {
        timeZone: TIME_ZONE,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hourCycle: "h23"
      }).formatToParts(new Date());
      const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
      return {
        date: `${values.year}-${values.month}-${values.day}`,
        slot: (Number(values.hour) * 60 + Number(values.minute)) * 2 + Math.floor(Number(values.second) / 30)
      };
    }

    function imageOnlyMode() {
      return mobileMedia.matches || reducedMotion.matches || connection?.saveData === true;
    }

    function selectedEntry() {
      const candidates = imageOnlyMode()
        ? mediaEntries.filter((entry) => entry.type === "image")
        : mediaEntries;
      if (candidates.length === 0) return null;

      const { date, slot } = currentDateAndSlot();
      const sequence = dailySequence(candidates, date);
      return sequence[slot % sequence.length];
    }

    function waitForAsset(element) {
      return new Promise((resolve, reject) => {
        const loaded = () => {
          cleanup();
          resolve();
        };
        const failed = () => {
          cleanup();
          reject();
        };
        const cleanup = () => {
          element.removeEventListener("load", loaded);
          element.removeEventListener("loadedmetadata", loaded);
          element.removeEventListener("loadeddata", loaded);
          element.removeEventListener("error", failed);
        };

        element.addEventListener("load", loaded, { once: true });
        element.addEventListener("loadedmetadata", loaded, { once: true });
        element.addEventListener("loadeddata", loaded, { once: true });
        element.addEventListener("error", failed, { once: true });
        if (element instanceof HTMLImageElement && element.complete && element.naturalWidth > 0) {
          loaded();
        } else if (element instanceof HTMLVideoElement && element.readyState >= HTMLMediaElement.HAVE_METADATA) {
          loaded();
        }
      });
    }

    function createMediaElement(entry) {
      const link = document.createElement("a");
      link.href = entry.original;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.setAttribute("aria-label", "View original wallpaper");
      link.title = "View original wallpaper";

      if (entry.type === "image") {
        const image = document.createElement("img");
        image.src = entry.src;
        image.alt = "";
        image.decoding = "async";
        link.appendChild(image);
        return { link, media: image };
      }

      const video = document.createElement("video");
      video.src = entry.src;
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("aria-hidden", "true");
      link.appendChild(video);
      return { link, media: video };
    }

    function afterFade() {
      return new Promise((resolve) => window.setTimeout(resolve, FADE_DURATION));
    }

    async function updateHomeMedia() {
      if (isUpdating) return;
      const entry = selectedEntry();
      if (!entry) {
        hideHomeMedia();
        return;
      }
      if (entry.src === selectedSource) return;

      isUpdating = true;
      homeMedia.hidden = false;
      if (homeMedia.firstElementChild) {
        homeMedia.classList.remove("is-visible");
        await afterFade();
      }

      const { link, media } = createMediaElement(entry);
      try {
        await waitForAsset(media);
      } catch {
        isUpdating = false;
        hideHomeMedia();
        return;
      }

      homeMedia.replaceChildren(link);
      selectedSource = entry.src;
      if (media instanceof HTMLVideoElement) media.play().catch(() => {});
      window.setTimeout(() => homeMedia.classList.add("is-visible"), 0);
      isUpdating = false;
    }

    fetch("/data/home-media.json")
      .then((response) => {
        if (!response.ok) throw new Error("home media unavailable");
        return response.json();
      })
      .then((entries) => {
        if (!Array.isArray(entries)) throw new Error("invalid home media manifest");
        mediaEntries = entries.filter(
          (entry) =>
            (entry.type === "image" || entry.type === "video") &&
            typeof entry.src === "string" &&
            typeof entry.original === "string"
        );
        if (mediaEntries.length === 0) {
          hideHomeMedia();
          return;
        }
        updateHomeMedia();
        window.setInterval(updateHomeMedia, ROTATION_INTERVAL);
        mobileMedia.addEventListener("change", updateHomeMedia);
        reducedMotion.addEventListener("change", updateHomeMedia);
        connection?.addEventListener?.("change", updateHomeMedia);
      })
      .catch(hideHomeMedia);
  }

  let equationDataPromise = null;

  function loadEquationData() {
    if (!equationDataPromise) {
      equationDataPromise = fetch("/data/equations.json").then((response) => {
        if (!response.ok) throw new Error("equation data unavailable");
        return response.json();
      });
    }

    return equationDataPromise;
  }

  function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function ensureMathJax() {
    if (window.MathJax?.typesetPromise) {
      return Promise.resolve(window.MathJax);
    }

    if (mathJaxPromise) return mathJaxPromise;

    if (!window.MathJax) {
      window.MathJax = {
        tex: {
          inlineMath: [["\\(", "\\)"]],
          displayMath: [["\\[", "\\]"]]
        },
        options: {
          skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code"]
        }
      };
    }

    mathJaxPromise = new Promise((resolve, reject) => {
      const existing = document.querySelector('script[data-site-mathjax="true"]');
      if (existing) {
        existing.addEventListener("load", () => resolve(window.MathJax), { once: true });
        existing.addEventListener("error", reject, { once: true });
        return;
      }

      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-mml-chtml.js";
      script.async = true;
      script.dataset.siteMathjax = "true";
      script.addEventListener("load", () => {
        const startup = window.MathJax?.startup?.promise;
        if (startup?.then) {
          startup.then(() => resolve(window.MathJax)).catch(reject);
        } else {
          resolve(window.MathJax);
        }
      }, { once: true });
      script.addEventListener("error", reject, { once: true });
      document.head.appendChild(script);
    });

    return mathJaxPromise;
  }

  async function renderEquation(output, kind) {
    try {
      const data = await loadEquationData();
      const items = data?.[kind];

      if (!Array.isArray(items) || items.length === 0) {
        throw new Error("equation category unavailable");
      }

      const item = randomItem(items);

      output.innerHTML = `
        <div class="terminal-result-title">${item.name}</div>
        <div class="terminal-math">\\[${item.latex}\\]</div>
        <div class="terminal-muted">${item.note}</div>
      `;

      const mathJax = await ensureMathJax();
      if (mathJax?.typesetClear) mathJax.typesetClear([output]);
      if (mathJax?.typesetPromise) await mathJax.typesetPromise([output]);
    } catch {
      output.innerHTML = '<span class="terminal-muted">equation data unavailable.</span>';
    }
  }

  function renderHelp(output, commands) {
    output.innerHTML = `
      <div class="terminal-result-title">available commands</div>
      <div class="terminal-help">
        ${commands.map(({ name, description }) => `
          <div class="terminal-help-row">
            <code>${name}</code>
            <span>${description}</span>
          </div>
        `).join("")}
      </div>
    `;
  }

  function renderCoffee(output) {
    output.innerHTML = "";
    const art = document.createElement("pre");
    art.className = "terminal-art";
    art.textContent = [
      "        ( (",
      "         ) )",
      "      .------.",
      "      |      |]",
      "      \\      /",
      "       `----'",
    ].join("\n");
    output.append(art);
  }

  function startCmatrix(input) {
    if (document.getElementById("cmatrix-overlay")) return;

    const overlay = document.createElement("div");
    overlay.id = "cmatrix-overlay";
    overlay.className = "cmatrix-overlay";

    const canvas = document.createElement("canvas");
    const hint = document.createElement("div");
    hint.className = "cmatrix-hint";
    hint.textContent = "cmatrix · q / esc to exit";

    const close = document.createElement("button");
    close.type = "button";
    close.className = "cmatrix-close";
    close.textContent = "×";
    close.setAttribute("aria-label", "Close cmatrix");

    overlay.append(canvas, hint, close);
    document.body.appendChild(overlay);

    const context = canvas.getContext("2d");
    const fontSize = 18;
    const glyphs = "01アイウエオカキクケコサシスセソタチツテト<>[]{}+-=*";
    let drops = [];
    let animationFrame = 0;
    let lastFrame = 0;

    function resize() {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * ratio);
      canvas.height = Math.floor(window.innerHeight * ratio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const columns = Math.ceil(window.innerWidth / fontSize);
      drops = Array.from({ length: columns }, (_, index) =>
        drops[index] ?? -Math.floor(Math.random() * 40)
      );
    }

    function draw(timestamp) {
      if (timestamp - lastFrame >= 48) {
        context.fillStyle = "rgba(9, 13, 15, 0.16)";
        context.fillRect(0, 0, window.innerWidth, window.innerHeight);
        context.fillStyle = ACCENT;
        context.font = `${fontSize}px "SFMono-Regular", Consolas, monospace`;

        for (let i = 0; i < drops.length; i += 1) {
          const char = glyphs[Math.floor(Math.random() * glyphs.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;
          context.fillText(char, x, y);

          if (y > window.innerHeight && Math.random() > 0.975) {
            drops[i] = -Math.floor(Math.random() * 20);
          } else {
            drops[i] += 1;
          }
        }

        lastFrame = timestamp;
      }

      animationFrame = requestAnimationFrame(draw);
    }

    function stop() {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("keydown", onKeydown, true);
      overlay.remove();
      if (window.matchMedia("(pointer: fine)").matches) input?.focus();
    }

    function onKeydown(event) {
      if (event.key === "Escape" || event.key.toLowerCase() === "q") {
        event.preventDefault();
        event.stopPropagation();
        stop();
      }
    }

    close.addEventListener("click", stop);
    window.addEventListener("resize", resize);
    document.addEventListener("keydown", onKeydown, true);

    resize();
    context.fillStyle = "#090d0f";
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
    animationFrame = requestAnimationFrame(draw);
  }

  function openTerminal() {
    let root = document.getElementById("site-terminal");

    if (!root) {
      root = document.createElement("aside");
      root.id = "site-terminal";
      root.className = "site-terminal";
      root.innerHTML = `
        <div class="site-terminal-bar">
          <span>terminal</span>
          <button type="button" class="site-terminal-close" aria-label="Close terminal">×</button>
        </div>
        <div class="site-terminal-body">
          <div class="site-terminal-output">type <code>help</code></div>
          <form class="site-terminal-form">
            <span class="terminal-prompt">$</span>
            <input aria-label="Terminal command" autocomplete="off" spellcheck="false">
          </form>
        </div>
      `;

      document.body.appendChild(root);

      const close = root.querySelector(".site-terminal-close");
      const form = root.querySelector(".site-terminal-form");
      const input = root.querySelector("input");
      const output = root.querySelector(".site-terminal-output");

      function closeTerminal() {
        root.hidden = true;
      }

      const commands = [
        {
          name: "help",
          description: "show this command list",
          run: () => renderHelp(output, commands)
        },
        {
          name: "whoami",
          description: "identify this site",
          run: () => {
            output.innerHTML = 'richard.costa_ / são paulo<br><span class="terminal-muted">personal site · data, software, physics</span>';
          }
        },
        {
          name: "ls",
          description: "list site sections",
          run: () => {
            output.innerHTML = `
              <a href="/projects.html">projects/</a>
              <a href="/notes/">notes/</a>
              <a href="/posts/">posts/</a>
              <a href="/now.html">now/</a>
              <a href="/bookmarks.html">bookmarks/</a>
              <a href="/blogroll.html">blogroll/</a>
              <a href="/changelog.html">changelog/</a>
              <a href="/humans.txt">humans.txt</a>
            `;
          }
        },
        {
          name: "coffee",
          description: "brew something small",
          run: () => renderCoffee(output)
        },
        {
          name: "clear",
          description: "clear terminal output",
          run: () => {
            output.textContent = "";
          }
        },
        {
          name: "exit",
          description: "close terminal session",
          run: closeTerminal
        },
        {
          name: "physics",
          description: "render a random physics equation",
          run: () => renderEquation(output, "physics")
        },
        {
          name: "math",
          description: "render a random mathematical identity",
          run: () => renderEquation(output, "math")
        },
        {
          name: "cmatrix",
          description: "start the blue character rain",
          run: () => {
            output.innerHTML = '<span class="terminal-muted">cmatrix: q or Esc exits.</span>';
            startCmatrix(input);
          }
        }
      ];

      close?.addEventListener("click", closeTerminal);

      root.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          closeTerminal();
        }
      });

      form?.addEventListener("submit", async (event) => {
        event.preventDefault();
        const command = input.value.trim().toLowerCase().replace(/\s+/g, " ");
        input.value = "";

        const entry = commands.find(({ name }) => name === command);
        if (entry) {
          await entry.run();
        } else if (["rm -rf /", "sudo rm -rf /", "rm -rf *"].includes(command)) {
          output.innerHTML = 'rm: refusing to remove <code>/</code><br><span class="terminal-muted">filesystem is read-only. nice try.</span>';
        } else if (command) {
          output.textContent = `command not found: ${command}`;
        }
      });
    }

    root.hidden = false;
    if (window.matchMedia("(pointer: fine)").matches) root.querySelector("input")?.focus();
  }

  document.querySelectorAll("[data-open-terminal]").forEach((button) => {
    button.addEventListener("click", openTerminal);
  });
})();
