var knex = require('knex');
var bookshelf = require('bookshelf');

var config = knex({
  client: 'mysql',
  connection: {
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
    charset  : 'utf8'
  }
});

module.exports = bookshelf(config);
