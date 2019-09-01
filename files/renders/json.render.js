const cepsaParser = require('../parsers/cepsa');

function json_render(pageData) {
  //check documents https://mozilla.github.io/pdf.js/
  const render_options = {
    //replaces all occurrences of whitespace with standard spaces (0x20). The default value is `false`.
    normalizeWhitespace: true,
    //do not attempt to combine same line TextItem's. The default value is `false`.
    disableCombineTextItems: true
  }

  const parseData = (data, fields) => {
    const { items } = data;
    const jsonObj = {};

    fields.forEach(field => {
      jsonObj[field.path] = field.hasOwnProperty('regex')
        ? items[field.id].str.match(field.regex)[0]
        : items[field.id].str;
    });

    return jsonObj;
  }

  const handleError = err => {
    console.error(`Err: ${err}`);
  }

  return pageData
    .getTextContent(render_options)
    .then(data => parseData(data, cepsaParser))
    .then(JSON.stringify)
    .catch(handleError);
}

module.exports = json_render;