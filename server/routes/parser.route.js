'use strict';

const dot = require('dot-object');
const pdfService = require('../services/pdf.service');
const jsonRender = require('../../src/renders/json.render');
const defaultRender = require('../../src/renders/default.render');

server.post('/parser', (req, res) => {
  const renderOptions = { pagerender: defaultRender, version: 'v2.0.550' };
  const files = req.raw.files;

  
  pdfService.pdf(files.filePdf.data, renderOptions)
    .then(pdfService.parsePageTexts)
    .then(({ info, pages }) => {
      res.send({
        ...info,
        ...{ text: pdfService.getPageTexts(pages) } });
    });
});

server.post('/parser/:parser', (req, res) => {
  const { parser } = req.params;
  const renderOptions = { pagerender: jsonRender(parser) };
  // some code to handle file
  const files = req.raw.files;

  pdfService.pdf(
    files.filePdf.data,
    renderOptions)
    .then(data => {
      const { text } = data;
      const result = JSON.parse(text);
      res.send(dot.object(result));
    })
    .catch(err => {
      res.code(404);
    });
})