import { useSelector } from 'react-redux';
import Product from '../../components/Product/Product'; // Asegúrate de importar el componente Product
import style from './ProductList.module.css';
import SortComponent from '../../components/Sorts/SortComponent';

const ProductList = () => {
	const products = useSelector((state) => state.search.products);
	

	return (
		<div className={style.productListContainer}>
      <SortComponent />
			<ul className={style.products}>
				{products &&
					products.map((product) => {
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
