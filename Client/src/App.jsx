import style from './App.module.css';
import Detail from './views/Detail/Detail';
import Home from './views/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import StockForm from './views/Admin/StockForm/StockForm';
import { useLocation, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ProductList from './views/ProductList/ProductList';
import Cart from './views/Cart/Cart';

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
					element={<Detail />}
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
					path="/cart"
					element={<Cart />}
				/>
			</Routes>
			{location.pathname !== '/login' && location.pathname !== '/register' && <Footer />}
		</div>
	);
}

export default App;
