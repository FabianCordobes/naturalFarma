import { useSelector } from 'react-redux';

const Cart = () => {
  // Obtén los productos y la cantidad del estado
  const items = useSelector((state) => state.cart.items);
   console.log(items);

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div>
              <h2>{item.brand}</h2>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio por unidad: ${item.price}</p>
              <p>Precio total: ${item.price * item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;