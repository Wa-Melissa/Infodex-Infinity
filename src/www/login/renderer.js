const DOM = {
    difficulty_submit: document.getElementById("difficulty-submit"),
    difficulty_select: document.getElementById("difficulty-select")
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
    goto("../../index.html")
})