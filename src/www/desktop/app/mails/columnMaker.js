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
  
  const createAnnees = (size)=>{//Anee entre 1800 et 2024
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
  
  const createNaturels = (size)=>{//Entier naturel entre 0 et 200
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
  
  const createPays = (size)=>{//Pays
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

  const createVilles = (size)=>{//grandes villes
    let maColonne = new Column(size); //creation d'un objet colonne
    maColonne._title = "Villes";
    //remplissage de la colonne
    maColonne._dataList = maColonne._dataList.map(() => {
      return cities[Math.floor(Math.random() * cities.length)];
    })
    //insertion d'erreurs
    maColonne.setErrors = (nbErrors)=>{
      Array(nbErrors).fill(0).map(()=>{
        let randomIndex = Math.floor(Math.random()*maColonne._dataList.length);  //Choix d'une donnée de la liste à corrompre
        maColonne._dataList[randomIndex] = maColonne._dataList[randomIndex].toLowerCase(); //passage des majuscules en minuscule
        (!maColonne._errorIndices.includes(randomIndex))?maColonne._errorIndices.push(randomIndex) : null;
      })
    }
    maColonne.setErrors(maColonne._nbErrors);
    return maColonne;
  }

  const createReseauSoc = (size)=>{//Reseaux sociaux
    let maColonne = new Column(size); //creation d'un objet colonne
    maColonne._title = "Reseau social";
    //remplissage de la colonne
    maColonne._dataList = maColonne._dataList.map(() => {
      return socialNetworks[Math.floor(Math.random() * socialNetworks.length)];
    })
    //insertion d'erreurs
    maColonne.setErrors = (nbErrors)=>{
      Array(nbErrors).fill(0).map(()=>{
        let randomIndex = Math.floor(Math.random()*maColonne._dataList.length);  //Choix d'une donnée de la liste à corrompre
        maColonne._dataList[randomIndex] = "Unstagramme" ;//nom inexistant
        (!maColonne._errorIndices.includes(randomIndex))?maColonne._errorIndices.push(randomIndex) : null;
      })
    }
    maColonne.setErrors(maColonne._nbErrors);
    return maColonne;
  }

  const createNoms = (size)=>{//Prenoms H/F/M
    let maColonne = new Column(size); //creation d'un objet colonne
    maColonne._title = "Noms";
    //remplissage de la colonne
    maColonne._dataList = maColonne._dataList.map(() => {
      return names[Math.floor(Math.random() * names.length)];
    })
    //insertion d'erreurs
    maColonne.setErrors = (nbErrors)=>{
      Array(nbErrors).fill(0).map(()=>{
        let randomIndex = Math.floor(Math.random()*maColonne._dataList.length);  //Choix d'une donnée de la liste à corrompre
        maColonne._dataList[randomIndex] = ""; //Nom vide
        (!maColonne._errorIndices.includes(randomIndex))?maColonne._errorIndices.push(randomIndex) : null;
      })
    }
    maColonne.setErrors(maColonne._nbErrors);
    return maColonne;
  }

  const createLegumes = (size)=>{//legumes
    let maColonne = new Column(size); //creation d'un objet colonne
    maColonne._title = "Légumes";
    //remplissage de la colonne
    maColonne._dataList = maColonne._dataList.map(() => {
      return vegetables[Math.floor(Math.random() * vegetables.length)];
    })
    //insertion d'erreurs
    maColonne.setErrors = (nbErrors)=>{
      Array(nbErrors).fill(0).map(()=>{
        let randomIndex = Math.floor(Math.random()*maColonne._dataList.length);  //Choix d'une donnée de la liste à corrompre
        maColonne._dataList[randomIndex] = maColonne._dataList[randomIndex].toUpperCase(); //Tout le mot est passe en maj
        (!maColonne._errorIndices.includes(randomIndex))?maColonne._errorIndices.push(randomIndex) : null;
      })
    }
    maColonne.setErrors(maColonne._nbErrors);
    return maColonne;
  }
  

  const createSports = (size)=>{//sports de tous types
    let maColonne = new Column(size); //creation d'un objet colonne
    maColonne._title = "Sports";
    //remplissage de la colonne
    maColonne._dataList = maColonne._dataList.map(() => {
      return sports[Math.floor(Math.random() * sports.length)];
    })
    //insertion d'erreurs
    maColonne.setErrors = (nbErrors)=>{
      Array(nbErrors).fill(0).map(()=>{
        let randomIndex = Math.floor(Math.random()*maColonne._dataList.length);  //Choix d'une donnée de la liste à corrompre
        maColonne._dataList[randomIndex] += Math.floor(Math.random() * 10); // ajout d'un chiffre a la fin du mot
        (!maColonne._errorIndices.includes(randomIndex))?maColonne._errorIndices.push(randomIndex) : null;
      })
    }
    maColonne.setErrors(maColonne._nbErrors);
    return maColonne;
  }
  