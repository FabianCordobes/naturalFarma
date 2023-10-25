const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('History',{
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATEONLY,
            //fecha sin la hora.
            allowNull: false,
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
         },
    },{timestamps: false})
}