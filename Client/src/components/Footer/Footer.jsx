import style from './Footer.module.css';
import logo from '../../assets/OIG.png';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer>
			<div className={style.logoContainer}>
				<img
					src={logo}
					alt="Logo"
				/>
			</div>

			<div className={style.container}>
				<h3>MI CUENTA</h3>
				<div>
					<p>
						Historial
					</p>
					<p>
						Favoritos
					</p>
					<p>
						Cerrar Sesión
					</p>
				</div>
			</div>

			<div className={`${style.container} ${style.margin}`}>
				<h3>CATEGORIAS</h3>
				<div>
					<Link to="/medicinal">Medicinales</Link>
					<Link to="/perfumery">Perfumeria</Link>
					<Link to="/accesories">Accesorios</Link>
					<Link to="/esthetic">Estética</Link>
				</div>
			</div>

			<div className={style.container}>
				<h3>CONTACTANOS</h3>
				<div>
					<p>
  						Correo: <a href="mailto:aeroxxdsg@gmail.com" target="_blank">aeroxxdsg@gmail.com</a>
					</p>
					<p>
  						Celular: <a href="https://wa.me/542616603249" target="_blank">+54-261-6603249</a>
					</p>
					<p>
  						Direccion: <a href="https://www.google.com/maps/dir/Current+Location/-31.546963250745424,-69.08838526730734/" target="_blank">San Luis 244 - Las Heras, Mendoza</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
