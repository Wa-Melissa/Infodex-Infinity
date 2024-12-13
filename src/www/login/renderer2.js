const DOM = createDOMReferences({
	difficulty_submit: "#difficulty-submit",
	difficulty_select: "#difficulty-select",
	difficulty_select_logo: "#difficulty-submit-logo",
	difficulty_placeholder: "#difficulty-placeholder",
	shutdown: "#shutdown",
	black_fader: "#black-fader",
});

// Add a click event listener to the difficulty submit button
DOM.difficulty_submit.addEventListener("click", (e) => {
	if (DOM.difficulty_select.value == "") { // Check if a difficulty level has been selected
		Swal.fire({
			title: "Aucun niveau selectionné",
			text: "Vous devez selectionner un niveau pour continuer.",
			icon: "error"
		});
		return;
	}
	initGameSession(parseInt(DOM.difficulty_select.value)); // init new game session

	//Update button to show loading logo
	DOM.difficulty_select_logo.classList.remove("fa-right-to-bracket");
	DOM.difficulty_select_logo.classList.add("fa-circle-notch");
	DOM.difficulty_select_logo.classList.add("w3-spin");
	setTimeout(() => { // Fade body
		let opacity = 0;
		DOM.black_fader.style.display = "block";
		DOM.black_fader.style.opacity = opacity;
		const fadeOutInterval = setInterval(() => {
			if (opacity >= 1) {
				clearInterval(fadeOutInterval);
				setTimeout(() => goToPage("../desktop/page.html"), 1000);
			}
			DOM.black_fader.style.opacity = opacity;
			opacity += 0.05;
		}, 25);
	}, 2000)
});

//Event: Go back to lock screen on escape key press
document.addEventListener('keydown', (event) => {
	if (event.code !== 'Escape') return;
	goToPage("page.html")
});

//Event: handle quit/shutdown button
DOM.shutdown.addEventListener("click", (e) => { 
		Swal.fire({
		title: "Êtes-vous sûr de vouloir quitter ?",
		showCancelButton: true,
		confirmButtonText: "Quitter",
		cancelButtonText: "Annuler",
		confirmButtonColor: "#d33",
	  }).then((result) => {
		if (result.isConfirmed) {
			fadeOutBody("page3.html");  
		} 
	  });
	}
	 
)

//Event: submit difficulty selection on enter key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
		event.preventDefault();
		if (DOM.difficulty_select.value == "") return;
        DOM.difficulty_submit.click();
    }
});