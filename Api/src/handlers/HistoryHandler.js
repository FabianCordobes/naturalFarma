const {
	createHistoryController,
	getHistoryByIdController,
} = require('../controllers/HistoryController');
const { User, History } = require('../db');

const createHistorytHandler = async (req, res) => {
	try {
		const { products, orderDetail, user } = req.body;
		const response = await createHistoryController(products, orderDetail, user);
		res.status(200).json(response);

	} catch (error) {
		res.status(400).json({ error });
	}
};

const getHistoryByIdUserHandler = async (req, res) => {
	const { id } = req.params;

	try {
		const historyId = await getHistoryByIdController(id);
		if (!historyId.length) {
			return res.status(404).json({ error: 'El historial no existe.' });
		} else {
			return res.status(200).json(historyId);
		}
	} catch (error) {
		console.error('Error al obtener historial por ID de usuario:', error);
		res.status(500).json({ error: error.message });
	}
};

module.exports = {
	createHistorytHandler,
	getHistoryByIdUserHandler,
};
