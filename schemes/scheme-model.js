const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findSteps,
  add
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

function findSteps(schemeId){
    return db('steps as s') 
    .join('schemes', 'schemes.id', 's.scheme_id')  
    .select('s.id', 's.instructions', 'scheme_name')
    .where({ 's.scheme_id': schemeId });
}

function add(schemeData){
    const schemeToBeCreated = { scheme_name : schemeData.scheme_name}
    return db("schemes")
    .insert(schemeToBeCreated);
    
}