const {
	createHistoryController,
	getHistoriByIdController,
} = require('../controllers/HistoryController');
const { User, History } = require('../db');

const createHistorytHandler = async (req, res) => {
	try {
		const { products, orderDetail, user } = req.body;
		const response = await createHistoryController(products, orderDetail, user);
		res.status(200).json(response);

		// console.log(response);
	} catch (error) {
		res.status(400).json({ error });
	}
};

const getHistoryByIdUserHandler = async (req, res) => {
	const { idUser } = req.params;

	try {
		if (idUser) {
			const historyId = await getHistoryByIdController(idUser);
			if (!historyId.length) throw Error('El historial no existe.');
			else {
                console.log(historyId);
				return res.status(200).json(historyId);
			}
		}
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = {
	createHistorytHandler,
	getHistoryByIdUserHandler,
};
