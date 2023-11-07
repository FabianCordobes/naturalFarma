const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Category',{
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{timestamps: false})
}