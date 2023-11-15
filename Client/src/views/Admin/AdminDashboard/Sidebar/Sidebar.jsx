import React, { useState } from 'react';
import {
	BsCart3,
	BsFillArchiveFill,
	BsFillDatabaseFill,
	BsFillGrid3X3GapFill,
	BsFillPersonLinesFill,
	BsFillPersonPlusFill,
	BsFillPersonVcardFill,
	BsGrid1X2Fill,
} from 'react-icons/bs';

export default function Sidebar({ setActiveContent, openSidebar }) {
	const handleButtonClick = (content) => {
		setActiveContent(content);
	};

	return (
		<aside
			id="sidebar"
			className={openSidebar ? 'sidebar-responsive' : ''}>
			<div className="sidebar-title">
				<div className="sidebar-brand">
					<BsCart3 className="icon_header" /> Natural Farma
				</div>
				<span
					className="icon close_icon"
					onClick={() => setOpenSidebar(false)}>
					X
				</span>
			</div>
			<ul className="sidebar-list">
				<li
					className="sidebar-list-item"
					onClick={() => handleButtonClick('dashboard')}>
					<BsGrid1X2Fill className="icon" /> Dashboard
				</li>
				<li
					className="sidebar-list-item"
					onClick={() => handleButtonClick('productos')}>
					<BsFillArchiveFill className="icon" /> Productos
				</li>
				<li
					className="sidebar-list-item"
					onClick={() => handleButtonClick('categorias')}>
					<BsFillGrid3X3GapFill className="icon" /> Categorías
				</li>
				<li
					className="sidebar-list-item"
					onClick={() => handleButtonClick('clientes')}>
					<BsFillPersonLinesFill className="icon" /> Clientes
				</li>
				<li
					className="sidebar-list-item"
					onClick={() => handleButtonClick('usuariosEliminados')}>
					<BsFillDatabaseFill className="icon" /> Usuarios eliminados
				</li>
				<li
					className="sidebar-list-item"
					onClick={() => handleButtonClick('administradores')}>
					<BsFillPersonVcardFill className="icon" /> Administradores
				</li>
				<li
					className="sidebar-list-item"
					onClick={() => handleButtonClick('nuevoAdministrador')}>
					<BsFillPersonPlusFill className="icon" /> Administradores +
				</li>
				<li
					className="sidebar-list-item"
					onClick={() => handleButtonClick('stock')}>
					<BsFillDatabaseFill className="icon" /> Stock
				</li>
			</ul>
		</aside>
	);
}
