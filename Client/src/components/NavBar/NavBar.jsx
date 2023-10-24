import React from "react";
import {Link} from 'react-router-dom';
import style from './NavBar.module.css';
import SearchBar  from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

export default function NavBar(props) {
    const {getDrivers, searchByName} = props;
    const navigate = useNavigate();
    const toHome = () => {
        navigate('/home');
    }

  return (
    <div className={style.NavBar}>
        <div className={style.menu}>
            <Link to="/" className={style.link}>
                <button className={style.bn3}>
                    Home
                </button>
            </Link>
            <div to="/medicamentos" className={style.link}>
                <div className={style.dropdown}>
                    <button className={style.bn3} onClick={toHome}>
                    Historial
                    </button>
                    <ul className={style.dropdownContent}>
                        <li>
                            <Link to="/comprimidos">
                                <button className={style.bn3} onClick={getDrivers}>
                                    Compras
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/jarabes">
                                <button className={style.bn3}>
                                    Favoritos
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            
            <Link to="/games" className={style.link}>
                <button className={style.bn3}>
                    Login
                </button>
            </Link>
            <Link to="/about" className={style.link}>
                <button className={style.bn3}>
                    Conocenos !
                </button>
            </Link>
        </div>
        <div className={style.SearchBar}>
            <SearchBar searchByName = {searchByName}/>
        </div>
    </div>
  );
} 