'use strict';

module.exports.createTodo = async (event, context) => {
    const body = JSON.parse(event.body);
    const mockDB = body.todo + ' is now saved to the db.'
    return {
        statusCode: 200,
        body: JSON.stringify({
        todo: mockDB
        }),
    };
};
