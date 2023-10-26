import { useState } from 'react';
import style from './StockForm.module.css';
import axios from 'axios';

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

	const changeHandler = (event) => {
		// Manejador para los cambios en los campos de entrada
		const newState = { ...form }; // Crea una copia del objeto 'form'
		setForm({ ...newState, [event.target.name]: event.target.value }); // Actualiza el objeto 'form'
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
				console.log('producto creado');
			})
			.catch((error) => {
				// Maneja errores en la solicitud
				console.log(error);
			});
	};

	return (
		<div className={style.container}>
			<form
				className={style.form}
				onSubmit={submitHandler}>
				<label>Categoria</label>
				<select
					className={style.input}
					value={form.category}
					onChange={changeHandler}>
					<option value="1">Alergias</option>
					<option value="2">Digestivos</option>
					<option value="3">Antiacido</option>
					<option value="4">Laxante</option>
					<option value="5">Vitaminas</option>
				</select>

				<label>Marca</label>
				<input
					type="text"
					name='brand'
					className={style.input}
					value={form.brand}
					onChange={changeHandler}
				/>

				<label>Accion terapeutica</label>
				<input
					type="text"
					name='therapeuticAction'
					className={style.input}
					value={form.therapeuticAction}
					onChange={changeHandler}
				/>

				<label>Presentacion</label>
				<select
					className={style.input}
					value={form.presentation}
					onChange={changeHandler}>
					<option value="1">Tableta</option>
					<option value="2">Capsula Blanda</option>
					<option value="3">Liquido</option>
					<option value="4">Gel</option>
					<option value="5">Sobre</option>
					<option value="6">Comprimido</option>
					<option value="7">Pote</option>
					<option value="8">Caramelo</option>
				</select>

				<label>Stock</label>
				<input
					type="text"
					name='stocks'
					className={style.input}
					value={form.stocks}
					onChange={changeHandler}
				/>

				<label>Precio</label>
				<input
					type="text"
					name='price'
					className={style.input}
					value={form.price}
					onChange={changeHandler}
				/>

				<label>Imagen</label>
				<input
					type="text"
					name='image'
					className={style.input}
					value={form.image}
					onChange={changeHandler}
				/>

				<button
					type="submit"
					disabled={
						!form.brand ||
						!form.therapeuticAction ||
						!form.stocks ||
						!form.price ||
						!form.image
					}>
					Guardar
				</button>
			</form>
		</div>
	);
}
