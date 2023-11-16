import React, { useState } from 'react';
import style from "./AdminDashboard.module.css"
import Header from './Header/Header';
import HomeAdmin from './HomeAdmin/HomeAdmin';
import Sidebar from './Sidebar/Sidebar';

function AdminDashboard() {
    const [activeContent, setActiveContent] = useState('dashboard');
    const [openSidebar, setOpenSidebar] = useState(false);

    const handleToggleSidebar = () => {
        setOpenSidebar(!openSidebar);
    };

    return (
        <div className={`${style['gridContainer']} ${openSidebar ? style['sidebarResponsive'] : ''}`}>
            <Header setOpenSidebar={handleToggleSidebar} />
            <Sidebar setActiveContent={setActiveContent} />
            <HomeAdmin activeContent={activeContent} />
        </div>
    );
}


export default AdminDashboard