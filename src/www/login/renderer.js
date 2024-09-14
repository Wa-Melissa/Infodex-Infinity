const DOM = {
    difficulty_submit: document.getElementById("difficulty-submit"),
    difficulty_select: document.getElementById("difficulty-select"),
    difficulty_select_logo: document.getElementById("difficulty-submit-logo")
}
Object.freeze(DOM);

node.maximizeWindow();

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
        fadeOutBody("../../index.html")
    }, 2000)
})