const DOM = createDOMReferences({
	photo: "#photo",
});

let success_photos = ["ali_ayadi-content.jpeg","cedric_wemmert-content.png"];
let failure_photos = ["ali_ayadi-fache.png","cedric_wemmert-triste.png","matthieu_zimerman-fache.png"];

let success = document.location.href.endsWith("?success=true");

//On choisit une photo aléatoirement
if (success){
    let randomIndex = Math.floor(Math.random() * success_photos.length);
    DOM.photo.src = success_photos[randomIndex];
}
else{
    let randomIndex = Math.floor(Math.random() * failure_photos.length);
    DOM.photo.src = failure_photos[randomIndex];
}