const db = require('../data/db-config');

module.exports = {
  find,
  findById
};

function find() {
    return db('schemes as s')
    .select('s.id', 's.scheme_name');
}

function findById(schemeId){
    return db('schemes as s')
    .select('s.id', 's.scheme_name')
    .where({ 's.id': schemeId });
}