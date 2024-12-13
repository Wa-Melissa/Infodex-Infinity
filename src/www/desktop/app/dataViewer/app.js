const DOM = createDOMReferences({
	tab_container: "#maDiv",
	inspect_button: "#inspect-btn",
	accept_button: "#selectionEnd-btn",
	my_table: "-myTable",
	cells: "/cell",
	unselect_button: "#unselect-btn",
});

broadcastUpdateAppName("DataViewer");
const broadCastOpenApp = new BroadcastChannel("open_app");	

/**
 * Converts a percentage (0-100) to an error rate within a range.
 * Higher percentages give lower error rates.
 * @param {number} percentage - The percentage to convert.
 * @returns {number} - The error rate in [minRangeValue, maxRangeValue].
 */
const convertPercentageToErrorRate = (percentage) => {
    const minRangeValue = 0.155;
    const maxRangeValue = 0.17;
    
    // Calculer la valeur interpolée
    const result = maxRangeValue - ((percentage / 100) * (maxRangeValue - minRangeValue));
    return result;
}


let selectionList = new Array();

// Game management parameters
let settings = {
	maxErrors: convertPercentageToErrorRate(sessionSkill.v), // Max allowed errors (%)
	minErrors: 0.1, // Minimum error threshold
	minCols: 3, // Minimum number of dataset columns
	maxCols: 8, // Maximum number of dataset columns (<= columnCreator.size())
	columnCreators: [ // Functions to generate dataset columns
		createAnnees,createNaturels,createPays,createProba,
		createVilles,createReseauSoc, createNoms, createLegumes,
		createSports, createClimats, createCouleurs, createCout,
		createEsperance, createMetiers, createAnimaux, createMusiques,
		createMois
	],
	statisfactionChange: 0.5, // Satisfaction change per error
	skillsChange: 0.5, // Skill change per error
}

console.log(settings.maxErrors);

class Dataset{
	_columnCreators; //A copy of the columnCreators from the settings
	_columnsList; // Array that holds the generated columns for the dataset.
	_nbRows; // Total number of rows in the dataset (changes with the difficulty level)

	/**
	 * Build a column using the settings
	 */
	constructor(){
		// Copy the column creators from settings
		this._columnCreators = settings.columnCreators.slice();

		//Randomly determine the number of columns within the range [minCols, maxCols]
		settings.minCols = (settings.minCols < 1) ? 1 : settings.minCols;
		settings.maxCols = (settings.minCols > settings.maxCols) ? settings.minCols : settings.maxCols;
		let nbCols = Math.floor(Math.random() * (settings.maxCols - settings.minCols + 1)) + settings.minCols;

		// Randomly determine the number of rows based on the session difficulty
		let nbRowsMin, nbRowsMax;
		switch (sessionDifficulty.v) {
			case 1: // Beginner
				nbRowsMin = 10, nbRowsMax = 15;
				break;
			case 2: // Intermediate
				nbRowsMin = 20, nbRowsMax = 50;
				break;
			case 3: // Expert
				nbRowsMin = 70, nbRowsMax = 130;
				break;
			case 4: // Extreme
				nbRowsMin = 150, nbRowsMax = 300;
			default:
				nbRowsMin = 5, nbRowsMax = 200;
		}
		this._nbRows =  Math.floor(Math.random() * (nbRowsMax - nbRowsMin + 1)) + nbRowsMin;
		

		// Determine the type of each column, create it, and add it to the list
    	// All columns must be unique
		this._columnsList = Array(nbCols).fill(0).map(() => {
			let randomIndex = Math.floor(Math.random() * this._columnCreators.length); // Pick a random index from the available column creators 
			let creator = this._columnCreators.splice(randomIndex, 1)[0]; // Retrieve and remove the creator to avoid duplicates
			let column = creator(this._nbRows); // Use the creator to generate a column with the required number of rows
			return column;
		});

	}

