import { createContext, useState } from "react";

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
	const [lang, setLang] = useState("en");

	const onToggleLang = () => {
		setLang((prevLang) => (prevLang === "en" ? "es" : "en"));
	};

	const TEXTS = {
		en: {},
		es: {},
	};

	return <LanguageContext value={{ lang, TEXTS, onToggleLang }}>{children}</LanguageContext>;
};
