const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    getById,
    insert,
};

function getAll() {
    return db('projects')
}

function getById(id) {
    return db('projects')
    .where('project_id', id)
    .first()
}

function insert(project) {
    return db('projects')
    .insert(project)
    .then(id => getById(id[0]))
}