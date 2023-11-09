const { User } = require('../db');
const { MercadoPagoConfig, Preference } = require('mercadopago');
const { ACCESS_TOKEN } = process.env;

const client = new MercadoPagoConfig({
	accessToken: ACCESS_TOKEN,
});
const payment = new Preference(client);

//genera orden de compra a mercado pago con la info que llega por body
// Genera orden de compra en Mercado Pago con la información que llega por el cuerpo de la solicitud
const createOrder = async (items) => {
	// Construye el array de items para la preferencia a partir de los productos recibidos
	const products = [];

	items.map((item) =>
		products.push({
			id: item.id,
			title: item.brand,
			unit_price: item.price,
			quantity: item.quantity,
			picture_url: item.image,
			currency_id: 'ARG',
		})
	);
	console.log(products);
	let preference = {
		body: {
			items: products,

			back_urls: {
				failure: 'http://localhost:5173/',
				pending: '',
				success: 'http://localhost:5173/success',
			},
			auto_return: 'approved',
		},
	};

	const response = await payment.create(preference);
	return response;
};

const getSuccesfulPurchase = async (payment_id, userId) => {

  payment_id= 1319386565;
  userId= "d70ebd03-8f1c-42d5-8792-4624a2d182b9";

  console.log("ID DE USUARIO", userId);
  console.log("ID de PAGO!!!!!", payment_id)
	//comunicarme a la DB buscar al usuario y asociarle el id de pago

  const findUser = await User.findAll({where: {id: userId}})
  console.log(findUser);
  console.log(findUser.__proto__);
  await findUser.addProducts(payment_id);

	return payment_id;
};

module.exports = {
	createOrder,
	getSuccesfulPurchase,
};
