// import { useState } from 'react';
import React, { useState,useEffect } from 'react';
import {  orderByName, orderByPrice, orderByStock, filterByCategory } from '../../redux/actions/searchActions';
import {categoryOptions} from '../Categories/Categories';
import { useDispatch, useSelector } from 'react-redux';
import style from "./SortComponent.module.css"

const SortComponent = () => {
	// const [sortingOrder, setSortingOrder] = useState('asc');
	const dispatch = useDispatch();
	const [categories, setCategories] = useState([]);
	
	useEffect(() => {
		categoryOptions().then((categories) => {
		  setCategories(categories);
		});
	  }, []);

	  console.log(categories);
	const productsSort = useSelector((state) => state.search.products);

	const handleFilterCategory = (event) => {
		console.log("este es el" + event.target.value);
		event.preventDefault();
		dispatch(filterByCategory(event.target.value));
		// setCurrentPage(1) //cuando hago el ordenamiento que me setee en la pag 1
		// setSortingOrder(`Ordenado ${event.target.value}`);
	};

	const handleSortChange = (event) => {
		event.preventDefault();
		dispatch(orderByName(event.target.value));
		// setCurrentPage(1) //cuando hago el ordenamiento que me setee en la pag 1
		// setSortingOrder(`Ordenado ${event.target.value}`);
	};
	const handleSortPrice = (event) => {
		event.preventDefault();
		console.log(event.target.value);
		dispatch(orderByPrice(event.target.value));
		// setCurrentPage(1)
		// setSortingOrder(`Ordenado ${event.target.value}`);
	};

	const handleSortStock = (event) => {
		event.preventDefault();
		dispatch(orderByStock(event.target.value));
		// setCurrentPage(1)
		// setSortingOrder(`Ordenado ${event.target.value}`);
	};
	return (
		<div className={style.sort}>
			
			<div className={style.division}>
				<label className={style.tag}>Ordenar por:</label>
				<div className={style.order}>
					<div className={style.pasteButton} >
						<button className={style.button}>Nombre &nbsp; ▼</button>
						<div className={style.dropdownContent} onClick={(event) => handleSortChange(event)}>
							<option value="asc">A-Z</option>
							<option value="desc">Z-A</option>
						</div>
					</div>

					<div className={style.pasteButton} >
						<button className={style.button}>Precio &nbsp; ▼</button>
						<div className={style.dropdownContent} onClick={(event) => handleSortPrice(event)}>
							<option value="min">Menor a Mayor precio</option>
							<option value="max">Mayor a Menor precio</option>
						</div>
					</div>

					<div className={style.pasteButton} >
						<button className={style.button}>Stock &nbsp; ▼</button>
						<div className={style.dropdownContent} onClick={(event) => handleSortStock(event)}>
							<option value="min">Menor Stock</option>
							<option value="max">Mayor Stock</option>
						</div>
					</div>
				</div>
			</div>
			<div className={style.division}>
				<label className={style.tag2}>Filtrar por:</label>
				<div className={style.filter}>
					<div className={style.pasteButton} >
						<button className={style.button}>Categoria &nbsp; ▼</button>
						<div className={style.dropdownContent} onClick={(event) => handleFilterCategory(event)}>
							<option
							value="all">
							Todas las categorias
							</option>
							{categories.map((option) => (
								console.log("esta es la option"+option.description),
								<option key={option.id} value={option.description}>
								{option.description}
								</option>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SortComponent;
