const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Review',{
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        punctuation: {
            type: DataTypes.STRING,   
            allowNull: false,
            enum:['1 (Muy Malo)', '2 (Malo)', '3 (Bueno)', '4 (Muy Bueno)', '5 (Excelente)']
        },
    },{timestamps: false})
}