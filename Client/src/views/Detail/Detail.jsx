import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import getDetail from '../../redux/actions/detailActions';
import { GET_DETAIL } from '../../redux/actionTypes';
import style from './Detail.module.css';
import { FiShoppingCart } from 'react-icons/fi';
import Reviews from '../../components/Reviews/Reviews';

const Detail = () => {
	let { id } = useParams();

	const dispatch = useDispatch();

	const detailProducts = useSelector((state) => state.detail.detail);

	useEffect(() => {
		dispatch(getDetail(id));
		
		return () => {
			dispatch({
				type: GET_DETAIL,
				payload: {},
			});
		};
	}, [dispatch, id]);

	if (!detailProducts) {
		return <p>Loading...</p>;
	}

	const productId = detailProducts[0]?.id; // Obtén el productId desde el detalle del producto

	return (
		<div className={style.detailContainer}>
			<Link to="/">
				<button>
					<span>Volver</span>
				</button>
			</Link>
			{detailProducts.length > 0 ? (
				<div className={style.details}>
					<div className={style.detailImage}>
						<img
							src={detailProducts[0].image}
							alt={detailProducts[0].name}
						/>
					</div>

					<div className={style.detailInfo}>
						<h3>{detailProducts[0]?.brand}</h3>
						<p>${detailProducts[0]?.price}</p>
						<p>
							Categoría <span>{detailProducts[0]?.category}</span>
						</p>
						<p>
							Acción Terapéutica <span>{detailProducts[0]?.therapeuticAction}</span>
						</p>
						<p>
							Presentación <span>{detailProducts[0]?.presentation}</span>
						</p>
						<p>
							Stock <span>{detailProducts[0]?.stocks}</span>
						</p>
					</div>
					<div className={style.botonCarrito}>
						<button>
							Agregar al carrito{' '}
							<span>
								<FiShoppingCart />
							</span>
						</button>
					</div>
				</div>
			) : (
				<div>
					<p>...Loading</p>
				</div>
			)}
			<br />
			<Reviews productId={productId}/>

		</div>
	);
};

export default Detail;
