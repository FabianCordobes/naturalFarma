import React, { useState, useEffect } from 'react';
import style from './Home.module.css';
import img1 from '../../assets/oferta1.webp';
import img2 from '../../assets/oferta2.webp';
import { FaTruck, FaWhatsapp } from 'react-icons/fa';
import { BiSolidCreditCardFront } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Swiper from 'swiper/bundle';

//

const subcategorias = {
  Medicinales: ['Subcat1', 'Subcat2', 'Subcat3'],
  Perfumería: ['Subcat4', 'Subcat5', 'Subcat6'],
  Accesorios: ['Subcat7', 'Subcat8', 'Subcat9'],
  Estética: ['Subcat10', 'Subcat11', 'Subcat12'],
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCategoryHover = (category) => {
    setActiveCategory(category);
  };

  const handleCategoryLeave = () => {
    setActiveCategory(null);
  };

  // Obtener el rol del usuario desde el estado o el contexto global
  const userType = 'admin'; // Reemplaza con la lógica real para obtener el tipo de usuario

  const isAdministrator = userType === 'admin';

	/*const categories = [
		{ name: 'Medicinales', path: '/medicinal' },
		{ name: 'Perfumería', path: '/perfumery' },
		{ name: 'Accesorios', path: '/accesories' },
		{ name: 'Estética', path: '/esthetic' },
	];*/

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
  const categories = [
    { name: 'Medicinales', path: '/medicinal' },
    { name: 'Perfumería', path: '/perfumery' },
    { name: 'Accesorios', path: '/accesories' },
    { name: 'Estética', path: '/esthetic' },
	{ name: 'Editar Stock', path: "/stockform" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 5000);

    return () => {
      clearInterval(interval); 
    };
  }, []);

  return (
    <div className={style.container}>
      <div className={style.cuerpo}>
		<div className={style.botones}>
		{categories.map((category) => (
			<div
							key={category.name}
							onMouseEnter={() => handleCategoryHover(category.name)}>
			<Link
								to={category.path}
								className={style.link}>
						<button className={style.btn}>{category.name}</button>
			</Link>
				<div className={style.subcategoriasCont}>
					{activeCategory != 'Editar Stock' && activeCategory === category.name && (
							<div
										className={style.subcategorias}
										onMouseLeave={handleCategoryLeave}>
								{subcategorias[category.name].map((subCat) => (
					                      <span
												key={subCat}
												className={style.subcategoria}>
											{subCat}
											</span>
										))}
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
      <div className={style.slider}>
        <div className="slideshow">
          <div className="slideshowSlider">
            <div className="slide" style={{ display: currentIndex === 0 ? 'block' : 'none' }}>
              <img src={img1} alt="Oferta 1" width="100%" />
            </div>
            <div className="slide" style={{ display: currentIndex === 1 ? 'block' : 'none' }}>
              <img src={img2} alt="Oferta 2" width="100%" />
            </div>
          </div>
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
