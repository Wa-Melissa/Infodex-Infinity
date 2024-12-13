class Column {
	_dataList ; // Attribut contenant une liste de données générées aléatoirement
	_title = "Probabilités(en %)\n"; //exemple de titre
	_errorIndices ; //Stocke l'indice des lignes fausses
	_nbErrors;

	/**
	 * Constructeur de la classe Column.
	 * Initialise la colonne en remplissant la liste de données
	 * @param {number} size -longeur du dataset
	 */
	constructor(size) {
		this._errorIndices = [];
		this._dataList = Array(size).fill(0);
		this._nbErrors = Math.floor(Math.random() * (settings.maxErrors * size - settings.minErrors * size) + settings.minErrors * size);

	}

	/**
		 * Méthode pourinsérer un certain nombre d'erreurs parmi les données(fonction non implémentée).
		 * @param {number} nbErrors - Le nombre d'erreurs à définir, doit être < à la taille de la liste.
		 */
	setErrors(nbErrors){
		Array(nbErrors).fill(0).map(()=>{
			let randomIndex = Math.floor(Math.random()*(this._dataList.length-1));  //Choix d'une donnée de la liste à corrompre
			this._dataList[randomIndex] *= 10 ; //décalage de la décimale
			(!this._errorIndices.includes(randomIndex))?this._errorIndices.push(randomIndex) : null;
		})
	}

	/**
		 * renvoie la string permettant d'afficher la colonne.
		 * @returns {string} - le titre et les informations de la colonne.
		 */
	toString(){
		let myString = this._title + "\n";
		this._dataList.map((v) => {
			myString += v + "\n";
		});
		return myString;
	}
}  

/*******************************
 * fonctions pour les string
 ********************************/
//décale d'une lettre dans l'alphabet
const modMoveLetter = (maColonne, randomIndex) => {
	return maColonne._dataList[randomIndex].replace(/[a-zA-Z]/g, (char) => String.fromCharCode(((char.charCodeAt(0) - (char < 'a' ? 65 : 97) + 5) % 26) + (char < 'a' ? 65 : 97)));
}

//Inverse le nom
const modInverseName = (maColonne, randomIndex) => {
	return maColonne._dataList[randomIndex].split('').reverse().join('');
}

//Convertit en caractères ascii
const modToAscii = (maColonne, randomIndex) => {
	return maColonne._dataList[randomIndex].split('').map(char => char.charCodeAt(0));
}

//Tronque le mot apres le deuxième caractère
const modTrunkAt2 = (maColonne, randomIndex) => {
	return maColonne._dataList[randomIndex].slice(0, 3);
}

//Répète le mot une deuxième fois
const modRepeat = (maColonne, randomIndex) => {
	return maColonne._dataList[randomIndex].repeat(2);
}

// ajout d'un chiffre a la fin du mot
const modAddNb = (maColonne, randomIndex) => {
	return maColonne._dataList[randomIndex] + Math.floor(Math.random() * 10);
}

//Tout le mot est passe en maj
const modToCap = (maColonne, randomIndex) => {
	return 	maColonne._dataList[randomIndex].toUpperCase();
}

//passage des majuscules en minuscule
const modAllLow = (maColonne, randomIndex) => {
	return 	maColonne._dataList[randomIndex].toLowerCase();
}

//ajout de lettres a la fin
const modAddLetters = (maColonne, randomIndex) => {
	return 	maColonne._dataList[randomIndex] + "yz";
}

/*******************************
 * fonctions pour les nombres
 ********************************/
//max d'un non signé sur 64 bits
const modToMax = (maColonne, randomIndex) => {
	return 18446744073709551615;
}

// Conversion du nombre en caractère ASCII
const modAscii = (maColonne, randomIndex) => {
	return String.fromCharCode(Math.floor(Math.random() * (122 - 58) + 58));
}

//ajout de la lettre o a la fin
const modAddO = (maColonne, randomIndex) => {
	return 	maColonne._dataList[randomIndex]+"o";
}

//ajout de deux virgules
const modAddComma = (maColonne, randomIndex) => {
	return 	maColonne._dataList[randomIndex].toLocaleString('de-DE').replace(',', ',,') + (maColonne._dataList[randomIndex] < 1000 ? ',,' : '');
}

//Passe au negatif
const modToNegativ = (maColonne, randomIndex) => {
	return 	-maColonne._dataList[randomIndex];
}

const modNaN = (maColonne, randomIndex) => {
	return "NaN";
}

/*******************************
 * fonctions pour les nombres et les string
 ********************************/

//Nom vide
const modToEmpty = (maColonne, randomIndex) => {
	return "";
}

//Ajoute des + entre chaque caractère
const modAddPlus = (maColonne, randomIndex) => {
	return	maColonne._dataList[randomIndex].toString().split('').join('+'); 
}

