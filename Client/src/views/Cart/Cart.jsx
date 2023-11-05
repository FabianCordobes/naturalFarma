import { useDispatch, useSelector } from 'react-redux';
import { addToCart, delFromCart, setCart } from '../../redux/actions/searchActions';
import style from './Cart.module.css';
import { React, useEffect, useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';


const Cart = () => {

  // Obtengo los productos y la cantidad del estado
  const items = useSelector((state) => state.search.cart);
  const dispatch = useDispatch();

  const [preferenceId, setpreferenceId] = useState(null)
  initMercadoPago("TEST-4443090684227901-110316-34c0605bc0b2477e1bcdcc56b42939ff-223028779");

  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:3001/order", //peticion post, envia algo al back (al servidor, localhost)
        items[0]
      );

      const {id} = response.data; //recibe un id, que viene de response.data(del servidor)
      return id;                  //retorna ese id para utilizarlo dsp
    } catch (error) {
      console.log(error);
    }
  }

  const handleBuy = async () => {      //funcion asincrona al hacer click en comprar
    const id = await createPreference(); //recibe lo de createPreference q seria un id en definitiva
    if (id) {
      setpreferenceId(id)
    }
  }


  // Agregamos una variable para llevar un seguimiento del precio total
  let finalPrice = 0;

// Cuando el componente se monta, intenta cargar el carrito desde el localStorage.
useEffect(() => {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    const parsedCart = JSON.parse(storedCart);
    // Actualiza el estado del carrito con los datos del localStorage
    dispatch(setCart(parsedCart));
  }
}, []);

// Función para guardar el carrito en el localStorage cuando cambia
useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(items));
}, [items]);

  return (
    <div className={style.cartContainer}>
      <h2>Carrito de Compras</h2>
      <br />
      <ul>
        {items.map((item, index) => {
          // Actualizamos el precio total en cada iteración
          finalPrice += item.price * item.quantity;

          return (
            
            <li key={index}>
              <div className={style.detailInfo}>
                <h3>{item.brand}</h3>
                <img src={item.image} alt={item.brand} />
                <p>Cantidad: {item.quantity}</p>
                <p>Precio por unidad: ${item.price}</p>
                <p>Precio total: ${item.price * item.quantity}</p>
              </div>
              <button onClick={() => dispatch(addToCart(item.id))}>Agregar uno</button>
              <button onClick={() => dispatch(delFromCart(item.id))}>Eliminar uno</button>
              <button onClick={() => dispatch(delFromCart(item.id, true))}>Eliminar todos</button>
            </li>
          );
        })}
      </ul>
      <hr />
      <br />

      <div>
        <p>PRECIO FINAL: ${finalPrice}</p>
      </div>

      <div>
        <button onClick={handleBuy}>FINALIZAR COMPRA</button>
        {preferenceId && <Wallet initializacion = {preferenceId} />}
      </div>

    </div>
  );
};

export default Cart;
