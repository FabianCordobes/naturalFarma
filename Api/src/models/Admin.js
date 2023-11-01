const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Admin',{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
         },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthdate: {
            type: DataTypes.DATEONLY,
            //fecha sin la hora.
            allowNull: false,
          },
        nationality: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        review: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    },{timestamps: false})
}