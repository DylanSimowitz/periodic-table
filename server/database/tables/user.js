module.exports = function(table) {
  table.bigIncrements();
  table.string('name');
  table.string('email', 128);
  table.string('salt');
  table.string('password');
  table.timestamps();
}
