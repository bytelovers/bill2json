function render_page(pageData) {
  //check documents https://mozilla.github.io/pdf.js/
  let render_options = {
      //replaces all occurrences of whitespace with standard spaces (0x20). The default value is `false`.
      normalizeWhitespace: true,
      //do not attempt to combine same line TextItem's. The default value is `false`.
      disableCombineTextItems: true
  }

  return pageData
    .getTextContent(render_options)
    .then(data => JSON.stringify(data.items));
}

module.exports = render_page;