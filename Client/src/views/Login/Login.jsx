import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Login.module.css';
import { handleLogin } from '../../components/UserAuthentications/UserAuthentications';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { addUserData, setUserData } from '../../redux/actions/userActions';


export default function Login() {
	const { loginWithRedirect } = useAuth0();
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

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const isAuthenticated = async () => {
		// e.preventDefault();
		const user = await handleLogin(dataUser);
		console.log(user);
		if (user.status === true) {
			// dispatch(addUserData(user.userData));
			localStorage.setItem('user', JSON.stringify(user.userData));

			window.alert('Bienvenido');
			navigate('/');
		} else {
			window.alert('Datos incorrectos');
		}
	};

	useEffect(() => {
		return () => {
			const storedFav = localStorage.getItem('user');
			if (storedFav) {
				const parsedFav = JSON.parse(storedFav);
				dispatch(setUserData(parsedFav));
			}
		};
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
						// loginWithRedirect();
						isAuthenticated();
					}}>
					Iniciar Sesión
				</button>
			</form>
		</div>
	);
}
