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

// Declare all session variables
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
const sesssionLastTimePassed = new sessionHandler("last_time_passsed");

/**
 * Redirects caller EIC to a Page.
 *
 * @param {string} url - Page URL (relative or absolute)
 */
const goToPage = (url) => {
	document.location.href = url;
}


/**
 * Fade out caller EIC body and redirect to a Page (if url not null).
 *
 * @param {string} [url=null] - Page URL (relative or absolute)
 */
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

/**
 * Init a new Game session by setting default session values.
 *
 * @param {number} [difficulty=1] - Difficulty of the new game Session
 */
const initGameSession = (difficulty  = 1) => {
	sessionDifficulty.v = difficulty;
	sessionDbCorruptedCells.v = 1;
	sessionDbTotalCells.v = 50;
	sessionSatisfaction.v = 50;
	sessionSkill.v = 10;
	sessionEmails.v = [];
	sessionTimePassed.v = 0; //hours
	sessionEventsPassed.v = [];
	sessionEmailsDelete.v = [];
	sessionLastOpenedEmail.v = -1; // -1 is an instable value
	sessionDesktopAppExitLocked.v = false;
	sesssionLastTimePassed.v = 0;
}

/**
 * End a game Session (success or failure) and redirect to game over page
 *
 * @param {boolean} success - Success if true, failure
 */

const endGameSession = (success) => {
	goToPage("../gameover/" + (success ? "page2.html?success=true" : "page.html"));
}

/**
 * Creates DOM references from a request object.
 *
 * This function takes an object where each key corresponds to a reference name,
 * and each value is a string indicating the selector (ID, class, or other)
 * for the DOM reference. The references are then stored in a new object, 
 * which is frozen to prevent any modifications.
 *
 * @param {Object} request - An object containing selectors to create DOM references.
 * @param {string} request.k - A string representing a selector (ID, class, or other).
 * @returns {Object} An object containing references to the corresponding DOM elements.
 * @throws {Error} If a value in the request object is not a valid identifier.
 */
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

/**
 * Broadcasts an update to the application (NEIC) name using the Broadcast Channel API.
 *
 * This function creates a new BroadcastChannel and sends a message containing
 * the provided application name. After the message is sent, the channel is closed.
 *
 * @param {string} name - The new application name to broadcast.
 */
const broadcastUpdateAppName = (name) => {
	const bc = new BroadcastChannel("update_app_title");
	bc.postMessage(name);
	bc.close();
}