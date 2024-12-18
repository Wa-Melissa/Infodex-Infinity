/**
 * @module www_desktop_app_agenda
 */
const DOM = createDOMReferences({
    addEvent_button: "#add-event-btn",
    agendaContent_div: "#agenda-content-div",
    event_passed_entry:  "#event-passed-entry"
});
broadcastUpdateAppName("Agenda");	

// Create SweetAlert mixin (swal queue)
const Queue = Swal.mixin({
    progressSteps: ['1', '2', '3'],
    confirmButtonText: 'Suivant >',
    showCancelButton: true,
    cancelButtonText: "Annuler",
    customClass: {
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
    },
    showClass: { backdrop: 'swal2-noanimation' },
    hideClass: { backdrop: 'swal2-noanimation' },
});

//Event - Click on the "add training" button
DOM.addEvent_button.addEventListener("click", async () => {
    let firstStepResult = await Queue.fire({
        title: 'Créer un nouvel événement',
        text: "Un événement est une formation que vous organisez pour les usagers afin d'améliorer leurs compétences, mais cela vous prend du temps. Vous pouvez aussi prendre congé ou simuler une maladie, mais cela aura un impact sur le délai de réponse, donc sur la satisfaction des usagers.",
        currentProgressStep: 0,
    });
    if (firstStepResult.isDismissed) return;

    let inputOptions = {
        Formations: {
            format: "L'importance du format des données",
            communication: "Communication et transmission efficace de données",
            aberrancy: "Gérer et corriger les données aberrantes",
            verification: "Techniques de vérifications"            
        },
        Congés: {
            oneday: "Prendre sa journée",
            twoday: "Prendre sa journée et simuler une maladie demain"
        }
    }

    //Delete already used training
    sessionEventsPassed.v.forEach((e) => {
        if (!e.isTraining) return;
        delete inputOptions.Formations[e.id];
    });
    //Delete training category if needed (no mote training)
    if (Object.keys(inputOptions.Formations).length == 0) {
        delete inputOptions.Formations;
    }
    let secondStepResult = await Queue.fire({
        title: 'Créer un nouvel événement',
        input: "select",
        inputPlaceholder: "Sélectionnez un type d'évenement...",
        inputOptions,
        currentProgressStep: 1,
        inputValidator: (value) => {
            return new Promise((resolve) => {
                console.log(value);
                if (value == "") {
                    resolve("Vous devez sélectionner un type d'événements.");
                } else {
                    resolve();
                }
            });
        }
    });
    if (secondStepResult.isDismissed) return;

    let thirdStepResult = await Queue.fire({
        title: 'Créer un nouvel événement',
        text: "L'événement va se lancer immédiatement. Confirmez-vous l'exécution ?",
        currentProgressStep: 2,
        confirmButtonText: 'Confirmer',
    });
    if (thirdStepResult.isDismissed) return;

    const isTraining = (typeof inputOptions.Formations[secondStepResult.value]) != "undefined"; // tesst if selected event is a training

    //Add new event in session
    sessionEventsPassed.v = [...sessionEventsPassed.v, {
        title: isTraining ? inputOptions.Formations[secondStepResult.value] : inputOptions.Congés[secondStepResult.value],
        id: secondStepResult.value,
        isTraining,
        date: 1 + Math.floor(sessionTimePassed.v/8)
    }];

    setTimeout(() =>{ // wait 1sec
        handleEvent(secondStepResult.value);        
    }, 1000)

    const bc = new BroadcastChannel("black_screen_fade"); // dispatch event to fade to black and back to body content
	bc.postMessage(null);
    bc.close();
});

/**
 * Generates and displays the agenda based on passed session events.
 *
 * This function checks if there are any events stored in the `sessionEventsPassed` variable.
 * If there are no events, it exits early. Otherwise, it clears the existing agenda content
 * and populates it with the entries from `sessionEventsPassed`, displaying each event's 
 * type, title, and date.
 */
const generateAgenda = () =>{
    if(sessionEventsPassed.v.length == 0) return;
    DOM.agendaContent_div.innerHTML = "";
    sessionEventsPassed.v.toReversed().forEach(element => {
        const clone = DOM.event_passed_entry.content.cloneNode(true);
        clone.querySelector(".element-type").innerText = element.isTraining ? "Formation" : "Congés";
        clone.querySelector(".element-title").innerText = element.title;
        clone.querySelector(".element-date").innerText = 'Jour ' + element.date;
        DOM.agendaContent_div.appendChild(clone);
    });
}
generateAgenda();

/**
 * Displays a success alert indicating that the formation is completed.
 *
 * This asynchronous function uses SweetAlert to show a confirmation dialog
 * when the user has successfully completed the training for users. The dialog
 * includes a title, a congratulatory message, and a success icon.
 * 
 * @returns {Promise<void>} A promise that resolves when the alert is dismissed.
 */
const formationDoneSwal = async () => {
    await Swal.fire({
        title: "Formation terminée",
        text: "Vous avez terminé la formation des usagers avec brio ! Et ils sont ravis...",
        icon: "success" 
    });
}

/**
 * Handles different event types and updates session parameters accordingly.
 *
 * This function processes the specified event type and updates the session's
 * time, satisfaction, and skill values based on predefined rules for each event type.
 * It also calls the `generateAgenda` function to refresh the agenda display.
 * 
 * @param {string} eventType - The type of event to handle. Possible values include:
 *   - "oneday": Updates for a one-day activity.
 *   - "twoday": Updates for a two-day activity.
 *   - "format": Updates for a formatting activity.
 *   - "communication": Updates for a communication activity.
 *   - "aberrancy": Updates for an aberrancy event.
 *   - "verification": Updates for a verification task.
 * 
 * The function modifies the following session variables:
 * - `sessionTimePassed.v`: Increases by a certain amount depending on the event type.
 * - `sessionSatisfaction.v`: Decreases based on the event type.
 * - `sessionSkill.v`: Increases for specific event types (e.g., "format", "communication", "aberrancy", "verification").
 */
const handleEvent = async (eventType) => {
    generateAgenda();
    if (eventType == "oneday") {
        sessionTimePassed.v += 8 - (sessionTimePassed.v % 8);
        sessionSatisfaction.v -= 8 - (sessionTimePassed.v % 8);
        return;
    }
    if (eventType == "twoday") {
        sessionTimePassed.v += 16 - (sessionTimePassed.v % 8);
        sessionSatisfaction.v -= 16 - (sessionTimePassed.v % 8);
        return;
    }
    if (eventType == "format") {
        sessionTimePassed.v += 12;
        sessionSatisfaction.v -= 12;
        sessionSkill.v += 6;
        await formationDoneSwal();
        return;
    }
    if (eventType == "communication") {
        sessionTimePassed.v += 16;
        sessionSatisfaction.v -= 16;
        sessionSkill.v += 8;
        await formationDoneSwal();
        return;
    }
    if (eventType == "aberrancy") {
        sessionTimePassed.v += 24;
        sessionSatisfaction.v -= 20;
        sessionSkill.v += 10;
        await formationDoneSwal();
        return;
    }
    if (eventType == "verification") {
        sessionTimePassed.v += 12;
        sessionSatisfaction.v -= 11;
        sessionSkill.v += 5;
        await formationDoneSwal();
        return;
    }
}