import style from './App.module.css';
import Detail from './views/Detail/Detail';
import Home from './views/Home/Home';
import NavBar from './components/NavBar/NavBar';
import StockForm from './views/Admin/StockForm/StockForm';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Cart from './views/Cart/Cart';
import { useLocation, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ProductList from './views/ProductList/ProductList';
import Medicinal from './views/Categories/Medicinal/Medicinal';
import Perfumery from './views/Categories/Perfumery/Perfumery';
import Accessories from './views/Categories/Accessories/Accessories';
import Esthetic from './views/Categories/Esthetic/Esthetic';
import About from './views/About/About';
import Favorites from './views/Favorites/Favorites';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setFavorites } from './redux/actions/searchActions';
import CreateAdmin from './views/Admin/CreateAdmin/CreateAdmin';
import AdminList from './views/Admin/AdminList/AdminLIst';
import ClientList from './views/Admin/ClientList/ClientList';
import UserDetail from './views/UserDetail/UserDetail';
import Success from './views/Success/Success';

function App() {
    const location = useLocation();
    const route = location.pathname.slice(1);
    const [isAdmin, setIsAdmin] = useState(false); // Estado para verificar si el usuario es administrador

    useEffect(() => {
        const checkAdminStatus = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const adminResponse = await axios.get('/login/admin-panel', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
						console.log(adminResponse.data.isAdmin);
                    if (adminResponse.data.isAdmin) {
                        setIsAdmin(true); // El usuario es administrador
                    } else {
                        setIsAdmin(false); // El usuario no es administrador
                    }
                }
            } catch (error) {
                console.error("Error al verificar el estado de administrador:", error);
                setIsAdmin(false); // Manejo de error, se asume que el usuario no es administrador
            }
        };

        checkAdminStatus();
    }, []);

// 	return (
// 		<div className={`${style.App} ${style[route]}`}>
// 			{location.pathname !== '/login' && location.pathname !== '/register' && <NavBar />}
// 			<Routes>
// 				<Route
// 					path="/"
// 					element={<Home />}
// 				/>
// 				<Route
// 					path="/product/:id"
// 					element={<Detail />}
// 				/>
// 				<Route
// 					path="/"
// 					element={<NavBar />}
// 				/>
// 				<Route
// 					path="/stockform"
// 					element={<StockForm />}
// 				/>
// 				<Route
// 					path="/productList"
// 					element={<ProductList />}
// 				/>
// 				<Route
// 					path="/login"
// 					element={<Login />}
// 				/>
// 				<Route
// 					path="/register"
// 					element={<Register />}
// 				/>
// 				<Route
// 					path="/cart"
// 					element={<Cart />}
// 				/>
// 				<Route
// 					path="/favorites"
// 					element={<Favorites />}
// 				/>
// 				<Route
// 					path="/medicinal"
// 					element={<Medicinal />}
// 				/>
// 				<Route
// 					path="/perfumery"
// 					element={<Perfumery />}
// 				/>
// 				<Route
// 					path="/accesories"
// 					element={<Accessories />}
// 				/>
// 				<Route
// 					path="/esthetic"
// 					element={<Esthetic />}
// 				/>
// 				<Route
// 					path="/about"
// 					element={<About />}
// 				/>
// 				<Route
// 					path="/admin"
// 					element={<CreateAdmin />}
// 				/>
// 				<Route
// 					path="/admin/create"
// 					element={<CreateAdmin />}
// 				/>
// 				<Route
// 					path="/admin/accounts"
// 					element={<AdminList />}
// 				/>
// 				<Route
// 					path="/admin/clients"
// 					element={<ClientList />}
// 				/>
// 				<Route
// 					path="/success"
// 					element={<Success />}
// 				/>
// 				<Route
// 					path="/userDetail"
// 					element={<UserDetail />}
// 				/>
// 			</Routes>
// 			{location.pathname !== '/login' && location.pathname !== '/register' && <Footer />}
// 		</div>
// 	);
// }
return (
	<div className={`${style.App} ${style[route]}`}>
		{location.pathname !== '/login' && location.pathname !== '/register' && <NavBar />}
		<Routes>
	<Route path="/" element={<Home />} />
	{/* <Route path="/product/:id" element={<Detail />} /> */}
	<Route path="/" element={<NavBar />} />
	{/* <Route path="/stockform" element={<StockForm />} /> */}
	<Route path="/productList" element={<ProductList />} />
	<Route path="/login" element={<Login />} />
	<Route path="/register" element={<Register />} />
	{/* <Route path="/cart" element={<Cart />} /> */}
	<Route path="/favorites" element={<Favorites />} />
	<Route path="/medicinal" element={<Medicinal />} />
	<Route path="/perfumery" element={<Perfumery />} />
	<Route path="/accesories" element={<Accessories />} />
	<Route path="/esthetic" element={<Esthetic />} />
	<Route path="/about" element={<About />} />
	{/* <Route path="/admin" element={<CreateAdmin />} /> */}
	{/* <Route path="/admin/create" element={<CreateAdmin />} /> */}
	<Route path="/admin/accounts" element={<AdminList />} />
	<Route path="/admin/clients" element={<ClientList />} />
	<Route path="/success" element={<Success />} />
	<Route path="/userDetail" element={<UserDetail />} />
</Routes>
		{isAdmin && ( // Muestra si el usuario es administrador
			<div>
				{	
				// <Route
				// 	path="/"
				// 	element={<Home />}
				// />/* Agrega aquí las rutas y componentes para administradores */
				}
				{/* <Route
					path="/accesories"
					element={<Accessories />}
				/>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/admin"
					element={<CreateAdmin />}
				/>
				<Route
					path="/admin/create"
					element={<CreateAdmin />}
				/>
				<Route
					path="/admin/accounts"
					element={<AdminList />}
				/>
				<Route
					path="/admin/clients"
					element={<ClientList />}
				/>
				<Route
					path="/userDetail"
					element={<UserDetail />}
				/>
				<Route
					path="/favorites"
					element={<Favorites />}
				/>
				<Route
					path="/medicinal"
					element={<Medicinal />}
				/>
				<Route
					path="/perfumery"
					element={<Perfumery />}
				/> */}
				<Route
					path="/accesories"
					element={<Accessories />}
				/>
				{/* ... Agrega más rutas para funcionalidades de administrador */}
			</div>
		)}
		{location.pathname !== '/login' && location.pathname !== '/register' && <Footer />}
	</div>
);
}
export default App;
