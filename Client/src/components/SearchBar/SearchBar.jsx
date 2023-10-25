import  { useState } from 'react';
import style from './SearchBar.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../../redux/actions/searchActions';

export default function SearchBar() {
	const [inputValue, setInputValue] = useState(''); // Estado local para el valor del input
	const dispatch = useDispatch();

	const handleInputChange = (e) => {
		setInputValue(e.target.value); // Actualiza el estado con el valor del input
	};

	const handleSearch = () => {
		dispatch(searchProducts(inputValue));
	};

	return (
		<div className={style.boxInput}>
			<div className={style.border}>
				<input
					type="text"
					name="text"
					className={style.input}
					placeholder="Producto"
					value={inputValue} // Asigna el valor del estado al input
					onChange={handleInputChange} // Maneja el cambio en el input
				/>
				<button
					onClick={handleSearch}
					className={style.bn3}>
					<AiOutlineSearch />
				</button>
			</div>
		</div>
	);
}
