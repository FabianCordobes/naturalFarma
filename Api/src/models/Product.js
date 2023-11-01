const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Product',{
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        therapeuticAction: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        presentation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stocks: {
            type: DataTypes.INTEGER,
            allowNull: false,
         },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
         },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{timestamps: false})
}