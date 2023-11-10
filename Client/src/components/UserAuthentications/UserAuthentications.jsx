import axios from 'axios';
import KJUR from 'jsrsasign';
import { addUserData } from '../../redux/actions/userActions';

export async function handleLogout() {
	// Borra el token del localStorage
	localStorage.removeItem('token');
	window.alert('Sesión cerrada con éxito');
}

// const usuarioParaPrueba = {
//     user: '123',
//     password: '123456'
// }

<<<<<<< HEAD

=======
>>>>>>> b580296bf7bf669e160be9719ac8217c01cea689
export async function handleLogin(data) {
	try {
		const response = await axios.post('/login', {
			email: data.user,
			password: data.password,
		});

		if (response.data.response === 'success') {
			// Almacena el token en el almacenamiento local (localStorage) para mantener la sesión iniciada
			const token = response.data.token;
			localStorage.setItem('token', token);

			// Realiza una solicitud GET al servidor protegida con el token
			// const adminResponse = await axios.get('/login/admin-panel', {
			// 	headers: {
			// 		Authorization: `Bearer ${token}`,
			// 	},
			// });
      console.log(response.data.user);
			console.log('Token generado con éxito:', token);
			// console.log('Datos del panel de administración:', adminResponse.data);
			return {
				status: true,
				userData: response.data.user,
			};
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
