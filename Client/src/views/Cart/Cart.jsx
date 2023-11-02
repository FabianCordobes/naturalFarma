import { useDispatch, useSelector } from 'react-redux';
import { addToCart, delFromCart, setCart } from '../../redux/actions/searchActions';
import style from './Cart.module.css';
import React, { useEffect } from 'react';

const Cart = () => {
  // Obtengo los productos y la cantidad del estado
  const items = useSelector((state) => state.search.cart);
  const dispatch = useDispatch();

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
        <button>FINALIZAR COMPRA</button>
      </div>

    </div>
  );
};

export default Cart;
