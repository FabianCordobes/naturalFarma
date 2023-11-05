import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Login.module.css";
import { handleLogin } from "../../components/UserAuthentications/UserAuthentications";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
    const { loginWithRedirect } = useAuth0();
    const [dataUser, setDataUser] = useState({
        user: "",
        password: ""
    });
	
    const onChange = (e) => {
        setDataUser({
            ...dataUser,
            [e.target.name]: e.target.value
        });
    }

    const navigate = useNavigate();
    
    const isAuthenticated = async (e) => {
        e.preventDefault();

        if (handleLogin(dataUser)) {
            window.alert("Bienvenido");
            navigate('/');
        } else {
            window.alert("Datos incorrectos");
        }
    };

    const loginWithGoogle = () => {
        loginWithRedirect({
            connection: 'google'
        });
    };

    const goToRegister = () => {
        navigate('/register'); // Asegúrate de que esta ruta esté definida en tu enrutador
    };

    const isFormFilled = dataUser.user && dataUser.password;

    return (
        <div className={style.container}>
            <h1>Login</h1>
            <form onSubmit={isAuthenticated}>
                <input type="text" placeholder="Usuario" name="user" id="user" onChange={onChange} />
                <input type="password" placeholder="Contraseña" name="password" id="password" onChange={onChange} />
                <button type="submit" disabled={!isFormFilled}>Iniciar Sesión</button>
            </form>
            <button onClick={loginWithGoogle} className={style.googleLoginBtn}>
                Iniciar sesión con Google
            </button>
            <button onClick={goToRegister} className={style.googleLoginBtn} style={{ backgroundColor: '#db4437' }}>
                Registrarse
            </button>
        </div>
    );
}
