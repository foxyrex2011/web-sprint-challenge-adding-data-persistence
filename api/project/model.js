const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    getById,
    insert,
};

function getAll() {
    return db('projects')
    .then(project => 
        project.map(p => ({
            ...p,
            project_completed: p.project_completed ? true : false
        }))
    )
}

function getById(id) {
    return db('projects')
    .where('project_id', id)
    .first()
    .then(project => {
        return {...project, project_completed: project.project_completed ? true : false}
    })
}

function insert(project) {
    return db('projects')
    .insert(project)
    .then(id => getById(id[0]))
}