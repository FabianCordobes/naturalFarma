import { useState } from 'react';
import style from './StockForm.module.css';
import axios from 'axios';
import ImageUploader from '../../../components/ImageUploader/ImageUploader';
import {categoryOptions} from '../../../components/Categories/Categories';
import validate from '../../../utils/validators/validators';

const presentationOptions = [
	{ value: 'Tableta' },
	{ value: 'Cápsula Blanda' },
	{ value: 'Líquido' },
	{ value: 'Gel' },
	{ value: 'Sobre' },
	{ value: 'Pote' },
	{ value: 'Caramelo' },
	// Agrega otras opciones según tus valores numéricos
];

export default function StockForm() {
	const [form, setForm] = useState({
		brand: '',
		category: '',
		therapeuticAction: '',
		presentation: '',
		stocks: '',
		price: '',
		image: '',
	});

	const [errors, setErrors] = useState({});

	const changeHandler = (event) => {
		// Manejador para los cambios en los campos de entrada
		const newState = { ...form }; // Crea una copia del objeto 'form'
		setForm({ ...newState, [event.target.name]: event.target.value }); // Actualiza el objeto 'form'
		setErrors(validate({ ...newState, [event.target.name]: event.target.value }));
	};

	const submitHandler = (event) => {
		const endpoint = 'http://localHost:3001/product';

		event.preventDefault();

		const response = axios
			.post(endpoint, {
				...form,
			})
			.then((res) => {
				// Maneja la respuesta exitosa
				setForm({
					// Restablece los campos del formulario
					brand: '',
					category: '',
					therapeuticAction: '',
					presentation: '',
					stocks: '',
					price: '',
					image: '',
				});
				alert('producto creado');
				window.location.reload();
			})
			.catch((error) => {
				// Maneja errores en la solicitud
				throw new Error(error.message);
			});
	};

	const handleImageUpload = (imageUrl) => {
		setForm({ ...form, image: imageUrl });
	};

	return (
		<div className={style.container}>
			<form
				className={style.form}
				onSubmit={submitHandler}>
					
				<div>
					<label>Categoria</label>
					<select
						className={style.input}
						name="category"
						value={form.category}
						onChange={changeHandler}>
						<option
							value="Seleccionar Categoria"
							hidden>
							Seleccionar Categoria
						</option>
						{categoryOptions.map((option) => (
							<option
								key={option.value}
								value={option.value}>
								{option.value}
							</option>
						))}
					</select>
					{errors.category && <p className={style.errors}>{errors.category}</p>}
				</div>

				<div>
					<label>Marca</label>
					<input
						type="text"
						name="brand"
						className={style.input}
						value={form.brand}
						onChange={changeHandler}
					/>
					{errors.brand && <p className={style.errors}>{errors.brand}</p>}

				</div>

				<div>
					<label>Accion terapeutica</label>
					<input
						type="text"
						name="therapeuticAction"
						className={style.input}
						value={form.therapeuticAction}
						onChange={changeHandler}
					/>
					{errors.therapeuticAction && <p className={style.errors}>{errors.therapeuticAction}</p>}
				</div>

				<div>
					<label>Presentacion</label>
					<select
						className={style.input}
						name="presentation"
						value={form.presentation}
						onChange={changeHandler}>
						<option
							value="Seleccionar Presentación"
							hidden>
							Seleccionar Presentación
						</option>

						{presentationOptions.map((option) => (
							<option
								key={option.value}
								value={option.value}>
								{option.value}
							</option>
						))}
					</select>
					{errors.presentation && <p className={style.errors}>{errors.presentation}</p>}
				</div>

				<div>
					<label>Stock</label>
					<input
						type="text"
						name="stocks"
						className={style.input}
						value={form.stocks}
						onChange={changeHandler}
					/>
					{errors.stocks && <p className={style.errors}>{errors.stocks}</p>}
				</div>

				<div>
					<label>Precio</label>
					<input
						type="text"
						name="price"
						className={style.input}
						value={form.price}
						onChange={changeHandler}
					/>
					{errors.price && <p className={style.errors}>{errors.price}</p>}
				</div>

				<ImageUploader handleImageUpload={handleImageUpload} />{' '}
				{/* Integra ImageUploader aquí */}
				<button
					type="submit"
					disabled={
						!form.brand ||
						!form.therapeuticAction ||
						!form.stocks ||
						!form.price
					}>
					Guardar
				</button>
			</form>
		</div>
	);
}
