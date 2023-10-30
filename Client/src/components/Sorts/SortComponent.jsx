// import { useState } from 'react';
import { useEffect } from 'react';
import {  orderByName, orderByPrice, orderByStock } from '../../redux/actions/searchActions';
import { useDispatch, useSelector } from 'react-redux';

const SortComponent = () => {
	// const [sortingOrder, setSortingOrder] = useState('asc');
	const dispatch = useDispatch();

	const productsSort = useSelector((state) => state.search.products);



	const handleSortChange = (event) => {
		event.preventDefault();
		dispatch(orderByName(event.target.value));
		// setCurrentPage(1) //cuando hago el ordenamiento que me setee en la pag 1
		// setSortingOrder(`Ordenado ${event.target.value}`);
        console.log(productsSort);
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
		<div>
			<label>Ordenar por Nombre:</label>
			<select onChange={handleSortChange}>
				<option value="asc">A-Z</option>
				<option value="desc">Z-A</option>
			</select>

			<select onChange={(event) => handleSortPrice(event)}>
				<option
					value="price"
					hidden>
					Precio
				</option>
				<option value="min">Menor precio - Mayor precio</option>
				<option value="max">Mayor precio - Menor precio</option>
			</select>

			<select onChange={(event) => handleSortStock(event)}>
				<option
					value="stock"
					hidden>
					Stock
				</option>
				<option value="min">Menor Stock</option>
				<option value="max">Mayor Stock</option>
			</select>
		</div>
	);
};

export default SortComponent;
