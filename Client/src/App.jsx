import style from './App.module.css';
import Detail from './views/Detail/Detail';
import Home from './views/Home/Home';
import NavBar from './components/NavBar/NavBar';
//import EditProduct from './views/Admin/EditProduct/EditProduct';
import Login from './views/Login/Login';
import Register from './views/Register/Register';
import Cart from './views/Cart/Cart';
import { useLocation, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
//import ProductList from './views/ProductList/ProductList';
import Medicinal from './views/Categories/Medicinal/Medicinal';
import Error from './views/Error/Error';
import Perfumery from './views/Categories/Perfumery/Perfumery';
import Accessories from './views/Categories/Accessories/Accessories';
import Esthetic from './views/Categories/Esthetic/Esthetic';
import About from './views/About/About';
import Favorites from './views/Favorites/Favorites';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
	clearProducts,
	searchProducts,
	setCart,
	setFavorites,
} from './redux/actions/searchActions';
import BadLogin from './views/BadLogin/BadLogin';
//import CreateAdmin from './views/Admin/CreateAdmin/CreateAdmin';
//import AdminList from './views/Admin/AdminList/AdminLIst';
//import ClientList from './views/Admin/ClientList/ClientList';
import UserDetail from './views/UserDetail/UserDetail';
import Success from './views/Success/Success';
import { setUserData } from './redux/actions/userActions';
import AdminDashboard from './views/Admin/AdminDashboard/AdminDashboard';
import axios from 'axios';
import ProductList from './views/ProductList/ProductList';
import { setCartCount } from './redux/actions/countActions';
import History from './views/History/History';

function App() {
	const location = useLocation();
	const route = location.pathname.slice(1);
	const dispatch = useDispatch();
	// const cartCount = localStorage.getItem('cartCount');
	// console.log(cartCount);

	useEffect(() => {
		dispatch(searchProducts(''));
		// const storedFav = localStorage.getItem('user');
		// if (storedFav) {
		// 	const parsedFav = JSON.parse(storedFav);
		// 	dispatch(setUserData(parsedFav));
		// }

		// dispatch(setCartCount(cartCount));

		return () => {
			dispatch(clearProducts());
		};
	}, []);
	const [isAdmin, setIsAdmin] = useState(false); // Estado para verificar si el usuario es administrador

	useEffect(() => {
		const checkAdminStatus = async () => {
			try {
				const token = localStorage.getItem('token');
				if (token) {
					const adminResponse = await axios.get('/login/admin-panel', {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					});
					if (adminResponse.data) {
						const res = adminResponse.data;
						setIsAdmin(res.data === 'Panel Administracion');
					} else {
						console.error('error');
					}
				}
			} catch (error) {
				console.error('Error al verificar el estado de administrador:', error);
				setIsAdmin(false); // Manejo de error, se asume que el usuario no es administrador
			}
		};

		checkAdminStatus();
	}, []);

	return (
		<div className={`${style.App} ${style[route]}`}>
			{location.pathname !== '/login' && location.pathname !== '/register' && <NavBar />}

			{isAdmin ? ( // Muestra si el usuario es administrador
				<Routes>
					{
						<Route
							path="/"
							element={<Home />}
						/> /* Agrega aquí las rutas y componentes para administradores */
					}
				</Routes>
			) : (
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/product/:id"
						element={<Detail />}
					/>
					<Route
						path="/"
						element={<NavBar />}
					/>
					<Route
						path="*"
						element={<Error />}
					/>
					{/* <Route
						path="/editproduct"
						element={<EditProduct />}
					/> */}
					<Route
						path="/productList"
						element={<ProductList />}
					/>
					<Route
						path="/history"
						element={<History />}
					/>

					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/register"
						element={<Register />}
					/>
					<Route
						path="/cart"
						element={<Cart />}
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
					/>
					<Route
						path="/accesories"
						element={<Accessories />}
					/>
					<Route
						path="/esthetic"
						element={<Esthetic />}
					/>
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="/admin"
						element={<AdminDashboard />}
					/>

					<Route
						path="/success"
						element={<Success />}
					/>
					<Route
						path="/userDetail"
						element={<UserDetail />}
					/>
					<Route
						path="/badlogin"
						element={<BadLogin />}
					/>
				</Routes>
			)}
			{location.pathname !== '/login' && location.pathname !== '/register' && <Footer />}
		</div>
	);
}
export default App;
