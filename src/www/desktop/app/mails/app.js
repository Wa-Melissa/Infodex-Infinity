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
    _bigTitle = "Résultats de recherche";
    _nbRows;
  
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
      this._nbRows =  Math.floor(Math.random() * (nbRowsMax - nbRowsMin + 1)) + nbRowsMin;
      
  
      //détermine le type de chaque colonne, la crée et l'ajoute à la liste
      this._columnsList = Array(nbCols).fill(0).map(() => {
        let randomIndex = Math.floor(Math.random() * settings.columnCreators.length); //determine un index aléatoire 
        let creator = settings.columnCreators[randomIndex];
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
      let monHtml = "<table>";
      
      //Affichage du titre du tableau
      monHtml += "\n\t<caption align=\"TOP\">" + this._bigTitle + "</caption>\n\t<thead>\n\t\t<tr>";
      
      //Affichage du titre de chaque colonnes
      this._columnsList.map((v) => {
        monHtml += "\n\t\t\t<th scope=\"col\">" + v._title + "</th>";
      });
      monHtml += "\n\t\t</tr>\n\t</thead>\n\t<tbody>\n\t\t<tr>";

      //Affichage du contenu de toutes les lignes
      Array(this._nbRows).fill(0).map((_,i) => { //Pour chaque ligne du tab
        monHtml += "\n\t\t<tr>";
        this._columnsList.map((v) => { //Pour chaque colonne
          monHtml += "\n\t\t\t<td>" + v._dataList[i] + "</td>";//On affiche la valeur de la colone
        });
        monHtml += "\n\t\t</tr>";
      });

      //fermeture
      monHtml += "\n\t\t</tr>\n\t</tbody>\n</table>";
      document.getElementById("maDiv").innerHTML = monHtml;
      return monHtml;
    }
  }


document.getElementById("inspect-btn").addEventListener("click", async(event) => {
    let dataset = new Dataset();
    dataset.toTab();  
});