const applyRandomModificationStr = (column, randomIndex) => {
	// Liste des fonctions disponibles
	//retournent une string
	const modifications = [
	  modMoveLetter,
	  modInverseName,
	  modToAscii,
	  modTrunkAt2,
	  modRepeat,
	  modAddPlus,
	  modAddNb,
	  modToCap,
	  modToEmpty,
	  modAllLow,
	  modAddLetters
	];

	// Choix aléatoire et appel d'une fonction
	const randFunc = Math.floor(Math.random() * modifications.length);
	return modifications[randFunc](column, randomIndex);
}

const addErrorsString = (column) => {
	column.setErrors = (nbErrors)=>{
		Array(nbErrors).fill(0).map(()=>{
			let randomIndex = Math.floor(Math.random()*column._dataList.length);  //Choix d'une donnée de la liste à corrompre
			if(!column._errorIndices.includes(randomIndex)){
				column._dataList[randomIndex] = applyRandomModificationStr(column, randomIndex); 
				column._errorIndices.push(randomIndex);
			}
		});
	}
	column.setErrors(column._nbErrors);
	
	return column;
};

const applyRandomModificationNb = (column, randomIndex) => {
	// Liste des fonctions disponibles
	//retournent une ligne pour la colonne
	const modifications = [
	  modToMax,
	  modAscii,
	  modAddO,
	  modAddPlus,
	  modAddComma,
	  modToEmpty,
	  modToNegativ,
	  modNaN
	];

	// Choix aléatoire et appel d'une fonction
	const randFunc = Math.floor(Math.random() * modifications.length);
	return modifications[randFunc](column, randomIndex);
}

const addErrorsNumber = (column) => {
	column.setErrors = (nbErrors)=>{
		Array(nbErrors).fill(0).map(()=>{
			let randomIndex = Math.floor(Math.random()*column._dataList.length);  //Choix d'une donnée de la liste à corrompre
			if(!column._errorIndices.includes(randomIndex)){
				column._dataList[randomIndex] = applyRandomModificationNb(column, randomIndex); 
				column._errorIndices.push(randomIndex);
			}
		})
	}
	column.setErrors(column._nbErrors);
	
	return column;
};

const createProba = (size)=>{ //Nombres entre 10 et 100
	let maColonne = new Column(size); //creation d'un objet colonne
	//remplissage de la colonne
	maColonne._dataList = maColonne._dataList.map(() => {
		return Math.random()*(100-10)+10;
	});
	//insertion d'erreurs
	maColonne.setErrors(maColonne._nbErrors);
	return maColonne;
}

const createSocMedias = (size)=>{//Reseaux sociaux
	let maColonne = new Column(size); //creation d'un objet colonne
	maColonne._title = "Reseau social";
	//remplissage de la colonne
	maColonne._dataList = maColonne._dataList.map(() => {
		return socialNetworks[Math.floor(Math.random() * socialNetworks.length)];
	})
	//insertion d'erreurs
	maColonne.setErrors = (nbErrors)=>{
		Array(nbErrors).fill(0).map(()=>{
			let randomIndex = Math.floor(Math.random()*maColonne._dataList.length);  //Choix d'une donnée de la liste à corrompre
			maColonne._dataList[randomIndex] = "Unstagramme" ;//nom inexistant
			(!maColonne._errorIndices.includes(randomIndex))?maColonne._errorIndices.push(randomIndex) : null;
		})
	}
	maColonne.setErrors(maColonne._nbErrors);
	return maColonne;
}

const createYears = (size)=>{//Anee entre 1800 et 2024
	let maColonne = new Column(size); //creation d'un objet colonne
	maColonne._title = "Année";
	//remplissage de la colonne
	maColonne._dataList = maColonne._dataList.map(() => {
		return Math.floor(Math.random() * (2025 - 1800) + 1800);
	})
	//insertion d'erreurs
	return addErrorsNumber(maColonne);
}

const createNaturals = (size)=>{//Entier naturel entre 0 et 200
	let maColonne = new Column(size); //creation d'un objet colonne
	maColonne._title = "Nombre d'occurrences";
	//remplissage de la colonne
	maColonne._dataList = maColonne._dataList.map(() => {
		return Math.floor(Math.random() * (200 - 0));
	})
	//insertion d'erreurs
	return addErrorsNumber(maColonne);
}

const createCountries = (size)=>{//Pays
	let maColonne = new Column(size); //creation d'un objet colonne
	maColonne._title = "Pays";
	//remplissage de la colonne
	maColonne._dataList = maColonne._dataList.map(() => {
		return countries[Math.floor(Math.random() * countries.length)];
	})
	//insertion d'erreurs
	return addErrorsString (maColonne);
}

