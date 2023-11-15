const axios = require('axios');
const { History } = require('../db');

const createHistoryController = async (products, orderDetail, user) => {
	try {
		const responses = await Promise.all(
			products.map(async (product) => {
				return await History.create({
					// ... campos ...
					// Mapea los campos del elemento al modelo de Sequelize
					payment_id: orderDetail.payment_id,
					status: orderDetail.status,
					merchant_order_id: orderDetail.merchant_order_id,
					payment_type: orderDetail.payment_type,
					preference_id: orderDetail.preference_id,
					brand: product.brand,
					product_id: product.id,
					price: product.price,
					quantity: product.quantity,
					UserId: user.id,
				});
			})
		);
		return responses;
	} catch (error) {
		console.error('Error al crear historial:', error);
		throw error; // Puedes manejar el error según los requisitos de tu aplicación
	}
};

const getHistoryByIdController = async (idUser) => {
	console.log('Valor de idUser:', idUser);
	const productFilter = await History.findAll({
	  where: { UserId: idUser },
	});
	return productFilter;
 };
 

module.exports = {
	createHistoryController,
	getHistoryByIdController,
};
