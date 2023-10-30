import { useState } from 'react';
import style from './Product.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
// import { deleteProduct, editProduct } from '../../redux/actions/searchActions';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';

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
		<>
			<div className={style.product}>
				<div className={style.favIcon}>
					<AiOutlineHeart />
				</div>
				<Link
					className={style.productLink}
					to={`/product/${product.id}`}>
					<div>
						<img
							src={product?.image}
							alt={product?.brand}
						/>
					</div>
				</Link>

				<span className={style.lineSpan}></span>

				<div className={style.info}>
					<Link
						className={style.productLink}
						to={`/product/${product.id}`}>
						<h2 className={style.title}>{product?.brand}</h2>

						<p className={style.price}>
							<span>${product?.price}</span>
						</p>
						<p className={style.stock}>
							Stock: <span>{product?.stocks}</span>
						</p>
					</Link>

					<div className={style.botonCarrito}>
						<button onClick={handleAddToCart}>
							Agregar al carrito{' '}
							<span>
								<FiShoppingCart />
							</span>
						</button>
					</div>
				</div>

				<div className={style.buttons}>
					<button 
					// onClick={handleErase}
					>delete</button>
					<button 
					// onClick={handleEdit}
					>edit</button>
				</div>
			</div>
		</>
	);
};

export default Product;
