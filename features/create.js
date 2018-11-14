'use strict';
const db = require('../db.js');


module.exports.createTodo = async (event, context) => {
    const body = JSON.parse(event.body);
    const {task} = body;
    if(!task){
        return callbaack(null,{
            statusCode: 500,
            body: JSON.stringify({
            error: `The property 'task' is required`
            }),
        })
    }
    db.todo
        .create({
            task: body.task
        })
        .then(todo => {
            console.log(todo)
            // return {
            //     statusCode: 200,
            //     body: JSON.stringify({
            //     todo: todo
            //     }),
            // };
        })
        .catch(error => {
            callback(null, {
                statusCode: 500,
                body: JSON.stringify({
                error: `There was an error creating your todo`
                }),
            })
        })
};