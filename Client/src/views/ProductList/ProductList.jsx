import { useDispatch, useSelector } from 'react-redux';
import Product from '../../components/Product/Product'; // Asegúrate de importar el componente Product
import style from './ProductList.module.css';
import SortComponent from '../../components/Sorts/SortComponent';
import { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import { Link } from 'react-router-dom';
import { searchProducts } from '../../redux/actions/searchActions';

const ProductList = () => {
	const allProducts = useSelector((state) => state.search.products); // Accede a la lista de perros desde el estado global de Redux.

	const [currentPage, setCurrentPage] = useState(1); // Define el estado local para la página actual.

	const productsPerPage = 3; // Define la cantidad de perros a mostrar por página.

	const lastProductOfPage = currentPage * productsPerPage; // Calcula el último perro de la página actual.

	const firstProductOfPage = lastProductOfPage - productsPerPage; // Calcula el primer perro de la página actual.

	const currentProducts =
		allProducts && allProducts.slice(firstProductOfPage, lastProductOfPage); // Obtiene los perros de la página actual.

	const pagination = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(searchProducts());
	// }, [dispatch]);

	return (
		<div className={style.productListContainer}>
			<SortComponent />
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
	);
};

export default ProductList;
