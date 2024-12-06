const DOM = createDOMReferences({

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
    // optional classes to avoid backdrop blinking between steps
    showClass: { backdrop: 'swal2-noanimation' },
    hideClass: { backdrop: 'swal2-noanimation' },
});

(async () => {
    let firstStepResult = await Queue.fire({
        title: 'Créer un nouvel événement',
        text: "Un événement est une formation que vous organisez pour les usagers afin d'améliorer leurs compétences, mais cela vous prend du temps. Vous pouvez aussi prendre congé ou simuler une maladie, mais cela aura un impact sur le délai de réponse, donc sur la satisfaction des usagers.",
        currentProgressStep: 0,
    });
    if (firstStepResult.isDismissed) return;

    let secondStepResult = await Queue.fire({
        title: 'Créer un nouvel événement',
        input: "select",
        inputPlaceholder: "Selectionnez un type d'évenement...",
        inputOptions: {
            //select: "Selectionnez un type d'évenement...",
            Formations: {
                format: "L'importance du format de données.",
                communication: "Communication et transmission efficace de données.",
                aberrancy: "Gérer et corriger les données aberrante",
                verification: "Techniques de vérifications"            
            },
            Congés: {
                oneday: "Prendre sa journée.",
                twoday: "Prendre sa journée et simuler une maladie demain."
            }
        },
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

    await Queue.fire({
        title: 'Créer un nouvel événement',
        text: "L'événement va se lancer immédiatement. Confirmez-vous l'execution ?",
        currentProgressStep: 2,
        confirmButtonText: 'Confirmer',
    })
    setTimeout(() =>{
        handleEvent(secondStepResult.value);        
    }, 1000)
    const bc = new BroadcastChannel("black_screen_fade");
	bc.postMessage(null);
    bc.close();
})();

const formationDoneSwal = async () => {
    await Swal.fire({
        title: "Formation terminée",
        text: "Vous avez terminé la formation des usagers avec brio ! Et ils sont ravis...",
        icon: "success"
    });
}
const handleEvent = async (eventType) => {
    if (eventType == "oneday") {
        sessionTimePassed.v += 8 - (sessionTimePassed.v % 8);
        return;
    }
    if (eventType == "twoday") {
        sessionTimePassed.v += 16 - (sessionTimePassed.v % 8);
        return;
    }
    if (eventType == "format") {
        sessionTimePassed.v += 12;
        await formationDoneSwal();
        return;
    }
    if (eventType == "communication") {
        sessionTimePassed.v += 16;
        await formationDoneSwal();
        return;
    }
    if (eventType == "aberrancy") {
        sessionTimePassed.v += 24;
        await formationDoneSwal();
        return;
    }
    if (eventType == "verification") {
        sessionTimePassed.v += 12;
        await formationDoneSwal();
        return;
    }
}