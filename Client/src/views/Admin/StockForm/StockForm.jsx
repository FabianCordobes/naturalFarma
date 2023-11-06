import React, { useState,useEffect } from 'react';
import style from './StockForm.module.css';
import axios from 'axios';
import ImageUploader from '../../../components/ImageUploader/ImageUploader';
import {createCategory, categoryOptions, addProducts, deleteCategory} from '../../../components/Categories/Categories';
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

	const [deleteForCategory, setDeleteForCategory] = useState({
		id: '',
	});

	const [categories, setCategories] = useState([]);

	const [createProduct, setCreateProduct] = useState(false)
	
	useEffect(() => {
		categoryOptions().then((categories) => {
		  setCategories(categories);
		});
	  }, []);

	const [errors, setErrors] = useState({});
	const [menuProduct, setMenuProduct] = useState(false)

	const productHandler = (event) => {
		event.preventDefault()
		if(categories.length === 0){window.alert("No existen categorias, por favor cree una !")}
		if(form.category === ""){setMenuProduct(false); window.alert("Seleccione una categoria por favor !")}
		else{
		setCreateProduct(true)
		setMenuProduct(true)}
	}

	const backCategory = (event) => {
		event.preventDefault()
		setMenuProduct(false);
		setCreateProduct(false)
	}
	

	const changeHandler = (event) => {
		
		console.log("este es el :"+event.target.value);
		if(event.target.name === "id"){
			let newState3 = { ...deleteForCategory, [event.target.name]: event.target.value };
		  setDeleteForCategory(newState3);
		}
		
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
		event.preventDefault()
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

	  const submitHandlerDeleteCategory = async (event) => {
		event.preventDefault()
		console.log(deleteForCategory);
		
		try {
		  // Lógica para eliminar la categoría
		  await deleteCategory(deleteForCategory);
		  console.log('Categoría eliminada con éxito');
		  
		  // Recargar la página
		  window.location.reload();
		} catch (error) {
		  console.error('Error al agregar la categoría:', error);
		}
	  };

	const submitHandler = (event) => {
		event.preventDefault();
		console.log("este es el form:"+JSON.stringify(form));
		// console.log(category);
		addProducts(form);
		window.alert("Producto creado exitosamente !");
		window.location.reload()
	  };

	const handleImageUpload = (imageUrl) => {
		setForm({ ...form, image: imageUrl });
	};

	return (
		<div className={style.container}>
			<div className={style.box}>
				<form className={style.form1} >
					<div>
					<label>Seleccionar Categoria</label>
					<select className={style.input} onChange={changeHandler} value={form.category} name="category" disabled={
							createProduct
						}>
						<option></option>
						{categories.map((option) => (
							<option key={option.id}>
								{option.description}
							</option>
						))}

					</select>
					</div>
					<div>
					<label>Agregar Categoria</label>
					<input type="text" className={style.input} name='description' onChange={changeHandler} value={saveCategory.description} disabled={
							createProduct
						}/>
					<button onClick={submitHandlerCategory} disabled={
							createProduct
						}>Agregar</button>
					</div>
					<div>
					<label>Eliminar Categoria</label>
					<select className={style.input} onChange={changeHandler} value={deleteCategory.id} name='id' disabled={
							createProduct
						}>
						<option></option>
						{categories.map((option) => (
							<option key={option.id} value={option.id}>
								{option.description}
							</option>
						))}

					</select>
					<button onClick={submitHandlerDeleteCategory} disabled={
							createProduct
						}>Eliminar</button>
					</div>
					<div>
					{!createProduct && <button className={style.continueApplication} type="submit" onClick={productHandler}>
						<div>
							<div className={style.pencil}></div>
							<div className={style.folder}>
								<div className={style.top}>
									<svg viewBox="0 0 24 27">
										<path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
									</svg>
								</div>
								<div className={style.paper}></div>
							</div>
						</div>
						Editar Stock
					</button>}
					</div>
				</form>
			</div>
			{/* <div className={style.box}>
				<form>

				</form>
			</div> */}
			{menuProduct && <div className={style.box}>
				<form
					className={style.form2}
					onSubmit={submitHandler}>
						<div className={style.buttonbutton}>
						<button onClick={backCategory} className={style.buttonFacherito}>← Seleccionar categoria !</button>
						</div>
						<label>Marca</label>
						<input
							type="text"
							name="brand"
							className={style.input}
							value={form.brand}
							onChange={changeHandler}
						/>
						{errors.brand && <p className={style.errors}>{errors.brand}</p>}


						<label>Accion terapeutica</label>
						<input
							type="text"
							name="therapeuticAction"
							className={style.input}
							value={form.therapeuticAction}
							onChange={changeHandler}
						/>
						{errors.therapeuticAction && <p className={style.errors}>{errors.therapeuticAction}</p>}
				
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
					

					
						<label>Stock</label>
						<input
							type="text"
							name="stocks"
							className={style.input}
							value={form.stocks}
							onChange={changeHandler}
						/>
						{errors.stocks && <p className={style.errors}>{errors.stocks}</p>}
					
						<label>Precio</label>
						<input
							type="text"
							name="price"
							className={style.input}
							value={form.price}
							onChange={changeHandler}
						/>
						{errors.price && <p className={style.errors}>{errors.price}</p>}
					

					<ImageUploader handleImageUpload={handleImageUpload} />{' '}
					{/* Integra ImageUploader aquí */}
					
					{		form.brand != "" &&
							form.therapeuticAction != "" &&
							form.stocks != "" &&
							form.price != "" &&
							form.category != "" && <button className={style.continueApplication} type="submit" onClick={submitHandler}>
						<div>
							<div className={style.pencil}></div>
							<div className={style.folder}>
								<div className={style.top}>
									<svg viewBox="0 0 24 27">
										<path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
									</svg>
								</div>
								<div className={style.paper}></div>
							</div>
						</div>
						Agregar producto
					</button>}
				</form>
			</div>}
		</div>
	);
}
