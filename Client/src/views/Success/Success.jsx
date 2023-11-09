import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
   const location = useLocation();
   const searchParams = location.search.substring(1);  // Elimina el '?' inicial de la cadena
   const paramsArray = searchParams.split('&');  // Divide en pares de clave-valor
   const paramsObject = {};

   paramsArray.forEach((param) => {
      const [key, value] = param.split('=');
      paramsObject[key] = value;
   });

   useEffect(() => {
      console.log(paramsObject);
   }, [location.href]);

   return (
      <div>Success</div>
   );
}

export default Success;
