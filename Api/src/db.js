require('dotenv').config();
const { Sequelize } = require('sequelize');

const fs = require('fs');
const path = require('path');
const { DB_URL } = process.env;

const sequelize = new Sequelize(`${DB_URL}`, {
	logging: false,
	native: false,
});
const basename = path.basename(__filename);

const modelDefiners = [];
// Lee todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
	.filter(
		(file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
	)
	.forEach((file) => {
		modelDefiners.push(require(path.join(__dirname, '/models', file)));
	});

// Inyectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
	entry[0][0].toUpperCase() + entry[0].slice(1),
	entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Login, Admin, User, Product, History, Category } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

// M/M
User.belongsToMany(Product, { through: 'FavoriteUser_Product', timestamps: false });
Product.belongsToMany(User, { through: 'FavoriteUser_Product', timestamps: false });

// M/M
Product.belongsToMany(Category, { through: 'Product_Category', timestamps: false });
Category.belongsToMany(Product, { through: 'Product_Category', timestamps: false });

// 1:M
Admin.hasMany(Product);
Product.belongsTo(Admin);

// 1:1
Admin.hasOne(Login);
Login.belongsTo(Admin);

User.hasOne(Login);
Login.belongsTo(Admin);

User.hasOne(History);
History.belongsTo(User);

module.exports = {
	...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
	conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
