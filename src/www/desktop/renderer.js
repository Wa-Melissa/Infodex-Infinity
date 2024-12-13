const DOM = createDOMReferences({
	logout_btn: "#logout-btn",
	app_iframe: "#app-iframe",
	app_container: "#app-container",
	app_close_btn: "#app-close-btn",
	app_name: "#app-name",
	desktop_icons:  ".desktop-icon",
	black_fader: "#black-fader",
	clock: "#clock",
});


// Attach a click event listener to the logout button
DOM.logout_btn.addEventListener("click", async (event) => {
	// Show a confirmation dialog
	const result = await Swal.fire({
		title: "Êtes-vous certain de vouloir quitter la partie ?",
		showCancelButton: true,
		confirmButtonText: "Quitter",
		cancelButtonText: "Annuler",
		icon: "warning",
		confirmButtonColor: "#d33",
	})

	if (result.isConfirmed) {// Check if the confirm button was clicked
		let opacity = 0;
		DOM.black_fader.style.display = "block";
		DOM.black_fader.style.opacity = opacity;
		const fadeOutInterval = setInterval(() => { //Fade the body
			if (opacity >= 1) {
				clearInterval(fadeOutInterval);
				setTimeout(async () => {
					//redirect to login page
					if (await node.isDebug()) return goToPage("../login/page2.html") ;
					goToPage("../login/page.html")
				}, 1000);
			}
			DOM.black_fader.style.opacity = opacity;
			opacity += 0.03;
		}, 25);
	}
});

/**
 * Closes the desktop application, optionally forcing the closure.
 *
 * This function checks if the application exit is locked. If it is locked 
 * and the force parameter is not set to true, it displays a SweetAlert 
 * notification indicating that the app cannot be closed.
 *
 * @param {boolean} [force=false] - Indicates whether to force close the application.
 * If set to true, the application will close regardless of the exit lock state.
 */
const closeApp = (force = false) => {
	if (sessionDesktopAppExitLocked.v && !force) {
		DOM.app_iframe.contentWindow.swalExitLocked();
		return;
	}
	DOM.app_iframe.src = "blank.html";
	DOM.app_container.style.display = "none";
	document.title = "Infodex Infinity - Desktop"
	DOM.app_name.innerHTML = "";
}
DOM.app_close_btn.addEventListener("click", ()=> (closeApp()));

/**
 * Loads a specified desktop application.
 *
 * This function sets the exit lock state to false and updates the iframe's
 * source to load the specified application. It also ensures that the application
 * container is displayed.
 *
 * @param {string} appName - The name of the application to be loaded. 
 * The corresponding HTML file should be located at "app/{appName}/app.html".
 */
const loadApp = async (appName) => {
	sessionDesktopAppExitLocked.v = false;
	DOM.app_iframe.src = "app/" + appName + "/app.html";
	DOM.app_container.style.display = "block";
};

/**
 * Reloads the desktop application currently displayed.
 *
 * This function temporarily sets the source to a blank page 
 * and then resets it to its original source, effectively reloading the application.
 */
const reloadApp = () => {
	let oldSrc = DOM.app_iframe.src;
	DOM.app_iframe.src = "blank.html";
	DOM.app_iframe.src = oldSrc;
}

// Attach click event listeners to each desktop icon
DOM.desktop_icons.map((e) => {
	e.addEventListener("click", () => {
		loadApp(e.getAttribute("appname")); //get app name from html element
	})
});

// Add an event listener for the window load event to fade from black to body content
window.addEventListener("load", async () => {
	let opacity = 1;
	const fadeOutInterval = setInterval(() => {
		if (opacity <= 0.01) {
			DOM.black_fader.style.display = "none";
			clearInterval(fadeOutInterval);
		}
		DOM.black_fader.style.opacity = opacity;
		opacity -= 0.03;
	}, 25);        
});

