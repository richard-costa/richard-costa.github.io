(() => {
  const ACCENT = "#7e99c3";
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

  const physicsEquations = [
    {
      name: "time-dependent Schrödinger equation",
      latex: String.raw`i\hbar \frac{\partial}{\partial t}\lvert\psi(t)\rangle = \hat H\lvert\psi(t)\rangle`,
      note: "Quantum states evolve under the Hamiltonian."
    },
    {
      name: "Einstein field equations",
      latex: String.raw`G_{\mu\nu} + \Lambda g_{\mu\nu} = \frac{8\pi G}{c^4}T_{\mu\nu}`,
      note: "Spacetime geometry related to energy and momentum."
    },
    {
      name: "covariant Maxwell equation",
      latex: String.raw`\nabla_{\mu}F^{\mu\nu} = \mu_0 J^{\nu}`,
      note: "A compact relativistic form of the sourced Maxwell equations."
    },
    {
      name: "Dirac equation",
      latex: String.raw`\left(i\gamma^\mu\partial_\mu - m\right)\psi = 0`,
      note: "Relativistic spin-1/2 dynamics in natural units."
    },
    {
      name: "Hamilton's equations",
      latex: String.raw`\dot q_i = \frac{\partial H}{\partial p_i}, \qquad \dot p_i = -\frac{\partial H}{\partial q_i}`,
      note: "Classical dynamics written in phase-space form."
    }
  ];

  const mathEquations = [
    {
      name: "Euler's identity",
      latex: String.raw`e^{i\pi} + 1 = 0`,
      note: "Five fundamental constants in one line."
    },
    {
      name: "Gaussian integral",
      latex: String.raw`\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}`,
      note: "A classic integral with no elementary antiderivative."
    },
    {
      name: "Basel problem",
      latex: String.raw`\sum_{n=1}^{\infty}\frac{1}{n^2} = \frac{\pi^2}{6}`,
      note: "An infinite series unexpectedly meeting π."
    },
    {
      name: "Cauchy–Schwarz inequality",
      latex: String.raw`\left|\langle x,y\rangle\right|^2 \leq \langle x,x\rangle\langle y,y\rangle`,
      note: "One of the structural inequalities behind inner-product spaces."
    },
    {
      name: "Euler's formula",
      latex: String.raw`e^{ix} = \cos x + i\sin x`,
      note: "The bridge between exponentials and rotations."
    }
  ];

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
    const item = randomItem(kind === "physics" ? physicsEquations : mathEquations);

    output.innerHTML = `
      <div class="terminal-result-title">${item.name}</div>
      <div class="terminal-math">\\[${item.latex}\\]</div>
      <div class="terminal-muted">${item.note}</div>
    `;

    try {
      const mathJax = await ensureMathJax();
      if (mathJax?.typesetClear) mathJax.typesetClear([output]);
      if (mathJax?.typesetPromise) await mathJax.typesetPromise([output]);
    } catch {
      output.innerHTML = `
        <div class="terminal-result-title">${item.name}</div>
        <code>${item.latex}</code>
        <div class="terminal-muted">Math renderer unavailable.</div>
      `;
    }
  }

  function renderHelp(output) {
    const commands = [
      ["help", "show this command list"],
      ["whoami", "identify this site"],
      ["ls", "list site sections"],
      ["coffee", "brew something small"],
      ["clear", "clear terminal output"],
      ["physics", "render a random physics equation"],
      ["math", "render a random mathematical identity"],
      ["cmatrix", "start the blue character rain"]
    ];

    output.innerHTML = `
      <div class="terminal-result-title">available commands</div>
      <div class="terminal-help">
        ${commands.map(([name, description]) => `
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
      input?.focus();
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

      close?.addEventListener("click", () => {
        root.hidden = true;
      });

      form?.addEventListener("submit", async (event) => {
        event.preventDefault();
        const command = input.value.trim().toLowerCase();
        input.value = "";

        if (command === "help") {
          renderHelp(output);
        } else if (command === "whoami") {
          output.innerHTML = 'richard.costa_ / são paulo<br><span class="terminal-muted">personal site · data, software, physics</span>';
        } else if (command === "ls") {
          output.innerHTML = `
            <a href="/projects.html">projects/</a>
            <a href="/notes/">notes/</a>
            <a href="/posts.html">posts/</a>
            <a href="/now.html">now/</a>
            <a href="/bookmarks.html">bookmarks/</a>
            <a href="/blogroll.html">blogroll/</a>
            <a href="/changelog.html">changelog/</a>
            <a href="/humans.txt">humans.txt</a>
          `;
        } else if (command === "coffee") {
          renderCoffee(output);
        } else if (command === "clear") {
          output.textContent = "";
        } else if (command === "physics" || command === "math") {
          await renderEquation(output, command);
        } else if (command === "cmatrix") {
          output.innerHTML = '<span class="terminal-muted">cmatrix: q or Esc exits.</span>';
          startCmatrix(input);
        } else if (command === "rm -rf /") {
          output.innerHTML = 'rm: refusing to remove <code>/</code><br><span class="terminal-muted">filesystem is read-only. nice try.</span>';
        } else if (command) {
          output.textContent = `command not found: ${command}`;
        }
      });
    }

    root.hidden = false;
    root.querySelector("input")?.focus();
  }

  const button = document.createElement("button");
  button.type = "button";
  button.className = "site-terminal-toggle";
  button.textContent = "terminal";
  button.setAttribute("aria-label", "Open site terminal");
  button.addEventListener("click", openTerminal);
  document.body.appendChild(button);
})();
