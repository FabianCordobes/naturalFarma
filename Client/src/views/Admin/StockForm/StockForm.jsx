import React, { useState,useEffect } from 'react';
import style from './StockForm.module.css';
import axios from 'axios';
import ImageUploader from '../../../components/ImageUploader/ImageUploader';
import {createCategory, categoryOptions, addProducts} from '../../../components/Categories/Categories';
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
		therapeuticAction: '',
		presentation: '',
		stocks: '',
		price: '',
		image: '',
		category:""
		
	});
	const [saveCategory, setSaveCategory] = useState({
		description: '',
	});

	const [categories, setCategories] = useState([]);
	
	useEffect(() => {
		categoryOptions().then((categories) => {
		  setCategories(categories);
		});
	  }, []);

	const [errors, setErrors] = useState({});

	const changeHandler = (event) => {
		
		
		
		if (event.target.name === "description") {
		  // Manejar cambios en la propiedad 'description' de 'category'
		  let newState2 = { ...saveCategory, [event.target.name]: event.target.value };
		  setSaveCategory(newState2);
		//   setErrors(validate({ ...newState2, [event.target.name]: event.target.value }));
		} else {
		  // Manejar cambios en las propiedades de 'form'
		  let newState = { ...form, [event.target.name]: event.target.value };
		  setForm(newState);
		  setErrors(validate({ ...newState, [event.target.name]: event.target.value }));
		}
	  
		
	  };
	  const submitHandlerCategory = async (event) => {
		event.preventDefault();
		console.log(saveCategory);
		
		try {
		  // Lógica para agregar la categoría
		  await createCategory(saveCategory);
		  console.log('Categoría agregada con éxito');
		  
		  // Recargar la página
		  window.location.reload();
		} catch (error) {
		  console.error('Error al agregar la categoría:', error);
		}
	  };

	const submitHandler = (event) => {
		event.preventDefault();
		console.log(form);
		// console.log(category);
		addProducts(form);
		
	  };

	const handleImageUpload = (imageUrl) => {
		setForm({ ...form, image: imageUrl });
	};

	return (
		<div className={style.container}>
			<div>
				<form className={style.form}>
					<label>Seleccionar Categoria</label>
					<select className={style.input}  >
						{categories.map((option) => (
							<option key={option.id} value={option.description}>
								{option.description}
							</option>
						))}

					</select>

					<label>Agregar Categoria</label>
					<input type="text" className={style.input} name='description' onChange={changeHandler} value={saveCategory.description}/>
					<button onClick={submitHandlerCategory}>Agregar</button>
					
					<label>Eliminar Categoria</label>
					<select className={style.input}>
						{categories.map((option) => (
							<option key={option.id} value={option.description}>
								{option.description}
							</option>
						))}
						
					</select>
					<button>Eliminar</button>
					<button
						type="submit">
						Guardar
					</button>
				</form>
			</div>
			<div>
				<form>

				</form>
			</div>
			<div>
				<form
					className={style.form}
					onSubmit={submitHandler}>
						
					{/* <div>
						<label>Categoria</label>
						<select
							className={style.input}
							name="description"
							value={category.description}
							onChange={changeHandler}>
							<option
								value="Seleccionar Categoria"
								hidden>
								Seleccionar Categoria
							</option>
							{categoryOptions.length != 0 && categoryOptions.map((option) => (
								<option
									key={option.value}
									value={option.value}>
									{option.value}
								</option>
							))}
						</select>
						{errors.category && <p className={style.errors}>{errors.category}</p>}
					</div> */}

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
		</div>
	);
}
