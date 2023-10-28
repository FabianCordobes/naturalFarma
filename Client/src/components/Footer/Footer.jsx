import style from './Footer.module.css';


const Footer = () => {
	return (
		<div className={style.container}>
			<div className={style.datos}>
				<p>Datos de contacto:</p>
				<p>Correo: aeroxxdsg@gmail.com</p>
				<p>WhatsApp-Celular: +54-261-6603249</p>
				<p>Direccion: San Luis 244 - Las Heras, Mendoza</p>
			</div>
		</div>
	);
};

export default Footer;
