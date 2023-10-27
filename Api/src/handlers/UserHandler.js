const {createUserController} = require ("../controllers/UserController")


const createUserHandler = async (req , res) => {
    try {
        const {
            name,
            lastName,
            birthdate,
            review,
            nationality
      } = req.body
        const response = await createUserController(
            name,
            lastName,
            birthdate,
            review,
            nationality
            );
            res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message})
    };
};


module.exports = {
    createUserHandler
}