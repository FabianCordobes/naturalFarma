import { useDispatch, useSelector } from 'react-redux';
import Product from '../../components/Product/Product'; // Asegúrate de importar el componente Product
import style from './Favorites.module.css';
import { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import {
	clearProducts,
	searchProducts,
	setFavorites,
} from '../../redux/actions/searchActions';

const Favorites = () => {
	const items = useSelector((state) => state.search.favorites); // Accede a la lista de perros desde el estado global de Redux.

	const allProducts = items;

	const [currentPage, setCurrentPage] = useState(1); // Define el estado local para la página actual.

	const productsPerPage = 4; // Define la cantidad de perros a mostrar por página.

	const lastProductOfPage = currentPage * productsPerPage; // Calcula el último perro de la página actual.

	const firstProductOfPage = lastProductOfPage - productsPerPage; // Calcula el primer perro de la página actual.

	const currentProducts =
		allProducts && allProducts.slice(firstProductOfPage, lastProductOfPage); // Obtiene los perros de la página actual.

	const pagination = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const dispatch = useDispatch();

	useEffect(() => {
		const storedFav = localStorage.getItem('favorites');
		if (storedFav) {
			const parsedFav = JSON.parse(storedFav);
			dispatch(setFavorites(parsedFav));
		}
	}, []);

	// Función para guardar los favoritos en el localStorage cuando cambia
	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(allProducts));
	}, [allProducts]);

	if (items.length < 1) {
		return (
			<div>
				<h3>NO HAY PRODUCTOS EN FAVORITOS</h3>
			</div>
		);
	}

	return (
		<div className={style.productListContainer}>
			<div className={style.sort}>{/* <SortComponent /> */}</div>
			<div className={style.content}>
				<Pagination
					productsPerPage={productsPerPage}
					allProducts={allProducts.length}
					pagination={pagination}
					currentPage={currentPage}
				/>
				<ul className={style.products}>
					{currentProducts &&
						currentProducts.map((product) => {
							return (
								<li
									className={style.productContainer}
									key={product.id}>
									<Product product={product} />
									{/* Renderiza el componente Product con el producto */}
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
};

export default Favorites;
