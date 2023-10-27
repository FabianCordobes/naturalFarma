import { useState } from 'react';
import style from './SearchBar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../../redux/actions/searchActions';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

export default function SearchBar() {
	const [inputValue, setInputValue] = useState(''); // Estado local para el valor del input
	const dispatch = useDispatch();


	const navigate = useNavigate(); // Inicializa Navigate

	const handleInputChange = (e) => {
		e.preventDefault();
		setInputValue(e.target.value); // Actualiza el estado con el valor del input
	};

	const handleSearch = (event) => {
		event.preventDefault();
		dispatch(searchProducts(inputValue))
			.then(() => {
				navigate('/productList'); // Redirige a la vista ProductList después de la búsqueda exitosa
				setInputValue('')
			})
			.catch((error) => {
				console.error('Error en la búsqueda:', error);
			});

		// console.log(products);
	};

	return (
		<div>
			<form
				className={style.boxInput}
				onSubmit={handleSearch}>
				<div className={style.border}>
					<input
						type="text"
						name="brand"
						className={style.input}
						placeholder="Producto"
						value={inputValue} // Asigna el valor del estado al input
						onChange={handleInputChange} // Maneja el cambio en el input
					/>
					<button
						type="submit"
						value={'Search'}
						className={style.bn3}>
						<AiOutlineSearch />
					</button>
				</div>
			</form>
		</div>
	);
}
