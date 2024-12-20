/**
 * @module www_desktop_app_mails
 */
const DOM = createDOMReferences({
    messageList : "#message-list",
    contenumail : "#contenu-mail",
    boitereception : "#boite-reception",
    btnlu : ".btn-lu",
    corbeille: "#corbeille",
    countmail : "#countmail",
    mailTemplate : "#mail-template",
    mailTemplateDelete : "#mail-template-delete"
});

broadcastUpdateAppName("JaiMail - Boite de réception");
const broadCastOpenApp= new BroadcastChannel("open_app");


let lastSelectedLi = null; // Retrieve the last selected email
let activeBox = "inbox"; // To know the current active folder
let emails = sessionEmails.v;
let emailsDelete = sessionEmailsDelete.v;
DOM.boitereception.classList.add('active');

 
DOM.boitereception.addEventListener("click", () => switchFolder("inbox"));
DOM.corbeille.addEventListener("click", () => switchFolder("trash"));


/**
 * Display an email inside the email list.
 * @param {Object} mail - The email object.
 * @param {HTMLElement} li - The list item element representing the email.
 */
const displayEmail = (mail, li) => {
    // Create a container for the sender's name and the "mark as unread" button
    const nameContainer = document.createElement('div');
    nameContainer.style.display = 'flex';
    nameContainer.style.alignItems = 'center';

    // Add the "mark as unread" button
    const btnRead = document.createElement('div');
    btnRead.className = 'btn-lu';
    btnRead.style.marginRight = '10px'; 
    btnRead.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the email from opening when clicking the button
        mail.lu = !mail.lu;
        displayEmail(mail, li);
        let index = emails.findIndex(item => item.id === mail.id);
        if (index !== -1) {
            emails[index] = mail;
            sessionEmails.v = emails;
        }
        updateUnreadCount();
    });

    // Add the sender's name
    const nameElement = document.createElement('span');
    if (mail.lu) nameElement.innerHTML = `${mail.nom}`;
    else nameElement.innerHTML = `<strong>${mail.nom}</strong>`;

    nameContainer.appendChild(btnRead);
    nameContainer.appendChild(nameElement);

    // Add the container to the list item
    li.innerHTML = ''; // Clear existing content
    li.appendChild(nameContainer);

    // Add the subject and date
    const contentContainer = document.createElement('div');
    contentContainer.style.display = 'flex';
    contentContainer.style.justifyContent = 'space-between';
    contentContainer.style.alignItems = 'center';

    let contentElement = document.createElement('div');

    if (mail.urgent && mail.lu) contentElement.innerHTML = `<span style="color:red;">[Urgent] </span><em>${mail.objet}</em>`;
    else if (!mail.urgent && mail.lu) contentElement.innerHTML = `<em>${mail.objet}</em>`;
    else if (mail.urgent && !mail.lu) contentElement.innerHTML = `<strong><span style="color:red;">[Urgent] </span><em>${mail.objet}</em></strong>`;
    else contentElement.innerHTML = `<strong><em>${mail.objet}</em></strong>`;
    

    const dateElement = document.createElement('span');
    dateElement.style.whiteSpace = 'nowrap'; 
    dateElement.innerHTML = `${mail.date}`;

    contentContainer.appendChild(contentElement);
    contentContainer.appendChild(dateElement);

    // Add the content container to the list item
    li.appendChild(contentContainer);
}



/**
 * Display the list of emails in the current folder.
 */
const displayMessages = () => {
    DOM.messageList.innerHTML = '';  // Clear the message list
    emails.forEach(mail => {
        const li = document.createElement('li');
        li.style.borderBottom = "1px solid lightgray";
        li.style.cursor = "pointer";

        displayEmail(mail, li);

        li.addEventListener('click', () => displayEmailContent(mail, li));
        DOM.messageList.appendChild(li);
    });
};


/**
 * Display the content of the selected email in the right panel.
 * @param {Object} mail - The email object.
 * @param {HTMLElement} li - The list item element representing the email.
 */
