import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import {handleLogin}    from "../../components/UserAuthentications/UserAuthentications";

export default function Login() {

	const [dataUser, setDataUser] = useState({
		user: "",
		password: ""
	})

	const onChange = (e) => {
		setDataUser({
			...dataUser,
			[e.target.name]: e.target.value
		})
	}

	const navigate = useNavigate();
	
	const isAuthenticated = (e) => {
        e.preventDefault();

        if (handleLogin(dataUser)) {
            console.log("entramos papu");
			window.alert("Bienvenido");
            navigate('/');
        } else {
            window.alert("Datos incorrectos");
        }
    }

    return (
		<div className={style.container}>
			<h1>Login</h1>
			<form>
				<input type="text" placeholder="Usuario" name="user" id="user" onChange={onChange}/>
				<input type="password" placeholder="Contraseña" name="password" id="password" onChange={onChange}/>
				<button type="button" onClick={isAuthenticated}>Iniciar Sesión</button>
			</form>
		</div>
	)
    

}