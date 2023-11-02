import axios  from "axios";
import KJUR from 'jsrsasign';

export async function handleLogout() {
    // Borra el token del localStorage
    localStorage.removeItem('token');
    window.alert("Sesión cerrada con éxito");
}

// const usuarioParaPrueba = {
//     user: '123',
//     password: '123456'
// }



    

export async function handleLogin(data) {

    const request = await axios.post('http://localhost:3001/login/crear', {email: data.user, password: data.password});

    if(request.data.response === 'success') {
        const secret = "123456";
        // Crea un payload con los datos del usuario
        const payload = {
            user: data.user,
        };

        // Configura el encabezado del token
        const header = { alg: 'HS256', typ: 'JWT' };

        // Firma el token
        const token = KJUR.jws.JWS.sign('HS256', JSON.stringify(header), JSON.stringify(payload), secret);
        
        console.log("Token generado con éxito:", token);
        // Almacena el token en el almacenamiento local (localStorage) para su posterior uso
        localStorage.setItem('token', token);

        // Redirige al usuario a la página de inicio o a donde desees
        return true;
    } else {
        window.alert("Datos incorrectos");
        return false;
    }

    // if(data.user === usuarioParaPrueba.user && data.password === usuarioParaPrueba.password){
    //     const secret = "123456";
    //     // Crea un payload con los datos del usuario
    //     const payload = {
    //         user: data.user,
    //     };

    //     // Configura el encabezado del token
    //     const header = { alg: 'HS256', typ: 'JWT' };

    //     // Firma el token
    //     const token = KJUR.jws.JWS.sign('HS256', JSON.stringify(header), JSON.stringify(payload), secret);
        
    //     console.log("Token generado con éxito:", token);
    //     // Almacena el token en el almacenamiento local (localStorage) para su posterior uso
    //     localStorage.setItem('token', token);

    //     // Redirige al usuario a la página de inicio o a donde desees
    //     return 'success';
    // }
    // else {
    //     window.alert("Datos incorrectos");
    //     return 'failed'
    // }
}