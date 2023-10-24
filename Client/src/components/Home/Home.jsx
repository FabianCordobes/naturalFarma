import React from "react";
import style from './Home.module.css'

export default function Home() {
    return (
    <div className={style.container}>
      <div className={style.cuerpo}>
        <img src="https://storage.cloud.google.com/natural_farma/logo%20tranparente.png" className={style.imagen}></img>
        <div className={style.titulos}>
          <h1>NATURAL FARMA</h1>
        </div>
      </div>
      <div className={style.oferta}>
        <div className={style.botones}>
          <button className={style.btn}>
            Medicamentos
          </button>
          <button className={style.btn}>
            Perfumeria
          </button>
          <button className={style.btn}>
            Primeros Auxilios
          </button>
          <button className={style.btn}>
            Estetica
          </button>
        </div>
      <img src="https://storage.cloud.google.com/natural_farma/oferta.jpg" className={style.imagenOferta}></img>
      </div>
      <div className={style.datos}>
          <p>Datos de contacto:</p>
          <p>Correo: aeroxxdsg@gmail.com</p>
          <p>WhatsApp-Celular: +54-261-6603249</p>
          <p>Direccion: San Luis 244 - Las Heras, Mendoza</p>
        
      </div>
    </div>
  );

}