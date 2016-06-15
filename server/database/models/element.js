var bookshelf = require('../database/connect');

module.exports = bookshelf.Model.extend({
  tableName: 'elements'
})
