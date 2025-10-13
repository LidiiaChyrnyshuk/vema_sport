// Мапа перекладів
const translations = {
	en: {
		firstTitle: "BONUS",
		secondTitle: "up to €3,000",
		bonus: "+ €100 free bets",
		heroButton: "Claim bonus",
		labelEmail: "Email*",
		placeholderEmail: "Email",
		labelPassword: "Password*",
		placeholderPassword: "Password",
		checkbox:
			"By ticking this box to register for this website, the user declares to be over 18 years old and to have read, understood and accepted",
		terms: "the Terms and Conditions",
		modalBtn: "Claim bonus",
		quantityCharacter: "Contain at least 8 characters",
		uppercaseCharacter: "Include at least 1 uppercase letter",
		numberCharacter: "Include at least 1 number",
		emailError: "Incorrect email format",
	},
	pt: {
		firstTitle: "BÓNUS",
		secondTitle: "ou €3,000",
		bonus: "+ €100 apostas grátis",
		heroButton: "Aceitar o bónus",
		labelEmail: "Email*",
		placeholderEmail: "Email",
		labelPassword: "Senha*",
		placeholderPassword: "Senha",
		checkbox:
			"Ao marcar esta caixa para se registar neste site, o utilizador declara ser maior de 18 anos e ter lido, compreendido e aceite",
		terms: "os Termos e Condições",
		modalBtn: "Aceitar o bónus",
		quantityCharacter: "Conter pelo menos 8 caracteres",
		uppercaseCharacter: "Incluir pelo menos 1 letra maiúscula",
		numberCharacter: "Incluir pelo menos 1 número",
		emailError: "Formato de email incorreto",
	},
};

function getBrowserLanguage() {
	const lang = navigator.language || navigator.userLanguage;
	return lang.startsWith("pt") ? "pt" : "en";
}

function applyTranslations(lang) {
	// додаємо клас для CSS (lang-en або lang-pt)
	document.documentElement.classList.add(`lang-${lang}`);

	// підміняємо тексти
	document.querySelectorAll("[data-translate]").forEach((el) => {
		const key = el.getAttribute("data-translate");
		if (translations[lang][key]) {
			el.textContent = translations[lang][key];
		}
	});
}

// Виконуємо
const lang = getBrowserLanguage();
applyTranslations(lang);
