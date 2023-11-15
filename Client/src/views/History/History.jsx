import axios from 'axios';
import { useEffect, useState } from 'react';
import style from './History.module.css';

const History = () => {
	const idUser = localStorage.getItem('user').split('"').join('');
	const [historyItems, setHistoryItems] = useState([]);

	useEffect(() => {
		const getHistoryItem = async (id) => {
			try {
				const response = await axios.get(`/history/${id}`);
				// console.log(response.data);
				setHistoryItems(response.data);
				// console.log(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		getHistoryItem(idUser);
	}, []);

	console.log(historyItems);
	return (
		<div className={style.productListContainer}>
			{/* Renderiza los elementos del historial */}
			{historyItems.map((item) => (
				<div key={item.id}>
					{/* Renderiza los detalles del elemento */}
					<div className={style.product}>
						<div className={style.info}>
							<h2 className={style.title}>{item?.brand}</h2>
							<p className={style.price}>
								Precio total: <span>${item?.price}</span>
							</p>
							<p className={style.stock}>
								Cantidad: <span>{item?.quantity}</span>
							</p>
							<p className={style.stock}>
								Orden de compra: <span>{item?.merchant_order_id}</span>
							</p>
							<p className={style.stock}>
								Modalidad de pago:
								{item?.payment_type === 'account_money' ? (
									<span> Dinero en la cuenta</span>
								) : (
									<span>hola</span>
								)}
							</p>
							<p className={style.stock}>
								Estado de la compra:
								{item.status === 'approved' ? <span> Aprobado</span> : <></>}
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default History;