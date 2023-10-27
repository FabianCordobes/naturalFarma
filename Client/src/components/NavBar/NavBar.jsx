import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';
import Logo from '../../assets/OIG.jpeg';

export default function NavBar(props) {
	const { getDrivers, searchByName } = props;
	const navigate = useNavigate();
	const toHome = () => {
		navigate('/home');
	};

	const [showMenu, setShowMenu] = useState(false);

	return (
		<nav className={style.navBar}>
			<div className={style.leftSide}>
				<Link to={'/'} className={style.logoContainer}>
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
					<Link to={'/stockForm'}>Create Product</Link>
					<Link to={'/favorites'}>
						<AiOutlineHeart className={style.userIcon} />
					</Link>

					<Link to={'/cart'}>
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
							{/* <li className={style.item}></li> */}
							<li className={style.item}>Historial</li>
							<li className={style.item}>Ajustes de cuenta</li>
							<li className={style.item}>Cerrar sesión</li>
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
