import { useEffect, useState } from 'react';
import style from './Product.module.css';
import remedio from '../../assets/remedio.jpg';

import { useDispatch, useSelector } from 'react-redux';
import {
	addToCart,
	addToFavorites,
	removeToFavorites,
	setFavorites,
} from '../../redux/actions/searchActions';
import { deleteProduct } from '../../redux/actions/searchActions';
import { Link, useLocation } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';

const Product = ({ product }) => {
	const location = useLocation();

	const dispatch = useDispatch();
	const favorites = useSelector((state) => state.search.favorites);
	const isFavorite = favorites.some((favProduct) => favProduct.id === product.id);

	const [isEditing, setIsEditing] = useState(false);

	const handleErase = () => {
		// Aquí puedes manejar la lógica para eliminar el producto
		dispatch(deleteProduct(product.id)); // Puedes pasar el ID del producto a eliminar
	};

	const handleEdit = () => {
		// Aquí puedes manejar la lógica para activar el modo de edición
		setIsEditing(true);
		setEditedProduct({ brand: product.brand }); // Copia los datos del producto para la edición
	};

	// Añade el bloque useEffect para cargar los favoritos desde el localStorage al inicio


	const toggleFavorite = () => {
		if (isFavorite) {
			dispatch(removeToFavorites(product.id));
		} else {
			dispatch(addToFavorites(product.id));
		}
		// Actualiza el localStorage después de cambiar el estado de Redux
		const updatedFavorites = isFavorite
			? favorites.filter((favProduct) => favProduct.id !== product.id)
			: [...favorites, product];
		localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
	};

	const image = product.image 

	return (
		<div className={style.product}>
			<div className={style.favIcon}>
				{isFavorite ? (
					<AiFillHeart onClick={toggleFavorite} />
				) : (
					<AiOutlineHeart onClick={toggleFavorite} />
				)}
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
					<Link
						onClick={() => dispatch(addToCart(product.id))}
						className={style.links}>
						Agregar{' '}
					</Link>
					<span>
						<FiShoppingCart />
					</span>
				</div>
			</div>

			<div className={style.buttons}>
				<button
					onClick={handleErase}
					className={style.botoncitos}>
					Delete
				</button>
				<button
					// onClick={handleEdit}
					className={style.botoncitos}>
					Edit
				</button>
			</div>
		</div>
	);
};

export default Product;
