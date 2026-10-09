````{=html}
<%
function writingType(item) {
  const path = (item.path || "").replace(/^\\.\\//, "");
  if (path.startsWith("essays/")) return "essay";
  if (path.startsWith("notes/")) return "note";
  if (path.startsWith("shorts/")) return "short";
  return "writing";
}
%>
<div class="home-recent">
  <div class="home-recent-title">recent</div>
  <div class="home-recent-links">
  <% for (const item of items) { %>
    <a class="home-recent-item" href="<%- item.path %>">
      <span class="home-recent-type"><%- writingType(item) %></span>
      <span class="home-recent-name"><%- item.title %></span>
    </a>
  <% } %>
  </div>
  <a class="home-recent-all" href="/writing.html">all writing →</a>
</div>
````
