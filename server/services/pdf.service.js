'use strict';

const pdf = require('pdf-parse');
const dot = require('dot-object');

const _mergePageTexts = pageTexts => {
  return [].concat.apply(
    [], pageTexts
    .map(page => JSON.parse(page)
      .map(item => item)));
}

const _mergeArrObjects = arr => {
  return arr
    .reduce((acc, arrItem) => [...acc, ...arrItem]);
}

const _sanitizeText = text => {
  return text
  .replace(/\s{2,}/g,' ')
  .trim();
}

const parsePageTexts = data => {
  const { text, ...noText } = data;
  return {
    info: noText,
    pages: text.split('\n\n').slice(1) }
}

const getPageTexts = (pages, pageIndex) => {
  const arrPages = typeof pageIndex !== 'undefined' ? [pages[pageIndex]] : pages;
  return _mergePageTexts(arrPages)
    .map((strObj, i) => `${i}: ${ _sanitizeText(strObj.str) }`); 
}

const matchFields = (data, parserName, toObject) => { 
  const fields = require(`../../src/parsers/${parserName}.parser`);
  const jsonData = _mergeArrObjects(data
    .map(page => JSON.parse(page).items));

  const jsonObj = {};

    fields.forEach(field => {
      jsonObj[field.path] = field.hasOwnProperty('regex')
        ? jsonData[field.id].str.match(field.regex)[0]
        : jsonData[field.id].str;
    });

    return toObject ? dot.object(jsonObj) : jsonObj;
}

module.exports = {
  pdf,
  parsePageTexts,
  getPageTexts,
  matchFields
};