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
		fr: "Français",
		it: "Italiano",
		de: "Deutsch",
		zh: "中文（简体）",
	};

	const TEXTS = {
		en: {
			navSignUp: "Sign Up",
			navLogIn: "Log in",

			altPetWorldLogoText: "PetWorld name",

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

			textQuoteArticleHeading:
				"We love using 'PETWORLD' products. Environmentally friendly and sustainable. We have the sustainable dog bowls and regularly use the mint scented poo bags which were all such great value for money.",
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
			linksFooterSectionLi4: "Contact",
			linksFooterSectionLi5: "Treatments",
			linksFooterSectionLi6: "Health",
			linksFooterSectionLi7: "Hygiene",
			linksFooterSectionLi8: "Pet Food",
			linksFooterSectionLi9: "Toys",
			linksFooterSectionLi910: "Accessories",
			linksFooterPolicyTerms: "Terms of use",
			linksFooterPrivacyPolicy: "Privacy Policy",

			errorNotEmailAdded: "No Email Added",
			errorEmailAdded1: "Email not valid (missing '@')",
			errorEmailAdded2: "Email not valid (missing '.')",
			errorEmailAddedShorter: "Email too short (min 4 characters)",
			errorEmailAddedLonger: "Email too long (max 30 characters)",
		},

		es: {
			navSignUp: "Regístrate",
			navLogIn: "Iniciar sesión",

			altPetWorldLogoText: "Nombre de PetWorld",

			textHeroSectionHeading1: "Tienda de mascotas y más",
			textHeroSectionBody1: "Esta es una página de ejemplo creada con Figma y Anima. No requiere código.",
			textHeroSectionButton1: "Comenzar",

			textServiceSectionQualityHeading: "Alimento para mascotas de la mejor calidad",
			textServiceSectionQualityBody1: "Comida súper deliciosa. Disponible en una variedad de sabores.",
			textServiceSectionToysHeading: "Juguetes y accesorios",
			textServiceSectionToysBody1:
				"Juguetes blandos, para morder y de cuerda. Resistentes, interactivos y divertidos.",
			textServiceSectionMedicalHeading: "Atención médica para mascotas",
			textServiceSectionMedicalBody1: "Puedes obtener una amplia gama de excelentes tratamientos para tu perro.",
			textServiceSectionGroomingHeading: "Servicios completos de peluquería",
			textServiceSectionGroomingBody1:
				"Es el momento perfecto para arreglar a tu perro con una variedad de tratamientos.",

			textQuoteArticleHeading:
				"Nos encanta usar los productos 'PETWORLD'. Ecológicos y sostenibles. Tenemos comederos sostenibles y usamos regularmente bolsas de recogida con aroma a menta, que ofrecen una gran relación calidad-precio.",
			textQuoteArticleSignature: "Dylan Shaw",

			textContactUsSectionHeading: "Hablemos, ¡guau!",
			textContactUsSectionBody1:
				"Puedes hacernos preguntas sobre tu mascota y estaremos encantados de responderte.",
			textContactUsSectionButton1: "Contáctanos",

			textNewsFormLabel: "Actualizaciones directamente en tu bandeja de entrada",
			textNewsFormInputPlaceholder: "Dirección de correo...",
			textNewsFormButton1: "Enviar",

			linksFooterSectionLi1: "Nuestra historia",
			linksFooterSectionLi2: "Cuidado de mascotas",
			linksFooterSectionLi3: "Tienda",
			linksFooterSectionLi4: "Contacto",
			linksFooterSectionLi5: "Tratamientos",
			linksFooterSectionLi6: "Salud",
			linksFooterSectionLi7: "Higiene",
			linksFooterSectionLi8: "Alimentos para mascotas",
			linksFooterSectionLi9: "Juguetes",
			linksFooterSectionLi910: "Accesorios",
			linksFooterPolicyTerms: "Términos de uso",
			linksFooterPrivacyPolicy: "Política de privacidad",

			errorNotEmailAdded: "No se ha agregado correo",
			errorEmailAdded1: "Correo no válido (Falta '@')",
			errorEmailAdded2: "Correo no válido (Falta '.')",
			errorEmailAddedShorter: "Correo demasiado corto (mín 4 caracteres)",
			errorEmailAddedLonger: "Correo demasiado largo (máx 30 caracteres)",
		},

		fr: {
			navSignUp: "S'inscrire",
			navLogIn: "Se connecter",

			altPetWorldLogoText: "Nom PetWorld",

			textHeroSectionHeading1: "Animalerie et au-delà",
			textHeroSectionBody1:
				"Ceci est une page d'atterrissage d'exemple, créée avec Figma et Anima. Aucun codage requis.",
			textHeroSectionButton1: "Commencer",

			textServiceSectionQualityHeading: "Aliments pour animaux de la meilleure qualité",
			textServiceSectionQualityBody1: "Des aliments super délicieux. Disponibles en plusieurs saveurs.",
			textServiceSectionToysHeading: "Jouets et accessoires",
			textServiceSectionToysBody1:
				"Jouets doux, jouets à mâcher et jouets en corde. Robustes, interactifs et amusants.",
			textServiceSectionMedicalHeading: "Soins médicaux pour animaux",
			textServiceSectionMedicalBody1:
				"Vous pouvez obtenir une large gamme d'excellents traitements pour votre chien.",
			textServiceSectionGroomingHeading: "Toilettage complet",
			textServiceSectionGroomingBody1:
				"C'est le bon moment pour toiletter votre chien avec une variété de soins.",

			textQuoteArticleHeading:
				"Nous adorons utiliser les produits 'PETWORLD'. Respectueux de l'environnement et durables. Nous proposons des bols durables et utilisons régulièrement des sacs à déjections parfumés à la menthe, qui offrent un excellent rapport qualité-prix.",
			textQuoteArticleSignature: "Dylan Shaw",

			textContactUsSectionHeading: "Parlons, ouaf !",
			textContactUsSectionBody1:
				"Vous pouvez nous poser des questions sur votre animal, et nous serons heureux de vous répondre !",
			textContactUsSectionButton1: "Contactez-nous",

			textNewsFormLabel: "Mises à jour directement dans votre boîte de réception",
			textNewsFormInputPlaceholder: "Adresse e-mail...",
			textNewsFormButton1: "Envoyer",

			linksFooterSectionLi1: "Notre histoire",
			linksFooterSectionLi2: "Soins pour animaux",
			linksFooterSectionLi3: "Boutique",
			linksFooterSectionLi4: "Contact",
			linksFooterSectionLi5: "Traitements",
			linksFooterSectionLi6: "Santé",
			linksFooterSectionLi7: "Hygiène",
			linksFooterSectionLi8: "Alimentation pour animaux",
			linksFooterSectionLi9: "Jouets",
			linksFooterSectionLi910: "Accessoires",
			linksFooterPolicyTerms: "Conditions d'utilisation",
			linksFooterPrivacyPolicy: "Politique de confidentialité",

			errorNotEmailAdded: "Aucun e-mail ajouté",
			errorEmailAdded1: "E-mail non valide (manque '@')",
			errorEmailAdded2: "E-mail non valide (manque '.')",
			errorEmailAddedShorter: "E-mail trop court (min 4 caractères)",
			errorEmailAddedLonger: "E-mail trop long (max 30 caractères)",
		},

		it: {
			navSignUp: "Iscriviti",
			navLogIn: "Accedi",

			altPetWorldLogoText: "Nome PetWorld",

			textHeroSectionHeading1: "Negozio per animali e oltre",
			textHeroSectionBody1:
				"Questa è una pagina di esempio, creata con Figma e Anima. Nessuna programmazione richiesta.",
			textHeroSectionButton1: "Inizia",

			textServiceSectionQualityHeading: "Cibo per animali di alta qualità",
			textServiceSectionQualityBody1: "Cibo super gustoso. Disponibile in diversi gusti deliziosi.",
			textServiceSectionToysHeading: "Giochi e accessori",
			textServiceSectionToysBody1:
				"Giochi morbidi, da masticare e con corda. Resistenti, interattivi e divertenti.",
			textServiceSectionMedicalHeading: "Cure mediche per animali",
			textServiceSectionMedicalBody1: "Puoi ottenere una vasta gamma di ottimi trattamenti per il tuo cane.",
			textServiceSectionGroomingHeading: "Toelettatura completa",
			textServiceSectionGroomingBody1:
				"È il momento giusto per la toelettatura del tuo cane con una varietà di trattamenti.",

			textQuoteArticleHeading:
				"Amiamo usare i prodotti 'PETWORLD'. Ecologici e sostenibili. Abbiamo ciotole sostenibili e usiamo regolarmente sacchetti per deiezioni profumati alla menta, che hanno un ottimo rapporto qualità-prezzo.",
			textQuoteArticleSignature: "Dylan Shaw",

			textContactUsSectionHeading: "Parliamo, bau!",
			textContactUsSectionBody1: "Puoi farci domande sul tuo animale e saremo felici di risponderti!",
			textContactUsSectionButton1: "Contattaci",

			textNewsFormLabel: "Aggiornamenti direttamente nella tua casella di posta",
			textNewsFormInputPlaceholder: "Indirizzo email...",
			textNewsFormButton1: "Invia",

			linksFooterSectionLi1: "La nostra storia",
			linksFooterSectionLi2: "Cura degli animali",
			linksFooterSectionLi3: "Negozio",
			linksFooterSectionLi4: "Contatto",
			linksFooterSectionLi5: "Trattamenti",
			linksFooterSectionLi6: "Salute",
			linksFooterSectionLi7: "Igiene",
			linksFooterSectionLi8: "Cibo per animali",
			linksFooterSectionLi9: "Giochi",
			linksFooterSectionLi910: "Accessori",
			linksFooterPolicyTerms: "Termini d'uso",
			linksFooterPrivacyPolicy: "Informativa sulla privacy",

			errorNotEmailAdded: "Nessuna email aggiunta",
			errorEmailAdded1: "Email non valida (manca '@')",
			errorEmailAdded2: "Email non valida (manca '.')",
			errorEmailAddedShorter: "Email troppo corta (min 4 caratteri)",
			errorEmailAddedLonger: "Email troppo lunga (max 30 caratteri)",
		},

		de: {
			navSignUp: "Registrieren",
			navLogIn: "Anmelden",

			altPetWorldLogoText: "Name von PetWorld",

			textHeroSectionHeading1: "Zoohandel & mehr",
			textHeroSectionBody1:
				"Dies ist eine Beispiel-Landingpage, erstellt mit Figma und Anima. Kein Coding erforderlich.",
			textHeroSectionButton1: "Loslegen",

			textServiceSectionQualityHeading: "Hochwertiges Tierfutter",
			textServiceSectionQualityBody1:
				"Super leckeres Futter. Erhältlich in verschiedenen köstlichen Geschmacksrichtungen.",
			textServiceSectionToysHeading: "Spielzeug & Zubehör",
			textServiceSectionToysBody1:
				"Weiches Spielzeug, Kauspielzeug und Seilspielzeug. Robust, interaktiv und spaßig.",
			textServiceSectionMedicalHeading: "Tiermedizinische Versorgung",
			textServiceSectionMedicalBody1:
				"Sie können eine große Auswahl an hochwertigen Behandlungen für Ihren Hund erhalten.",
			textServiceSectionGroomingHeading: "Umfassende Fellpflege",
			textServiceSectionGroomingBody1:
				"Es ist der richtige Zeitpunkt, Ihren Hund mit einer Vielzahl von Behandlungen zu pflegen.",

			textQuoteArticleHeading:
				"Wir lieben die 'PETWORLD'-Produkte. Umweltfreundlich und nachhaltig. Wir haben nachhaltige Hundenäpfe und verwenden regelmäßig minzduftende Hundekotbeutel, die ein tolles Preis-Leistungs-Verhältnis bieten.",
			textQuoteArticleSignature: "Dylan Shaw",

			textContactUsSectionHeading: "Lass uns sprechen, wuff!",
			textContactUsSectionBody1:
				"Sie können uns Fragen zu Ihrem Haustier stellen, und wir beantworten sie gerne!",
			textContactUsSectionButton1: "Kontaktieren",

			textNewsFormLabel: "Updates direkt in Ihren Posteingang",
			textNewsFormInputPlaceholder: "E-Mail-Adresse...",
			textNewsFormButton1: "Senden",

			linksFooterSectionLi1: "Unsere Geschichte",
			linksFooterSectionLi2: "Tierpflege",
			linksFooterSectionLi3: "Shop",
			linksFooterSectionLi4: "Kontakt",
			linksFooterSectionLi5: "Behandlungen",
			linksFooterSectionLi6: "Gesundheit",
			linksFooterSectionLi7: "Hygiene",
			linksFooterSectionLi8: "Tiernahrung",
			linksFooterSectionLi9: "Spielzeug",
			linksFooterSectionLi910: "Zubehör",
			linksFooterPolicyTerms: "Nutzungsbedingungen",
			linksFooterPrivacyPolicy: "Datenschutzbestimmungen",

			errorNotEmailAdded: "Keine E-Mail angegeben",
			errorEmailAdded1: "E-Mail ungültig (fehlt '@')",
			errorEmailAdded2: "E-Mail ungültig (fehlt '.')",
			errorEmailAddedShorter: "E-Mail zu kurz (min. 4 Zeichen)",
			errorEmailAddedLonger: "E-Mail zu lang (max. 30 Zeichen)",
		},

		zh: {
			navSignUp: "注册",
			navLogIn: "登录",

			altPetWorldLogoText: "PetWorld 名称",

			textHeroSectionHeading1: "宠物商店及更多",
			textHeroSectionBody1: "这是一个示例着陆页，由 Figma 和 Anima 创建。无需编码。",
			textHeroSectionButton1: "开始使用",

			textServiceSectionQualityHeading: "优质宠物食品",
			textServiceSectionQualityBody1: "超美味的食品。提供多种美味口味。",
			textServiceSectionToysHeading: "玩具与配件",
			textServiceSectionToysBody1: "软玩具、咬咬玩具和绳索玩具。结实、互动且有趣。",
			textServiceSectionMedicalHeading: "宠物医疗护理",
			textServiceSectionMedicalBody1: "您可以为您的狗狗获得各种优秀的治疗。",
			textServiceSectionGroomingHeading: "全套美容护理",
			textServiceSectionGroomingBody1: "现在是为您的狗狗做美容护理的好时机，提供多种护理项目。",

			textQuoteArticleHeading:
				"我们喜欢使用 'PETWORLD' 产品。环保且可持续。我们有可持续的狗碗，并经常使用薄荷香味的拾便袋，性价比非常好。",
			textQuoteArticleSignature: "Dylan Shaw",

			textContactUsSectionHeading: "来聊聊，汪！",
			textContactUsSectionBody1: "您可以向我们咨询有关宠物的问题，我们会很乐意为您解答！",
			textContactUsSectionButton1: "联系我们",

			textNewsFormLabel: "将更新直接发送至您的收件箱",
			textNewsFormInputPlaceholder: "电子邮箱地址...",
			textNewsFormButton1: "发送",

			linksFooterSectionLi1: "我们的故事",
			linksFooterSectionLi2: "宠物护理",
			linksFooterSectionLi3: "商店",
			linksFooterSectionLi4: "联系",
			linksFooterSectionLi5: "治疗",
			linksFooterSectionLi6: "健康",
			linksFooterSectionLi7: "卫生",
			linksFooterSectionLi8: "宠物食品",
			linksFooterSectionLi9: "玩具",
			linksFooterSectionLi910: "配件",
			linksFooterPolicyTerms: "使用条款",
			linksFooterPrivacyPolicy: "隐私政策",

			errorNotEmailAdded: "未添加电子邮箱",
			errorEmailAdded1: "邮箱无效（缺少 '@'）",
			errorEmailAdded2: "邮箱无效（缺少 '.'）",
			errorEmailAddedShorter: "邮箱过短（最少 4 个字符）",
			errorEmailAddedLonger: "邮箱过长（最多 30 个字符）",
		},
	};

	const getText = (key) => {
		const selectedText = TEXTS[lang][key];
		if (!selectedText) return "No text Found";
		return selectedText;
	};

	return <LanguageContext value={{ lang, TEXTS, languages, getText, handleLang }}>{children}</LanguageContext>;
};