const createCities = (size)=>{//grandes villes
	let maColonne = new Column(size); //creation d'un objet colonne
	maColonne._title = "Villes";
	//remplissage de la colonne
	maColonne._dataList = maColonne._dataList.map(() => {
		return cities[Math.floor(Math.random() * cities.length)];
	})
	//insertion d'erreurs
	return addErrorsString (maColonne);
}

const createNames = (size)=>{//Prenoms H/F/M
	let maColonne = new Column(size); //creation d'un objet colonne
	maColonne._title = "Noms";
	//remplissage de la colonne
	maColonne._dataList = maColonne._dataList.map(() => {
		return names[Math.floor(Math.random() * names.length)];
	})
	//insertion d'erreurs
	return addErrorsString (maColonne);
}

const createVegetables = (size)=>{//legumes
	let maColonne = new Column(size); //creation d'un objet colonne
	maColonne._title = "Légumes";
	//remplissage de la colonne
	maColonne._dataList = maColonne._dataList.map(() => {
		return vegetables[Math.floor(Math.random() * vegetables.length)];
	})
	//insertion d'erreurs
	return addErrorsString (maColonne);
}


const createSports = (size)=>{//sports de tous types
	let maColonne = new Column(size); //creation d'un objet colonne
	maColonne._title = "Sports";
	//remplissage de la colonne
	maColonne._dataList = maColonne._dataList.map(() => {
		return sports[Math.floor(Math.random() * sports.length)];
	})
	//insertion d'erreurs
	return addErrorsString (maColonne);
}


const createClimates = (size)=>{//climats
	let maColonne = new Column(size); //creation d'un objet colonne
	maColonne._title = "Climat";
	//remplissage de la colonne
	maColonne._dataList = maColonne._dataList.map(() => {
		return climates[Math.floor(Math.random() * climates.length)];
	})
	//insertion d'erreurs
	return addErrorsString (maColonne);
}

const createCoulors = (size)=>{//couleurs
	let maColonne = new Column(size); //creation d'un objet colonne
	maColonne._title = "Couleur";
	//remplissage de la colonne
	maColonne._dataList = maColonne._dataList.map(() => {
		return colors[Math.floor(Math.random() * colors.length)];
	})
	//insertion d'erreurs
	return addErrorsString (maColonne);
}

const createCost = (size)=>{//Cout moyen floattant précis a une decimale entre 1 et 300
	let maColonne = new Column(size); //creation d'un objet colonne
	maColonne._title = "Coût moyen";
	//remplissage de la colonne
	maColonne._dataList = maColonne._dataList.map(() => {
		return parseFloat((Math.random() * (300 - 1)+1).toFixed(2));
	})
	//insertion d'erreurs
	return addErrorsNumber(maColonne);
}

const createLifeExpectancy = (size)=>{//Esperance de vie entre 3 et 80 ans
	let maColonne = new Column(size); //creation d'un objet colonne
	maColonne._title = "Esperance de vie (années)";
	//remplissage de la colonne
	maColonne._dataList = maColonne._dataList.map(() => {
		return Math.floor(Math.random() * (80 - 3) + 3);
	})
	//insertion d'erreurs
	return addErrorsNumber(maColonne);
}

const createJobs = (size)=>{//Metiers
	let maColonne = new Column(size); //creation d'un objet colonne
	maColonne._title = "Métier";
	//remplissage de la colonne
	maColonne._dataList = maColonne._dataList.map(() => {
		return jobs[Math.floor(Math.random() * jobs.length)];
	})
	//insertion d'erreurs
	return addErrorsString (maColonne);
}

const createAnimals = (size)=>{//Animaux
	let maColonne = new Column(size); //creation d'un objet colonne
	maColonne._title = "Animal";
	//remplissage de la colonne
	maColonne._dataList = maColonne._dataList.map(() => {
		return animals[Math.floor(Math.random() * animals.length)];
	})
	//insertion d'erreurs
	return addErrorsString (maColonne);
}

const createMusics = (size)=>{//Genres de musiques
	let maColonne = new Column(size); //creation d'un objet colonne
	maColonne._title = "Genre musical";
	//remplissage de la colonne
	maColonne._dataList = maColonne._dataList.map(() => {
		return music[Math.floor(Math.random() * music.length)];
	})
	//insertion d'erreurs
	return addErrorsString (maColonne);
}


const createMonths = (size)=>{//Mois de l'annee
	let maColonne = new Column(size); //creation d'un objet colonne
	maColonne._title = "Mois";
	//remplissage de la colonne
	maColonne._dataList = maColonne._dataList.map(() => {
		return months[Math.floor(Math.random() * months.length)];
	})
	//insertion d'erreurs
	return addErrorsString (maColonne);
}