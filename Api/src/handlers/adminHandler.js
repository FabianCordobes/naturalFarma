// const jwt = require('jsonwebtoken');
// const adminController = require('../controllers/adminController');
// const secret = 'clavesecreta'; // 

// const isAdmin = (req, res) => {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(401).send('Token no proporcionado');
//   }

//   jwt.verify(token, secret, (err, decoded) => {
//     if (err || !adminController.isAdmin(decoded.username)) {
//       return res.status(401).send('Acceso no autorizado');
//     }

//     res.send('Acceso permitido a la ruta de administrador');
//   });
// }

// module.exports = { isAdmin };
