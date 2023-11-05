const {MercadoPagoConfig, Preference} = require("mercadopago");
const {ACCESS_TOKEN} = process.env;

const client = new MercadoPagoConfig({
  accessToken: ACCESS_TOKEN,
});
const payment = new Preference(client);

//genera orden de compra a mercado pago con la info que llega por body
const createOrder = async ( id, brand, quantity, price )=>{
    let preference = {
        body: {
          items: [
            {
              title: "Allegra",
              unit_price: 4,
              quantity: quantity,
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
    return response;  
}

const getSuccesfulPurchase = async ( payment_id ) => {

    //comunicarme a la DB buscar al usuario y asociarle el id de pago

    return payment_id;
}

module.exports = {
    createOrder,
    getSuccesfulPurchase
}