const displayEmailContent = (mail, li) => {
    if (lastSelectedLi !== null) {
        lastSelectedLi.style.backgroundColor = "";  // Reset the background color
    }
    // Highlight the selected email
    li.style.backgroundColor = "#e0f7fa"; 
    lastSelectedLi = li;

    mail.lu = true;
    displayEmail(mail, li);
    li.style.backgroundColor = "#e0f7fa";
    
    
    const index = emails.findIndex(item => item.id === mail.id); // Find the email index
    if (index !== -1) {
        emails[index] = mail;  // Update the email in the array
        sessionEmails.v = emails;  // Save to sessionStorage
    }
    sessionLastOpenedEmail.v = index;
    const contentFormate = mail.contenu.replace(/\n/g, "<br>");
    DOM.contenumail.innerHTML = "";
    const clone = DOM.mailTemplate.content.cloneNode(true);
    if(mail.urgent) clone.querySelector(".mail-objet").innerHTML = `[Urgent] ${mail.objet}`;
    else clone.querySelector(".mail-objet").innerHTML = mail.objet;

    clone.querySelector(".mail-expediteur").innerHTML = mail.expediteur;
    clone.querySelector(".mail-destinataire").innerHTML = mail.destinataire;
    clone.querySelector(".mail-contenu").innerHTML = contentFormate;

    if (mail.id !== 0) {  // If not Zimmerman's email, display attachments
        clone.querySelector(".mail-pieces-jointes-btn").innerHTML = mail.piecesJointes;
    } else {
        clone.querySelector(".mail-pieces-jointes-btn").style.display = "none"; // Hide attachments for Zimmerman's email
    }
    DOM.contenumail.appendChild(clone);

    const trashIcon = document.getElementById("trash");
    trashIcon.addEventListener("click", () => {
        deleteEmail(mail);
    });

    updateUnreadCount();

    
}

/**
 * Switch between inbox and trash folders.
 * @param {string} folder - The folder to switch to ("inbox" or "trash").
 */
const switchFolder = (dossier) => {
    activeBox = dossier;
    if (dossier === "trash") {
        broadcastUpdateAppName("JaiMail - Corbeille");
        DOM.messageList.innerHTML = ''; // Clear the message list
        DOM.contenumail.innerHTML = ''; // Clear the email content
        DOM.contenumail.innerHTML = `
        <div class ="w3-center">
        <h2>Contenu de l'e-mail</h2>
        <p>Veuillez sélectionner un e-mail pour afficher son contenu.</p>`; // Reset the default text
        DOM.boitereception.classList.remove('active'); // Set the active folder styling
        DOM.corbeille.classList.add('active'); 
        displayMessagesDelete();
    } else {
        broadcastUpdateAppName("JaiMail - Boite de réception");
        DOM.messageList.innerHTML = ''; 
        DOM.contenumail.innerHTML = ''; 
        DOM.contenumail.innerHTML = `
        <div class ="w3-center">
        <h2>Contenu de l'e-mail</h2>
        <p>Veuillez sélectionner un e-mail pour afficher son contenu.</p>`; 
        DOM.boitereception.classList.add('active');
        DOM.corbeille.classList.remove('active');
        displayMessages();
    }
}


/**
 * Shuffle an array randomly.
 * @param {Array} array - The array to shuffle.
 */
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}

/**
 * Retrieve random emails to populate the inbox.
 */
const retrieveRandomEmails = () => {
    if (emails.length === 0 && sessionOpenFirstTime.v) {  
       
        let emailsFromSource = [...mails]; // Copy the source emails
        shuffleArray(emailsFromSource); // Shuffle the email list
        
        let nbEmail = 5;

        // List of remaining emails (without duplicates)
        const mailsRestants = [];
        
        // Place the email with ID 0 (Zimmermann) first
        const mailZimmermann = emailsFromSource.find(mail => mail.id === 0);
        emailsFromSource = emailsFromSource.filter(mail => mail.id !== 0); // Remove Zimmermann email
        if (mailZimmermann) {
            emailsFromSource.unshift(mailZimmermann); // Add Zimmermann email to the beginning
        }

        // Add emails to the remainingEmails list
        for (let i = 0; i < emailsFromSource.length; i++) {
            mailsRestants.push(emailsFromSource[i]);
            if (mailsRestants.length + 1 > nbEmail) break; // Stop when enough emails are added
        }

        emails.push(...mailsRestants);
        // Save these emails in sessionStorage
        sessionEmails.v = emails;
        updateEmailDatesToToday();
        updateUrgentField(emails);
    } 
    displayMessages();
}

