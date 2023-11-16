import React, { useEffect, useState } from 'react';
import style from './Product.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
	addToCart,
	addToFavorites,
	removeToFavorites,
	showErrorAlert,
	showSuccessAlert,
	deleteProduct,
	editProduct,
} from '../../redux/actions/searchActions';
import { Link } from 'react-router-dom';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import AlertDialog from '../AlertDialog/AlertDialog';
import { incrementCartCount } from '../../redux/actions/countActions';

const Product = ({ product }) => {
	const dispatch = useDispatch();
	const favorites = useSelector((state) => state.search.favorites);
	const isFavorite = favorites.some((favProduct) => favProduct.id === product.id);
	const [isEditing, setIsEditing] = useState(false);

	const [editedPrice, setEditedPrice] = useState(product.price);
	const [editedStock, setEditedStock] = useState(product.stocks);
	const [originalPrice, setOriginalPrice] = useState(product.price);
	const [originalStock, setOriginalStock] = useState(product.stocks);

	const [isAdmin, setIsAdmin] = useState(false);

	const cart = useSelector((state) => state.search.cart);
	const isCartItem = cart.some((item) => item.id === product.id);
	const [isDeleting, setIsDeleting] = useState(false);

	const handleErase = () => {
		setIsDeleting(true);
		dispatch(deleteProduct(product.id));
	};

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

	const handleAddToCart = () => {
		try {
			dispatch(addToCart(product.id));
			dispatch(showSuccessAlert());
			dispatch(incrementCartCount());
		} catch (error) {
			dispatch(showErrorAlert());
		}
	};

	const handleEdit = () => {
		setIsEditing(true);
		setEditedPrice(product.price);
		setEditedStock(product.stocks);
	};

	const handleConfirmEdit = async () => {
		try {
			const editedData = {
				price: editedPrice,
				stocks: editedStock,
			};

			// Realizar la solicitud de edición al servidor
			await dispatch(editProduct(product.id, editedData));

			// Actualizar el estado local con los nuevos datos
			setOriginalPrice(editedPrice);
			setOriginalStock(editedStock);
			setIsEditing(false);
			window.location.reload();
		} catch (error) {
			console.error('Error during product edit:', error.message);
		}
	};

	const handleCancelEdit = () => {
		// Restaura los valores originales y desactiva el modo de edición
		setEditedPrice(originalPrice);
		setEditedStock(originalStock);
		setIsEditing(false);
	};

	const isAuthenticated = () => {
		const admin = localStorage.getItem('admin');
		if (admin) {
			const spl = admin.split('"').join('');
			if (spl && spl === 'Panel Administracion') {
				setIsAdmin(true);
			}
		}

		// const token = localStorage.getItem('token');
		// if (token && token != null) {
		// 	setShowUserMenu(true);
		// } else {
		// 	setShowUserMenu(false);
		// }
	};

	useEffect(() => {
		isAuthenticated();
	}, []);

	return (
		!isDeleting && (
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
							src={product.image}
							alt={product?.brand}
						/>
					</div>
				</Link>
				<span className={style.lineSpan}></span>
				<div className={style.info}>
					{isEditing ? (
						<>
							<input
								type="text"
								value={editedPrice}
								onChange={(e) => setEditedPrice(e.target.value)}
							/>
							<input
								type="text"
								value={editedStock}
								onChange={(e) => setEditedStock(e.target.value)}
							/>
							<div style={{display: 'flex', gap:'15px', marginTop:'10px'}}>
								<button
									onClick={handleConfirmEdit}
									style={{backgroundColor: '#2e5bbd', color: '#fff', border:'none'}}
									className={style.botoncitos}>
									Confirmar
								</button>

								<button
									onClick={handleCancelEdit}
									className={style.botoncitos}>
									Cancelar
								</button>
							</div>
						</>
					) : (
						<>
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

							{isAdmin ? (
								<>
									<div className={style.btn}>
										{isEditing ? (
											<>
												<Link
													onClick={handleConfirmEdit}
													className={style.links}>
													Confirmar
												</Link>
											</>
										) : (
											<>
												<Link
													onClick={handleAddToCart}
													className={style.links}>
													Agregar
												</Link>
												<span>
													<FiShoppingCart />
												</span>
											</>
										)}
									</div>
									<div className={style.buttons}>
										<AlertDialog
											handleAccept={handleErase}
											buttonText={'Eliminar'}
											title={'¿Seguro que desea eliminar el producto?'}
											description={'Tenga en cuenta que esta acción es irreversible'}
										/>
										<button
											onClick={isEditing ? handleCancelEdit : handleEdit}
											className={`${style.botoncitos} ${style.editButton}`}>
											{isEditing ? 'Cancelar' : 'Editar'}
										</button>
									</div>
								</>
							) : (
								<>
									<div className={style.btn}>
										<Link
											onClick={handleAddToCart}
											className={style.links}>
											Agregar
										</Link>
										<span>
											<FiShoppingCart />
										</span>
									</div>
								</>
							)}
						</>
					)}
				</div>
			</div>
		)
	);
};

export default Product;
