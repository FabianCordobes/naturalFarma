import axios from 'axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Success = () => {
	const location = useLocation();
	const searchParams = location.search.substring(1); // Elimina el '?' inicial de la cadena
	const paramsArray = searchParams.split('&'); // Divide en pares de clave-valor
	const paramsObject = {};
	const { user } = useAuth0();

	const storedCart = localStorage.getItem('cart');

	paramsArray.forEach((param) => {
		const [key, value] = param.split('=');
		paramsObject[key] = value;
	});

	// Extraer solo las propiedades necesarias de paramsObject
	const { payment_id, status, merchant_order_id, payment_type, preference_id } =
		paramsObject;

	// Crear un nuevo objeto orderDetail con las propiedades necesarias
	const orderDetail = {
		payment_id,
		status,
		merchant_order_id,
		payment_type,
		preference_id,
	};

	if (storedCart) {
		let parsedData = JSON.parse(storedCart);

		var orderData = {
			products: parsedData,
			orderDetail: orderDetail,
		};

		// console.log(orderData);
	}

	// console.log(orderData.push(paramsObject));

	useEffect(() => {
		// const response = axios.get('/order', orderData)
		// console.log(paramsObject);
		if (user) {
			console.log(user);
		}
	}, [location.href]);

	return <div>{storedCart}</div>;
};

export default Success;