/**
 * Update the unread email count and update the UI accordingly.
 */
const updateUnreadCount = () => {
    let unread = 0; 

    // Loop through all emails to count unread ones
    for (let i = 0; i < emails.length; i++) {
        if (!emails[i].lu) { 
            unread++;
        }
    }

    // Update the UI counter
    if (unread > 0) {
        DOM.countmail.textContent = unread; 
        DOM.countmail.style.display = "inline-block"; 
        DOM.boitereception.style.fontWeight = "bold";
        DOM.countmail.style.fontSize = "calc(90%)"; 
    } else {
        DOM.countmail.textContent = ""; 
        DOM.countmail.style.display = "none"; 
        DOM.boitereception.style.fontWeight = "normal";
    }
}

/**
 * Delete an email and move it to the trash.
 * @param {Object} mail - The email object to delete.
 */
const deleteEmail = (mail) => {
    
    const index = emails.findIndex(item => item.id === mail.id); // Find the index of the email to delete
    if (index !== -1) {
        if(mail.id !== 0) sessionSatisfaction.v -= 5; // Decrease satisfaction score for non-Zimmermann emails
        
        // Add the email to the deleted emails list
        emailsDelete.push(emails[index]);
        emails.splice(index, 1);
        sessionEmails.v = emails;
        sessionEmailsDelete.v = emailsDelete;
        DOM.messageList.innerHTML = '';
        DOM.contenumail.innerHTML = `
        <div class ="w3-center">
        <h2>Contenu de l'e-mail</h2>
        <p>Veuillez sélectionner un e-mail pour afficher son contenu.</p>`; 

        // Update the UI
        displayMessages();
        updateUnreadCount();
    }
};


/**
 * Display the content of a deleted email in the right panel.
 * Highlights the selected email in the list and updates the details in the right panel.
 * @param {Object} mail - The email object to display (contains `id`, `contenu`, etc.).
 * @param {HTMLElement} li - The `<li>` element representing the email in the list.
 */
const displayDeletedEmailContent = (mail, li) => {
    if (lastSelectedLi !== null) {
        lastSelectedLi.style.backgroundColor = ""; // Reset the background color
    }
    // Highlight the selected email
    li.style.backgroundColor = "#e0f7fa"; 
    lastSelectedLi = li;

    mail.lu = true;
    displayEmail(mail, li);
    li.style.backgroundColor = "#e0f7fa";
    
    
    const index = emails.findIndex(item => item.id === mail.id);  // Find the email index
    if (index !== -1) {
        emails[index] = mail;  // Update the email in the array
        sessionEmails.v = emails;  // Save to sessionStorage
    }

    const contentFormate = mail.contenu.replace(/\n/g, "<br>");
    DOM.contenumail.innerHTML = "";
    const clone = DOM.mailTemplateDelete.content.cloneNode(true);
    clone.querySelector(".mail-objet").innerHTML = mail.objet;
    clone.querySelector(".mail-expediteur").innerHTML = mail.expediteur;
    clone.querySelector(".mail-destinataire").innerHTML = mail.destinataire;
    clone.querySelector(".mail-contenu").innerHTML = contentFormate;
    DOM.contenumail.appendChild(clone);
 
    updateUnreadCount();

}

/**
 * Display all deleted emails in the UI.
 */
const displayMessagesDelete = () => {
    emailsDelete.map(mail => {
        const li = document.createElement('li');
        li.style.borderBottom = "1px solid lightgray";
        li.style.cursor = "pointer";

        displayEmail(mail, li);

        li.addEventListener('click', () => displayDeletedEmailContent(mail, li));
        DOM.messageList.appendChild(li);
    });
    
}

/**
 * Verify if a day has passed since the last session check.
 */
const verifIfDayPassed = () => {
    const currentDay = Math.floor(sessionTimePassed.v / 8);
    let LastCheckedDay = Math.floor(sesssionLastTimePassed.v / 8);

    // Vérifie si le jour a changé depuis la dernière vérification
    if (currentDay !== LastCheckedDay) {
        const differenceTime = currentDay - LastCheckedDay;

        addEmailAfterDayPassed(differenceTime);
        LastCheckedDay = currentDay;
    }
};


