const DOM = createDOMReferences({
	photo: "#photo",
});

let success_photos = ["ali_ayadi-content.jpeg","cedric_wemmert-content.png"];
let failure_photos = ["ali_ayadi-fache.png","cedric_wemmert-triste.png","matthieu_zimerman-fache.png"];

let success = false;

if (success){
    let randomIndex = Math.floor(Math.random() * success_photos.length); //determine un index aléatoire 
	let chosenPicture = success_photos[randomIndex];
   // DOM.photo.src = 
}