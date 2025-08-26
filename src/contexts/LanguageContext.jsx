import { createContext, useState } from "react";

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
	const [lang, setLang] = useState("en");

	const onToggleLang = () => {
		setLang((prevLang) => (prevLang === "en" ? "es" : "en"));
	};

	const TEXTS = {
		en: {
			navSignUp: "Sign Up",
			navLogIn: "Log in",

			altPetWorldLogoText: "Petworld name",
		},
		es: {
			navSignUp: "Registrarse",
			navLogIn: "Iniciar Sesion",

			altPetWorldLogoText: "Nombre Petworld",
		},
	};

	return <LanguageContext value={{ lang, TEXTS, onToggleLang }}>{children}</LanguageContext>;
};
