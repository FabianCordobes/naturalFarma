const { Login } = require('../db'); 

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Login.findOne({
      where: {
        email: email,
        password: password,
      },
    });

    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = { login };
