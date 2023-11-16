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
import style from '../AdminDashboard.module.css';
import styles from "./Sidebar.module.css"

export default function Sidebar({ setActiveContent, openSidebar }) {
	const handleButtonClick = (content) => {
		setActiveContent(content);
	};

	return (
		<aside
			id="sidebar"
			className={styles.conteiner}>
			<div className={style.sidebarTitle}>
				<div className={style.sidebarBrand}>
					<BsCart3 className={style.iconHeader} /> Natural Farma
				</div>
				<span
					className={`${style.icon} ${style.closeIcon}`}
					onClick={() => setOpenSidebar(false)}>
					X
				</span>
			</div>
			<ul className={style.sidebarList}>
				<li
					className={style.sidebarListItem}
					onClick={() => handleButtonClick('dashboard')}>
					<BsGrid1X2Fill className={style.icon} /> Dashboard
				</li>
				<li
					className={style.sidebarListItem}
					onClick={() => handleButtonClick('productos')}>
					<BsFillArchiveFill className={style.icon} /> Productos
				</li>
				<li
					className={style.sidebarListItem}
					onClick={() => handleButtonClick('categorias')}>
					<BsFillGrid3X3GapFill className={style.icon} /> Categorías
				</li>
				<li
					className={style.sidebarListItem}
					onClick={() => handleButtonClick('clientes')}>
					<BsFillPersonLinesFill className={style.icon} /> Clientes
				</li>
				<li
					className={style.sidebarListItem}
					onClick={() => handleButtonClick('usuariosEliminados')}>
					<BsFillDatabaseFill className={style.icon} /> Usuarios eliminados
				</li>
				<li
					className={style.sidebarListItem}
					onClick={() => handleButtonClick('administradores')}>
					<BsFillPersonVcardFill className={style.icon} /> Administradores
				</li>
				<li
					className={style.sidebarListItem}
					onClick={() => handleButtonClick('nuevoAdministrador')}>
					<BsFillPersonPlusFill className={style.icon} /> Administradores +
				</li>
				<li
					className={style.sidebarListItem}
					onClick={() => handleButtonClick('stock')}>
					<BsFillDatabaseFill className={style.icon} /> Stock
				</li>
			</ul>
		</aside>
	);
}
