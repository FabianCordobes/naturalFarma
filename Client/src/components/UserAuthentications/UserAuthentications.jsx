import axios from 'axios';
import KJUR from 'jsrsasign';
import { addUserData } from '../../redux/actions/userActions';

export async function handleLogout() {
	// Borra el token del localStorage
	localStorage.removeItem('token');
	localStorage.removeItem('user');
	window.location.reload();
}

export async function handleLogin(data) {
	try {
		const response = await axios.post('/login', {
			email: data.user,
			password: data.password,
		});

		if (response.data.response === 'success') {
			console.log("el success")
			// Almacena el token en el almacenamiento local (localStorage) para mantener la sesión iniciada
			const token = response.data.token;
			localStorage.setItem('token', token);
			const adminResponse = await axios.get('/login/admin-panel', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log('Datos del panel de administración:', adminResponse.data);
			
			if(adminResponse.data === "Panel Administracion"){
				localStorage.setItem('user', JSON.stringify(adminResponse.data));
				console.log('Datos del panel de administración:', adminResponse.data);
				window.alert('Bienvenido');
				return {
					status: true,
				};
			}
			else{

			window.alert('Bienvenido');
			return {
				status: true,
			};}
		} else {
			window.alert('Datos incorrectos');
			return {
				status: false,
			};
		}
	} catch (error) {
		console.error('Error al iniciar sesión:', error);
		window.alert('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
		return {
			status: false,
		};
	}
}
