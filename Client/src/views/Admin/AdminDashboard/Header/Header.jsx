import React from 'react'
import { BsJustify } from 'react-icons/bs'
import style from "../AdminDashboard.module.css"

export default function Header({ setOpenSidebar }) {
    return(
        <div className='header'>
            <div className={style.menuIcon} onClick={setOpenSidebar}>
                <BsJustify className='icon'/>
            </div>
        </div>
    )
}