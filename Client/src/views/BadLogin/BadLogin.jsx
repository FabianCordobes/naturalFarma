import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
import style from "./BadLogin.module.css";

export default function BadLogin(){
    const navigate = useNavigate();

    useEffect(()=>{
        const storedToken = localStorage.getItem('token');
		if (!storedToken || storedToken === null) {
			navigate('/login');
		}
    },[])

    return(
        <div className={style.BadLogin}>
            <h1 className={style.Titulo}>ATENCION !!!</h1>
            <p className={style.parrafo}>Ya cuentas con una sesion de usuario abierta, por favor cierrala antes de volver a iniciar sesion.</p>
        </div>)
}