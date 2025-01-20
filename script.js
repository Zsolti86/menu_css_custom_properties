// Hozzaferes a HTML elemekhez
const menuText = document.getElementById('menuText');
const languageSelector = document.getElementById('languages');

// Nyelvekhez tartozo adatok
const languageData = {
	en: {
		text: "This is the menu",
		bgColor: "red", // Hatterszin 
		textColor: "white", // Szovegszin
	},
	
	ro: {
		text: "Acesta este meniul",
		bgColor: "blue",
		textColor: "black",
	},
	
	hu: {
		text: "Ez itt a menu",
		bgColor: "green",
		textColor: "white",
	},
};

// Elenorzom van-e tarolt nyelv  
const storedLanguage = localStorage.getItem('selectedLanguage');

// Ha van tarolt nyelv, allitsam be azt
if (storedLanguage && languageData[storedLanguage]) {
	updateLanguage(storedLanguage);
	languageSelector.value = storedLanguage;
}

// Nyelvvaltas esemenyfigyelo
languageSelector.addEventListener('change', (event) => {
	const selectedLanguage = event.target.value;
	updateLanguage(selectedLanguage);
	
	// Tarolom a nyelvvalasztast
	localStorage.setItem('selectedLanguage', selectedLanguage);
});

// Nyelv frissitese
function updateLanguage(language) {
	const data = languageData[language];
	
	// Frissitem a menu szoveget
	menuText.textContent = data.text;
	
	// CSS valtozok modositasa
	document.documentElement.style.setProperty('--menu-bg-color', data.bgColor);
	document.documentElement.style.setProperty('--menu-text-color', data.textColor);
}