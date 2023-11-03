const { Admin } = require(".././db");

async function crearAdmin(req, res) {
  try {
    const { email, password, name, lastName, birthdate, nationality, review } = req.body;

    // Crea un administrador en la base de datos
    const admin = await Admin.create({
      email,
      password,
      name,
      lastName,
      birthdate,
      nationality,
      isAdmin: true
    });
    res.json({ response: 'success' });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al crear administrador " + error);
  }
}

module.exports = { crearAdmin };