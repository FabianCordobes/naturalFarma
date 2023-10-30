import style from './Footer.module.css';
import logo from '../../assets/OIG.png';

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
					<p>
						Medicinales
					</p>
					<p>
						Perfumería
					</p>
					<p>
						Accesorios
					</p>
					<p>
						Estética
					</p>
				</div>
			</div>

			<div className={style.container}>
				<h3>CONTACTANOS</h3>
				<div>
					<p>
						Correo: <span>aeroxxdsg@gmail.com</span>
					</p>
					<p>
						Celular: <span> +54-261-6603249</span>
					</p>
					<p>
						Direccion: <span> San Luis 244 - Las Heras, Mendoza</span>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
