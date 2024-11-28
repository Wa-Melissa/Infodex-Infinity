class sessionHandler {
	constructor(key) {
		this.innerKey = key;
	}
	get v() {
		return JSON.parse(sessionStorage.getItem(this.innerKey));
	}
	set v(val) {
		sessionStorage.setItem(this.innerKey, JSON.stringify(val));
	} 
}

class storageHandler {
	constructor(key) {
		this.innerKey = key;
	}
	get v() {
		return JSON.parse(localStorage.getItem(this.innerKey));
	}
	set v(val) {
		localStorage.setItem(this.innerKey, JSON.stringify(val));
	} 	
}

//session Variable Handler
const sessionDbTotalCells = new sessionHandler("db_total_rows");
const sessionDbCorruptedCells = new sessionHandler("db_corrupted_rows");
const sessionDifficulty = new sessionHandler("difficulty");
const sessionEmails = new sessionHandler("emails");
const storageMaxScore = new storageHandler("maxScore");
const sessionScore = new sessionHandler("score");

const goToPage = (url) => {
	document.location.href = url;
}


const fadeOutBody = (url = null) => {
	let opacity = 1;
	const body = document.body;
	const fadeOutInterval = setInterval(() => {
		if (opacity <= 0.01) {
			clearInterval(fadeOutInterval);
			if (url != null) setTimeout(() => goToPage(url), 1000)
		}
		body.style.opacity = opacity;
		opacity -= 0.05;
	}, 25);
}

const initGameSession = (difficulty  = 1) => {
	sessionDifficulty.v = difficulty;
	sessionDbCorruptedCells.v = 1;
	sessionDbTotalCells.v = 50;
	sessionScore.v = 20;
	sessionEmails.v = [];
}

const endGameSession = (success) => {
	if (success && sessionScore.v > storageMaxScore.v) storageMaxScore.v = sessionScore.v;
	goToPage("../gameover/" + (success ? "page2.html?success=true" : "page.html"));
}


const createDOMReferences = (request) => {
	let result = new Object;
	Object.entries(request).map(([k, v]) => {
		if (v.startsWith("#")) {
			result[k] = document.getElementById(v.slice(1));
		} else if (v.startsWith(".")) {
			result[k] = Array.prototype.slice.call(document.getElementsByClassName(v.slice(1)));
		} else if (v.startsWith("*")) {
			result[k] = document.querySelector(v.slice(1));
		} else if (v.startsWith("-")) {
			result[k] = () => document.getElementById(v.slice(1));
		} else {
			throw new Error("Failed to get DOM reference: " + v + " is not a valid identifier.");
		}
	})
	Object.freeze(result);
	return result;
}