function Pandoc(doc)
  local meta = doc.meta
  if not meta.status then
    return doc
  end

  local status = pandoc.utils.stringify(meta.status)

  local labels = {
    draft  = "DRAFT",
    wip    = "WORK IN PROGRESS",
    mature = "MATURE"
  }

  local label = labels[status]
  if not label then
    return doc
  end

  local html = string.format([[
  <div class="note-header">
    <span class="note-status status-%s">%s</span>
  </div>
  ]], status, label)

  table.insert(doc.blocks, 1, pandoc.RawBlock("html", html))
  return doc
end
