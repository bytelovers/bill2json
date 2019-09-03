'use strict';

const pdf = require('pdf-parse');

const _mergePageTexts = pageTexts => {
  return [].concat.apply(
    [], pageTexts
    .map(page => JSON.parse(page)
      .map(item => item)));
}

const getPageTexts = data => {
  const { text, ...noText } = data;
  return {
    info: noText,
    pages: text.split('\n\n').slice(1) }
}

const formatPageTexts = (pages, pageIndex) => {
  const arrPages = typeof pageIndex !== 'undefined' ? [pages[pageIndex]] : pages;
  return _mergePageTexts(arrPages)
    .map((strObj, i) => `${i}: ${strObj.str}`); 
}

module.exports = {
  pdf,
  getPageTexts,
  formatPageTexts
};