/**
 * @module www_desktop_app_mails
 */
const DOM = createDOMReferences({
    messageList : "#message-list",
    emailContent : "#contenu-mail",
    inbox : "#boite-reception",
    btnRead : ".btn-lu",
    trash: "#corbeille",
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


DOM.inbox.classList.add('active');
// Add a click event listener to the inbox element - it's to change folder
DOM.inbox.addEventListener("click", () => switchFolder("inbox"));
DOM.trash.addEventListener("click", () => switchFolder("trash"));


/**
 * Display an email inside the email list.
 * 
 * @param {Object} mail - The email object.
 * @param {number} mail.id - The ID of the email.
 * @param {string} mail.recipient - The recipient of the email.
 * @param {string} mail.sender - The sender of the email.
 * @param {string} mail.object - The subject of the email.
 * @param {string} mail.content - The content of the email.
 * @param {string[]} mail.attachments - A list of attachments.
 * @param {string} mail.name - The name of the sender.
 * @param {boolean} mail.read - Whether the email has been read.
 * @param {boolean} mail.urgent - Whether the email is marked as urgent
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
        mail.read = !mail.read;
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

    // Display the sender's name as bold if the email is unread
    if (mail.read) nameElement.innerHTML = `${mail.name}`;
    else nameElement.innerHTML = `<strong>${mail.name}</strong>`;

    nameContainer.appendChild(btnRead);
    nameContainer.appendChild(nameElement);

    // Clear existing content in the list item and add the name container
    li.innerHTML = ''; // Clear existing content
    li.appendChild(nameContainer);

    // Add the subject and date
    const contentContainer = document.createElement('div');
    contentContainer.style.display = 'flex';
    contentContainer.style.justifyContent = 'space-between';
    contentContainer.style.alignItems = 'center';

    let contentElement = document.createElement('div');

    // Set the content based on whether the email is urgent and/or read
    if (mail.urgent && mail.read) contentElement.innerHTML = `<span style="color:red;">[Urgent] </span><em>${mail.object}</em>`;
    else if (!mail.urgent && mail.read) contentElement.innerHTML = `<em>${mail.object}</em>`;
    else if (mail.urgent && !mail.read) contentElement.innerHTML = `<strong><span style="color:red;">[Urgent] </span><em>${mail.object}</em></strong>`;
    else contentElement.innerHTML = `<strong><em>${mail.object}</em></strong>`;
    
    // Create an element for the email's date
    const dateElement = document.createElement('span');
    dateElement.style.whiteSpace = 'nowrap'; 
    dateElement.innerHTML = `${mail.date}`;

    // Append the subject and date to the content container
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
 * 
 * @param {Object} mail - The email object.
 * @param {number} mail.id - The ID of the email.
 * @param {string} mail.recipient - The recipient of the email.
 * @param {string} mail.sender - The sender of the email.
 * @param {string} mail.object - The subject of the email.
 * @param {string} mail.content - The content of the email.
 * @param {string[]} mail.attachments - A list of attachments.
 * @param {string} mail.name - The name of the sender.
 * @param {boolean} mail.read - Whether the email has been read.
 * @param {boolean} mail.urgent - Whether the email is marked as urgent
 * @param {HTMLElement} li - The list item element representing the email.
 */
const displayEmailContent = (mail, li) => {
    if (lastSelectedLi !== null) {
        lastSelectedLi.style.backgroundColor = "";  // Reset the background color
    }
    // Highlight the selected email
    li.style.backgroundColor = "#e0f7fa"; 
    lastSelectedLi = li;

    mail.read = true;
    displayEmail(mail, li);
    li.style.backgroundColor = "#e0f7fa";
    
    
    const index = emails.findIndex(item => item.id === mail.id); // Find the email index
    if (index !== -1) {
        emails[index] = mail;  // Update the email in the array
        sessionEmails.v = emails;  // Save to sessionStorage
    }
    sessionLastOpenedEmail.v = index;
    const contentFormate = mail.content.replace(/\n/g, "<br>");
    DOM.emailContent.innerHTML = "";
    const clone = DOM.mailTemplate.content.cloneNode(true);
    if(mail.urgent) clone.querySelector(".mail-objet").innerHTML = `[Urgent] ${mail.object}`;
    else clone.querySelector(".mail-objet").innerHTML = mail.object;

    clone.querySelector(".mail-expediteur").innerHTML = mail.sender;
    clone.querySelector(".mail-destinataire").innerHTML = mail.recipient;
    clone.querySelector(".mail-contenu").innerHTML = contentFormate;

    if (mail.id !== 0) {  // If not Zimmerman's email, display attachments
        clone.querySelector(".mail-pieces-jointes-btn").innerHTML = mail.attachments;
    } else {
        clone.querySelector(".mail-pieces-jointes-btn").style.display = "none"; // Hide attachments for Zimmerman's email
    }
    DOM.emailContent.appendChild(clone);

    const trashIcon = document.getElementById("trash");
    trashIcon.addEventListener("click", () => {
        deleteEmail(mail);
    });

    updateUnreadCount();
    
}

/**
 * Switch between inbox and trash folders.
 * 
 * @param {string} folder - The folder to switch to ("inbox" or "trash").
 */
const switchFolder = (folder) => {
    activeBox = folder;
    if (folder === "trash") {
        broadcastUpdateAppName("JaiMail - Corbeille");
        DOM.messageList.innerHTML = ''; // Clear the message list
        DOM.emailContent.innerHTML = ''; // Clear the email content
        DOM.emailContent.innerHTML = `
        <div class ="w3-center">
        <h2>Contenu de l'e-mail</h2>
        <p>Veuillez sélectionner un e-mail pour afficher son contenu.</p>`; // Reset the default text
        DOM.inbox.classList.remove('active'); // Set the active folder styling
        DOM.trash.classList.add('active'); 
        displayMessagesDelete();
    } 
    else {
        broadcastUpdateAppName("JaiMail - Boite de réception");
        DOM.messageList.innerHTML = ''; 
        DOM.emailContent.innerHTML = ''; 
        DOM.emailContent.innerHTML = `
        <div class ="w3-center">
        <h2>Contenu de l'e-mail</h2>
        <p>Veuillez sélectionner un e-mail pour afficher son contenu.</p>`; 
        DOM.inbox.classList.add('active');
        DOM.trash.classList.remove('active');
        displayMessages();
    }
}


/**
 * Shuffle an array randomly.
 * 
 * @param {Array} array - The array to shuffle.
 */
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}

/**
 * Collect random emails to fill the inbox at the start of the game.
 */
const retrieveRandomEmails = () => {
    if (emails.length === 0 && sessionOpenFirstTime.v) {  
       
        let emailsFromSource = [...mails]; // Copy the source emails
        shuffleArray(emailsFromSource); // Shuffle the email list
        
        let nbEmail = 5;

        // List of remaining emails (without duplicates)
        const remainingEmails = [];
        
        // Place the email with ID 0 (Zimmermann) first
        const mailZimmermann = emailsFromSource.find(mail => mail.id === 0);
        emailsFromSource = emailsFromSource.filter(mail => mail.id !== 0); // Remove Zimmermann email
        if (mailZimmermann) {
            emailsFromSource.unshift(mailZimmermann); // Add Zimmermann email to the beginning
        }

        // Add emails to the remainingEmails list
        for (let i = 0; i < emailsFromSource.length; i++) {
            remainingEmails.push(emailsFromSource[i]);
            if (remainingEmails.length + 1 > nbEmail) break; // Stop when enough emails are added
        }

        emails.push(...remainingEmails);
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
        if (!emails[i].read) { 
            unread++;
        }
    }

    // Update the UI counter
    if (unread > 0) {
        DOM.countmail.textContent = unread; 
        DOM.countmail.style.display = "inline-block"; 
        DOM.inbox.style.fontWeight = "bold";
        DOM.countmail.style.fontSize = "calc(90%)"; 
    } else {
        DOM.countmail.textContent = ""; 
        DOM.countmail.style.display = "none"; 
        DOM.inbox.style.fontWeight = "normal";
    }
}

/**
 * Delete an email and move it to the trash.
 * 
 * @param {Object} mail - The email object.
 * @param {number} mail.id - The ID of the email.
 * @param {string} mail.recipient - The recipient of the email.
 * @param {string} mail.sender - The sender of the email.
 * @param {string} mail.object - The subject of the email.
 * @param {string} mail.content - The content of the email.
 * @param {string[]} mail.attachments - A list of attachments.
 * @param {string} mail.name - The name of the sender.
 * @param {boolean} mail.read - Whether the email has been read.
 * @param {boolean} mail.urgent - Whether the email is marked as urgent
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
        DOM.emailContent.innerHTML = `
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
 * 
 * @param {Object} mail - The email object.
 * @param {number} mail.id - The ID of the email.
 * @param {string} mail.recipient - The recipient of the email.
 * @param {string} mail.sender - The sender of the email.
 * @param {string} mail.object - The subject of the email.
 * @param {string} mail.recipient - The recipient of the email.
 * @param {string} mail.sender - The sender of the email.
 * @param {string} mail.content - The content of the email.
 * @param {string[]} mail.attachments - A list of attachments.
 * @param {string} mail.name - The name of the sender.
 * @param {boolean} mail.read - Whether the email has been read.
 * @param {boolean} mail.urgent - Whether the email is marked as urgent
 * @param {HTMLElement} li - The `<li>` element representing the email in the list.
 */
const displayDeletedEmailContent = (mail, li) => {
    if (lastSelectedLi !== null) {
        lastSelectedLi.style.backgroundColor = ""; // Reset the background color
    }
    // Highlight the selected email
    li.style.backgroundColor = "#e0f7fa"; 
    lastSelectedLi = li;

    mail.read = true;
    displayEmail(mail, li);
    li.style.backgroundColor = "#e0f7fa";
    
    
    const index = emails.findIndex(item => item.id === mail.id);  // Find the email index
    if (index !== -1) {
        emails[index] = mail;  // Update the email in the array
        sessionEmails.v = emails;  // Save to sessionStorage
    }

    const contentFormate = mail.content.replace(/\n/g, "<br>");
    DOM.emailContent.innerHTML = "";
    const clone = DOM.mailTemplateDelete.content.cloneNode(true);
    clone.querySelector(".mail-objet").innerHTML = mail.object;
    clone.querySelector(".mail-expediteur").innerHTML = mail.sender;
    clone.querySelector(".mail-destinataire").innerHTML = mail.recipient;
    clone.querySelector(".mail-contenu").innerHTML = contentFormate;
    DOM.emailContent.appendChild(clone);
 
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
 * 
 * @param {number} differenceTime - The number of days that have passed since the last check.
 */
const addEmailAfterDayPassed = (differenceTime) => {
    //Mix available e-mails
    shuffleArray(mails);

    // Filter e-mails not already in existing boxes (inbox and recycle garbage can)
    let newEmails = mails.filter(mail => {
        return !emails.some(e => e.id === mail.id) && !emailsDelete.some(e => e.id === mail.id);
    });

    let emailsAdded = [];
    const today = new Date();
    const currentDay = Math.floor(sessionTimePassed.v / 8);

    for (let day = 0; day < differenceTime; day++) {
        let todayDate = new Date(today);
        todayDate.setDate(today.getDate() + currentDay - day); 
        const formattedDate = formatDateToString(todayDate);

        const nombreMailsPourCeJour = Math.floor(Math.random() * 2) + 2;

        const emailsPourCeJour = newEmails.splice(0, nombreMailsPourCeJour).map(mail => {
            return { ...mail, date: formattedDate }; 
        });

        emailsAdded.push(...emailsPourCeJour);
    }

    // Adds new e-mails to the top of the list
    emails.unshift(...emailsAdded);

    // Updates session data and display
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
                return nameElement && nameElement.textContent.trim() === mailZimmermann.name;
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
 * 
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
 * Updates the `urgent` property of each email in the provided email list.
 * Assigns a 10% probability for an email to be marked as urgent.
 * 
 * @param {Object} emailList - The list of email objects to update.
 * @param {number} emailList.id - The ID of the email.
 * @param {string} emailList.recipient - The recipient of the email.
 * @param {string} emailList.sender - The sender of the email.
 * @param {string} emailList.object - The subject of the email.
 * @param {string} emailList.content - The content of the email.
 * @param {string[]} emailList.attachments - A list of attachments.
 * @param {string} emailList.name - The name of the sender.
 * @param {boolean} emailList.read - Whether the email has been read.
 * @param {boolean} emailList.urgent - Whether the email is marked as urgent
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
