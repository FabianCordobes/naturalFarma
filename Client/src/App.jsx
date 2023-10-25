import style from './App.module.css';
import Home from './views/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import StockForm from './views/Admin/StockForm/StockForm';
import { useLocation, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

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
					path="/"
					element={<NavBar />}
				/>
				<Route
					path="/stockform"
					element={<StockForm />}
				/>
			</Routes>
			{location.pathname !== '/login' && location.pathname !== '/register' && <Footer />}
		</div>
	);
}

export default App;
