'use strict';
const db = require('../db');

module.exports.getTodo = async (event, context) => {
    const mgs = 'Thanks for hitting the get route. Have a nice day!'
    const todo = "Do dishes"
    return {
        statusCode: 200,
        body: JSON.stringify({
        message: mgs,
        todo: todo
        }),
    };
};

module.exports.listTodos = async (event, context, callback) => {
    db.todo
    .findAll({
        attributes:['id', 'task', 'completed']
    })
    .then(todos => {
        const res =  {
            statusCode: 200,
            body: JSON.stringify({
            todos: todos
            }),
        };
        callback(null, res)
    })
    .catch(error => {
        callback(null, {
            statusCode: 500,
            body: JSON.stringify({
            error: `There was an error fetching your todo with id: ${todo_id}`
            }),
        })
    })
};
