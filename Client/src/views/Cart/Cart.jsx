import { useDispatch, useSelector } from 'react-redux';
import {
	addToCart,
	clearCart,
	delFromCart,
	setCart,
} from '../../redux/actions/searchActions';
import style from './Cart.module.css';
import { useEffect, useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';
import {
	decrementAll,
	decrementCartCount,
	incrementCartCount,
} from '../../redux/actions/countActions';

const Cart = () => {
	// Obtengo los productos y la cantidad del estado
	const items = useSelector((state) => state.search.cart);
	const dispatch = useDispatch();
	const [preferenceId, setPreferenceId] = useState(null);
	// console.log("prefrerenceIDD:", preferenceId);
	initMercadoPago('TEST-dfa942a8-d4d9-444f-924a-0060dff9b2d3');

	const createPreference = async () => {
		try {
			const response = await axios.post(
				'/order', //peticion post, envia algo al back (al servidor, localhost)
				{ items }
			);
			// console.log('la response del front:', response);
			const { id } = response.data;
			return id; //retorna ese id para utilizarlo dsp
		} catch (error) {
			console.log(error);
		}
	};

	const handleBuy = async () => {
		const id = await createPreference();

		if (id) {
			setPreferenceId(id);
		} else {
			console.error('La preferencia no se generó correctamente.');
		}
	};

	// Agregamos una variable para llevar un seguimiento del precio total
	let finalPrice = 0;

	useEffect(() => {
		// Actualiza el estado de Redux con los productos almacenados en el localStorage
		const storedCart = localStorage.getItem('cart');
		if (storedCart) {
			const parsedCart = JSON.parse(storedCart);
			dispatch(setCart(parsedCart));
		}
	}, []);

	useEffect(() => {
		// Guarda el carrito en el localStorage cuando cambia
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
								<img
									src={item.image}
									alt={item.brand}
								/>
								<p>Cantidad: {item.quantity}</p>
								<p>Precio por unidad: ${item.price}</p>
								<p>Precio total: ${item.price * item.quantity}</p>
							</div>
							<button
								onClick={() => {
									dispatch(addToCart(item.id));
									dispatch(incrementCartCount());
								}}>
								Agregar uno
							</button>
							<button
								onClick={() => {
									dispatch(delFromCart(item.id));
									dispatch(decrementCartCount());
								}}>
								Eliminar uno
							</button>
							<button
								onClick={() => {
									dispatch(delFromCart(item.id, true));
									dispatch(decrementAll());
								}}>
								Eliminar todos
							</button>
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
				{preferenceId && (
					<Wallet
						initialization={{ preferenceId }}
						target="blank_"
					/>
				)}
			</div>
		</div>
	);
};

export default Cart;

//<Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} />