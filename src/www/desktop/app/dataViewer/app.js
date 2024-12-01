const DOM = createDOMReferences({
	tab_container: "#maDiv",
	inspect_button: "#inspect-btn",
	accept_button: "#selectionEnd-btn",
	my_table: "-myTable",
	cells: "/cell",
	unselect_button: "#unselect-btn",
});

broadcastUpdateAppName("DataViewer");	

//param de gestion du jeu
let settings = {
	maxErrors: 0.17, // maximum d'erreurs (en %)
	minErrors: 0.1,
	minCols: 3, //Le nb min de colonnes dans le dataset
	maxCols: 8, //au maximum la length de columnCreators
	columnCreators: [createAnnees,createNaturels,createPays,createProba,createVilles,createReseauSoc, createNoms, createLegumes, createSports, createClimats, createCouleurs, createCout, createEsperance, createMetiers, createAnimaux, createMusiques, createUniversites], //La liste des différents créateurs de colonne
}

class Dataset{
	_columnCreators;
	_columnsList;
	_bigTitle = "Résultats de recherche";
	_nbRows;

	constructor(){
		this._columnCreators = settings.columnCreators.slice();
		//détermine le nombre de colonnes
		settings.minCols = (settings.minCols < 1) ? 1 : settings.minCols;
		settings.maxCols = (settings.minCols > settings.maxCols) ? settings.minCols : settings.maxCols;
		let nbCols = Math.floor(Math.random() * (settings.maxCols - settings.minCols + 1)) + settings.minCols;


		//determiner le nombre de rows en fonction de la difficulté fixée 
		let nbRowsMin, nbRowsMax;
		switch (sessionDifficulty.v) {
			case 1:
				nbRowsMin = 5, nbRowsMax = 10;
				break;
			case 2:
				nbRowsMin = 10, nbRowsMax = 20;
				break;
			case 3:
				nbRowsMin = 50, nbRowsMax = 100;
				break;
			case 4:
				nbRowsMin = 500, nbRowsMax = 1000;
				break;
			default:
				nbRowsMin = 5, nbRowsMax = 200;
		}
		this._nbRows =  Math.floor(Math.random() * (nbRowsMax - nbRowsMin + 1)) + nbRowsMin;
		

		//détermine le type de chaque colonne, la crée et l'ajoute à la liste (toutes différentes)
		this._columnsList = Array(nbCols).fill(0).map(() => {
			let randomIndex = Math.floor(Math.random() * this._columnCreators.length); //determine un index aléatoire 
			let creator = this._columnCreators.splice(randomIndex, 1)[0]; //Récupère la colonne a cet index et la retire pour éviter de l'avoir deux fois
			let column = creator(this._nbRows); // Créer la colonne
			return column;
		});

	}

	/**
		 * renvoie la string permettant d'afficher toutes les colonnes .
		 * @returns {string} - le titre et les informations de chaque colonne.
		 */
	toString(){
		let myString = "";
		myString += this._bigTitle + "\n";
		this._columnsList.map((v) => {
			myString += v.toString() + "\n";
		});
		return myString;
	}

	//Met le dataset dans un tableau html intégré a une div (id="maDiv")
	toTab(){
		let tableClass = "class=\"w3-table w3-striped w3-bordered w3-table-all w3-hoverable w3-card-4\"";//Les classes pour la presentation esthetique
		let tableStyle = "style=\"border-top:none;\"";
		let monHtml = "<table "+tableClass+tableStyle+" id=\"myTable\" >";

		//Affichage du titre du tableau
		monHtml += "\n\t<caption style=\"margin:0;\" class=\"w3-panel w3-pink\" align=\"TOP\"><b>" + this._bigTitle + "</b></caption>\n\t<thead>\n\t\t<tr class=\"w3-black\">";
		
		//Affichage du titre de chaque colonnes
		this._columnsList.map((v) => {
			monHtml += "\n\t\t\t<th scope=\"col\">" + v._title + "</th>";
		});
		monHtml += "\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>";

		//Affichage du contenu de toutes les lignes
		Array(this._nbRows).fill(0).map((_,i) => { //Pour chaque ligne du tab
			monHtml += "\n\t\t<tr>";
			this._columnsList.map((v) => { //Pour chaque colonne
				monHtml += '\n\t\t\t<td class="cell">' + v._dataList[i] + "</td>";//On affiche la valeur de la colone
			});
			monHtml += "\n\t\t</tr>";
		});

		//fermeture
		monHtml += "\n\t\t</tr>\n\t</tbody>\n</table>";
		DOM.tab_container.innerHTML = monHtml;
		
	}
}

