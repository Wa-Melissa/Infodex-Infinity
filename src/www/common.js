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


const sessionDbTotalCells = new sessionHandler("db_total_rows");
const sessionDbCorruptedCells = new sessionHandler("db_corrupted_rows");
const sessionDifficulty = new sessionHandler("difficulty");
const sessionEmails = new sessionHandler("emails");
const sessionLastOpenedEmail = new sessionHandler("last_open_email");
const sessionSatisfaction = new sessionHandler("satisfaction");
const sessionSkill = new sessionHandler("skill");
const sessionTimePassed = new sessionHandler("time_passed");
const sessionEventsPassed = new sessionHandler("events_passed");
const sessionEmailsDelete = new sessionHandler("emails_detele");
const sessionDesktopAppExitLocked = new sessionHandler("desktop_app_exit_locked");

/**
 * Redirects main EIC to a Page.
 *
 * @param {number} a - Le premier nombre à additionner.
 * @param {number} b - Le deuxième nombre à additionner.
 * @returns {number} La somme des deux nombres.
 */
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
	sessionSatisfaction.v = 50;
	sessionSkill.v = 10;
	sessionEmails.v = [];
	sessionTimePassed.v = 0; //en heures
	sessionEventsPassed.v = []; //titres et dates des sessions
	sessionEmailsDelete.v = [];
	sessionLastOpenedEmail.v = -1;
	sessionDesktopAppExitLocked.v = false;
}

const endGameSession = (success) => {
	goToPage("../gameover/" + (success ? "page2.html?success=true" : "page.html"));
}


const createDOMReferences = (request) => {
	let result = new Object;
	Object.entries(request).map(([k, v]) => {
		if (v.startsWith("#")) {
			result[k] = document.getElementById(v.slice(1));
		} else if (v.startsWith(".")) {
			result[k] = Array.prototype.slice.call(document.getElementsByClassName(v.slice(1)));
		} else if (v.startsWith("/")) {
			result[k] = () => Array.prototype.slice.call(document.getElementsByClassName(v.slice(1)));
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

const broadcastUpdateAppName = (name) => {
	const bc = new BroadcastChannel("update_app_title");
	bc.postMessage(name);
	bc.close();
}