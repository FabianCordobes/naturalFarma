import React from 'react';
import style from './Error.module.css';

export default function Error(){
    return(
        <div className={style.error}>
            <h1 className={style.titulo}>
                Error 404</h1>
            <p className={style.parrafos}>Page not found</p>
            <p className={style.parrafos}>Please try again</p>
            <p className={style.parrafos}>If the problem persists, contact the administrator</p>
            <p className={style.parrafos}>Thank you</p>
            <p className={style.parrafos}>Made by: <a href="https://github.com/juanmgz">LOKI PRODUCCIONES</a></p>
            <p className={style.parrafos}>Contact: 261-6603249</p>
            <p className={style.parrafos}>Mail: <a href="mailto:aeroxxdsg@gmail.com">aeroxxdsg@gmail.com</a></p>
            
        </div>
        )
}