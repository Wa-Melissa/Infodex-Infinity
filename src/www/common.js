/**
 * @module www_common
 */

/**
 * Class for handling sessions using sessionStorage.
 */
class sessionHandler {
	innerKey = null;
    /**
     * Creates an instance of sessionHandler.
     * @param {string} key - The key used to store data in sessionStorage.
     */
    constructor(key) {
        this.innerKey = key;
    }

    /**
     * Gets the value associated with the key in sessionStorage.
     * @returns {Object|null} The stored value, or null if no value is found.
     */
    get v() {
        return JSON.parse(sessionStorage.getItem(this.innerKey));
    }

    /**
     * Sets the value associated with the key in sessionStorage.
     * @param {Object} val - The value to store in sessionStorage.
     */
    set v(val) {
        sessionStorage.setItem(this.innerKey, JSON.stringify(val));
    }

    /**
     * Creates a Event Handler (using the window storage event)
     * @param {Function} fn - The function to be executed on value change.
     */
	attachEvent(fn) {
		let innerKey = structuredClone(this.innerKey);
		window.addEventListener("storage", (event) => {
			if (event.key != innerKey) return;
			fn(event);
		})
	}
}

/**
 * Class for handling local storage using localStorage.
 */
class storageHandler {
    /**
     * Creates an instance of storageHandler.
     * @param {string} key - The key used to store data in localStorage.
     */
    constructor(key) {
        this.innerKey = key;
    }

    /**
     * Gets the value associated with the key in localStorage.
     * @returns {Object|null} The stored value, or null if no value is found.
     */
    get v() {
        return JSON.parse(localStorage.getItem(this.innerKey));
    }

    /**
     * Sets the value associated with the key in localStorage.
     * @param {Object} val - The value to store in localStorage.
     */
    set v(val) {
        localStorage.setItem(this.innerKey, JSON.stringify(val));
    }

	/**
     * Creates a Event Handler (using the window storage event)
     * @param {Function} fn - The function to be executed on value change.
     */
	attachEvent(fn) {
		let innerKey = structuredClone(this.innerKey);
		window.addEventListener("storage", (event) => {
			if (event.key != innerKey) return;
			fn(event);
		})
	}
}


// Declare all session variables
const sessionDbTotalCells = new sessionHandler("b28ce115-fdc7-4d0c-85b1-6a70b505faaa");
const sessionDbCorruptedCells = new sessionHandler("95c7e455-2c49-4b00-94f5-df4e26182077");
const sessionDifficulty = new sessionHandler("dbded7ff-d434-4078-bc7b-52812829d2a2");
const sessionEmails = new sessionHandler("de078f50-f8e9-4f7e-bfef-b64c76f2690a");
const sessionLastOpenedEmail = new sessionHandler("0aa6a888-5a7f-49e2-9eac-7aced441784b");
const sessionSatisfaction = new sessionHandler("bf22a77b-cfc6-447b-b37d-820ccb6170fc");
const sessionSkill = new sessionHandler("7b4c4658-3be5-4572-9043-35c7871c6fe2");
const sessionTimePassed = new sessionHandler("74355bfa-e654-4d28-a211-790ab8904db8");
const sessionEventsPassed = new sessionHandler("55ad2e1b-b8fa-4717-8fb5-0d4402ad96aa");
const sessionEmailsDelete = new sessionHandler("f3160c6e-ebe4-4d40-b1ce-83f7d2e1d906");
const sessionDesktopAppExitLocked = new sessionHandler("01ffd302-9435-4700-9d15-818a6cdbc3fc");
const sesssionLastTimePassed = new sessionHandler("0bfb3eb1-9b4e-454b-8596-7d6f847ec822");
const sessionOpenFirstTime = new sessionHandler("0ae8dc62-58fb-4fd7-9d9c-7a5b23663446");

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
	sessionSatisfaction.v = (() => {
		switch (difficulty){
			case 1: return 50;
			case 2: return 40;
			case 3: return 25;
			default: return 15;
		}
	})();
	sessionSkill.v = 10;
	sessionEmails.v = [];
	sessionTimePassed.v = 0; //hours
	sessionEventsPassed.v = [];
	sessionEmailsDelete.v = [];
	sessionLastOpenedEmail.v = -1; // -1 is an instable value
	sessionDesktopAppExitLocked.v = false;
	sesssionLastTimePassed.v = 0;
	sessionOpenFirstTime.v = true;
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

/**
 * Converts a floating-point number to a string
 * and keeps only the digits before the second digit
 * after the decimal point.
 *
 * @param {number} num - The floating-point number to convert.
 * @returns {string} - The formatted string.
 */
const convertFloatToStringTwoDecimal = (num) => {
    // Convert the floating-point number to a string
    let numStr = num.toString();
  
    // Find the position of the decimal point
    let [integerPart, decimalPart] = numStr.split('.');

    // Keep only the first and second digit after the decimal point
    let newDecimalPart = decimalPart ? decimalPart.slice(0, 2) : '';
    let result = newDecimalPart ? `${integerPart}.${newDecimalPart}` : integerPart;

    return result;
}
