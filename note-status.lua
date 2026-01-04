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

  local badge_html =
    '<div class="note-status status-' .. status .. '">' ..
    label ..
    '</div>'

  table.insert(doc.blocks, 1, pandoc.RawBlock("html", badge_html))
  return doc
end
