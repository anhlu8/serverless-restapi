'use strict';

module.exports.read = async (event, context) => {
    const mgs = 'Thanks for hitting the get route. Have a nice day!'
    return {
        statusCode: 200,
        body: JSON.stringify({
        message: mgs
        }),
    };
};