//handle debug shortcut
(async () => {
	if (!(await node.isDebug())) return;
	console.log("Debug shortcuts enabled.");
	document.addEventListener('keydown', (event) => {
		if (event.ctrlKey && event.key === 'r') {
			document.location.reload();
			return;
		}
		if (event.ctrlKey && event.key === 'm') {
			reloadApp();
			return;
		}
	});
})();


//React to session values changes
window.addEventListener("storage", (event) => { //Event to database corruption
	if (event.key != sessionDbTotalCells.innerKey) return;
	if ((sessionDbCorruptedCells.v / sessionDbTotalCells.v) < 0.05) return;
	endGameSession(false);
})
window.addEventListener("storage", (event) => { //Event to detect satisfaction drop
	if (event.key != sessionSatisfaction.innerKey) return;
	if (sessionSatisfaction.v > 0) return;
	endGameSession(false);
})
window.addEventListener("storage", (event) => { //Event to detect win
	if (event.key != sessionSatisfaction.innerKey && event.key != sessionSkill.innerKey) return;
	if (sessionSatisfaction.v <= 80 || sessionSkill.v <= 80) return;
	endGameSession(true);
})

window.addEventListener("storage", (event) => { //Event to detect new day
	if (event.key != sessionTimePassed.innerKey) return;
	updateClock();
	
	if (Math.floor(event.oldValue / 8) != Math.floor(event.newValue / 8)) Swal.fire({
		position: "top",
		title: "<b>Nouvelle journée</b>",
		text:"Vous passez à une nouvelle journée de travail !",
		showConfirmButton: false,
		icon: "info",
		toast: true,
		timer: 3000,
		timerProgressBar: true,
	});
})


/**
 * Updates the displayed clock information.
 *
 * This function calculates the current day and remaining hours in a session 
 * based on the total time passed. It updates the inner HTML of the clock 
 * element to show the current day and the remaining hours left in the current day.
 */
const updateClock = () => {
	DOM.clock.innerHTML = `<b>Jour ${Math.floor(sessionTimePassed.v / 8) + 1}</b> (${8 - (sessionTimePassed.v % 8)} heure${(8 - (sessionTimePassed.v % 8) > 1) ? "s" : ""} restante${(8 - (sessionTimePassed.v % 8) > 1) ? "s" : ""})`;
}
updateClock();

//Create broadCastChannels entry point
const broadCastAppTitle = new BroadcastChannel("update_app_title");
const broadCastBlackFade =  new BroadcastChannel("black_screen_fade");
const broadCastOpenApp =  new BroadcastChannel("open_app");

broadCastAppTitle.onmessage = (event) => { //Desktop app name change
	DOM.app_name.innerHTML = event.data;
	document.title = "Infodex Infinity - " + event.data;
};
broadCastOpenApp.onmessage = (event) => { //Open app from a broadcast channel request
	closeApp(true);
	setTimeout(() => {
		loadApp(event.data);		
	}, 100)

};

broadCastBlackFade.onmessage = (event) => { //Fade to black and angain to body content from broadcast channel request
	DOM.black_fader.style.display = "block";
	let opacity = 0;
	const fadeInInterval = setInterval(() => {
		if (opacity >= 1) {
			clearInterval(fadeInInterval);
			let opacity = 1;
			setTimeout(() => {
				const fadeOutInterval = setInterval(() => {
					if (opacity <= 0.01) {
						DOM.black_fader.style.display = "none";
						clearInterval(fadeOutInterval);
					}
					DOM.black_fader.style.opacity = opacity;
					opacity -= 0.03;
				}, 25);   
			}, 1500)
		}
		DOM.black_fader.style.opacity = opacity;
		opacity += 0.03;
	}, 25);    
}

setTimeout(() => { // wait 1sec
	//Show first message notification
	Swal.fire({
		position: "top",
		title: "<b>Nouveau message</b>",
		html: "<b>De:</b>\u00a0Mathieu\u00a0Zimmermann<br><b>Object</b>:\u00a0Bienvenue chez nous",
		showConfirmButton: false,
		icon: "warning",
		toast: true,
		timer: 6000,
		timerProgressBar: true,
	});
}, 1200)