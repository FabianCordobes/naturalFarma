const { MercadoPagoConfig, Preference } = require('mercadopago');
const { ACCESS_TOKEN } = process.env;
const { History } = require("../db");
// const { enviarCorreo } = require("../../config/nodemaler");

const client = new MercadoPagoConfig({
  accessToken: ACCESS_TOKEN,
});
const payment = new Preference(client);

// Genera orden de compra en Mercado Pago con la información que llega por el cuerpo de la solicitud
const createOrder = async (items) => {
  // Construye el array de items para la preferencia a partir de los productos recibidos
  const products = [];
  
   items.map((item) => ({
    id: item.id,
    title: item.brand,
    unit_price: item.price,
    quantity: item.quantity,
    picture_url: item.image,
    currency_id: 'ARG',
  }));

  console.log("Aca van los productos "+products);

  let preference = {
    body: {
      items: products,

      back_urls: {
        failure: 'https://natural-farma.onrender.com/cart',
        pending: '',
        success: 'http://localhost:5173/success',
      },
      auto_return: 'approved',
    },
  };

  console.log("ACa los intems" +items);

  const response = await payment.create(preference);

  await getSuccesfulPurchase(items);

  return response;
};

const getSuccesfulPurchase = async (items) => {
  await History.create({ items, status: 'successful' });
  await enviarCorreo(items[0].email, items[0].name);
};

module.exports = {
  createOrder,
  getSuccesfulPurchase,
};