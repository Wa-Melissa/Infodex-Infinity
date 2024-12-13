const DOM = createDOMReferences({
	photo: "#photo",
    text: "#text",
});

const success_photos = ["ali_ayadi-content.jpeg","cedric_wemmert-content.jpg"]; // List of photos to show when winning
const failure_photos = ["ali_ayadi-fache.png","cedric_wemmert-triste.png","mathieu_zimmermann-fache.png"]; // List of photos to show when loosing
const success_text = ["Tu as fais un travail excellent, c'est bien.","Tu as vu, c'était pas si difficile !"]; // List of messages to show when winning 
const failure_text = ["Ça ne demandait pas la lune… et pourtant, tu t’es complètement planté !","Je t'ai surestimé.","Non mais c'est pas possible, tu as fait exploser la base ! C'est n'importe quoi."]; // List of messages to show when loosing 

const success = document.location.href.endsWith("?success=true"); // Test if the player arrived here by a winning

if (success){
    const randomIndex = Math.floor(Math.random() * success_photos.length);
    DOM.photo.src = success_photos[randomIndex]; //Get random photo
    DOM.text.innerHTML = success_text[randomIndex]; //Get random text
    DOM.text.innerHTML += "<br>Tu as atteint une satisfaction de " + Math.min(sessionSatisfaction.v,100) 
    + "% et les usagers ont atteint " + Math.min(sessionSatisfaction.v,100) + "% de compétences. "
    + "La base était corrompue à "+ ((sessionDbCorruptedCells.v / sessionDbTotalCells.v) * 100) + "%  ;) <br>"; //Generate and show message
}
else{
    const randomIndex = Math.floor(Math.random() * failure_photos.length);
    DOM.photo.src = failure_photos[randomIndex]; //Get random photo
    DOM.text.innerHTML = failure_text[randomIndex]; //Get random text
    DOM.text.innerHTML += "<br>Tu as été trop négligent.<br>";

}
