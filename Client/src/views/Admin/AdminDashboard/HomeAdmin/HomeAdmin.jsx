import React from 'react';
import AdminList from '../AdminList/AdminList';
import ClientList from '../ClientList/ClientList';
import Dashboard from '../Dashboard/Dashboard';
import CategoriesList from '../CategoryList/CategoryList';
import ProductList from '../ProductList/ProductList';
import StockForm from '../EditProduct/EditProduct';
import CreateAdmin from '../CreateAdmin/CreateAdmin';

export default function HomeAdmin({ activeContent }) {
	const renderContent = () => {
		switch (activeContent) {
			case 'dashboard':
				return <Dashboard />;
			case 'productos':
				return <ProductList />;
			case 'categorias':
				return <CategoriesList />;
			case 'clientes':
				return <ClientList />;
			case 'administradores':
				return <AdminList />;
			case 'nuevoAdministrador':
				return <CreateAdmin />;
			case 'stock':
				return <StockForm />;
			// case 'usuariosEliminados':
				// return <UsuariosEliminados />;
			default:
				return null;
		}
	};

	return (
		<div className="centered-content">
			<div>{renderContent()}</div>
		</div>
	);
}
