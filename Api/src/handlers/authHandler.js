const jwt = require('jsonwebtoken');
const authController = require('../controllers/authController');
const secret = 'clavesecreta'; 

const login = async (req, res) => {
  const user = await authController.login(req, res);

  if (user) {
    const token = jwt.sign({ email: user.email }, secret, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Credenciales incorrectas');
  }
};

module.exports = { login };
