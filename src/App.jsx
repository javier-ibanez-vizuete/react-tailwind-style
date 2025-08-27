import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { PrivateRoute } from "./components/PrivateRoute";
import { useContext } from "react";
import { LanguageContext } from "./contexts/LanguageContext";
import { HomePage } from "./pages/HomePage";

import petWorldTitle from "./assets/pictures/petworld.png";
import petWorldLogo from "./assets/pictures/petworld-logo.png";
import { Footer } from "./components/Footer";

export const App = () => {
	// cosnt { LanguageFallBackTemporary, languages, handleLang } = useContext(LanguageContext);
	const LanguageFallBackTemporary = useContext(LanguageContext);

	// Esto es para que no me crashe la app cada vez que actualizo el codigo
	if (!LanguageFallBackTemporary) {
		console.log("No se encuentra languageFallBackTemporary", LanguageFallBackTemporary);
	}
	const { lang, languages, getText, handleLang } = LanguageFallBackTemporary;

	return (
		<div className="app-container">
			<header>
				<Navbar />
			</header>
			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />

					<Route path="/login-page" element={<h1>LOGIN PAGE</h1>} />
					<Route path="/register-page" element={<h1>REGISTER PAGE</h1>} />

					<Route element={<PrivateRoute />}>
						<Route path="/user" element={<h2>RUTA PRIVADA</h2>} />
					</Route>
				</Routes>
			</main>
			<Footer />
		</div>
	);
};
