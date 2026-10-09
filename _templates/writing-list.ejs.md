````{=html}
<%
function writingType(item) {
  const path = item.path || "";
  if (path.startsWith("essays/")) return "essay";
  if (path.startsWith("notes/")) return "note";
  if (path.startsWith("shorts/")) return "short";
  return "writing";
}
%>
<div class="writing-list list">
<% for (const item of items) { %>
  <article class="writing-list-item" <%= metadataAttrs(item) %>>
    <div class="writing-list-meta">
      <span class="writing-list-type"><%- writingType(item) %></span>
      <span class="writing-list-date listing-date"><%- item.date %></span>
    </div>
    <a class="writing-list-title listing-title" href="<%- item.path %>"><%- item.title %></a>
  </article>
<% } %>
</div>
````
