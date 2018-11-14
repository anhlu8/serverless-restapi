'use strict';

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
