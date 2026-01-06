function Pandoc(doc)
  local meta = doc.meta
  if meta.status == nil then
    return doc
  end

  local status = pandoc.utils.stringify(meta.status)

  local labels = {
    draft = "DRAFT",
    wip = "WORK IN PROGRESS",
    mature = "MATURE"
  }

  local label = labels[status]
  if label == nil then
    return doc
  end

  local html = string.format([[
  <div class="note-header">
    <span class="note-status status-%s">%s</span>
    <a href="qm_review.pdf"
      target="_blank"
      class="note-status note-pdf cta-pdf"
      title="View PDF"
      aria-label="View PDF">
    </a>
  </div>
  ]], status, label)

  table.insert(doc.blocks, 1, pandoc.RawBlock("html", html))
  return doc
end
