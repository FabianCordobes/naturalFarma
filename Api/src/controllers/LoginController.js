require('dotenv').config();
const { User } = require(".././db");
const jwt = require('jsonwebtoken');

async function login(req, res) {
  try {
    const { email, password } = req.body;

    // Verifica si el usuario existe en la tabla "Users"
    const user = await User.findOne({
      where: {
        email,
        password,
      },
    });

    if (user) {
      // Genera un token JWT con la información del usuario
      const token = jwt.sign({ name: user.name, email: user.email, role:user.role, iat: Math.floor(Date.now() / 1000) }, process.env.SECRET_TOKEN, { expiresIn: '1h' });

      res.json({ token, response: 'success' });
    } else {
      res.status(401).send("Credenciales inválidas");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al iniciar sesión " + error);
  }
}

module.exports = { login };