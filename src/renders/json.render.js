

const json_render = pageData => {

  //check documents https://mozilla.github.io/pdf.js/
  const render_options = {
    //replaces all occurrences of whitespace with standard spaces (0x20). The default value is `false`.
    normalizeWhitespace: true,
    //do not attempt to combine same line TextItem's. The default value is `false`.
    disableCombineTextItems: true
  }

  const handleError = err => {
    console.error(`Err: ${err}`);
  }

  return pageData
    .getTextContent(render_options)
    .then(JSON.stringify)
    .catch(handleError);
}

module.exports = json_render;