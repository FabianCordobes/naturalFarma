import React, {useState} from "react";
import style from './SearchBar.module.css';
import App from "../../App"

export default function SearchBar(props) {
    const {searchByName}=props
    const [inputValue, setInputValue] = useState(""); // Estado local para el valor del input

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Actualiza el estado con el valor del input
  };

    return (
        <div className={style.boxInput}>
            <div className={style.border}>
              <input
                  type="text"
                  name="text"
                  className={style.input}
                  placeholder="Producto"
                  value={inputValue} // Asigna el valor del estado al input
                  onChange={handleInputChange} // Maneja el cambio en el input
                  />
              <button onClick={()=>searchByName(inputValue)} className={style.bn3} type="submit">
                Buscar
              </button>
            </div>
        </div>
  )

}