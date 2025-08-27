import { createContext, useState } from "react";

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
	const [lang, setLang] = useState("en");

	const handleLang = (lang = "en") => {
		setLang(lang);
	};

	const languages = {
		en: "English",
		es: "Español",
		zh: "Chinese",
		ru: "Russian",
		de: "Deutsch",
	};

	const TEXTS = {
		en: {
			navSignUp: "Sign Up",
			navLogIn: "Log in",

			altPetWorldLogoText: "Petworld name",

			textHeroSectionHeading1: "Pet Store & Beyond",
			textHeroSectionBody1: "This is a sample landing page, created with Figma and Anima. No coding involved.",
			textHeroSectionButton1: "Get Started",

			textServiceSectionQualityHeading: "Best quality pet food",
			textServiceSectionQualityBody1: "Super delicious food. Available in a range of delicious flavors.",
			textServiceSectionToysHeading: "Toys & Accessories",
			textServiceSectionToysBody1: "Soft toys, chew toys, and rope toys. Strong, interactive, and fun.",
			textServiceSectionMedicalHeading: "Pets medical care",
			textServiceSectionMedicalBody1: "You can get a wide range of great treatments for your dog.",
			textServiceSectionGroomingHeading: "Full service grooming",
			textServiceSectionGroomingBody1: "It's the right time to groom your dog with a variety of treatments.",
		},
		es: {
			navSignUp: "Registrarse",
			navLogIn: "Iniciar Sesion",

			altPetWorldLogoText: "Nombre Petworld",
		},
		zh: {},
		ru: {},
		de: {},
	};

	const getText = (key) => {
		const selectedText = TEXTS[lang][key];
		if (!selectedText) return "No text Found";
		return selectedText;
	};

	return <LanguageContext value={{ lang, TEXTS, languages, getText, handleLang }}>{children}</LanguageContext>;
};
