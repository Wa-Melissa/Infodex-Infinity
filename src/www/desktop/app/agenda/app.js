const DOM = createDOMReferences({
    addEvent_button: "#add-event-btn",
    agendaContent_div: "#agenda-content-div",
    event_passed_entry:  "#event-passed-entry"
});
broadcastUpdateAppName("Agenda");	


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

DOM.addEvent_button.addEventListener("click", async () => {
    let firstStepResult = await Queue.fire({
        title: 'Créer un nouvel événement',
        text: "Un évènement est une formation que vous organisez pour les usagers afin d'améliorer leurs compétences, mais cela vous prend du temps. Vous pouvez aussi prendre congé ou simuler une maladie, mais cela aura un impact sur le délai de réponse, donc sur la satisfaction des usagers.",
        currentProgressStep: 0,
    });
    if (firstStepResult.isDismissed) return;

    let inputOptions = {
        //select: "Selectionnez un type d'évenement...",
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
    sessionEventsPassed.v.forEach((e) => {
        if (!e.isFormation) return;
        delete inputOptions.Formations[e.id];
    });
    if (Object.keys(inputOptions.Formations).length == 0) {
        delete inputOptions.Formations;
    }
    let secondStepResult = await Queue.fire({
        title: 'Créer un nouvel événement',
        input: "select",
        inputPlaceholder: "Selectionnez un type d'évenement...",
        inputOptions,
        currentProgressStep: 1,
        inputValidator: (value) => {
            return new Promise((resolve) => {
                console.log(value);
                if (value == "") {
                    resolve("Vous devez séléctionner un type d'évenements.");
                } else {
                    resolve();
                }
            });
        }
    });
    if (secondStepResult.isDismissed) return;

    let thirdStepResult = await Queue.fire({
        title: 'Créer un nouvel événement',
        text: "L'événement va se lancer immédiatement. Confirmez-vous l'execution ?",
        currentProgressStep: 2,
        confirmButtonText: 'Confirmer',
    });
    if (thirdStepResult.isDismissed) return;

    const isFormation = (typeof inputOptions.Formations[secondStepResult.value]) != "undefined";

    sessionEventsPassed.v = [...sessionEventsPassed.v, {
        title: isFormation ? inputOptions.Formations[secondStepResult.value] : inputOptions.Congés[secondStepResult.value],
        id: secondStepResult.value,
        isFormation,
        date: 1 + Math.floor(sessionTimePassed.v/8)
    }];

    setTimeout(() =>{
        handleEvent(secondStepResult.value);        
    }, 1000)
    const bc = new BroadcastChannel("black_screen_fade");
	bc.postMessage(null);
    bc.close();
});

const generateAgenda = () =>{
    if(sessionEventsPassed.v.length == 0) return;
    DOM.agendaContent_div.innerHTML = "";
    sessionEventsPassed.v.toReversed().forEach(element => {
        const clone = DOM.event_passed_entry.content.cloneNode(true);
        clone.querySelector(".element-type").innerText = element.isFormation ? "Formation" : "Congés";
        clone.querySelector(".element-title").innerText = element.title;
        clone.querySelector(".element-date").innerText = 'Jour ' + element.date;
        DOM.agendaContent_div.appendChild(clone);
    });
    
}

generateAgenda();

const formationDoneSwal = async () => {
    await Swal.fire({
        title: "Formation terminée",
        text: "Vous avez terminé la formation des usagers avec brio ! Et ils sont ravis...",
        icon: "success" 
    });
}
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