/**
 * Add new emails to the inbox based on the number of days passed.
 * Updates the email list with new emails for each day that has passed.
 * @param {number} differenceTime - The number of days that have passed since the last check.
 */
const addEmailAfterDayPassed = (differenceTime) => {
    // Mélange les e-mails disponibles
    shuffleArray(mails);

    // Filtre les e-mails qui ne sont pas déjà dans les boîtes existantes (inbox et corbeille)
    let newEmails = mails.filter(mail => {
        return !emails.some(e => e.id === mail.id) && !emailsDelete.some(e => e.id === mail.id);
    });

    let emailsAdded = [];
    const today = new Date();
    const currentDay = Math.floor(sessionTimePassed.v / 8);

    for (let day = 0; day < differenceTime; day++) {
        let dateCourante = new Date(today);
        dateCourante.setDate(today.getDate() + currentDay - day); 
        const formattedDate = formatDateToString(dateCourante);

        const nombreMailsPourCeJour = Math.floor(Math.random() * 2) + 2;

        const emailsPourCeJour = newEmails.splice(0, nombreMailsPourCeJour).map(mail => {
            return { ...mail, date: formattedDate }; 
        });

        emailsAdded.push(...emailsPourCeJour);
    }

    // Ajoute les nouveaux e-mails en tête de liste
    emails.unshift(...emailsAdded);

    // Met à jour les données de session et l'affichage
    updateUrgentField(emailsAdded);
    sessionEmails.v = emails;
    sesssionLastTimePassed.v = sessionTimePassed.v;
    displayMessages();
    updateUnreadCount();
    
};

/**
 * Open the Zimmermann email if it is the first time the user opens the application.
 */
const openZimmermannEmailIfFirstTime = () => {
    if (sessionOpenFirstTime.v) { 
        const mailZimmermann = emails.find(mail => mail.id === 0);
        if (mailZimmermann) {
            const liElements = DOM.messageList.querySelectorAll('li'); 
            const liZimmermann = Array.from(liElements).find(li => {
                const nameElement = li.querySelector('span');
                return nameElement && nameElement.textContent.trim() === mailZimmermann.nom;
            });

            if (liZimmermann) {
                displayEmailContent(mailZimmermann, liZimmermann); 
                sessionOpenFirstTime.v = false; 
            }
        }
    }
};

/**
 * Format a Date object into a string (DD-MM-YYYY).
 * @param {Date} date - The date object to format.
 * @returns {string} - The formatted date as a string.
 */
const formatDateToString = (date) => {
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    return `${day}-${month}-${year}`; 
}

/**
 * Update the date of all emails to today.
 */
const updateEmailDatesToToday = () => {
    const todayDate = formatDateToString(new Date());
    emails = emails.map(mail => ({ ...mail, date: todayDate }));
    sessionEmails.v = emails;
}

/**
 * Updates the 'urgent' field for each email in the provided list.
 * The first email (with an id of 0) is always marked as not urgent.
 * For other emails, the 'urgent' field is assigned randomly with 
 * a 10% chance of being marked as urgent.
 *
 * @param {Object[]} emailList - The list of emails to update.
 * @param {number} emailList[].id - The unique identifier of the email.
 * @param {boolean} emailList[].urgent - Indicates whether the email is urgent or not.
 */
const updateUrgentField = (emailList) => {
    emailList.forEach(email => {
        if (email.id == 0) return (email.urgent = false); //First email (Zimmermann) is never urgent
        if (Math.random() <= 0.1) {
            email.urgent = true; 
        } 
        else {
            email.urgent = false; 
        }
    });
};

// Initialize functions on page load
retrieveRandomEmails();
updateUnreadCount();
verifIfDayPassed();
openZimmermannEmailIfFirstTime();




/*
je veux que mtn tu me fasses une fonction qui permet de generer dans le l'object mail un champ "urgent" bolean où tu mets à false dans tous les cas sauf une où 
C'est genre 5% tu temps tu mets à true !
*/