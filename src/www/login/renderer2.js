const DOM = {
    difficulty_submit: document.getElementById("difficulty-submit"),
    difficulty_select: document.getElementById("difficulty-select"),
    difficulty_select_logo: document.getElementById("difficulty-submit-logo"),
    shutdown: document.getElementById("shutdown"),
    black_fader: document.getElementById("black-fader"),
}
Object.freeze(DOM);

const difficulty = new sessionHandler("difficulty");

DOM.difficulty_submit.addEventListener("click", (e) => {
    if (DOM.difficulty_select.value == "") {
        Swal.fire({
            title: "Aucun niveau selectionné",
            text: "Vous devez selectionner un niveau pour continuer.",
            icon: "error"
        });
        return;
    }
    difficulty.v = DOM.difficulty_select.value;
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
    fadeOutBody("page3.html");   
})