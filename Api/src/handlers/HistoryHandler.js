const {createHistoryController, getHistoriByIdController} = require ("../controllers/HistoryController")
const { User, History } = require("../db");

const createHistorytHandler = async (req , res) => {
    try {
        const { items } = req.body
        const response = await createHistoryController( items );
            res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message})
    };
};

const getHistoryByIdUserHandler = async ( req, res) => {

    const { idUser } = req.params;

    try {
        if ( idUser ) {
            const historyId = await getHistoriByIdController( idUser );
            if ( !historyId.length ) throw Error('El historial no existe.');
            else return res.status(200).json(historyId);
        }
    } catch (error) {
        res.status(500).json({error:error.message});
    }

}

module.exports = {
    createHistorytHandler,
    getHistoryByIdUserHandler,
}