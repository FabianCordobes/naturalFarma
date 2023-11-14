import axios from 'axios';
import { useEffect, useState } from 'react'; // Importa useState
import { useLocation } from 'react-router-dom';

const Success = () => {
	const location = useLocation();
	const [orderData, setOrderData] = useState({
		products: [],
		orderDetail: {},
		user: [], // Agrega la propiedad user al objeto
	}); // Usa useState para manejar el estado

	const storedCart = localStorage.getItem('cart');
	const userID = localStorage.getItem('user');
	const parsedID = userID.split('"').join('');

	const paramsArray = location.search.substring(1).split('&');
	const paramsObject = {};
	paramsArray.forEach((param) => {
		const [key, value] = param.split('=');
		paramsObject[key] = value;
	});

	const { payment_id, status, merchant_order_id, payment_type, preference_id } =
		paramsObject;

	const orderDetail = {
		payment_id,
		status,
		merchant_order_id,
		payment_type,
		preference_id,
	};

	useEffect(() => {
		// const response = axios.get('/order', orderData)
		// console.log(paramsObject);
		const idGoogle = localStorage.getItem('idGoogle');

		if (idGoogle) {
			console.log(idGoogle);
		}

		const fetchData = async () => {
			try {
				// Realiza la solicitud GET del usuario
				const response = await axios.get(`/user/${parsedID}`);
				const userData = response.data;

				// Actualiza el objeto orderData con la información del usuario
				setOrderData({
					products: JSON.parse(storedCart),
					orderDetail: orderDetail,
					user: userData[0], // Agrega la propiedad user al objeto
				});
			} catch (error) {
				console.error('Error fetching user data:', error.message);
			}
		};

		fetchData(); // Llama a la función de solicitud cuando el componente se monta
	}, [parsedID, location.href]);

	orderData;


	return <div>{storedCart}</div>;
};

export default Success;
