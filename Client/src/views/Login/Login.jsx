import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Login.module.css';
import { handleLogin } from '../../components/UserAuthentications/UserAuthentications';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebaseConfig';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { addUserData, setUserData } from '../../redux/actions/userActions';
import axios from 'axios';

const app = initializeApp(firebaseConfig);

export default function Login() {
	const navigate = useNavigate();
	const auth = getAuth();
	const provider = new GoogleAuthProvider();

	const handleGoogleSignIn = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				// Manejar el resultado de inicio de sesión con Google
				const user = result.user;
				console.log('buscando el id' + JSON.stringify(user));

				// Obtener el token de acceso desde el resultado
				const token = result._tokenResponse?.idToken;
				const idGoogle = user.uid;
				if (token) {
					// Guardar el token en localStorage
					localStorage.setItem('token', token);
					localStorage.setItem('idGoogle', idGoogle);
				}

				window.alert('Usuario autenticado:', user);

				// Realizar la redirección después del inicio de sesión
				navigate('/');
			})
			.catch((error) => {
				// Manejar errores aquí
				console.error(error);
			});
	};

	const [dataUser, setDataUser] = useState({
		user: '',
		password: '',
	});

	const onChange = (e) => {
		setDataUser({
			...dataUser,
			[e.target.name]: e.target.value,
		});
	};

	const isAuthenticated = async () => {
		// e.preventDefault();
		const user = await handleLogin(dataUser);
		if (user.status === true) {
			navigate('/');
		}
	};

	useEffect(() => {
		const storedToken = localStorage.getItem('token');
		if (storedToken) {
			navigate('/badlogin');
		}
	}, []);

	return (
		<div className={style.container}>
			<h1>Login</h1>
			<form>
				<input
					type="text"
					placeholder="Usuario"
					name="user"
					id="user"
					onChange={onChange}
				/>
				<input
					type="password"
					placeholder="Contraseña"
					name="password"
					id="password"
					onChange={onChange}
				/>
				<button
					type="button"
					onClick={() => {
						isAuthenticated();
					}}>
					Iniciar Sesión
				</button>
				<button
					type="button"
					onClick={() => {
						handleGoogleSignIn();
					}}>
					Iniciar Sesión con Google <FaGoogle />
				</button>
			</form>
		</div>
	);
}
