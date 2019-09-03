'use strict';

const pdf = require('pdf-parse');

const jsonRender = require('../../src/renders/json.render');

const options = {
  pagerender: jsonRender('cepsa')
};

server.get('/parser', (req, res) => {
  res.send({ endpoint: '/parser' });
});

server.post('/upload', function (req, res) {
  // some code to handle file
  const files = req.raw.files;

  pdf(files.filePdf.data, options)
  .then(data => {
    const { text } = data;
    res.send(JSON.parse(text));
  });
})