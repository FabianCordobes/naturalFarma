import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import KJUR from 'jsrsasign';
import React, { useState, useEffect } from 'react';
import Logo from '../../assets/OIG.jpeg';
import {handleLogout } from '../../components/UserAuthentications/UserAuthentications';

export default function NavBar(props) {
	const { searchByName } = props;
	const navigate = useNavigate();

	useEffect(() => {
		isAuthenticated(); // Llama a la función para verificar la autenticación
	}, []);

	const [showMenu, setShowMenu] = useState(false);
	const [showUserMenu, setShowUserMenu] = useState(false);

	const toLogin = () => {
		navigate('/login');
	};

	const toRegister = () => {
		navigate('/register');
	};

	const isAuthenticated = () => {
		const token = localStorage.getItem('token');
	
		if (token && token != null) {

		  // Reemplaza 'clave_secreta' con tu clave secreta real
		  const secret = '123456';
	
		  try {
			const isValid = KJUR.jws.JWS.verifyJWT(token, secret, {
			  alg: ['HS256']
			});
	
			if (isValid) {
				// El usuario está autenticado, muestra el menú correspondiente
				setShowUserMenu(true);
			} else {
			  // El token no es válido, muestra el menú por defecto
			  setShowUserMenu(false);
			}
		  } catch (error) {
			console.error('Error al verificar el token');
			setShowUserMenu(false);
		  }
		} else {
			// No se encontró un token, muestra el menú por defecto
			setShowUserMenu(false);
		}
	  };

	  const updateMenu = () => {
		handleLogout()
		setShowUserMenu(false);
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
				<div className={style.iconsContainer}>
					<Link to={'/stockForm'}>
						<p className={style.userIcon} style={{textDecoration:'none', fontSize:'20px' }}>Crear Producto</p>
					</Link>

					<Link to={'/favorites'}>
						<AiOutlineHeart className={style.userIcon} />
					</Link>

					<Link to={'/'}>
						<FaShoppingCart className={style.userIcon} />
					</Link>

					<div
						className={style.navToggle}
						onClick={() => setShowMenu(!showMenu)}>
						<FaUser className={style.userIcon} />
					</div>
				</div>
				
				{showMenu && (
				<div className={`${style.sideMenu} ${showMenu ? 'active' : ''}`}>
					<ul className={style.itemList}>
						{showUserMenu ? (
							<>
								<button className={style.item}>Historial</button>
								<button className={style.item}>Ajustes de cuenta</button>
								<button className={style.item} onClick={updateMenu}>Cerrar sesión</button>
							</>
						) : (
							<>
								<button className={style.item} onClick={toLogin}>Iniciar sesión</button>
								<button className={style.item} onClick={toRegister}>Registrarse</button>
							</>
						)}
					</ul>
				</div>
			)}
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
