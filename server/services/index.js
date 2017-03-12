'use strict';

const elements = require('./elements/elements.service.js');

module.exports = function() {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(elements);
};
