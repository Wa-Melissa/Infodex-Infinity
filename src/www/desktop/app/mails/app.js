const DOM = createDOMReferences({
    messageList : "#message-list",
    contenumail : "#contenu-mail",
    boitereception : "#boite-reception",
    btnlu : ".btn-lu",
    corbeille: "#corbeille",
    countmail : "#countmail"
});

// # id, . class , - classe dynamique (qui peut ne pas exister quand on créer le DOM)
// Récupérer le dernier mail séléctionné
let lastSelectedLi = null;
let activeBox = "inbox"; //savoir où on est 
let emails = sessionEmails.v;
DOM.boitereception.classList.add('active');

DOM.boitereception.addEventListener("click", () => switchFolder("inbox"));
DOM.corbeille.addEventListener("click", () => switchFolder("trash"));



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
        mail.lu = !mail.lu;
        afficherMail(mail, li);
        let index = emails.findIndex(item => item.id === mail.id);
        if (index !== -1) {
            emails[index] = mail;
            sessionEmails.v = emails;
        }
        mettreAJourCompteurNonLus();
    });

    // add le nom de l'expéditeur
    const nameElement = document.createElement('span');
    if (mail.lu) nameElement.innerHTML = `${mail.nom}`;
    else nameElement.innerHTML = `<strong>${mail.nom}</strong>`;

    //ajoute le bouton et le nom au conteneur
    nameContainer.appendChild(btnLu);
    nameContainer.appendChild(nameElement);

    // add le container à li
    li.innerHTML = ''; // efface le contenu existant
    li.appendChild(nameContainer);

    // Ajoute l'objet et la date
    const contentElement = document.createElement('div');
    if (mail.lu) contentElement.innerHTML = `<em>${mail.objet}</em>`;
    else contentElement.innerHTML = `<strong><em>${mail.objet}</em></strong>`;
    
    contentElement.innerHTML += `<span class="w3-right-align" style="float: right; width: auto;">${mail.date}</span>`;

    // on ajoute le contenu à l'élément li
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

    mettreAJourCompteurNonLus();

    
}

function switchFolder(dossier) {
    activeBox = dossier;
    if (dossier === "trash") {
        DOM.messageList.innerHTML = ''; // Vide la liste des messages
        DOM.contenumail.innerHTML = ''; // Vide le contenu du mail
        DOM.contenumail.innerHTML = `<h2>Contenu de l'email</h2>
        <p>Veuillez sélectionner un email pour afficher son contenu.</p>`; // Remet le texte par défaut
        DOM.boitereception.classList.remove('active'); // Pour mettre le fond en gris selon où on est
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
       
        let emailsFromSource = [...mails]; // on copie
        melangerTableau(emailsFromSource); 
        
        let nbEmail;

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

        // liste des mails qui restent sans doublons
        const mailsRestants = [];
        
        // ajoute les emails dans mailsrestants
        for (let i = 0; i < emailsFromSource.length; i++) {
            mailsRestants.push(emailsFromSource[i]);
            if (mailsRestants.length > nbEmail) break; // on arrêtes on a assez d'emails
        }

        emails.push(...mailsRestants);
        // sauvegarde ces emails dans sessionStorage
        sessionEmails.v = emails;
    }
    // affiche les emails dans la liste
    afficherMessages();
}


function mettreAJourCompteurNonLus() {
    let nonLus = -1; 

    // Parcourt tous les emails
    for (let i = 0; i < emails.length; i++) {
        if (!emails[i].lu) { 
            nonLus++;
        }
    }

    // Met à jour le compteur sur l'interface
    if (nonLus > 0) {
        DOM.countmail.textContent = nonLus; 
        DOM.countmail.style.display = "inline-block"; 
        DOM.boitereception.style.fontWeight = "bold";
        DOM.countmail.style.fontSize = "calc(90%)"; 
    } else {
        DOM.countmail.textContent = ""; 
        DOM.countmail.style.display = "none"; 
        DOM.boitereception.style.fontWeight = "normal";
    }
}


recupererEmailsAleatoires();
mettreAJourCompteurNonLus();

/*  
TODO
 - bouton lu/non lu  FAIT
 - mettre en forme (à droite et milieu) 
 - add metttre dans la corbeille
 - add gris FAIT
 - mail du Z généré automatique au début
 - mail où on est obligée d'ouvrir le mail du Z sinon peut pas
 - add les données de mélissa
*/



