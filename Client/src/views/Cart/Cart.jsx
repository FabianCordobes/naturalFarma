import { useDispatch, useSelector } from 'react-redux';
import { addToCart, delFromCart } from '../../redux/actions/searchActions';

const Cart = () => {
  // Obtengo los productos y la cantidad del estado
  const items = useSelector((state) => state.search.cart);
  const dispatch = useDispatch();

  // Agregamos una variable para llevar un seguimiento del precio total
  let finalPrice = 0;

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {items.map((item, index) => {
          // Actualizamos el precio total en cada iteración
          finalPrice += item.price * item.quantity;

          return (
            <li key={index}>
              <div>
                <h2>{item.brand}</h2>
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
