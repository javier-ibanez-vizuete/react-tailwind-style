import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { PrivateRoute } from "./components/PrivateRoute";
import { useContext } from "react";
import { LanguageContext } from "./contexts/LanguageContext";
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/Footer";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ScrollToTop } from "./components/ScrollToTop";

export const App = () => {
	// cosnt { LanguageFallBackTemporary, languages, handleLang } = useContext(LanguageContext);
	const LanguageFallBackTemporary = useContext(LanguageContext);

	// Esto es para que no me crashe la app cada vez que actualizo el codigo
	if (!LanguageFallBackTemporary) {
		console.log("No se encuentra languageFallBackTemporary", LanguageFallBackTemporary);
	}
	const { lang, languages, getText, handleLang } = LanguageFallBackTemporary;

	return (
		<div className="app-container ">
			<header>
				<Navbar />
			</header>
			<main>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Navigate to={"/home"} />} />
					<Route path="/home" element={<HomePage />} />

					<Route path="/login-page" element={<LoginPage />} />
					<Route path="/register-page" element={<RegisterPage />} />
					<Route path="/contact" element={<h1>PAGINA CONTACTO</h1>} />

					<Route element={<PrivateRoute />}>
						<Route path="/user" element={<h2>RUTA PRIVADA</h2>} />
					</Route>

					<Route path="/*" element={<h1>PAGINA NO ENCONTRADA</h1>} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};
