import { useDispatch, useSelector } from 'react-redux';
import Product from '../../components/Product/Product'; // Asegúrate de importar el componente Product
import style from './ProductList.module.css';
import SortComponent from '../../components/Sorts/SortComponent';
import { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import { Link } from 'react-router-dom';
import {
	clearProducts,
	searchProducts,
	setCart,
	setFavorites,
	showErrorAlert,
} from '../../redux/actions/searchActions';
import Alerts from '../../components/Alerts/Alerts';

const ProductList = () => {
	const allProducts = useSelector((state) => state.search.products); // Accede a la lista de perros desde el estado global de Redux.
	const searchQuery = useSelector((state) => state.search.searchQuery);

	const showSuccessAlert = useSelector((state) => state.search.showSuccessAlert);
	const showErrorAlert = useSelector((state) => state.search.showErrorAlert);

	

	const [currentPage, setCurrentPage] = useState(1); // Define el estado local para la página actual.

	const productsPerPage = 8; // Define la cantidad de perros a mostrar por página.

	const lastProductOfPage = currentPage * productsPerPage; // Calcula el último perro de la página actual.

	const firstProductOfPage = lastProductOfPage - productsPerPage; // Calcula el primer perro de la página actual.

	const currentProducts =
		allProducts && allProducts.slice(firstProductOfPage, lastProductOfPage); // Obtiene los perros de la página actual.

	const pagination = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const dispatch = useDispatch();

	useEffect(() => {
		if (allProducts.length === 0) {
			dispatch(searchProducts(''));
		}
		return () => {
			dispatch(clearProducts());
		};
	}, []);

	useEffect(() => {
		const storedFavorites = localStorage.getItem('favorites');
		if (storedFavorites) {
			const parsedFavorites = JSON.parse(storedFavorites);
			// Actualiza el estado de Redux con los favoritos almacenados
			dispatch(setFavorites(parsedFavorites));
		}
	}, []);

	useEffect(() => {
		const storedCart = localStorage.getItem('cart');
		if (storedCart) {
			const parsedCart = JSON.parse(storedCart);
			// Actualiza el estado de Redux con los favoritos almacenados
			dispatch(setCart(parsedCart));
		}
	}, []);

	return (
		<div className={style.productListContainer}>
			<div className={style.sort}>
				<SortComponent />
			</div>
			<div className={style.content}>
				{showSuccessAlert && (
					<Alerts
						typeSeverity="success"
						title='Añadido'
						description='Producto agregado al carrito con éxito.'
					>
					</Alerts>
				)}
				{showErrorAlert && (
					<Alerts
						typeSeverity="error"
						title='Ocurrió un problema'
						description='El producto no ha sido agregado al carrito.'
					>
					</Alerts>
				)}
					
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

export default ProductList;
