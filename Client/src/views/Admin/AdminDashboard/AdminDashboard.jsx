import React, { useState } from 'react';
import './AdminDashboard.css';
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
        <div className={`grid-container ${openSidebar ? 'sidebar-responsive' : ''}`}>
            <Header setOpenSidebar={handleToggleSidebar} />
            <Sidebar setActiveContent={setActiveContent} />
            <HomeAdmin activeContent={activeContent} />
        </div>
    );
}


export default AdminDashboard
