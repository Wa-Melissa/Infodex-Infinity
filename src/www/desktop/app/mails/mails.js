const mails = [
    {
        id: 1,
        destinataire: "charlotte.brunet@dataflow.com",
        objet: "Transmission des éléments pour analyse",
        contenu: `Bonjour Charlotte,\n\nComme convenu, je vous fais suivre en pièce jointe un jeu de données consolidé. Ces éléments ont été compilés à partir des informations disponibles pour la période définie.\n\nVous y trouverez les informations nécessaires pour la suite de vos travaux. N’hésitez pas à me solliciter si vous avez besoin de précisions ou d’une mise en contexte supplémentaire.\n\nCordialement,\nDavid Lefèvre`,
        piecesJointes: ["consolidated_data_2024.xlsx"],
        date: "2024-05-25 09:00:00",
        nom: "David Lefèvre",
        lu : false
    },
    {
        id: 2,
        destinataire: "thomas.rigal@consultingexpert.com",
        objet: "Envoi des données complémentaires",
        contenu: `Bonjour Thomas,\n\nJe vous transmets en pièce jointe les éléments complémentaires demandés lors de notre dernière réunion. Ce fichier regroupe plusieurs entrées pertinentes pour avancer dans l’analyse.\n\nN’hésitez pas à revenir vers moi pour toute question ou pour discuter de ces éléments plus en détail.\n\nBien cordialement,\nEmma Caron`,
        piecesJointes: ["supplementary_data.xlsx"],
        date: "2024-10-18 09:30:00",
        nom: "Emma Caron",
        lu : false
    },
    {
        id: 3,
        destinataire: "paul.martin@solutionsgroup.com",
        objet: "Données consolidées prêtes à être exploitées",
        contenu: `Bonjour Paul,\n\nVeuillez trouver en pièce jointe les données compilées pour le projet en cours. Elles ont été organisées selon les paramètres évoqués précédemment afin de faciliter leur exploitation.\n\nJe reste disponible pour échanger si nécessaire.\n\nCordialement,\nJulie Reynaud`,
        piecesJointes: ["project_data_final.csv"],
        date: "2024-11-15 10:00:00",
        nom: "Julie Reynaud",
        lu : false
    },
    {
        id: 4,
        destinataire: "lucas.perrin@dataexpertise.com",
        objet: "Transmission des fichiers pour validation",
        contenu: `Bonjour Lucas,\n\nJe vous fais parvenir le fichier que nous avons préparé pour la validation. Celui-ci contient l’ensemble des informations demandées, organisées en sections distinctes pour en faciliter la lecture.\n\nN’hésitez pas à me tenir informé si vous avez des remarques ou si des ajustements sont nécessaires.\n\nBien à vous,\nClara Vasseur`,
        piecesJointes: ["validation_file.xlsx"],
        date: "2024-11-18 10:30:00",
        nom: "Clara Vasseur",
        lu : false
    },
    {
        id: 5,
        destinataire: "julie.gauthier@strategicsolutions.com",
        objet: "Fichier de données pour préparation de rapport",
        contenu: `Bonjour Julie,\n\nVous trouverez en pièce jointe le fichier contenant les informations que vous avez demandées. Ces données ont été structurées pour répondre aux objectifs définis lors de notre dernier échange.\n\nJe suis disponible si vous souhaitez que nous approfondissions certains points.\n\nCordialement,\nVictor Legrand`,
        piecesJointes: ["report_preparation_data.xlsx"],
        date: "2020-11-18 11:00:00",
        nom: "Victor Legrand",
        lu : false
    },
    {
        id: 6,
        destinataire: "sarah.bernard@analyticsteam.com",
        objet: "Données préparées pour votre revue",
        contenu: `Bonjour Sarah,\n\nJe vous joins un fichier regroupant des informations pertinentes pour votre revue. Ce document a été préparé en tenant compte des échanges préalables.\n\nN’hésitez pas à me faire savoir si vous souhaitez organiser un point pour en discuter.\n\nCordialement,\nHugo Dumas`,
        piecesJointes: ["review_data_file.xlsx"],
        date: "2024-11-18 11:30:00",
        nom: "Hugo Dumas",
        lu : false
    },
    {
        id: 7,
        destinataire: "laura.moreau@collaborateurs.com",
        objet: "Compilation des données pour le projet",
        contenu: `Bonjour Laura,\n\nVoici les données consolidées nécessaires à la prochaine étape du projet. Ce fichier regroupe les informations sous une forme exploitable pour vos travaux.\n\nJe reste à votre disposition pour toute clarification.\n\nBien à vous,\nLucas Garnier`,
        piecesJointes: ["compiled_project_data.csv"],
        date: "2024-11-14 12:00:00",
        nom: "Lucas Garnier",
        lu : false
    },
    {
        id: 8,
        destinataire: "sophie.mallet@datasolutions.com",
        objet: "Fichier transmis pour analyse",
        contenu: `Bonjour Sophie,\n\nVous trouverez en pièce jointe un fichier regroupant des informations clés collectées dans le cadre des travaux en cours. Ce document a été formaté selon les standards habituels.\n\nN’hésitez pas à revenir vers moi si vous avez besoin d’éclaircissements.\n\nCordialement,\nNathalie Durand`,
        piecesJointes: ["analysis_file_2024.xlsx"],
        date: "2024-11-18 12:30:00",
        nom: "Nathalie Durand",
        lu : false
    },
    {
        id: 9,
        destinataire: "olivier.martinez@strategygroupe.com",
        objet: "Transmission des éléments nécessaires",
        contenu: `Bonjour Olivier,\n\nJe vous fais parvenir en pièce jointe le fichier que nous avons compilé pour répondre à vos besoins. Celui-ci est prêt à être intégré dans les travaux en cours.\n\nJe reste à votre disposition pour tout complément d’information.\n\nCordialement,\nCamille Bernard`,
        piecesJointes: ["necessary_elements.csv"],
        date: "2024-11-18 13:00:00",
        nom: "Camille Bernard",
        lu : false
    },
    {
        id: 10,
        destinataire: "julien.robert@consultingpro.com",
        objet: "Données transmises pour revue",
        contenu: `Bonjour Julien,\n\nVoici le fichier contenant des informations pertinentes pour votre revue. Ce document a été structuré pour être facilement exploitable dans le cadre des travaux à venir.\n\nJe suis disponible pour répondre à vos éventuelles questions.\n\nBien à vous,\nAlice Fournier`,
        piecesJointes: ["review_file_2024.xlsx"],
        date: "2024-11-18 13:30:00",
        nom: "Alice Fournier",
        lu : false
    }
];
