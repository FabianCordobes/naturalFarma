import { useState } from 'react';
import style from './Product.module.css';
import remedio from "../../assets/remedio.jpg"

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/searchActions';
import { deleteProduct } from '../../redux/actions/searchActions';
// import { deleteProduct, editProducty } from '../../redux/actions/searchActions';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';

const Product = ({ product }) => {
	const [quantity, setQuantity] = useState(1);

	const dispatch = useDispatch();
	//const items = useSelector((state) => state.cart.items);
	const [isEditing, setIsEditing] = useState(false);

	const handleAddToCart = () => {
		// Aquí puedes manejar la lógica para agregar el producto al carrito
		const productToAdd = { ...product, quantity }; // Incluye la cantidad
		dispatch(addToCart(productToAdd));
	};

	const handleErase = () => {
		// Aquí puedes manejar la lógica para eliminar el producto
		dispatch(deleteProduct(product.id)); // Puedes pasar el ID del producto a eliminar
	};

	const handleEdit = () => {
		// Aquí puedes manejar la lógica para activar el modo de edición
		setIsEditing(true);
		setEditedProduct({ brand: product.brand }); // Copia los datos del producto para la edición
	};

	// const maxQuantity = 10;
	// const quantityOptions = Array.from({ length: maxQuantity }, (_, i) => i + 1);
	const image = product.image != [] || product.image != "" ? product.image : {remedio};

	return (
			<div className={style.product}>
				<div className={style.favIcon}>
					<AiOutlineHeart />
				</div>
				<Link
					className={style.productLink}
					to={`/product/${product.id}`}>
					<div>
						<img
							src={image}
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

					<div className={style.btn}>
						<Link onClick={() => dispatch(addToCart(product.id))} className={style.links}>
							Agregar{' '}
							
						</Link>
						<span>
							<FiShoppingCart />
						</span>
					</div>
				</div>

				<div className={style.buttons}>
					<button 
					onClick={handleErase} className={style.botoncitos}
					>Delete</button>
					<button 
					// onClick={handleEdit}
					className={style.botoncitos}>Edit</button>
				</div>
			</div>
	);
};

export default Product;
