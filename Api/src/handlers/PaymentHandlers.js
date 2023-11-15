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

const succesfulPurchase = async(req, res) => {
	try {
		const { items } = req.query;

		const payment = await getSuccesfulPurchase(items);
		
		res.status(200).send('Compra realizada con exito');
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = {
	placeOrder,
	succesfulPurchase,
};
