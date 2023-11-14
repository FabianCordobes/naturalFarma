const axios = require('axios');
const { History } = require('../db');

const createHistoryController = async (products, orderDetail, user) => {
	// console.log(
	// 	'--------------------',
	// 	products,
	// 	'aaaaaaaaaaaaaaaaaa',
	// 	orderDetail,
	// 	'.........................',
	// 	user
	// );

	for (const product of products) {
		try {
			const response = await History.create({
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
			return response;

		} catch (error) {
			console.log('HAY UN ERROR ACA', error);
		}
	}
};

const getHistoryByIdController = async (idUser) => {
	const productFilter = await History.findAll({
		where: { UserId: idUser }, // Corregido de idUser a userId
	});
	

	return productFilter;
};

module.exports = {
	createHistoryController,
	getHistoryByIdController,
};
