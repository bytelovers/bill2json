'use strict';

const pdfService = require('../services/pdf.service');
const jsonRender = require('../../src/renders/json.render');
const defaultRender = require('../../src/renders/default.render');

const pdfOptions = { version: 'v2.0.550' };

server.post('/parser', (req, res) => {
  const renderOptions = Object.assign({}, pdfOptions, { pagerender: defaultRender });
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
  const renderOptions = Object.assign({}, pdfOptions, { pagerender: jsonRender });
  const { parser } = req.params;
  // some code to handle file
  const files = req.raw.files;

  pdfService.pdf(
    files.filePdf.data,
    renderOptions)
    .then(pdfService.parsePageTexts)
    .then(({ pages }) => pdfService.matchFields(pages, parser))
    .then(data => res.send(data))
    .catch(err => res.code(404));
})