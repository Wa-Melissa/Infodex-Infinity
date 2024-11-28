const DOM = createDOMReferences({
	difficulty_submit: "#difficulty-submit",
	difficulty_select: "#difficulty-select",
	difficulty_select_logo: "#difficulty-submit-logo",
	difficulty_placeholder: "#difficulty-placeholder",
	shutdown: "#shutdown",
	black_fader: "#black-fader",
});


DOM.difficulty_submit.addEventListener("click", (e) => {
	if (DOM.difficulty_select.value == "") {
		Swal.fire({
			title: "Aucun niveau selectionné",
			text: "Vous devez selectionner un niveau pour continuer.",
			icon: "error"
		});
		return;
	}
	initGameSession(parseInt(DOM.difficulty_select.value));
	DOM.difficulty_select_logo.classList.remove("fa-right-to-bracket");
	DOM.difficulty_select_logo.classList.add("fa-circle-notch");
	DOM.difficulty_select_logo.classList.add("w3-spin");
	setTimeout(() => {
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
})

document.addEventListener('keydown', (event) => {
	if (event.code !== 'Escape') return;
	goToPage("page.html")
});

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

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
		event.preventDefault();
		if (DOM.difficulty_select.value == "") return;
        DOM.difficulty_submit.click();
    }
});