	/**
	 * Converts the dataset into an HTML table and inserts it into a div with id="maDiv".
	 * The table is styled with various CSS classes for aesthetic presentation.
	 * 
	 * The HTML table structure with the following:
	 * 1. A header row displaying the column titles.
	 * 2. A body section where each row corresponds to the data in the dataset.
	 */
	toTab(){
		// Aesthetic classes for table styling
		let tableClass = "class=\"w3-table w3-striped w3-bordered w3-table-all w3-hoverable w3-card-4\"";//Les classes pour la presentation esthetique
		let tableStyle = "style=\"border-top:none;\"";
		// Initialize the table HTML string
		let monHtml = "<table "+tableClass+tableStyle+" id=\"myTable\" >";

		// Add the table header row with column titles
		monHtml += "\n\t<thead>\n\t\t<tr class=\"w3-black\">";
		this._columnsList.map((v) => {
			monHtml += "\n\t\t\t<th scope=\"col\">" + v._title + "</th>";
		});
		monHtml += "\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>";

		 // Populate the table body with data for each row
		Array(this._nbRows).fill(0).map((_,i) => { // Loop through each row
			monHtml += "\n\t\t<tr>";
			this._columnsList.map((v) => { // Loop through each column
				monHtml += '\n\t\t\t<td class="cell">' + v._dataList[i] + "</td>";//On affiche la valeur de la colone
			});
		monHtml += "\n\t\t</tr>";
		});

		 // Close the table structure
		monHtml += "\n\t\t</tr>\n\t</tbody>\n</table>";
		// Insertion
		DOM.tab_container.innerHTML = monHtml;
		
	}
}

/**
 * Manages the selection of table cells when clicked, updating the selection list and button text accordingly.
 * 
 * @param {Array} selectionList - The list that stores the coordinates of selected cells.
 */
const selectionManagement = (selectionList) => {
	const table =  DOM.my_table(); // Get the table element
	
	// Triggered when a user clicks on a table cell
	table.onclick = (event) => {
		if (event.target.tagName === "TD") { // Check if the clicked element is a table cell
			// Toggle the cell's style
			event.target.classList.toggle("w3-pink");

			// Get the row and column indexes of the clicked cell
			const rowIndex = event.target.parentNode.rowIndex; // Row index
			const colIndex = event.target.cellIndex; // Column index
			const coord = [rowIndex, colIndex];


			// Check if the coordinates are already in the selection list
			const index = selectionList.findIndex(item => item[0] === rowIndex && item[1] === colIndex);
            // Update the selection list
			if(index === -1){
				selectionList.push(coord);
			}
			else{
				selectionList.splice(index,1);
			}

			// Update the button text based on whether any cells are selected
			if(selectionList.length == 0)
				DOM.accept_button.innerHTML = "Tout ajouter à la base";
			else
				DOM.accept_button.innerHTML = "Corriger";
		}
	};
};

//Allow deselecting the entire table
DOM.unselect_button.onclick = () => {
	const  cells = DOM.cells();
	cells.forEach(cellule => {
		if(cellule.classList.contains("w3-pink")){
			cellule.classList.toggle("w3-pink");
		}
		
	});
	selectionList.splice(0, selectionList.length);
	DOM.accept_button.innerHTML = "Tout ajouter à la base";
};
 
/**
 * Counts the errors found and not found once the selection is validated.
 * This function is triggered when the user clicks the "correct the data" button. It compares the selected cells with error indices in the dataset.
 * It calculates the number of correct and incorrect errors and updates the satisfaction, skills, and time passed accordingly.
 * @param {Array} selectionList - The list of selected cells with their row and column indices.
 * @param {Dataset} dataset - The dataset containing the columns with errors.
 */
