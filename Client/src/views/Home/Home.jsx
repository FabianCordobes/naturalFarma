import { useState, useEffect } from 'react';
import style from './Home.module.css';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import img1 from '../../assets/oferta1.webp';
import img2 from '../../assets/oferta2.webp';
import { FaTruck, FaWhatsapp } from 'react-icons/fa';
import { BiSolidCreditCardFront } from 'react-icons/bi';
import { Link } from 'react-router-dom';

// 

const subcategorias = {
	Medicinales: ['Subcat1', 'Subcat2', 'Subcat3'],
	Perfumería: ['Subcat4', 'Subcat5', 'Subcat6'],
	Accesorios: ['Subcat7', 'Subcat8', 'Subcat9'],
	Estética: ['Subcat10', 'Subcat11', 'Subcat12'],
};

export default function Home() {
	const [activeCategory, setActiveCategory] = useState(null);
	const handleCategoryHover = (category) => {
		setActiveCategory(category);
	};
	const handleCategoryLeave = () => {
		setActiveCategory(null);
	};

	useEffect(() => {
		const swiper = new Swiper('.swiper-container', {
			slidesPerView: 1, // Show only one slide per view
			loop: true,
			// autoplay: {
				// delay: 3000, // Change slide every 3 seconds
			// },
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		});
	}, []);

	return (
		<div className={style.container}>
			<div className={style.cuerpo}>
				<div className={style.botones}>
					{['Medicinales', 'Perfumería', 'Accesorios', 'Estética'].map((category) => {
						return (
							<div
								key={category}
								onMouseEnter={() => handleCategoryHover(category)}>
								<button className={style.btn}>{category}</button>
								<div className={style.subcategoriasCont}>
									{activeCategory === category && (
										<div
											className={style.subcategorias}
											onMouseLeave={handleCategoryLeave}>
											{subcategorias[category]?.map((subCat) => {
												return (
													<Link
														to={'/'}
														key={subCat}
														className={style.subcategoria}>
														{subCat}
													</Link>
												);
											})}
										</div>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className={style.slider}>
				<div className="swiper-container">
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<img
								src={img1}
								alt="Oferta 1"
								width={'100%'}
							/>
						</div>
						<div className="swiper-slide">
							<img
								src={img2}
								alt="Oferta 2"
								width={'100%'}
							/>
						</div>
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</div>
			<ul className={style.servicios}>
				<li className={style.servicioItem}>
					<BiSolidCreditCardFront className={style.icon} />{' '}
					<span>Hasta 12 cuotas sin interés</span>
				</li>
				<li className={style.servicioItem}>
					<FaWhatsapp className={style.icon} /> <span>Atención personalizada</span>
				</li>
				<li className={style.servicioItem}>
					<FaTruck className={style.icon} /> <span>Calculá el costo de tu envío</span>
				</li>
			</ul>
		</div>
	);
}
