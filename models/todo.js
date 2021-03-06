module.exports = (sequelize, DataTypes) =>{
    //sequelize the db connection when we're connected
    //DataTypes is the instance

    return sequelize.define('todo', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        task: {
            type: DataTypes.STRING,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }, 
        created_at: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
            allowNull: false,
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
            allowNull: false,
        },
        deleted_at:{
            type: DataTypes.DATE
        }
    }, {
        paranoid: true, //when an instance is deleted, it's not actually removed from the row, it's just stamped that it was deleted at...
        underscored: true
    })
}