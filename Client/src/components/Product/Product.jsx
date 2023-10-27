import { useState } from 'react';
import style from './Product.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';

const Product = ({ product }) => {
	const [quantity, setQuantity] = useState(1);

	const dispatch = useDispatch();
	const items = useSelector((state) => state.cart.items);

	const handleAddToCart = () => {
		// Aquí puedes manejar la lógica para agregar el producto al carrito
		const productToAdd = { ...product, quantity }; // Incluye la cantidad
		dispatch(addToCart(productToAdd));
				
	};

	// const maxQuantity = 10;
	// const quantityOptions = Array.from({ length: maxQuantity }, (_, i) => i + 1);

	return (
		<div className={style.product}>
			<h2>{product?.brand}</h2>
			<p>
				Categoría: <span>{product?.category}</span>
			</p>
			<p>
				Acción Terapéutica: <span>{product?.therapeuticAction}</span>
			</p>
			<p>
				Presentación: <span>{product?.presentation}</span>
			</p>
			<p>
				Stock: <span>{product?.stocks}</span>
			</p>
			<p>
				Precio: <span>${product?.price}</span>
			</p>
			<img
				src={product?.image}
				alt={product?.brand}
				// width={300}
				// height={200}
			/>

			<div>
				<label>Cantidad:</label>
				<select
					// value={quantity}
					onChange={(e) => setQuantity(parseInt(e.target.value))}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
					<option value="8">8</option>
					<option value="9">9</option>
					<option value="10">10</option>
				</select>
				<button onClick={handleAddToCart}>Agregar al carrito</button>
			</div>
		</div>
	);
};

export default Product;
