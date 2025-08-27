import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { PrivateRoute } from "./components/PrivateRoute";
import { useContext } from "react";
import { LanguageContext } from "./contexts/LanguageContext";
import { HomePage } from "./pages/HomePage";

export const App = () => {
	// cosnt { LanguageFallBackTemporary, languages, handleLang } = useContext(LanguageContext);
	const LanguageFallBackTemporary = useContext(LanguageContext);

	// Esto es para que no me crashe la app cada vez que actualizo el codigo
	if (!LanguageFallBackTemporary) {
		console.log("No se encuentra languageFallBackTemporary", LanguageFallBackTemporary);
	}
	const { lang, languages, handleLang } = LanguageFallBackTemporary;

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
			<footer>
				<select name="lang" id="lang" value={lang} onChange={(event) => handleLang(event.target.value)}>
					{Object.entries(languages).map(([codeLang, language]) => {
						return (
							<option key={language} value={codeLang}>
								{language}
							</option>
						);
					})}
				</select>
			</footer>
		</div>
	);
};
