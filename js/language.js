// Мапа перекладів
const translations = {
	en: {
		firstTitle: "BONUS",
		secondTitle: "up to €3,000",
		bonus: "+ €100 free bets",
		heroButton: "Claim bonus",
	},
	pt: {
		firstTitle: "BÓNUS",
		secondTitle: "ou €3,000",
		bonus: "+ €100 apostas grátis",
		heroButton: "Aceitar o bónus",
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
