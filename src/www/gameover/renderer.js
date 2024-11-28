const DOM = createDOMReferences({
	photo: "#photo",
    text: "#text",
});

let success_photos = ["ali_ayadi-content.jpeg","cedric_wemmert-content.jpg"];
let failure_photos = ["ali_ayadi-fache.png","cedric_wemmert-triste.png","mathieu_zimmermann-fache.png"];
//Actuellement chaque texte est associé à une photo spécifiquement
let success_text = ["Tu as fais un travail excellent, c'est bien.","Tu as vu, c'était pas si difficile !"];
let failure_text = ["Ça ne demandait pas la lune… et pourtant, tu t’es complètement planté !","Je t'ai surestimé.","Non mais c'est pas possible, tu as fait exploser la base ! C'est n'importe quoi."];

let success = document.location.href.endsWith("?success=true");

//On choisit une photo aléatoirement
if (success && document.location.sessionScore > 0){
    let randomIndex = Math.floor(Math.random() * success_photos.length);
    DOM.photo.src = success_photos[randomIndex];
    DOM.text.innerHTML = success_text[randomIndex];
    DOM.text.innerHTML += "<br>Tu as eu un score de " + sessionScore.v + ".";
}
else{
    let randomIndex = Math.floor(Math.random() * failure_photos.length);
    DOM.photo.src = failure_photos[randomIndex];
    DOM.text.innerHTML = failure_text[randomIndex];
}