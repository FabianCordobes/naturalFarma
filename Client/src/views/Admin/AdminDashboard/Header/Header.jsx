import React from 'react'
import { BsJustify } from 'react-icons/bs'

export default function Header({ setOpenSidebar }) {
    return(
        <div className='header'>
            <div className="menu-icon" onClick={setOpenSidebar}>
                <BsJustify className='icon'/>
            </div>
        </div>
    )
}