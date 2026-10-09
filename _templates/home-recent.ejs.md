````{=html}
<div class="home-recent">
  <div class="home-recent-title">recent</div>
  <div class="home-recent-links">
  <% for (const item of items) { %>
    <a class="home-recent-item" href="<%- item.path %>">
      <span class="home-recent-type"><%- item.writing_type %></span>
      <span class="home-recent-name"><%- item.title %></span>
    </a>
  <% } %>
  </div>
  <a class="home-recent-all" href="/writing.html">all writing →</a>
</div>
````
