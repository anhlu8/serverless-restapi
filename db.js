const Sequelize = require('sequelize');

// Elephantsql endpoint:
// const sequelize = new Sequelize(
//     'postgres://ehadljrl:2WP0Y2B-wcf9sjakagrdHd18uSY1W8rh@pellefant.db.elephantsql.com:5432/ehadljrl'
//     );

// AWS RDS endpoint:
const sequelize = new Sequelize(
    'postgres://test12345:test12345@test.cog5hjp8j4dq.us-west-2.rds.amazonaws.com/todo'
    );
const todo = require('./models/todo')(sequelize, Sequelize);

const db = {
    Sequelize,
    sequelize,
    todo
};

db.sequelize.sync({force: false}); //change this to true to drop the current table and create a new one

module.exports = db;