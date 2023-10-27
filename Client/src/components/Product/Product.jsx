import { useState } from 'react';
import style from './Product.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { deleteProduct, editProduct } from '../../redux/actions/searchActions';

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
					<div>
						<img
							src={product?.image}
							alt={product?.brand}
							// width={300}
							// height={200}
						/>
					</div>
					<div className={style.buttons}>
						<button onClick={handleErase}>delete</button>
						<button onClick={handleEdit}>edit</button>
						<button>Agregar a fav</button>
					</div>
					<div className={style.info}>
						<h2>{product?.brand}</h2>

						<p>
							Stock: <span>{product?.stocks}</span>
						</p>
						<p>
							Precio: <span>${product?.price}</span>
						</p>

						<div className={style.cantidad}>
							<label>Cantidad:</label>
							<div>
								<select
									value={quantity}
									onChange={(e) => setQuantity(parseInt(e.target.value, 10))}>
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
					</div>
				</div>
			)}
		</>
	);
};

export default Product;
