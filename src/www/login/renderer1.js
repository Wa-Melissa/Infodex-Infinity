const DOM = createDOMReferences({
	clock: "#clock",
	black_fader: "#black-fader"
});


window.addEventListener("load", async () => {
	let opacity = 1;
	const fadeOutInterval = setInterval(() => { //Fade from black to body content
		if (opacity <= 0.01) {
			DOM.black_fader.style.display = "none";
			clearInterval(fadeOutInterval);
		}
		DOM.black_fader.style.opacity = opacity;
		opacity -= 0.03;
	}, 25);        
})

// Event click anywhere on the document
document.addEventListener('click', () => {
	goToPage("page2.html")
});

// Event press space key
document.addEventListener('keydown', (event) => {
	if (event.code !== 'Space') return;
	goToPage("page2.html")
});

/**
 * Updates the displayed current hour and minute.
 *
 * This function retrieves the current time, formats the minutes to ensure 
 * two-digit representation, and updates the inner text of the clock element 
 * to display the current hour and minute in the format "HH:MM".
 */
const updateHour = () => {
	const date = new Date();
	const hour = date.getHours();
	let min = date.getMinutes();
	if (min < 10) min = "0" + min;
	DOM.clock.innerText = hour + ":" + min;
}
updateHour();
setInterval(updateHour,1000);

// Detect debug mode to skip login page
(async () => {
	if (!(await node.isDebug())) return;
	initGameSession();
	goToPage("../desktop/page.html");
})();