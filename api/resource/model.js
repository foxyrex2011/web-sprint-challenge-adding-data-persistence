const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    getById,
    insert
}

function getAll() {
    return db('resources')
}

function getById(id) {
    return db('resources')
        .where('resource_id', id)
        .first()
}

function insert(resource) {
    return db('resources')
    .insert(resource)
    .then(id => getById(id[0]))
}