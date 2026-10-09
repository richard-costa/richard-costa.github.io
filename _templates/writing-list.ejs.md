````{=html}
<div class="writing-list list">
<% for (const item of items) { %>
  <article class="writing-list-item" <%= metadataAttrs(item) %>>
    <div class="writing-list-meta">
      <span class="writing-list-type"><%- item.writing_type %></span>
      <span class="writing-list-date listing-date"><%- item.date %></span>
    </div>
    <a class="writing-list-title listing-title" href="<%- item.path %>"><%- item.title %></a>
  </article>
<% } %>
</div>
````
