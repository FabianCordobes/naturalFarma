import React from 'react';
import Slider from 'react-slick';
import style from './Home.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img1 from '../../assets/oferta1.webp';
import img2 from '../../assets/oferta2.webp';
import { FaTruck, FaWhatsapp } from 'react-icons/fa';
import {BiSolidCreditCardFront} from 'react-icons/bi'

export default function Home() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 3000,
		arrows: true,
	};

	return (
		<div className={style.container}>
			<div className={style.cuerpo}>
				<div className={style.botones}>
					<button className={style.btn}>Medicamentos</button>
					<button className={style.btn}>Perfumeria</button>
					<button className={style.btn}>Primeros Auxilios</button>
					<button className={style.btn}>Estetica</button>
				</div>
			</div>

			<div className={style.slider}>
				<Slider {...settings}>
					<div>
						<img
							src={img1}
							alt="oferta 1"
							className={style.imagenOferta}
						/>
					</div>
					<div>
						<img
							src={img2}
							alt="oferta 2"
							className={style.imagenOferta}
						/>
					</div>
				</Slider>
			</div>

			<ul className={style.servicios}>
				<li className={style.servicioItem}><BiSolidCreditCardFront className={style.icon}/> <span>Hasta 12 cuotas sin interes</span></li>
				<li className={style.servicioItem}><FaWhatsapp className={style.icon}/><span>Atención personalizada</span></li>
				<li className={style.servicioItem}><FaTruck className={style.icon}/><span>Calculá el costo de tu envío</span></li>
			</ul>
		</div>
	);
}
