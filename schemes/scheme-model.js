const db = require('../data/db-config');

module.exports = {
  find,
};

function find() {
    return db('schemes as s')
    .select('s.id', 's.scheme_name');
}