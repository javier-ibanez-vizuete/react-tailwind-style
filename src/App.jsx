import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { PrivateRoute } from "./components/PrivateRoute";

export const App = () => {
	return (
		<div className="app-container">
			<header>
				<Navbar />
			</header>
			<main>
				<Routes>
					<Route path="/" element={<h1>TITULO PAGINA</h1>} />
					<Route element={<PrivateRoute />}>
						<Route path="/user" element={<h2>RUTA PRIVADA</h2>} />
					</Route>
				</Routes>
			</main>
		</div>
	);
};
