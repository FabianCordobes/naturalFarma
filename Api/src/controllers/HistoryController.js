const axios = require ("axios");
const {History} = require ("../db");

const createHistoryController = async (items) => {

    for (const item of items) {
		await History.create(
		  {
			// Mapea los campos del elemento al modelo de Sequelize
			
			payment_id: item.payment_id,
			status: item.status,
			merchant_order_id: item.merchant_order_id,
			payment_type: item.payment_type,
			preference_id: item.preference_id,
			brand: item.brand,
			product_id: item.product_id,
			price: item.price,
			quantity: item.quantity,
			userId: item.adminId,

		  },
		);
	  }
}

const getHistoriByIdController = async (idUser) => {


    const historyFilter = await History.findAll({
      where: { idUser },
    });
  
    return productFilter;
};

module.exports = {
  createHistoryController,
  getHistoriByIdController
}