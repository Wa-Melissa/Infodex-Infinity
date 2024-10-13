    //param de gestion du jeu
  let settings = {
    maxErrors: 0.5, // maximum d'erreurs (en %)
    minErrors: 0.1,
    columnCreators: [createAnnees,createNaturels,createPays,createProba,createVilles,createReseauSoc, createNoms, createLegumes, createSports], //La liste des différents créateurs de colonne
    difficulty: "easy",
    minCols: 3, //Le nb min de colonnes dans le dataset
    maxCols: 5
   }

   class Dataset{
    _columnsList;
    _nbRows;
    _bigTitle = "Résultats de recherche";
  
    constructor(){
      //détermine le nombre de colonnes
      settings.minCols = (settings.minCols < 1) ? 1 : settings.minCols;
      settings.maxCols = (settings.minCols > settings.maxCols) ? settings.minCols : settings.maxCols;
      let nbCols = Math.floor(Math.random() * (settings.maxCols - settings.minCols + 1)) + settings.minCols;
  
  
      //determiner le nombre de rows en fonction de la difficulté fixée 
      // A METTRE HORS DE LA CLASSE EN PARAM ?
      let nbRowsMin, nbRowsMax;
      const difficulty = new sessionHandler("difficulty");
      switch (difficulty.v) { //A CHANGER POUR LE VRAI NOM
        case "1":
          nbRowsMin = 5, nbRowsMax = 10;
          break;
        case "2":
          nbRowsMin = 10, nbRowsMax = 20;
          break;
        case "3":
          nbRowsMin = 50, nbRowsMax = 100;
          break;
        case "4":
          nbRowsMin = 500, nbRowsMax = 1000;
          break;
        default:
          nbRowsMin = 5, nbRowsMax = 200;
      }
      let nbRows =  Math.floor(Math.random() * (nbRowsMax - nbRowsMin + 1)) + nbRowsMin;
      
  
      //détermine le type de chaque colonne, la crée et l'ajoute à la liste
      this._columnsList = Array(nbCols).fill(0).map(() => {
        let randomIndex = Math.floor(Math.random() * settings.columnCreators.length); //determine un index aléatoire 
        let creator = settings.columnCreators[randomIndex];
        let column = creator(nbRows); // Créer la colonne
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
  }
  

document.getElementById("inspect-btn").addEventListener("click", async(event) => {
    let dataset = new Dataset();
    alert(dataset.toString());  
});