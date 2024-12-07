const DOM = createDOMReferences({
    messageList : "#message-list",
    contenumail : "#contenu-mail",
    boitereception : "#boite-reception",
    btnlu : ".btn-lu",
    corbeille: "#corbeille",
    countmail : "#countmail"
});

broadcastUpdateAppName("JaiMail - Boite de réception");

// # id, . class , - classe dynamique (qui peut ne pas exister quand on créer le DOM)
// Récupérer le dernier mail séléctionné
let lastSelectedLi = null;
let activeBox = "inbox"; //savoir où on est 
let emails = sessionEmails.v;
let emailsDelete = sessionEmailsDelete.v;
DOM.boitereception.classList.add('active');

DOM.boitereception.addEventListener("click", () => switchFolder("inbox"));
DOM.corbeille.addEventListener("click", () => switchFolder("trash"));



const afficherMail = (mail, li) => {
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

const afficherMessages = () => {
    
    emails.map(mail => {
        const li = document.createElement('li');
        li.style.borderBottom = "1px solid lightgray";
        li.style.cursor = "pointer";

        afficherMail(mail, li);

        li.addEventListener('click', () => afficherContenuMail(mail, li));
        DOM.messageList.appendChild(li);
    });
    
}

// Colonne à droite
const afficherContenuMail = (mail, li) => {
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
    <div style="margin: 25px 50px 50px 50px; font-size: 17px;">
    <h2 style="color: #00796b; font-size: 25px; font-weight: bold; margin-bottom: 20px;"><i class="fas fa-user" style = "margin-right :15px;"></i>${mail.objet}</h2>
    <div id="trash" class="w3-hover-light-grey w3-round-large" style="position: absolute; top: 0; right: 0; padding: 10px; cursor: pointer; margin : 5px 5px 0px 0px">
        <i class="fas fa-trash" style="color: #ff0000; font-size: 25px;"></i>
    </div>

        <p style="margin: 5px 0; color: #555;"><strong>Expéditeur : </strong>${mail.expediteur}</p>
        <p style="margin: 5px 0; color: #555;"><strong>Destinataire : </strong>${mail.destinataire}</p>
    </div>
   
    <div id="inspect-btn" style="margin-top: 15px; color: #333; line-height: 1.6; margin : 35px; font-size:17px;">
        ${mail.contenu}<br><br>
        <button style="cursor:pointer;">${mail.piecesJointes}</button>
    </div>
    
    
    `;


    const trashIcon = document.getElementById("trash");
    trashIcon.addEventListener("click", () => {
        supprimerMail(mail);
    });

    mettreAJourCompteurNonLus();

    
}

const switchFolder = (dossier) => {
    activeBox = dossier;
    if (dossier === "trash") {
        broadcastUpdateAppName("JaiMail - Corbeille");
        DOM.messageList.innerHTML = ''; // Vide la liste des messages
        DOM.contenumail.innerHTML = ''; // Vide le contenu du mail
        DOM.contenumail.innerHTML = `
        <div class ="w3-center">
        <h2>Contenu de l'email</h2>
        <p>Veuillez sélectionner un email pour afficher son contenu.</p>`; // Remet le texte par défaut
        DOM.boitereception.classList.remove('active'); // Pour mettre le fond en gris selon où on est
        DOM.corbeille.classList.add('active'); 
        afficherMessagesDelete();
    } else {
        broadcastUpdateAppName("JaiMail - Boite de réception");
        DOM.messageList.innerHTML = ''; // Vide la liste des messages
        DOM.contenumail.innerHTML = ''; // Vide le contenu du mail
        DOM.contenumail.innerHTML = `
        <div class ="w3-center">
        <h2>Contenu de l'email</h2>
        <p>Veuillez sélectionner un email pour afficher son contenu.</p>`; // Remet le texte par défaut
        DOM.boitereception.classList.add('active');
        DOM.corbeille.classList.remove('active');
        afficherMessages();
    }
}



const melangerTableau = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}


const recupererEmailsAleatoires = () => {
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
            if (mailsRestants.length + 1> nbEmail) break; // on arrêtes on a assez d'emails
        }

        emails.push(...mailsRestants);
        // sauvegarde ces emails dans sessionStorage
        sessionEmails.v = emails;
    }
    // affiche les emails dans la liste
    afficherMessages();
}


const mettreAJourCompteurNonLus = () => {
    let nonLus = 0; 

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

const supprimerMail = (mail) => {
    
    const index = emails.findIndex(item => item.id === mail.id); // on cherche l'inde du mail que l'on veut supp
    if (index !== -1) {
        // on ajoute le mail à la liste des emails supp
        
        emailsDelete.push(emails[index]);
        emails.splice(index, 1);
        sessionEmails.v = emails;
        sessionEmailsDelete.v = emailsDelete;
        DOM.messageList.innerHTML = '';
        DOM.contenumail.innerHTML = `
        <div class ="w3-center">
        <h2>Contenu de l'email</h2>
        <p>Veuillez sélectionner un email pour afficher son contenu.</p>`; 

        // Met à jour l'affichage
        afficherMessages();
        mettreAJourCompteurNonLus();
        

        // // Réinitialise le contenu affiché (si on supprime un email sélectionné)
        // if (lastSelectedLi && lastSelectedLi.dataset.id === mail.id) {
        //     DOM.contenumail.innerHTML = `
        //     <div class="w3-center">
        //         <h2>Contenu de l'email</h2>
        //         <p>Veuillez sélectionner un email pour afficher son contenu.</p>
        //     </div>`;
        //     lastSelectedLi = null;
        // }
    }
};


// Colonne à droite
const afficherContenuMailDelete = (mail, li) => {
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
    <div style="margin: 25px 50px 50px 50px; font-size: 17px;">
    <h2 style="color: #00796b; font-size: 25px; font-weight: bold; margin-bottom: 20px;"><i class="fas fa-user" style = "margin-right :15px;"></i>${mail.objet}</h2>
        <p style="margin: 5px 0; color: #555;"><strong>Expéditeur : </strong>${mail.expediteur}</p>
        <p style="margin: 5px 0; color: #555;"><strong>Destinataire : </strong>${mail.destinataire}</p>
    </div>
   
    <div id="inspect-btn" style="margin-top: 15px; color: #333; line-height: 1.6; margin : 35px; font-size:17px;">
        ${mail.contenu}<br><br>
    </div>
    `;

    const trash = document.getElementById("trash");
    trash.addEventListener("click", () => {
        //ajouter maybe un pop up de confirmation
        supprimerMail(mail);
    });

    mettreAJourCompteurNonLus();

}



const afficherMessagesDelete = () => {
    emailsDelete.map(mail => {
        const li = document.createElement('li');
        li.style.borderBottom = "1px solid lightgray";
        li.style.cursor = "pointer";

        afficherMail(mail, li);

        li.addEventListener('click', () => afficherContenuMailDelete(mail, li));
        DOM.messageList.appendChild(li);
    });
    
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



