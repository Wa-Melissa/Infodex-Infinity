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

DOM.logout_btn.addEventListener("click", async (event) => {
	const result = await Swal.fire({
		title: "Etes vous certain de vouloir quitter la partie ?",
		showCancelButton: true,
		confirmButtonText: "Quitter",
		cancelButtonText: "Annuler",
		icon: "warning",
		confirmButtonColor: "#d33",
	})
	if (result.isConfirmed) {
		let opacity = 0;
		DOM.black_fader.style.display = "block";
		DOM.black_fader.style.opacity = opacity;
		const fadeOutInterval = setInterval(() => {
			if (opacity >= 1) {
				clearInterval(fadeOutInterval);
				setTimeout(async () => {
					if (await node.isDebug()) return goToPage("../login/page2.html") ;
					goToPage("../login/page.html")
				}, 1000);
			}
			DOM.black_fader.style.opacity = opacity;
			opacity += 0.03;
		}, 25);
	}
});


const closeApp = () => {
	DOM.app_iframe.src = "blank.html";
	DOM.app_container.style.display = "none";
	document.title = "Infodex Infinity - Desktop"
	DOM.app_name.innerHTML = "";
}
DOM.app_close_btn.addEventListener("click", closeApp);

const loadApp = async (appName) => {
	DOM.app_iframe.src = "app/" + appName + "/app.html";
	DOM.app_container.style.display = "block";
};

const reloadApp = () => {
	let oldSrc = DOM.app_iframe.src;
	DOM.app_iframe.src = "blank.html";
	DOM.app_iframe.src = oldSrc;
}

DOM.desktop_icons.map((e) => {
	e.addEventListener("click", () => {
		loadApp(e.getAttribute("appname"));
	})
});

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


window.addEventListener("storage", (event) => {
	if (event.key != sessionDbTotalCells.innerKey) return;
	if ((sessionDbCorruptedCells.v / sessionDbTotalCells.v) < 0.05) return;
	endGameSession(false);
})
window.addEventListener("storage", (event) => {
	if (event.key != sessionSatisfaction.innerKey) return;
	if (sessionSatisfaction.v > 0) return;
	endGameSession(false);
})
window.addEventListener("storage", (event) => {
	if (event.key != sessionSatisfaction.innerKey && event.key != sessionSkill.innerKey) return;
	if (sessionSatisfaction.v <= 80 || sessionSkill.v <= 80) return;
	endGameSession(true);
})


const updateClock = () => {
	DOM.clock.innerHTML = `<b>Jour ${Math.floor(sessionTimePassed.v / 8) + 1}</b> (${8 - (sessionTimePassed.v % 8)} heure${(8 - (sessionTimePassed.v % 8) > 1) ? "s" : ""} restante${(8 - (sessionTimePassed.v % 8) > 1) ? "s" : ""})`;
}
updateClock();
window.addEventListener("storage", (event) => {
	if (event.key != sessionTimePassed.innerKey) return;
	updateClock();
	
	if (Math.floor(event.oldValue / 8) != Math.floor(event.newValue / 8)) Swal.fire({
		position: "top-end",
		title: "Nouvelle journée",
		text:"Vous passez à une nouvelle journée de travail !",
		showConfirmButton: false,
		icon: "info",
		toast: true,
		timer: 4000,
		timerProgressBar: true,
	});
})

const broadCastAppTitle = new BroadcastChannel("update_app_title");
broadCastAppTitle.onmessage = (event) => {
	DOM.app_name.innerHTML = event.data;
	document.title = "Infodex Infinity - " + event.data;
};