const selectionEnd = (selectionList, dataset) => {
	DOM.accept_button.onclick = async (event) => {
		let nbFound = 0;
		let nbErr = 0;
		let currentColIndex = -1 ;
		let errorIndices = [] ;

		// Sort the selection list by column index to handle columns in order
		selectionList.sort((a, b) => a[1] - b[1]);
		selectionList.map((v)=>{
			if(v[1] != currentColIndex){ // If we change column, update necessary values
				while(currentColIndex != v[1]){
					currentColIndex ++;
					let currentCol= dataset._columnsList[currentColIndex];
					errorIndices = currentCol._errorIndices ;  // Get the error indices of the current column
					nbErr += errorIndices.length ; // Count the errors in this column
				}
			}

			// Compare selected cells with the error indices
			if(errorIndices.includes(v[0]-2)){
				nbFound ++;
			}
			else{
				// False errors
				sessionSatisfaction.v -= settings.statisfactionChange; // Decrease satisfaction for incorrect selection
			}
		});

		// If the last column has not been counted, count its errors
		if(currentColIndex < dataset._columnsList.length -1){
			while(currentColIndex < dataset._columnsList.length -1){
				currentColIndex ++;
				let currentCol= dataset._columnsList[currentColIndex];
				errorIndices = currentCol._errorIndices ;
				nbErr += errorIndices.length ;
			}
		}
		
		//Debug and tests
		alert("nombre d'erreurs trouvées: "+nbFound+"/"+nbErr+"---"+selectionList.length);

		if(selectionList.length == 0){
			let nbCorrupt = nbErr - nbFound;
			addToBase(nbCorrupt,dataset);  // Add corrupt data to the base
			sessionTimePassed.v += 2; // Increase time passed
			return;
		}

		// Ask the user whether they want to correct the errors themselves or send them back
		let result = await Swal.fire({
			title: "Voulez-vous corriger vous-même les données sélectionnées ?",
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: 'Corriger les erreurs et intégrer les données dans la base',
			denyButtonText: `Renvoyer les données au chercheur pour correction`,
			cancelButtonText: 'Retour'
		});
		if(result.isConfirmed) {
			let nbCorrupt = nbErr - nbFound;
			addToBase(nbCorrupt,dataset); // Add the corrected data to the base
			sessionSatisfaction.v += settings.statisfactionChange * nbErr; // Increase satisfaction based on number of errors
			sessionTimePassed.v += 4;  // Increase time passed
		} else if(result.isDenied){
			// Decrease satisfaction for the found errors
			sessionSatisfaction.v -= settings.statisfactionChange * nbFound;
			 // Increase skills based on the number of errors found
			sessionSkill.v += settings.skillsChange * nbFound;
			sessionTimePassed.v += 2; // Increase time passed
		}
		// If the user cancels, do nothing
		broadCastOpenApp.postMessage("mails");
	};
};

/**
 * Updates the number of corrupted data cells and the total number of data cells in the dataset in two session variables
 * @param {number} nbCorrupt - The number of corrupted cells to add.
 * @param {Dataset} dataset - The dataset containing the columns and rows.
 */const addToBase = (nbCorrupt, dataset) => {
	sessionDbCorruptedCells.v += nbCorrupt;
	sessionDbTotalCells.v += dataset._columnsList.length * dataset._nbRows;
}

(async () => {
	let dataset = new Dataset(); //Create a new Dataset
	dataset.toTab(); //Convert into a table format

	selectionList.splice(0, selectionList.length); // Clear the current selection list
	
	selectionManagement(selectionList); // Manage the selection
	selectionEnd(selectionList, dataset); // Handles the end of the selection
})();

async function swalExitLocked() {
	let result = await Swal.fire({
		title: "Non sauvegardé",
		text: "Un document est en cours de modification. Si vous quittez l'application maintenant, le mail sera supprimé sans l'envoie d'une réponse au chercheur.",
		icon: "warning",
		showCancelButton: true,
		cancelButtonText: "Annuler",
		confirmButtonText: "Quitter quand même"
	});
	if (!result.isConfirmed) return;
	sessionEmailsDelete.v = [...sessionEmailsDelete.v, sessionEmails.v[sessionLastOpenedEmail.v]];
	sessionEmails.v = sessionEmails.v.toSpliced(sessionLastOpenedEmail.v, 1);
	sessionSatisfaction.v -= 5;
	broadCastOpenApp.postMessage("mails");
}