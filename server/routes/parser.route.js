'use strict';

const pdf = require('pdf-parse');
const jsonRender = require('../../src/renders/json.render');
const defaultRender = require('../../src/renders/default.render');

server.post('/parser', (req, res) => {
  const renderOptions = { pagerender: defaultRender, version: 'v2.0.550' };
  const files = req.raw.files;

  pdf(files.filePdf.data, renderOptions)
    .then(data => {
      const arrStr = JSON.parse(data.text).map((strObj, i) => `${i}: ${strObj.str}`);
      res.send({ ...data, ...{ text: arrStr } });
    });
});

server.post('/upload', (req, res) => {
  const renderOptions = { pagerender: jsonRender('cepsa') };
  // some code to handle file
  const files = req.raw.files;

  pdf(
    files.filePdf.data,
    renderOptions)
    .then(data => {
      const { text } = data;
      res.send(JSON.parse(text));
    })
    .catch(err => {
      res.code(404);
    });
})