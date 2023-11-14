const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('History',{
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        payment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
         },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        merchant_order_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
         },
        payment_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        preference_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        product_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
         },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
    },{timestamps: false})
}