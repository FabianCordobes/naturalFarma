require("dotenv").config();
const {MercadoPagoConfig, Preference} = require("mercadopago");
const {ACCESS_TOKEN} = process.env;

const client = new MercadoPagoConfig({
  accessToken: ACCESS_TOKEN,
});
const payment = new Preference(client);
const placeOrder = async (req, res) => {
  try {
    //generar orden de compra a mercado pago con la info que llega por body
    const {id, brand, quantity, price} = req.body;

    let preference = {
      body: {
        items: [
          {
            title: brand,
            quantity: quantity,
            unit_price: price,
            currency_id: "ARG",
          },
        ],

        back_urls: {
          failure: "http://localhost:5173/",
          pending: "",
          success: "http://localhost:5173/",
        },
        auto_return: "approved",
      },
    };

    const response = await payment.create(preference);

    console.log(response);
    
    res.status(200).send(response);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

const succesfulPurchase = (req, res) => {
  try {
    const {payment_id} = req.query;
    //comunicarme a la DB buscar al usuario y asociarle el id de pago

    console.log(payment_id)
    res.status(200).send("Compra realizada con exito");
  } catch (error) {
    res.status(400).json({error: error.message});
  }
};

module.exports = {
    placeOrder,
    succesfulPurchase,
}