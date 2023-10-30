import { useState } from 'react';
import style from './Product.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { deleteProduct, editProduct } from '../../redux/actions/searchActions';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import {FiShoppingCart} from 'react-icons/fi';

const Product = ({ product }) => {
	const [quantity, setQuantity] = useState(1);
	const [isEditing, setIsEditing] = useState(false);
	const [editedProduct, setEditedProduct] = useState({ ...product });

	const dispatch = useDispatch();
	const items = useSelector((state) => state.cart.items);

	const handleAddToCart = () => {
		// Convierte la cantidad a un número antes de usarla
		const quantityNumber = parseInt(quantity);

		// Comprueba si quantityNumber es un número válido
		if (!isNaN(quantityNumber) && quantityNumber > 0) {
			const productToAdd = { ...product, quantity: quantityNumber }; // Incluye la cantidad
			dispatch(addToCart(productToAdd));
		} else {
			// Maneja el caso en que la cantidad no sea válida (puede mostrar un mensaje de error, por ejemplo)
			console.log('La cantidad no es válida');
		}
	};

	const handleErase = () => {
		dispatch(deleteProduct(product?.id));
	};

	const handleEdit = () => {
		setIsEditing(true);
	};

	const handleCancelEdit = () => {
		setIsEditing(false);
	};

	const handleSaveEdit = () => {
		// ... Lógica para guardar los cambios ...
		dispatch(editProduct(product.id));
		setIsEditing(false);
	};

	return (
		<>
			{isEditing ? (
				<div>
					<div className={style.editForm}>
						<button
							onClick={handleCancelEdit}
							className={style.closeButton}>
							X
						</button>
						<label>Nombre:</label>
						<input
							type="text"
							value={editedProduct.brand}
							onChange={(e) =>
								setEditedProduct({ ...editedProduct, brand: e.target.value })
							}
						/>
						{/* Agrega más campos de edición aquí según tus necesidades */}
						<button
							onClick={handleSaveEdit}
							className={style.saveButton}>
							Guardar
						</button>
					</div>
				</div>
			) : (
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
							<button onClick={handleAddToCart}>Agregar al carrito <span><FiShoppingCart/></span></button>
						</div>
					</div>

					<div className={style.buttons}>
						<button onClick={handleErase}>delete</button>
						<button onClick={handleEdit}>edit</button>
					</div>
				</div>
			)}
		</>
	);
};

export default Product;