DOM.inspect_button.addEventListener("click", async(event) => {
	let dataset = new Dataset();
	dataset.toTab();

	let selectionList = [];
	selectionManagement(selectionList);
	selectionEnd(selectionList, dataset);
});


const selectionManagement = (selectionList) => {
	const table =  DOM.my_table();
	//se déclenche quand l'utilisateur clique
	table.onclick = (event) => {
		if (event.target.tagName === "TD") {
			// Changer le style
			event.target.classList.toggle("w3-pink");

			// Obtenir l'index de la ligne et de la colonne
			const rowIndex = event.target.parentNode.rowIndex; // index de la ligne
			const colIndex = event.target.cellIndex; // index de la colonne
			const coord = [rowIndex, colIndex];


			// Vérification si la coordonnée existe déjà dans selectionList
			const index = selectionList.findIndex(item => item[0] === rowIndex && item[1] === colIndex);
			//mise a jour de la liste des selections
			if(index === -1){
				selectionList.push(coord);
			}
			else{
				selectionList.splice(index,1);
			}
		}
	};
};

//Permet de deselectionner tout le tableau
DOM.unselect_button.onclick = () => {
	const  cells = DOM.cells();
	cells.forEach(cellule => {
		if(cellule.classList.contains("w3-pink")){
			cellule.dispatchEvent(new Event('click'));
		}
	});
};
 
//Compte les erreurs trouvées et non trouvées une fois la selection validée
const selectionEnd = (selectionList, dataset) => {
	DOM.accept_button.onclick = async (event) => {
		let nbFound = 0;
		let nbErr = 0;
		let currentColIndex = -1 ;
		let errorIndices = [] ;
		selectionList.sort((a, b) => a[1] - b[1]); //On trie d'abord la liste pour avoir les colonnes dans l'ordre
		selectionList.map((v)=>{
			if(v[1] != currentColIndex){ //Si on a change de colonne, on fait les maj necessaires
				while(currentColIndex != v[1]){
					currentColIndex ++;
					let currentCol= dataset._columnsList[currentColIndex];
					errorIndices = currentCol._errorIndices ; //on recupere la liste des erreurs de cette colonne
					nbErr += errorIndices.length ; //On compte le nombre d'erreurs dans la col
				}
			}
			//Puis on compare cette liste avec la liste des cellules selectionnees
			if(errorIndices.includes(v[0]-2)){
				nbFound ++;
			}
			else{
				//!!!!!
				//Diminuer la satisfaction (pour pénaliser le joueur si il selectionne tout quand ce n'est pas nécéssaire)
			}
		});
		if(currentColIndex < dataset._columnsList.length -1){ //On ajoute les erreurs des dernières colonnes si elles n'ont pas été comptées
			while(currentColIndex < dataset._columnsList.length -1){
				currentColIndex ++;
				let currentCol= dataset._columnsList[currentColIndex];
				errorIndices = currentCol._errorIndices ;
				nbErr += errorIndices.length ;
			}
		}
		
		alert("nombre d'erreurs trouvées: "+nbFound+"/"+nbErr+"---"+selectionList.length);

		if(selectionList.length > 0){//Si le joueur avait selectionné des erreurs
			if (await Swal.fire({
				title: "Voulez vous corriger vous-même les données ?",
				showDenyButton: true,
				showCancelButton: true,
				confirmButtonText: 'Corriger et intégrer les données',
				denyButtonText: `Refuser les données pour correction par le chercheur`,
				cancelButtonText: 'annuler'
			}).isConfirmed) {
				let nbCorrupt = nbErr - nbFound;
				addToBase(nbCorrupt,dataset);
			}else{
				//!!!!!
				//Diminuer la satisfaction
			}
		}
		else{
			let nbCorrupt = nbErr - nbFound;
			addToBase(nbCorrupt,dataset);
		}
	};
};


const addToBase = (nbCorrupt, dataset) => {
	sessionDbCorruptedCells.v += nbCorrupt;
	sessionDbTotalCells.v += dataset._columnsList.length * dataset._nbRows;

}