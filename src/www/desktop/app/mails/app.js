class Column {
    _dataList ; // Attribut contenant une liste de données générées aléatoirement
    _title = "Probabilités(en %)\n"; //exemple de titre
    _errorIndices = [];
    _nbErrors;
  
    /**
     * Constructeur de la classe Column.
     * Initialise la colonne en remplissant la liste de données
     * @param {number} size -longeur du dataset
     */
    constructor(size) {
      this._dataList = Array(size).fill(0);
      this._nbErrors = Math.floor(Math.random() * (settings.maxErrors * size - settings.minErrors * size) + settings.minErrors * size);
  
    }
  
    /**
       * Méthode pourinsérer un certain nombre d'erreurs parmi les données(fonction non implémentée).
       * @param {number} nbErrors - Le nombre d'erreurs à définir, doit être < à la taille de la liste.
       */
    setErrors(nbErrors){
      Array(nbErrors).fill(0).map(()=>{
        let randomIndex = Math.floor(Math.random()*(this._dataList.length-1));  //Choix d'une donnée de la liste à corrompre
        this._dataList[randomIndex] *= 10 ; //décalage de la décimale
        (!this._errorIndices.includes(randomIndex))?this._errorIndices.push(randomIndex) : null;
      })
    }
  
    /**
       * renvoie la string permettant d'afficher la colonne.
       * @returns {string} - le titre et les informations de la colonne.
       */
    toString(){
      let myString = this._title + "\n";
      this._dataList.map((v) => {
        myString += v + "\n";
      });
      return myString;
    }
  }  
  
  
  const createProba = (size)=>{ //Nombres entre 10 et 100
    let maColonne = new Column(size); //creation d'un objet colonne
    //remplissage de la colonne
    maColonne._dataList = maColonne._dataList.map(() => {
      return Math.random()*(100-10)+10;
    });
    //insertion d'erreurs
    maColonne.setErrors(maColonne._nbErrors);
    return maColonne;
  }
  
  const createAnnee = (size)=>{//Anee entre 1800 et 2024
    let maColonne = new Column(size); //creation d'un objet colonne
    maColonne._title = "Année";
    //remplissage de la colonne
    maColonne._dataList = maColonne._dataList.map(() => {
      return Math.floor(Math.random() * (2025 - 1800) + 1800);
    })
    //insertion d'erreurs
    maColonne.setErrors = (nbErrors)=>{
      Array(nbErrors).fill(0).map(()=>{
        let randomIndex = Math.floor(Math.random()*maColonne._dataList.length);  //Choix d'une donnée de la liste à corrompre
        maColonne._dataList[randomIndex] = maColonne._dataList[randomIndex].toLocaleString('de-DE'); //ajout d'une virgule
        (!maColonne._errorIndices.includes(randomIndex))?maColonne._errorIndices.push(randomIndex) : null;
      });
    }
    maColonne.setErrors(maColonne.nbErrors);
    return maColonne;
  }
  
  const createNaturel = (size)=>{//Anee entre 1800 et 2024
    let maColonne = new Column(size); //creation d'un objet colonne
    maColonne._title = "Nombre d'occurrences";
    //remplissage de la colonne
    maColonne._dataList = maColonne._dataList.map(() => {
      return Math.floor(Math.random() * (200 - 0));
    })
    //insertion d'erreurs
    maColonne.setErrors = (nbErrors)=>{
      Array(nbErrors).fill(0).map(()=>{
        let randomIndex = Math.floor(Math.random()*maColonne._dataList.length);  //Choix d'une donnée de la liste à corrompre
        if (!maColonne._errorIndices.includes(randomIndex)){//Pour éviter de repasser au positif
          maColonne._dataList[randomIndex] -= 2*(maColonne._dataList[randomIndex]); //passage au négatif
          maColonne._errorIndices.push(randomIndex);
        }
      })
    }
    maColonne.setErrors(maColonne._nbErrors);
    return maColonne;
  }
  
  const createPays = (size)=>{//Anee entre 1800 et 2024
    let maColonne = new Column(size); //creation d'un objet colonne
    maColonne._title = "Pays";
    //remplissage de la colonne
    maColonne._dataList = maColonne._dataList.map(() => {
      return countries[Math.floor(Math.random() * countries.length)];
    })
    //insertion d'erreurs
    maColonne.setErrors = (nbErrors)=>{
      Array(nbErrors).fill(0).map(()=>{
        let randomIndex = Math.floor(Math.random()*maColonne._dataList.length);  //Choix d'une donnée de la liste à corrompre
        maColonne._dataList[randomIndex] = maColonne._dataList[randomIndex]+"yz"; //ajout de lettres a la fin
        (!maColonne._errorIndices.includes(randomIndex))?maColonne._errorIndices.push(randomIndex) : null;
      })
    }
    maColonne.setErrors(maColonne._nbErrors);
    return maColonne;
  }
  
  
  //param de gestion du jeu
  let settings = {
    maxErrors: 0.5, // maximum d'erreurs (en %)
    minErrors: 0.1,
    columnCreators: [createAnnee,createNaturel,createPays,createProba], //La liste des différents créateurs de colonne
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
      switch (settings.difficulty) { //A CHANGER POUR LE VRAI NOM
        case "easy":
          nbRowsMin = 5, nbRowsMax = 10;
          break;
        case "medium":
          nbRowsMin = 10, nbRowsMax = 20;
          break;
        case "extreme":
          nbRowsMin = 50, nbRowsMax = 100;
          break;
        case "impossible":
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
  

document.getElementById("inspect-btn").addEventListener("click", (event) => {
    let dataset = new Dataset();
    alert(dataset.toString());  
});