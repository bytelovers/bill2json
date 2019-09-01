const fs = require('fs');
const pdf = require('pdf-parse');

const jsonRender = require('./files/renders/json.render');

const options = {
  pagerender: jsonRender
};

let dataBuffer = fs.readFileSync('./files/00054381.pdf');

pdf(dataBuffer, options)
  .then(data => {
    const { text } = data;
    console.log(JSON.parse(text));
  });
