
const { User, Admin } = require(".././db");
const KJUR = require('jsrsasign');

async function login(req, res) {
  try {
    const { email, password } = req.body;

    // Primero, verifica si el usuario existe en la tabla "Users"
    const user = await User.findOne({
      where: {
        email,
        password,
      },
    });

    if (user) {
      console.log('------------------------------------------------USUARIO--------------------',user.dataValues);
      // Si el usuario existe en la tabla "Users", genera un token de usuario común
      const token = KJUR.jws.JWS.sign(null, { alg: "HS256" }, { userId: user.id, isAdmin: false }, "1234");
      res.json({ token, response: 'success', user: user.dataValues.id });
    } else {
      // Si el usuario no existe en la tabla "Users", verifica si existe en la tabla "Admin"
      const admin = await Admin.findOne({
        where: {
          email,
          password,
        },
      });

      if (admin) {
        // Si el usuario existe en la tabla "Admin", genera un token de administrador
        const token = KJUR.jws.JWS.sign(null, { alg: "HS256" }, { userId: admin.id, isAdmin: true }, "1234");
        res.json({ token, response: 'success' });
      } else {
        res.status(201).send("Credenciales inválidas");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al iniciar sesión " + error);
  }
}

module.exports = { login };








