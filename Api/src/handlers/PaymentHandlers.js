const { createOrder, getSuccesfulPurchase } = require('../controllers/PaymentController');

const placeOrder = async (req, res) => {
	try {
		const { items } = req.body;

		const response = await createOrder(items);

		console.log('respuestaaa', response);

		res.status(200).send(response);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const succesfulPurchase = (req, res) => {
	try {
		const { payment_id } = req.query;

		console.log('ID DE COMPRA REALIZADAAAAAAAA!!!!!', payment_id);
		//comunicarme a la DB buscar al usuario y asociarle el id de pag.

		const payment = getSuccesfulPurchase(payment_id);
    
		res.status(200).send('Compra realizada con exito');
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = {
	placeOrder,
	succesfulPurchase,
};
