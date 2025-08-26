import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { PrivateRoute } from "./components/PrivateRoute";
import { useContext } from "react";
import { LanguageContext } from "./contexts/LanguageContext";

export const App = () => {
	const { lang, onToggleLang } = useContext(LanguageContext);

	return (
		<div className="app-container">
			<header>
				<Navbar />
			</header>
			<main>
				<Routes>
					<Route path="/" element={<h1>TITULO PAGINA</h1>} />

					<Route path="/login-page" element={<h1>LOGIN PAGE</h1>} />
					<Route path="/register-page" element={<h1>REGISTER PAGE</h1>} />

					<Route element={<PrivateRoute />}>
						<Route path="/user" element={<h2>RUTA PRIVADA</h2>} />
					</Route>
				</Routes>
			</main>
			<footer>
				<button onClick={onToggleLang}>CAMBIAR IDIOMA</button>
			</footer>
		</div>
	);
};
