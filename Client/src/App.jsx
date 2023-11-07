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
import { useEffect } from 'react';
import { setFavorites } from './redux/actions/searchActions';
import CreateAdmin from './views/Admin/CreateAdmin/CreateAdmin';

function App() {
	const location = useLocation();
	const route = location.pathname.slice(1);




	return (
		<div className={`${style.App} ${style[route]}`}>
			{location.pathname !== '/login' && location.pathname !== '/register' && <NavBar />}
			<Routes>
				<Route
					path="/"
					element={<Home />}
					/>
				<Route 
					path="/product/:id" 
					element={<Detail/>} 
					/>
				<Route
					path="/"
					element={<NavBar />}
				/>
				<Route
					path="/stockform"
					element={<StockForm />}
				/>
				<Route
					path="/productList"
					element={<ProductList />}
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
					path='/admin'
					element={<CreateAdmin/>}
					/>
			</Routes>
			{location.pathname !== '/login' && location.pathname !== '/register' && <Footer />}
		</div>
	);
}

export default App;
