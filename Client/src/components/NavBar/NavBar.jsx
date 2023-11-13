import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebaseConfig';
import { GoogleAuthProvider, getAuth, signOut } from 'firebase/auth';
import KJUR from 'jsrsasign';
import React, { useState, useEffect } from 'react';
import Logo from '../../assets/OIG.jpeg';
import { handleLogout } from '../../components/UserAuthentications/UserAuthentications';
import AccountMenu from '../AcountMenu/AcountMenu';

const app = initializeApp(firebaseConfig);

export default function NavBar(props) {
	const { searchByName } = props;
	const navigate = useNavigate();
	const location = useLocation();
	const route = location.pathname;

	// const auth = getAuth();
	// const provider = new GoogleAuthProvider();

	// useEffect(() => {
	// 	isAuthenticated(); // Llama a la función para verificar la autenticación
	// }, []);

	const [showUserMenu, setShowUserMenu] = useState(false);
	const [adminPanel, setAdminPanel] = useState(false);

	// const handleSignOut = () => {

	// 	console.log('esta es la route:' + route);

	// 	window.alert('Sesión cerrada con éxito');

	// 	handleLogout();
	// 	signOut(auth, provider)
	// 		.then(() => {
	// 			// Eliminar el token del localStorage al cerrar sesión
	// 			localStorage.removeItem('token');
	// 			// Puedes realizar otras acciones después de cerrar sesión si es necesario
	// 			window.location.reload();
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});

	// 	if (route === '/badlogin') {
	// 		navigate('/login');
	// 	}
	// };

	// const toLogin = () => {
	// 	navigate('/login');
	// };

	// const toRegister = () => {
	// 	navigate('/register');
	// };

	// const showMenuDisplay = () => {
	// 	if (showMenu) {
	// 		setShowMenu(false);
	// 	} else {
	// 		setShowMenu(true);
	// 	}
	// };

	// const isAuthenticated = () => {
	// 	const user = localStorage.getItem('user');
	// 	const token = localStorage.getItem('token');
	// 	if (user && user != null) {
	// 		setAdminPanel(true);
	// 	}
	// 	if (token && token != null) {
	// 		setShowUserMenu(true);
	// 	} else {
	// 		// No se encontró un token, muestra el menú por defecto
	// 		setShowUserMenu(false);
	// 	}
	// };

	const updateMenu = () => {
		handleLogout();
		setShowUserMenu(false);
	};

	const UserDetail = () => {
		navigate('/userDetail');
	};

	return (
		<nav className={style.navBar}>
			<div className={style.leftSide}>
				<Link
					to={'/'}
					className={style.logoContainer}>
					<img
						src={Logo}
						alt="Logo"
					/>
					<div>
						<h1>NATURAL FARMA</h1>
					</div>
				</Link>
			</div>
			<div className={style.SearchBar}>
				<SearchBar searchByName={searchByName} />
			</div>

			<div className={style.rightSide}>
				<div>
					<Link
						to={'/about'}
						style={{ textDecoration: 'none' }}>
						<div className={style.about}>
							<h3>About</h3>
						</div>
					</Link>
				</div>
				<div className={style.iconsContainer}>
					<Link
						to={'/favorites'}
						className={style.userIcon}>
						<FontAwesomeIcon icon={faHeart} />
					</Link>
					<Link
						to={'/cart'}
						className={style.userIcon}>
						<FontAwesomeIcon icon={faShoppingCart} />
					</Link>

					{/* <Link
						onClick={() => showMenuDisplay()}
						className={style.userIcon}>
						<FontAwesomeIcon icon={faUser} />
					</Link> */}
				</div>

				<AccountMenu />
				{
					// <div className={`${style.sideMenu} ${showMenu ? style.active : ''}`}>
					// 	{adminPanel ? (
					// 		<ul className={style.itemList}>
					// 			{showUserMenu ? (
					// 				<>
					// 					<button className={style.item}>Historial</button>
					// 					<button className={style.item}>Administrador de usuarios</button>
					// 					<button className={style.item}>Ajustes de cuenta</button>
					// 					<button
					// 						className={style.item}
					// 						onClick={() => {
					// 							handleSignOut();
					// 						}}>
					// 						Cerrar sesión
					// 					</button>
					// 				</>
					// 			) : (
					// 				<>
					// 					<button
					// 						className={style.item}
					// 						onClick={() => {
					// 							toLogin();
					// 						}}>
					// 						Iniciar sesión
					// 					</button>
					// 					<button
					// 						className={style.item}
					// 						onClick={toRegister}>
					// 						Registrarse
					// 					</button>
					// 				</>
					// 			)}
					// 		</ul>
					// 	) : (
					// 		<ul className={style.itemList}>
					// 			{showUserMenu ? (
					// 				<>
					// 					<button className={style.item}>Historial</button>
					// 					<button className={style.item}>Ajustes de cuenta</button>
					// 					<button
					// 						className={style.item}
					// 						onClick={() => {
					// 							handleSignOut();
					// 						}}>
					// 						Cerrar sesión
					// 					</button>
					// 				</>
					// 			) : (
					// 				<>
					// 					<button
					// 						className={style.item}
					// 						onClick={() => {
					// 							toLogin();
					// 						}}>
					// 						Iniciar sesión
					// 					</button>
					// 					<button
					// 						className={style.item}
					// 						onClick={toRegister}>
					// 						Registrarse
					// 					</button>
					// 				</>
					// 			)}
					// 		</ul>
					// 	)}
					// </div>
				}
			</div>

			{/* <div
				className={style.toggleClasses}
				onClick={() => setShowMenu(!showMenu)}>
				<span></span>
				<span></span>
				<span></span>
			</div> */}
		</nav>
	);
}
