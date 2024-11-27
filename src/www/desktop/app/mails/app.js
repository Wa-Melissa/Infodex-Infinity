const DOM = createDOMReferences({
    messageList : "#message-list",
    contenumail : "#contenu-mail",
    boitereception : "#boite-reception",
    btnlu : ".btn-lu",
    corbeille: "#corbeille"
});

// # id, . class , - classe dynamique (qui peut ne pas exister quand on créer le DOM)
// Récupérer le dernier mail séléctionné
let lastSelectedLi = null;
let activeBox = "inbox"; //savoir où on est 
let emails = sessionEmails.v || [];
DOM.boitereception.classList.add('active');

DOM.boitereception.addEventListener("click", () => switchFolder("inbox"));
DOM.corbeille.addEventListener("click", () => switchFolder("trash"));

function afficherMail(mail, li) {

    const nameContainer = document.createElement('div');
    nameContainer.style.display = 'flex';
    nameContainer.style.alignItems = 'center';
    
     // Ajoute le bouton et le nom au conteneur
     nameContainer.appendChild(btnLu);
     if(mail.lu) nameContainer = `${mail.nom} <br> <em>${mail.objet}</em>`;
     else nameContainer = `<strong>${mail.nom}<br> <em>${mail.objet}</em></strong>`;
 
     // Ajoute le conteneur à l'élément li
     li.innerHTML = ''; // Efface le contenu existant
     li.appendChild(nameContainer);
 
     // Ajoute l'objet et la date
     const contentElement = document.createElement('div');
     if (mail.lu) contentElement.innerHTML = `<em>${mail.objet}</em>`;
     else contentElement.innerHTML = `<strong><em>${mail.objet}</em></strong>`;
 
     contentElement.innerHTML += `<span class="w3-right-align" style="float: right; width: auto;">${mail.date}</span>`;
 
     // Ajoute le contenu à l'élément li
     li.appendChild(contentElement);
 }

    // Ajoute le bouton pour marquer comme non lu
    const btnLu = document.createElement('div');
    btnLu.className = 'btn-lu';
    btnLu.addEventListener('click', (event) => {
        event.stopPropagation(); // pour pas que le mail s'ouvre en même temps
        if (mail.lu) {
            mail.lu = false;
        } else {
            mail.lu = true;
        }
        afficherMail(mail, li);
        let index = emails.findIndex(item => item.id === mail.id);
        if (index !== -1) {
            emails[index] = mail;
            sessionEmails.v = emails;
        }
    });



function afficherMail(mail, li) {
    // Crée un conteneur pour le nom et le bouton
    const nameContainer = document.createElement('div');
    nameContainer.style.display = 'flex';
    nameContainer.style.alignItems = 'center';

    // Ajoute le bouton pour marquer comme non lu
    const btnLu = document.createElement('div');
    btnLu.className = 'btn-lu';
    btnLu.style.marginRight = '10px'; // Ajoute une marge à droite pour espacer le bouton du nom
    btnLu.addEventListener('click', (event) => {
        event.stopPropagation(); // pour pas que le mail s'ouvre en même temps
        mail.lu = false;
        afficherMail(mail, li);
        let index = emails.findIndex(item => item.id === mail.id);
        if (index !== -1) {
            emails[index] = mail;
            sessionEmails.v = emails;
        }
    });

    // Ajoute le nom de l'expéditeur
    const nameElement = document.createElement('span');
    if (mail.lu) {
        nameElement.innerHTML = `${mail.nom}`;
    } else {
        nameElement.innerHTML = `<strong>${mail.nom}</strong>`;
    }

    // Ajoute le bouton et le nom au conteneur
    nameContainer.appendChild(btnLu);
    nameContainer.appendChild(nameElement);

    // Ajoute le conteneur à l'élément li
    li.innerHTML = ''; // Efface le contenu existant
    li.appendChild(nameContainer);

    // Ajoute l'objet et la date
    const contentElement = document.createElement('div');
    if (mail.lu) {
        contentElement.innerHTML = `<em>${mail.objet}</em>`;
    } else {
        contentElement.innerHTML = `<strong><em>${mail.objet}</em></strong>`;
    }
    contentElement.innerHTML += `<span class="w3-right-align" style="float: right; width: auto;">${mail.date}</span>`;

    // Ajoute le contenu à l'élément li
    li.appendChild(contentElement);
}

