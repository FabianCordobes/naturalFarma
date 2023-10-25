const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('User',{
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
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