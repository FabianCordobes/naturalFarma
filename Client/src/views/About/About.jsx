import './About.modules.css'
import React, { useState, useEffect, useRef } from 'react';
import Sergio from '../../assets/Sergio.jpg';
import Muller from '../../assets/Muller.jpg';
import Fabian from '../../assets/Fabian.jpg';
import Franco from '../../assets/Franco.jpg';
import Gabriel from '../../assets/Gabriel.jpg'
import Andrea from '../../assets/Andrea.jpg'
import Hernando from '../../assets/Hernando.jpg'
import { AiFillLinkedin, AiOutlineWhatsApp, AiFillGithub, AiFillMail, AiFillPushpin } from 'react-icons/ai';

const linkStyles = {
    textDecoration: 'none',
    color: 'black',
};

export default function About() {
    const developers = [
        {
            name: 'Juan Muller',
            image: Muller,
            info: 'FullStack Developer',
            linkedin: 'https://www.linkedin.com/in/juan-justo-muller-140233259/',
            phone: '+5493512846501',
            github: 'https://github.com/juanjustomuller',
            email: 'juancitomuller@gmail.com',
            description: '¡Hola! Soy Juan Muller, un apasionado Full Stack Developer con experiencia en diversas tecnologías y lenguajes de programación. Mi enfoque principal es crear soluciones efectivas y colaborar en proyectos atractivos que aborden desafíos digitales. Disfruto de la programación tanto en el frontend como en el backend y estoy siempre listo para enfrentar nuevos desafíos. Además, me apasiona compartir conocimientos y ayudar a otros desarrolladores a avanzar en sus carreras. Espero tener la oportunidad de colaborar en proyectos futuros.'
        },
        {
            name: 'Sergio Muñoz',
            image: Sergio,
            info: 'FullStack Developer',
            linkedin: 'https://www.linkedin.com/in/sergio-muñoz-84838b280/',
            phone: '+5492616603249',
            github: 'https://github.com/SMEMunoz',
            email: 'aeroxxdsg@gmail.com',
            description: 'Hola, soy Sergio Muñoz, un apasionado Full Stack Developer con un enfoque constante en la resolución de desafíos tecnológicos. Mi experiencia abarca desde el frontend hasta el backend, y disfruto colaborando en equipos multidisciplinarios para crear aplicaciones web de alto rendimiento y usabilidad. Siempre estoy en busca de nuevas oportunidades para aprender y crecer en esta emocionante industria.'
        },
        {   
            name: 'Fabián Cordobés',
            image: Fabian,
            info: 'FullStack Developer',
            linkedin: 'URL_del_perfil_de_Linkedin_de_Sergio',
            phone: '+5491136737281',
            github: 'https://github.com/FabianCordobes',
            email: 'Correo_electrónico_de_Sergio',
            description: '¡Hola! Soy Fabián Cordobés, un apasionado Full Stack Developer con un amor por la tecnología y el desarrollo web. Mi enfoque constante en el aprendizaje y la mejora me lleva a explorar diversas tecnologías y lenguajes de programación. Disfruto trabajando en proyectos desafiantes que me permiten aplicar mis habilidades tanto en el frontend como en el backend. Siempre estoy listo para enfrentar nuevos retos y seguir mejorando en mi carrera.'

        },
        {   
            name: 'Franco Rojas',
            image: Franco,
            info: 'FullStack Developer',
            linkedin: 'URL_del_perfil_de_Linkedin_de_Sergio',
            phone: '+56974816330',
            github: 'https://github.com/franquesino',
            email: 'Correo_electrónico_de_Sergio',
            description: 'Hola, soy Franco Rojas, un apasionado Full Stack Developer con un enfoque constante en el aprendizaje y la mejora. Mi amor por la tecnología y el desarrollo web me ha llevado a explorar una variedad de tecnologías y lenguajes. Disfruto trabajando en equipo y aplicando mi experiencia para crear aplicaciones web atractivas y funcionales. Además de programar, me encanta compartir conocimientos y ayudar a otros desarrolladores a avanzar en sus carreras. Estoy emocionado por nuevas oportunidades de aprendizaje y desarrollo.'

        },
        {
            name: 'Gabriel Azcurra',
            image: Gabriel,
            info: 'FullStack Developer',
            linkedin: 'URL_del_perfil_de_Linkedin_de_Sergio',
            phone: '+5492615933675',
            github: 'https://github.com/chipiazcurra2015',
            email: 'Correo_electrónico_de_Sergio',
            description: 'Hola, soy Gabriel Azcurra, un apasionado Full Stack Developer con un fuerte interés en la programación y el desarrollo web. Estoy dedicado a la mejora continua y a la creación de soluciones efectivas para desafíos digitales. Mi experiencia abarca tanto el frontend como el backend, y disfruto trabajando en equipos colaborativos para construir aplicaciones web atractivas y funcionales. Me apasiona compartir mis conocimientos y ayudar a otros desarrolladores a crecer en su carrera. Estoy emocionado por las oportunidades que el futuro tiene reservadas.'

        },
        {
            name: 'Andrea Ochoaispuru',
            image: Andrea,
            info: 'FullStack Developer',
            linkedin: 'URL_del_perfil_de_Linkedin_de_Sergio',
            phone: '+5492364529229',
            github: 'https://github.com/olandrea',
            email: 'andreaochoaispuru@gmail.com',
            description: 'Hola, soy Andrea Ochoaispuru, una apasionada Full Stack Developer con experiencia en diversas tecnologías y lenguajes. Me encanta colaborar en proyectos desafiantes y aplicar mis habilidades tanto en el frontend como en el backend. Compartir conocimientos y ayudar a otros desarrolladores a avanzar en sus carreras es algo que me apasiona. Fuera del desarrollo, disfruto explorar nuevos lugares y estar en contacto con la naturaleza. Estoy emocionada por las oportunidades futuras y los desafíos que me esperan en esta industria.'

        },
        {
            name: 'Hernando Lafaurie',
            image: Hernando,
            info: 'FullStack Developer',
            linkedin: 'https://www.linkedin.com/in/hernando-josue-lafaurie-morikawa-404669186/',
            phone: '+573244441711',
            github: 'https://github.com/HernandoLafaurie',
            email: 'lafamori10@gmail.com',
            description: '¡Hola! Soy Hernando Lafaurie, un apasionado Full Stack Developer con un enfoque constante en el aprendizaje y la mejora. Disfruto trabajar en proyectos desafiantes y aplicar mis habilidades tanto en el frontend como en el backend. Colaborar en equipos creativos y contribuir a la construcción de aplicaciones web atractivas es lo que me impulsa. Además, me encanta compartir conocimientos y ayudar a otros desarrolladores a avanzar en sus carreras. Estoy emocionado por las oportunidades futuras y los desafíos que me depara el mundo del desarrollo.'

        },
    ];

    const [index, setIndex] = useState(0);
    const delay = 7000;
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex === developers.length - 1 ? 0 : prevIndex + 1));
        }, delay);

        return () => {
            resetTimeout();
        };
    }, [index, developers.length]);

    return (
        <div>
            <div>
                <h1>Developers:</h1>
            </div>
            <div className="slideshowAbout">
                <div className="slideshowSliderAbout" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {developers.map((developer, idx) => (
                        <div className="slideAbout" key={idx}>
                            <img
                                className="images"
                                src={developer.image}
                                alt={developer.name}
                            />
                            <div className="developerInfo">
                                <h2>{developer.name}</h2>
                                <p>{developer.info}</p>
                                <a href={developer.linkedin} style={linkStyles} target="_blank" rel="noopener noreferrer">
                                    <AiFillLinkedin style={{ color: '#0A66C2' }} /> Linkedin
                                </a>
                                <a href={`https://wa.me/+5493512846501`} style={linkStyles} target="_blank" rel="noopener noreferrer">
                                    <AiOutlineWhatsApp style={{ color: '#25D366' }} /> WhatsApp
                                </a>
                                <a href={developer.github} style={linkStyles} target="_blank" rel="noopener noreferrer">
                                    <AiFillGithub style={{ color: '#333' }} /> Github
                                </a>
                                <a href={`mailto:${developer.email}`} style={linkStyles} target="_blank">
                                    <AiFillMail  style={{ color: '#D14836' }} /> Gmail
                                </a>
                                <p>
                                    <AiFillPushpin style={{ color: 'orange' }}/> {developer.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='slideshowDots'>
                    {developers.map((_, idx) => (
                        <div
                            key={idx}
                            className={`slideshowDot${index === idx ? " active" : ""}`}
                            onClick={() => {
                                setIndex(idx);
                            }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    )
}
