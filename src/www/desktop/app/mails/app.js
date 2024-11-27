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
let activeBox = "inbox";
let emails = sessionEmails.v || [];

DOM.boitereception.addEventListener("click", () => switchFolder("inbox"));
DOM.corbeille.addEventListener("click", () => switchFolder("trash"));

function afficherMail(mail, li) {
    
    // Change l'affichage selon si le mail est déjà lu ou pas
    if(mail.lu) {
        li.innerHTML = `${mail.nom} <br> <em>${mail.objet}</em>`;
    } else {
        li.innerHTML = `<strong>${mail.nom}<br> <em>${mail.objet}</em></strong>`;
    }

    // Affiche la date à droite
    li.innerHTML += `<span class="w3-right-align" style="float: right; witdh : auto">${mail.date}</span>`;
    
    // Ajoute le bouton pour marquer comme non lu
    const btnLu = document.createElement('div');
    btnLu.className = 'btn-lu';
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

    li.prepend(btnLu);
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
				nbEmail = 10;
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
				nbEmail = 8;
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
 - faire la fonction pour passser en mode lu non lu ? que ça change dynamiqueent psk là ça le fait pas
 - add le btn à gauche 
 - add le "boite de recepetion (1).."
 - add la date en coupant l'horraire  : faire deux catégories
*/