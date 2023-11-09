import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import KJUR from 'jsrsasign';
import React, { useState, useEffect } from 'react';
import Logo from '../../assets/OIG.jpeg';
import { handleLogout } from '../../components/UserAuthentications/UserAuthentications';
import { useAuth0 } from '@auth0/auth0-react';
import AccountMenu from '../AcountMenu/AcountMenu';

export default function NavBar(props) {
	const { searchByName } = props;
	const navigate = useNavigate();
	const { logout } = useAuth0();
	const { loginWithRedirect } = useAuth0();
	const { isAuthenticated, user } = useAuth0();
	// useEffect(() => {
	// 	isAuthenticated(); // Llama a la función para verificar la autenticación
	// }, []);

	const [showMenu, setShowMenu] = useState(false);
	// const [showUserMenu, setShowUserMenu] = useState(false);

	const toRegister = () => {
		navigate('/register');
	};

	// const isAuthenticated = () => {
	// 	const token = localStorage.getItem('token');
	// 	console.log(token)

	// 	if (token && token != null) {
	// 		console.log("entramos papu")
	// 	  // Reemplaza 'clave_secreta' con tu clave secreta real
	// 	  const secret = '1234';

	// 	  try {
	// 		const isValid = KJUR.jws.JWS.verifyJWT(token, secret, {
	// 		  alg: ['HS256']
	// 		});

	// 		console.log("sera valido ?:"+isValid)

	// 		if (isValid) {
	// 			// El usuario está autenticado, muestra el menú correspondiente
	// 			setShowUserMenu(true);
	// 		} else {
	// 		  // El token no es válido, muestra el menú por defecto
	// 		  setShowUserMenu(false);
	// 		}
	// 	  } catch (error) {
	// 		console.error('Error al verificar el token');
	// 		setShowUserMenu(false);
	// 	  }
	// 	} else {
	// 		// No se encontró un token, muestra el menú por defecto
	// 		setShowUserMenu(false);
	// 	}
	//   };

	//   const updateMenu = () => {
	// 	handleLogout()
	// 	setShowUserMenu(false);
	//   };

	const UserDetail = () => {
		navigate('/userDetail');
		console.log(user);
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
					<Link to={'/favorites'}>
						<AiOutlineHeart className={style.userIcon} />
					</Link>

					<Link to={'/cart'}>
						<FaShoppingCart className={style.userIcon} />
					</Link>
				</div>

				<AccountMenu />
				{
					// <div  className={`${style.sideMenu} ${showMenu ? style.active : ''}`}>
					// 	<ul className={style.itemList}>
					// 		{isAuthenticated ? (
					// 			<>
					// 				<img src={user.picture}></img>
					// 				<button className={style.item}>Historial</button>
					// 				<button className={style.item} onClick={UserDetail}>Ajustes de cuenta</button>
					// 				<button className={style.item} onClick={() => { logout({ returnTo: window.origin });}}>Cerrar sesión</button>
					// 			</>
					// 		) : (
					// 			<>
					// 				<button className={style.item} onClick={() => { loginWithRedirect()}}>Iniciar sesión</button>
					// 				<button className={style.item} onClick={toRegister}>Registrarse</button>
					// 				</>)}
					// 	</ul>
					// </div>
				}
			</div>

			{/* <div
				className={toggleClasses}
				onClick={() => setShowMenu(!showMenu)}>
				<span></span>
				<span></span>
				<span></span>
			</div> */}
		</nav>
	);
}
