const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    getById,
    insert,
};

function getAll() {
    return db('tasks')
    .join('projects', 'tasks.project_id', 'projects.project_id')
    .select(
        'task_id', 
        'task_description', 
        'task_notes', 
        'task_completed', 
        'project_name', 
        'project_description'
    )
    .then(q => 
        q.map(t => ({
            ...t, task_completed: t.task_completed ? true : false
        }))
    )
}

function getById(id) {
    return db('tasks')
    .where('task_id', id)
    .first()
    .then(t => {
        return {...t, task_completed: t.task_completed ? true : false}
    })
}

function insert(task) {
    return db('tasks')
    .insert(task)
    .then(id => getById(id[0]))
}