/* V0 Test du début

// Colonne du milieu
function afficherMessages() {
    
    // Génère 5 premiers messsages (test) --> à changer car de façon random
    mails.slice(0, 5).forEach(mail => { // on copie les 5 premiers elements dans un tableau que l'on reparcours --> à changer of course
        const li = document.createElement('li');
        li.style.borderBottom = "1px solid lightgray";
        li.style.cursor = "pointer"; 

        afficherMail(mail, li);
        // Ajouter un event pour afficher le contenu du message quand on clique sur le msg
        li.addEventListener('click', () => afficherContenuMail(mail, li));
        
        DOM.messageList.appendChild(li);
    });
}*/

function afficherMessages() {
    
    emails.forEach(mail => {
        const li = document.createElement('li');
        li.style.borderBottom = "1px solid lightgray";
        li.style.cursor = "pointer";

        afficherMail(mail, li);

        li.addEventListener('click', () => afficherContenuMail(mail, li));
        DOM.messageList.appendChild(li);
    });
    
}

// Colonne à droite
function afficherContenuMail(mail, li) {
    if (lastSelectedLi !== null) {
        lastSelectedLi.style.backgroundColor = ""; // Remet la couleur d'origine
    }
    // met la couleur sur le mail séléctionné
    li.style.backgroundColor = "#e0f7fa"; 
    lastSelectedLi = li;

    mail.lu = true;
    afficherMail(mail, li);
    li.style.backgroundColor = "#e0f7fa";
    
    
    const index = emails.findIndex(item => item.id === mail.id);  //un mail = un od
    if (index !== -1) {
        emails[index] = mail;  // Met à jour l'email dans le tableau
        sessionEmails.v = emails;  // Sauvegarde dans sessionStorage
    }

    //contenue à droite du mail séléctionné
    DOM.contenumail.innerHTML = `
        <h2>${mail.objet}</h2>
        <p><strong>Destinataire : </strong>${mail.destinataire}</p>
        <p>${mail.contenu}</p>
    `;
    
}

function switchFolder(dossier) {
    activeBox = dossier;
    if (dossier === "trash") {
        DOM.messageList.innerHTML = ''; // Vide la liste des messages
        DOM.contenumail.innerHTML = ''; // Vide le contenu du mail
        DOM.boitereception.classList.remove('active');
        DOM.corbeille.classList.add('active');
    } else {
        DOM.boitereception.classList.add('active');
        DOM.corbeille.classList.remove('active');
        afficherMessages();
    }
}



function melangerTableau(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}


function recupererEmailsAleatoires() {
    if (emails.length === 0) {  
       
        let emailsFromSource = mails; 
        melangerTableau(emailsFromSource); 
        
        let nbEmail;
        // Prendre les 5 premiers emails mélangés
        switch (sessionDifficulty.v) {
			case 1:
				nbEmail = 15;
				break;
			case 2:
				nbEmail = 25;
				break;
			case 3:
				nbEmail = 35;
				break;
			case 4:
				nbEmail = 50;
				break;
			default:
				nbEmail = 15;
		}
        emails = emailsFromSource.slice(0, nbEmail);
        
        // Sauvegarder ces emails dans sessionStorage
        sessionEmails.v = emails;
    }
    // Afficher les emails dans la liste
    afficherMessages();
}


recupererEmailsAleatoires();

/*  
TODO
 - bouton lu/non lu 
 - mettre en forme (à droite et milieu)
 - add metttre dans la corbeille
 - add gris
 - mail du Z généré automatique au début
 - mail où on est obligée d'ouvrir le mail du Z sinon peut pas
 - add les données de mélissa
*/



