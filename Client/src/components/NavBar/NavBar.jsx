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
import { useSelector } from 'react-redux';

const app = initializeApp(firebaseConfig);

export default function NavBar(props) {
	const { searchByName } = props;
	const navigate = useNavigate();
	const location = useLocation();

	const cart = useSelector((state) => state.search.cart);
	const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

	useEffect(() => {
		localStorage.setItem('cartCount', cartCount);
	}, [cartCount]);
	// console.log(cartCount);

	// console.log(parsedCart.map(item) => {item.quantity * 1});
	// console.log(parsedCart);
	// let count = ;

	const route = location.pathname;

	const [showUserMenu, setShowUserMenu] = useState(false);
	const [adminPanel, setAdminPanel] = useState(false);

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
						<span>{cartCount}</span>
					</Link>
				</div>

				<AccountMenu />
			</div>
		</nav>
	);
}
