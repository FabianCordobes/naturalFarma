// import { useState } from 'react';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {
	orderByName,
	orderByPrice,
	orderByStock,
	filterByCategory,
	filterByPrice,
} from '../../redux/actions/searchActions';
import { categoryOptions } from '../Categories/Categories';
import { useDispatch, useSelector } from 'react-redux';
import style from './SortComponent.module.css';

const SortComponent = () => {
	// const [sortingOrder, setSortingOrder] = useState('asc');
	const dispatch = useDispatch();
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		categoryOptions().then((categories) => {
			setCategories(categories);
		});
	}, []);

	const productsSort = useSelector((state) => state.search.products);

	const [priceMin, setPriceMin] = useState('');
	const [priceMax, setPriceMax] = useState('');
	const [priceClear, setPriceClear] = useState(false);

	const handleFilterCategory = (event) => {
		event.preventDefault();
		dispatch(filterByCategory(event.target.value));
		// setCurrentPage(1) //cuando hago el ordenamiento que me setee en la pag 1
		// setSortingOrder(`Ordenado ${event.target.value}`);
	};

	const onChange = (event) => {
		if (event.target.name === 'minNumber') {
			setPriceMin(event.target.value);
		}

		if (event.target.name === 'maxNumber') {
			setPriceMax(event.target.value);
		}
	};

	const handleFilterPrice = (event) => {
		event.preventDefault();
		console.log('este es el price' + priceMin);
		if (priceMin != '' || priceMax != '') {
			setPriceClear(true);
		}
		dispatch(filterByPrice(priceMin, priceMax));
		// setCurrentPage(1) //cuando hago el ordenamiento que me setee en la pag 1
		// setSortingOrder(`Ordenado ${event.target.value}`);
	};

	const handleClearPriceFilter = (event) => {
		event.preventDefault();
		setPriceClear(false);
		setPriceMin(''); // Restablece el valor de priceMin a vacío
		setPriceMax(''); // Restablece el valor de priceMax a vacío
		dispatch(filterByPrice('', '')); // Envía valores vacíos para eliminar el filtro de precio
	};

	const handleSortChange = (event) => {
		event.preventDefault();
		dispatch(orderByName(event.target.value));
		// setCurrentPage(1) //cuando hago el ordenamiento que me setee en la pag 1
		// setSortingOrder(`Ordenado ${event.target.value}`);
	};
	const handleSortPrice = (event) => {
		event.preventDefault();
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
					<div className={style.pasteButton}>
						<button className={style.button}>Nombre &nbsp; ▼</button>
						<div
							className={style.dropdownContent}
							onClick={(event) => handleSortChange(event)}>
							<option value="asc">A-Z</option>
							<option value="desc">Z-A</option>
						</div>
					</div>

					<div className={style.pasteButton}>
						<button className={style.button}>Precio &nbsp; ▼</button>
						<div
							className={style.dropdownContent}
							onClick={(event) => handleSortPrice(event)}>
							<option value="min">Menor a Mayor precio</option>
							<option value="max">Mayor a Menor precio</option>
						</div>
					</div>

					<div className={style.pasteButton}>
						<button className={style.button}>Stock &nbsp; ▼</button>
						<div
							className={style.dropdownContent}
							onClick={(event) => handleSortStock(event)}>
							<option value="min">Menor Stock</option>
							<option value="max">Mayor Stock</option>
						</div>
					</div>
				</div>
			</div>
			<div className={style.division2}>
				<label className={style.tag2}>Filtrar por:</label>
				<div className={style.filter}>
					<div className={style.pasteButton}>
						<button className={style.button}>Categoria &nbsp; ▼</button>
						<div
							className={style.dropdownContent}
							onClick={(event) => handleFilterCategory(event)}>
							<option value="all">Todas las categorias</option>
							{categories.map((option) => (
								<option
									key={option.id}
									value={option.description}>
									{option.description}
								</option>
							))}
						</div>
					</div>
				</div>
				<div className={style.divPrice}>
					{priceClear && (
						<button
							className={style.button3}
							onClick={handleClearPriceFilter}>
							<FontAwesomeIcon icon={faTimes} /> Filtro de precio
						</button>
					)}

					<div className={style.divPrice1}>
						<input
							type="number"
							placeholder="Precio minimo"
							className={style.inputTag}
							name="minNumber"
							onChange={onChange}
						/>
						<input
							type="number"
							placeholder="Precio maximo"
							className={style.inputTag}
							name="maxNumber"
							onChange={onChange}
						/>
						<button
							className={style.button2}
							onClick={(event) => handleFilterPrice(event)}>
							Filtrar por precio
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SortComponent;
