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

			textQuoteArticleHeading: `We love using 'PETWORLD' products.  Environmentally friendly and sustainable. We have the sustainable dog bowls and regularly use the mint scented poo bags which were all such great value for money.`,
			textQuoteArticleSignature: "Dylan Shaw",

			textContactUsSectionHeading: "Let’s talk, woof!",
			textContactUsSectionBody1: "You can ask us questions about your pet, and we will be happy to answer you!",
			textContactUsSectionButton1: "Contact us",

			textNewsFormLabel: "Updates right to your inbox",
			textNewsFormInputPlaceholder: "Email Address...",
			textNewsFormButton1: "Send",

			linksFooterSectionLi1: "Our Story",
			linksFooterSectionLi2: "Pet Care",
			linksFooterSectionLi3: "Shop",

			errorNotEmailAdded: "Not Email Added",
			errorEmailAdded1: "Email not Valid (Missing: '@')",
			errorEmailAdded2: "Email not Valid (Missing: '.')",
			errorEmailAddedShorter: "Email to Short (Min 4 Characters)",
			errorEmailAddedLonger: "Email to long (Max 30 Characters)",
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
