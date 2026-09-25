(() => {
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

      form?.addEventListener("submit", (event) => {
        event.preventDefault();
        const command = input.value.trim().toLowerCase();
        input.value = "";

        if (command === "help") {
          output.textContent = "help · whoami · ls";
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
