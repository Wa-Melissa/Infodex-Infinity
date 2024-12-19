let mails = [
    {
        "id": 0,
        "recipient": "Moi",
        "sender": "ma.zimmermann@unistra.fr",
        "object": "Bienvenue chez nous",
        "content": "Bonjour, \n\n Bienvenue ! Je suis ravi de t’accueillir dans ce rôle essentiel. Les chercheurs comptent sur toi pour répondre à leurs mails et corriger leurs erreurs.\n\nPour faciliter ta prise de fonctions, une sélection de notes laissées par ton prédécesseur est à ta disposition dans l'application 'Notes' sur le bureau. Elles contiennent des repères utiles pour que tu puisses te familiariser avec les aspects clés du poste. \n\nEncore une fois, bienvenue ! Je te souhaite beaucoup de succès dans cette nouvelle aventure.\n\nCordialement,\nMathieu Zimmermann\nChef Départemental Suprême",
        "name": "Mathieu Zimmermann",
        "read": false
    },
    {
        "id": 1,
        "recipient": "Moi",
        "sender": "jean.dupont@ventes.com",
        "object": "Rapport mensuel de ventes pour novembre",
        "content": "Bonjour,\n\nJe vous envoie le rapport mensuel des ventes pour le mois de novembre. Ce rapport inclut une analyse détaillée des performances de chaque département, ainsi que des recommandations pour améliorer les ventes au cours des prochains mois.\n\nVeuillez trouver ci-joint le document complet. Ce rapport contient des graphiques, des tableaux et des analyses approfondies des tendances de vente. Nous avons également inclus des commentaires sur les performances individuelles et des suggestions pour améliorer les résultats.\n\nN'hésitez pas à me contacter si vous avez des questions ou si vous souhaitez discuter des résultats en détail. Votre feedback est très important pour nous aider à améliorer nos stratégies de vente.\n\nCordialement,\nJean Dupont",
        "attachments": [
            "rapport_ventes_novembre.pdf"
        ],
        "name": "Jean Dupont",
        "read": false
    },
    {
        "id": 2,
        "recipient": "Moi",
        "sender": "sophie.martin@projet.com",
        "object": "Invitation à la réunion de projet du 5 décembre",
        "content": "Bonjour,\n\nVous êtes cordialement invité à la réunion de projet qui aura lieu le 5 décembre à 14h. Cette réunion est cruciale pour discuter des progrès réalisés jusqu'à présent et pour planifier les prochaines étapes. L'ordre du jour inclut une revue des objectifs du projet, une discussion sur les défis rencontrés, et une planification des actions à entreprendre pour atteindre nos objectifs.\n\nNous aborderons également les résultats des analyses récentes et les prochaines étapes pour assurer le succès du projet. Votre participation est essentielle pour garantir que nous restons sur la bonne voie.\n\nMerci de confirmer votre présence dès que possible. Si vous avez des points spécifiques à discuter, veuillez les envoyer à l'avance pour que nous puissions les inclure dans l'ordre du jour.\n\nBien cordialement,\nSophie Martin",
        "attachments": [
            "resultats_analyse.pdf"
        ],
        "name": "Sophie Martin",
        "read": false
    },
    {
        "id": 3,
        "recipient": "Moi",
        "sender": "marc.smith@calendrier.com",
        "object": "Mise à jour du calendrier pour décembre",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint la mise à jour du calendrier pour le mois de décembre. Cette mise à jour inclut toutes les réunions, les deadlines et les événements importants pour le mois à venir. Il est essentiel de bien organiser notre emploi du temps pour assurer le bon déroulement de nos activités.\n\nNous avons ajouté plusieurs nouvelles réunions et événements en fonction des besoins du projet. Veuillez vérifier les dates et les heures pour vous assurer que vous êtes disponible pour toutes les réunions importantes. Si vous avez des conflits d'horaire, veuillez me le faire savoir dès que possible.\n\nN'hésitez pas à me contacter si vous avez des questions ou si vous souhaitez apporter des modifications au calendrier. Votre collaboration est très appréciée.\n\nCordialement,\nMarc Smith",
        "attachments": [
            "calendrier_decembre.xlsx"
        ],
        "name": "Marc Smith",
        "read": false
    },
    {
        "id": 4,
        "recipient": "Moi",
        "sender": "lisa.johnson@feedback.com",
        "object": "Feedback sur le projet de novembre",
        "content": "Bonjour,\n\nVoici le feedback sur le projet que nous avons discuté lors de notre dernière réunion. Ce feedback inclut des commentaires détaillés sur les différents aspects du projet, ainsi que des suggestions pour améliorer les performances et atteindre nos objectifs.\n\nMerci de votre attention et de votre collaboration. N'hésitez pas à me contacter si vous avez des questions ou si vous souhaitez discuter des points abordés.\n\nBien cordialement,\nLisa Johnson",
        "attachments": [
            "feedback_projet.docx"
        ],
        "name": "Lisa Johnson",
        "read": false
    },
    {
        "id": 5,
        "recipient": "Moi",
        "sender": "pierre.leclerc@contrat.com",
        "object": "Nouveau contrat à signer pour le projet XYZ",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le nouveau contrat à signer pour le projet XYZ. Ce contrat inclut tous les termes et conditions nécessaires pour la réalisation du projet. Il est important de le lire attentivement avant de le signer.\n\nMerci de me retourner le contrat signé avant le 10 décembre. Si vous avez des questions ou des préoccupations, n'hésitez pas à me contacter.\n\nCordialement,\nPierre Leclerc",
        "attachments": [
            "contrat_projet_XYZ.pdf"
        ],
        "name": "Pierre Leclerc",
        "read": false
    },
    {
        "id": 6,
        "recipient": "Moi",
        "sender": "elodie.simon@analyticsgroup.com",
        "object": "Fichier complémentaire pour analyse",
        "content": "Bonjour,\n\nJe vous envoie un fichier supplémentaire pour compléter votre analyse. Ce fichier contient des informations détaillées qui pourraient être utiles pour vos travaux en cours.\n\nN'hésitez pas à revenir vers moi pour toute question ou si vous avez besoin de plus de détails.\n\nCordialement,\nÉlodie Simon",
        "attachments": [
            "complementary_analysis_data.xlsx"
        ],
        "name": "Élodie Simon",
        "read": false
    },
    {
        "id": 7,
        "recipient": "Moi",
        "sender": "marie.dubois@techsolutions.com",
        "object": "Rapport trimestriel",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport trimestriel pour le troisième trimestre. Ce rapport inclut une analyse détaillée des performances de chaque département, ainsi que des recommandations pour améliorer les résultats au cours des prochains mois.\n\nMerci de votre attention. N'hésitez pas à me contacter si vous avez des questions ou si vous souhaitez discuter des résultats en détail.\n\nCordialement,\nMarie Dubois",
        "attachments": [
            "rapport_trimestriel_Q3.pdf"
        ],
        "name": "Marie Dubois",
        "read": false
    },
    {
        "id": 8,
        "recipient": "Moi",
        "sender": "john.doe@internationalcorp.com",
        "object": "Invitation à la conférence annuelle",
        "content": "Bonjour,\n\nVous êtes invité à notre conférence annuelle qui aura lieu le 15 décembre. Cette conférence est une excellente occasion de discuter des progrès réalisés et de planifier les prochaines étapes pour l'année à venir.\n\nMerci de confirmer votre présence dès que possible. Si vous avez des points spécifiques à discuter, veuillez les envoyer à l'avance pour que nous puissions les inclure dans l'ordre du jour.\n\nBien cordialement,\nJohn Doe",
        "attachments": [
            "donnees_conferences"
        ],
        "name": "John Doe",
        "read": false
    },
    {
        "id": 9,
        "recipient": "Moi",
        "sender": "lisa.taylor@financialgroup.com",
        "object": "Analyse des prévisions financières pour décembre",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe l'analyse des prévisions financières pour le mois de décembre. Ce document inclut une évaluation détaillée des flux de trésorerie, des projections de revenus et des prévisions de dépenses. Les données sont accompagnées de graphiques et de tableaux pour une visualisation claire des tendances à venir.\n\nMerci de bien vouloir jeter un coup d'œil aux prévisions et de me faire part de vos commentaires éventuels avant la fin de la semaine. Votre retour est essentiel pour ajuster nos stratégies financières.\n\nCordialement,\nLisa Taylor",
        "attachments": [
            "analyse_previsions_financieres_decembre.xlsx"
        ],
        "name": "Lisa Taylor",
        "read": false
    },
    {
        "id": 10,
        "recipient": "Moi",
        "sender": "alex.wang@hrsolutions.com",
        "object": "Résultats du sondage de satisfaction client",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe les résultats du sondage de satisfaction client pour le mois de novembre. Ce document présente les retours obtenus sur nos services, avec des commentaires détaillés et des suggestions pour améliorer l'expérience client. Les données sont présentées sous forme de graphiques et de tableaux pour une meilleure compréhension.\n\nMerci de bien vouloir examiner ces résultats et de me faire part de vos remarques. Votre avis est essentiel pour ajuster nos stratégies de service client.\n\nCordialement,\nAlex Wang",
        "attachments": [
            "sondage_satisfaction_client_novembre.xlsx"
        ],
        "name": "Alex Wang",
        "read": false
    },
    {
        "id": 11,
        "recipient": "Moi",
        "sender": "maria.santos@marketanalysis.com",
        "object": "Étude de marché pour le produit XYZ",
        "content": "Bonjour,\n\nEn pièce jointe, vous trouverez l'étude de marché pour le produit XYZ. Cette étude inclut une analyse complète de la demande, de la concurrence et des tendances du marché. Nous avons également ajouté des recommandations stratégiques pour maximiser les ventes et améliorer la position de notre produit sur le marché.\n\nVeuillez consulter le document et me faire part de vos commentaires avant la fin de la semaine. Votre avis est très précieux pour ajuster notre stratégie commerciale.\n\nCordialement,\nMaria Santos",
        "attachments": [
            "etude_marche_produit_XYZ.pdf"
        ],
        "name": "Maria Santos",
        "read": false
    },
    {
        "id": 12,
        "recipient": "Moi",
        "sender": "nicolas.ghilardi@consulting.com",
        "object": "Analyse des risques pour le projet ABC",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint l'analyse des risques pour le projet ABC. Ce document détaille les principaux risques identifiés, leur impact potentiel sur le projet, et les mesures de mitigation proposées. Nous avons également inclus des recommandations pour minimiser les risques tout au long de la réalisation du projet.\n\nMerci de bien vouloir vérifier les informations et de me faire part de vos suggestions. Votre retour est essentiel pour assurer la réussite du projet.\n\nCordialement,\nNicolas Ghilardi",
        "attachments": [
            "analyse_risques_projet_ABC.pdf"
        ],
        "name": "Nicolas Ghilardi",
        "read": false
    },
    {
        "id": 13,
        "recipient": "Moi",
        "sender": "carmen.oliveira@marketingstrategy.com",
        "object": "Stratégie de content pour janvier 2025",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe notre stratégie de contenu pour le mois de janvier 2025. Cette stratégie comprend des recommandations pour les sujets de blog, les campagnes sur les réseaux sociaux et les emailings. Nous avons également inclus une planification détaillée pour assurer la cohérence du message et maximiser l'engagement de notre audience cible.\n\nN'hésitez pas à me contacter si vous avez des questions ou des suggestions pour ajuster la stratégie.\n\nCordialement,\nCarmen Oliveira",
        "attachments": [
            "strategie_content_janvier_2025.xlsx"
        ],
        "name": "Carmen Oliveira",
        "read": false
    },
    {
        "id": 14,
        "recipient": "Moi",
        "sender": "alvaro.ramos@itconsulting.com",
        "object": "Résultats de l'audit de sécurité",
        "content": "Bonjour,\n\nEn pièce jointe, vous trouverez les résultats de l'audit de sécurité réalisé pour notre infrastructure IT. Ce document inclut une évaluation complète des vulnérabilités identifiées et des recommandations pour améliorer la sécurité. Les données sont accompagnées d'une analyse détaillée et de propositions d'actions correctives à mettre en œuvre.\n\nMerci de bien vouloir examiner ces résultats et de me faire part de vos remarques.\n\nCordialement,\nÁlvaro Ramos",
        "attachments": [
            "audit_securite_infrastructure_IT.pdf"
        ],
        "name": "Álvaro Ramos",
        "read": false
    },
    {
        "id": 15,
        "recipient": "Moi",
        "sender": "margaux.dupont@designstudio.com",
        "object": "Ébauche du nouveau logo de l'entreprise",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe l'ébauche du nouveau logo pour notre entreprise. Cette proposition inclut plusieurs concepts créatifs qui reflètent l'image de notre marque. Nous avons inclus des versions colorées et en noir et blanc pour divers supports de communication.\n\nMerci de nous faire part de vos commentaires avant la fin de la semaine pour que nous puissions finaliser le logo.\n\nCordialement,\nMargaux Dupont",
        "attachments": [
            "ebauche_nouveau_logo_entreprise.pdf"
        ],
        "name": "Margaux Dupont",
        "read": false
    },
    {
        "id": 16,
        "recipient": "Moi",
        "sender": "carlos.martinez@analyticsfirm.com",
        "object": "Étude de faisabilité pour le projet QRS",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe l'étude de faisabilité pour le projet QRS. Ce document inclut une évaluation complète des coûts, des délais et des ressources nécessaires pour la mise en œuvre du projet. Nous avons également ajouté une analyse des risques associés et des recommandations pour minimiser les impacts négatifs.\n\nMerci de bien vouloir examiner cette étude et de me faire part de vos commentaires.\n\nCordialement,\nCarlos Martinez",
        "attachments": [
            "etude_faisabilite_projet_QRS.pdf"
        ],
        "name": "Carlos Martinez",
        "read": false
    },
    {
        "id": 17,
        "recipient": "Moi",
        "sender": "sandrine.leclercq@hrsolutions.com",
        "object": "Rapport annuel de recrutement",
        "content": "Bonjour,\n\nEn pièce jointe, vous trouverez le rapport annuel de recrutement pour l'année. Ce rapport inclut des statistiques détaillées sur les candidatures, les entretiens et les offres d'emploi. Nous avons également ajouté des recommandations pour optimiser le processus de recrutement et améliorer l'expérience candidat.\n\nMerci de bien vouloir consulter le document et de me faire part de vos suggestions pour améliorer nos stratégies.\n\nCordialement,\nSandrine Leclercq",
        "attachments": [
            "rapport_annuel_recrutement.pdf"
        ],
        "name": "Sandrine Leclercq",
        "read": false
    },
    {
        "id": 18,
        "recipient": "Moi",
        "sender": "nathalie.grand@consultingfirm.com",
        "object": "Analyse SWOT pour le projet ABC",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint l'analyse SWOT pour le projet ABC. Ce document inclut une évaluation complète des forces, des faiblesses, des opportunités et des menaces identifiées pour le projet. Nous avons également ajouté des recommandations pour maximiser les points forts et atténuer les points faibles.\n\nMerci de bien vouloir examiner cette analyse et de me faire part de vos remarques.\n\nCordialement,\nNathalie Grand",
        "attachments": [
            "analyse_SWOT_projet_ABC.pdf"
        ],
        "name": "Nathalie Grand",
        "read": false
    },
    {
        "id": 19,
        "recipient": "Moi",
        "sender": "ali.khan@marketresearch.com",
        "object": "Rapport de la recherche de marché pour le produit XYZ",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe le rapport de la recherche de marché pour le produit XYZ. Ce document présente les résultats des études de marché, les tendances du secteur et des recommandations stratégiques pour améliorer la pénétration de marché du produit.\n\nMerci de bien vouloir examiner le rapport et de me faire part de vos commentaires.\n\nCordialement,\nAli Khan",
        "attachments": [
            "rapport_recherche_marche_produit_XYZ.pdf"
        ],
        "name": "Ali Khan",
        "read": false
    },
    {
        "id": 20,
        "recipient": "Moi",
        "sender": "benjamin.harris@creativeagency.com",
        "object": "Campagne publicitaire de fin d'année",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe notre proposition de campagne publicitaire pour la fin d'année. Cette campagne vise à promouvoir nos produits en mettant en avant les offres spéciales et les remises saisonnières. Nous avons inclus plusieurs visuels et slogans qui pourraient capturer l'attention de notre cible.\n\nMerci de bien vouloir examiner ces propositions et de me faire part de vos retours pour finaliser la campagne.\n\nCordialement,\nBenjamin Harris",
        "attachments": [
            "campagne_publicitaire_fin_d_annee.pdf"
        ],
        "name": "Benjamin Harris",
        "read": false
    },
    {
        "id": 21,
        "recipient": "Moi",
        "sender": "jacques.vanhoenacker@dataanalysis.com",
        "object": "Analyse des données pour le mois de novembre",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint l'analyse des données pour le mois de novembre. Ce rapport inclut des graphiques et des tableaux montrant les tendances et les performances clés. Les données sont complètes et peuvent être utilisées pour une meilleure prise de décision stratégique.\n\nMerci de bien vouloir consulter le document et de me faire part de vos remarques.\n\nCordialement,\nJacques Vanhoenacker",
        "attachments": [
            "analyse_donnees_novembre.pdf"
        ],
        "name": "Jacques Vanhoenacker",
        "read": false
    },
    {
        "id": 22,
        "recipient": "Moi",
        "sender": "cindy.rodriguez@logistics.com",
        "object": "Planification logistique pour janvier 2025",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe le plan de logistique pour le mois de janvier 2025. Ce document détaille les livraisons prévues, les itinéraires et les ressources nécessaires pour garantir un bon suivi des commandes. Nous avons également inclus des ajustements nécessaires pour répondre à la demande accrue pendant la saison de ventes.\n\nMerci de bien vouloir vérifier le plan et de me faire part de vos commentaires.\n\nCordialement,\nCindy Rodriguez",
        "attachments": [
            "plan_logistique_janvier_2025.pdf"
        ],
        "name": "Cindy Rodriguez",
        "read": false
    },
    {
        "id": 23,
        "recipient": "Moi",
        "sender": "elise.hubert@designconsulting.com",
        "object": "Propositions de design pour le site web",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe plusieurs propositions de design pour le nouveau site web de notre entreprise. Chaque proposition est accompagnée de visuels et de descriptions détaillées. Nous avons inclus des éléments qui mettent en avant notre marque et améliorent l'expérience utilisateur.\n\nMerci de bien vouloir examiner ces propositions et de me faire part de vos préférences.\n\nCordialement,\nElise Hubert",
        "attachments": [
            "propositions_design_site_web.pdf"
        ],
        "name": "Elise Hubert",
        "read": false
    },
    {
        "id": 24,
        "recipient": "Moi",
        "sender": "jacqueline.leroux@accounting.com",
        "object": "État des finances pour novembre",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint l'état des finances pour le mois de novembre. Ce rapport inclut des informations sur les revenus, les dépenses et les prévisions de trésorerie. Les données sont présentées sous forme de graphiques et de tableaux pour une meilleure visualisation.\n\nMerci de bien vouloir examiner ce document et de me faire part de vos remarques.\n\nCordialement,\nJacqueline Leroux",
        "attachments": [
            "etat_finances_novembre.pdf"
        ],
        "name": "Jacqueline Leroux",
        "read": false
    },
    {
        "id": 25,
        "recipient": "Moi",
        "sender": "serge.barthelemy@consultingfirm.com",
        "object": "Résultats du test de produit",
        "content": "Bonjour,\n\nEn pièce jointe, vous trouverez les résultats du test de produit pour le mois de novembre. Ce document inclut une évaluation détaillée des performances du produit, des commentaires des clients et des recommandations pour améliorer la qualité.\n\nMerci de bien vouloir examiner ces résultats et de me faire part de vos remarques.\n\nCordialement,\nSerge Barthélemy",
        "attachments": [
            "resultats_test_produit_novembre.pdf"
        ],
        "name": "Serge Barthélemy",
        "read": false
    },
    {
        "id": 26,
        "recipient": "Moi",
        "sender": "michele.potier@finance.com",
        "object": "Prévisions budgétaires pour 2025",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe les prévisions budgétaires pour l'année 2025. Ce document inclut des estimations pour les revenus, les dépenses et les investissements prévus. Les données sont accompagnées de graphiques et de tableaux pour une meilleure visualisation.\n\nMerci de bien vouloir consulter ce document et de me faire part de vos remarques.\n\nCordialement,\nMichèle Potier",
        "attachments": [
            "previsions_budgetaires_2025.xlsx"
        ],
        "name": "Michèle Potier",
        "read": false
    },
    {
        "id": 27,
        "recipient": "Moi",
        "sender": "samuel.guillot@dataanalysis.com",
        "object": "Analyse des ventes pour novembre",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint l'analyse des ventes pour le mois de novembre. Ce rapport inclut une évaluation détaillée des performances par produit et par région, ainsi que des recommandations pour améliorer les ventes futures.\n\nMerci de bien vouloir consulter le document et de me faire part de vos commentaires.\n\nCordialement,\nSamuel Guillot",
        "attachments": [
            "analyse_ventes_novembre.pdf"
        ],
        "name": "Samuel Guillot",
        "read": false
    },
    {
        "id": 28,
        "recipient": "Moi",
        "sender": "angela.hubert@consultinggroup.com",
        "object": "Tableau de bord stratégique pour décembre",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe le tableau de bord stratégique pour le mois de décembre. Ce document inclut des indicateurs clés de performance, des objectifs à atteindre et des analyses comparatives. Nous avons également ajouté des prévisions pour les mois à venir afin de suivre les progrès.\n\nMerci de bien vouloir examiner ce tableau et de me faire part de vos remarques.\n\nCordialement,\nAngela Hubert",
        "attachments": [
            "tableau_bord_strategique_decembre.xlsx"
        ],
        "name": "Angela Hubert",
        "read": false
    },
    {
        "id": 29,
        "recipient": "Moi",
        "sender": "jean.dupont@ventes.com",
        "object": "Rapport mensuel de ventes pour décembre",
        "content": "Bonjour,\n\nJe vous envoie le rapport mensuel des ventes pour décembre. Ce document inclut des analyses sur les performances des produits, les prévisions de ventes et des recommandations pour maximiser les ventes futures.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos commentaires.\n\nCordialement,\nJean Dupont",
        "attachments": [
            "rapport_ventes_decembre.pdf"
        ],
        "name": "Jean Dupont",
        "read": false
    },
    {
        "id": 30,
        "recipient": "Moi",
        "sender": "pierre.marot@marketdata.com",
        "object": "Tendances du marché pour le premier trimestre 2025",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe les tendances du marché pour le premier trimestre 2025. Ce document inclut des analyses sur les prévisions économiques, les comportements des consommateurs et les opportunités de marché pour notre secteur. Les données sont accompagnées de graphiques et de tableaux pour une meilleure compréhension.\n\nMerci de bien vouloir examiner ces informations et de me faire part de vos remarques.\n\nCordialement,\nPierre Marot",
        "attachments": [
            "tendances_marche_q1_2025.pdf"
        ],
        "name": "Pierre Marot",
        "read": false
    },
    {
        "id": 31,
        "recipient": "Moi",
        "sender": "sarah.lambert@hrconsulting.com",
        "object": "Préparation de la session de formation de janvier 2025",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe le content de la session de formation pour le mois de janvier 2025. Ce document inclut les détails sur les objectifs de la session, le programme, et les supports pédagogiques nécessaires. Nous avons également prévu des activités interactives pour engager les participants.\n\nMerci de bien vouloir examiner ces informations et de me faire part de vos remarques.\n\nCordialement,\nSarah Lambert",
        "attachments": [
            "programme_formation_janvier_2025.pdf"
        ],
        "name": "Sarah Lambert",
        "read": false
    },
    {
        "id": 32,
        "recipient": "Moi",
        "sender": "marc.smith@projectmanagement.com",
        "object": "État d'avancement du projet pour décembre",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint l'état d'avancement du projet pour le mois de décembre. Ce rapport résume les tâches réalisées, les défis rencontrés, et les prochaines étapes à suivre pour terminer le projet avec succès.\n\nMerci de bien vouloir examiner le document et de me faire part de vos commentaires.\n\nCordialement,\nMarc Smith",
        "attachments": [
            "etat_avancement_projet_decembre.pdf"
        ],
        "name": "Marc Smith",
        "read": false
    },
    {
        "id": 33,
        "recipient": "Moi",
        "sender": "elisabeth.bourget@finances.com",
        "object": "Prévisions financières pour 2025",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe les prévisions financières pour l'année 2025. Ce document inclut les prévisions de revenus, les projections de dépenses, et les analyses de rentabilité pour l'année à venir.\n\nMerci de bien vouloir consulter ce document et de me faire part de vos remarques.\n\nCordialement,\nElisabeth Bourget",
        "attachments": [
            "previsions_financieres_2025.pdf"
        ],
        "name": "Elisabeth Bourget",
        "read": false
    },
    {
        "id": 34,
        "recipient": "Moi",
        "sender": "andre.martin@consultingworld.com",
        "object": "Synthèse du séminaire de fin d'année",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint la synthèse du séminaire de fin d'année. Ce document résume les points clés abordés, les discussions principales et les actions recommandées pour l'année à venir. Les résumés des présentations et les feedbacks reçus sont également inclus.\n\nMerci de bien vouloir consulter le document et de me faire part de vos remarques.\n\nCordialement,\nAndré Martin",
        "attachments": [
            "synthese_seminaire_fin_annee.pdf"
        ],
        "name": "André Martin",
        "read": false
    },
    {
        "id": 35,
        "recipient": "Moi",
        "sender": "hannah.jones@marketingagency.com",
        "object": "Plan de marketing pour le premier trimestre 2025",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe le plan de marketing pour le premier trimestre 2025. Ce document présente nos stratégies de promotion, les objectifs de communication et les canaux de distribution envisagés pour maximiser l'impact de nos campagnes marketing.\n\nMerci de bien vouloir examiner ces informations et de me faire part de vos retours.\n\nCordialement,\nHannah Jones",
        "attachments": [
            "plan_marketing_q1_2025.pdf"
        ],
        "name": "Hannah Jones",
        "read": false
    },
    {
        "id": 36,
        "recipient": "Moi",
        "sender": "marie.rouge@dataanalytics.com",
        "object": "Rapport de performance des équipes pour décembre",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport de performance des équipes pour le mois de décembre. Ce document inclut une évaluation détaillée des performances individuelles et des recommandations pour améliorer l'efficacité de l'équipe.\n\nMerci de bien vouloir examiner le document et de me faire part de vos commentaires.\n\nCordialement,\nMarie Rouge",
        "attachments": [
            "rapport_performance_equipes_decembre.pdf"
        ],
        "name": "Marie Rouge",
        "read": false
    },
    {
        "id": 37,
        "recipient": "Moi",
        "sender": "pablo.garcia@innovationlab.com",
        "object": "Propositions de nouveaux projets pour 2025",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe nos propositions de nouveaux projets pour l'année 2025. Chaque projet est accompagné d'une description, des objectifs attendus et une estimation des ressources nécessaires.\n\nMerci de bien vouloir examiner ces propositions et de me faire part de vos remarques.\n\nCordialement,\nPablo Garcia",
        "attachments": [
            "propositions_nouveaux_projets_2025.pdf"
        ],
        "name": "Pablo Garcia",
        "read": false
    },
    {
        "id": 38,
        "recipient": "Moi",
        "sender": "olga.smith@businessconsulting.com",
        "object": "État des ressources humaines pour le premier trimestre 2025",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint l'état des ressources humaines pour le premier trimestre 2025. Ce document inclut les prévisions de recrutement, les plans de formation et les stratégies de gestion des talents.\n\nMerci de bien vouloir consulter ce document et de me faire part de vos remarques.\n\nCordialement,\nOlga Smith",
        "attachments": [
            "etat_ressources_humaines_q1_2025.pdf"
        ],
        "name": "Olga Smith",
        "read": false
    },
    {
        "id": 39,
        "recipient": "Moi",
        "sender": "ali.khan@marketresearch.com",
        "object": "État du marché pour le premier trimestre 2025",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe l'état du marché pour le premier trimestre 2025. Ce document présente les dernières tendances, les prévisions de croissance et les analyses de la concurrence.\n\nMerci de bien vouloir examiner ces informations et de me faire part de vos remarques.\n\nCordialement,\nAli Khan",
        "attachments": [
            "etat_marche_q1_2025.pdf"
        ],
        "name": "Ali Khan",
        "read": false
    },
    {
        "id": 40,
        "recipient": "Moi",
        "sender": "benjamin.harris@creativeagency.com",
        "object": "Évaluation des campagnes publicitaires pour 2025",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe notre évaluation des campagnes publicitaires pour l'année 2025. Ce rapport inclut une analyse des performances des campagnes précédentes, des recommandations pour l'optimisation des futures campagnes et une estimation du retour sur investissement attendu.\n\nMerci de bien vouloir examiner ce document et de me faire part de vos retours.\n\nCordialement,\nBenjamin Harris",
        "attachments": [
            "evaluation_campagnes_pub_2025.pdf"
        ],
        "name": "Benjamin Harris",
        "read": false
    },
    {
        "id": 41,
        "recipient": "Moi",
        "sender": "jacques.vanhoenacker@dataanalysis.com",
        "object": "Analyse des données pour décembre",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint l'analyse des données pour le mois de décembre. Ce rapport inclut des graphiques et des tableaux montrant les tendances et les comportements des utilisateurs. Les insights recueillis seront utiles pour orienter nos stratégies futures.\n\nMerci de bien vouloir examiner le document et de me faire part de vos commentaires.\n\nCordialement,\nJacques Vanhoenacker",
        "attachments": [
            "analyse_donnees_decembre.xlsx"
        ],
        "name": "Jacques Vanhoenacker",
        "read": false
    },
    {
        "id": 42,
        "recipient": "Moi",
        "sender": "tamara.fisher@performance.com",
        "object": "Rapport de performance des équipes pour décembre",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe le rapport de performance des équipes pour le mois de décembre. Ce document présente les indicateurs clés de performance, les benchmarks sectoriels et des recommandations pour améliorer les résultats des équipes.\n\nMerci de bien vouloir consulter le document et de me faire part de vos remarques.\n\nCordialement,\nTamara Fisher",
        "attachments": [
            "rapport_performance_equipes_decembre.pdf"
        ],
        "name": "Tamara Fisher",
        "read": false
    },
    {
        "id": 43,
        "recipient": "Moi",
        "sender": "samira.khan@datareporting.com",
        "object": "Prévisions économiques pour 2025",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe les prévisions économiques pour l'année 2025. Ce document inclut des analyses macroéconomiques, les prévisions de croissance du PIB et les perspectives d'inflation. Les données sont accompagnées de graphiques pour une meilleure visualisation.\n\nMerci de bien vouloir examiner ces informations et de me faire part de vos remarques.\n\nCordialement,\nSamira Khan",
        "attachments": [
            "previsions_economiques_2025.pdf"
        ],
        "name": "Samira Khan",
        "read": false
    },
    {
        "id": 44,
        "recipient": "Moi",
        "sender": "nicolas.benjamin@datasolutions.com",
        "object": "Documents pour le rapport final",
        "content": "Bonjour Nicolas,\n\nJe vous fais parvenir les documents nécessaires pour le rapport final.\n\nCordialement,\nMarc Delon",
        "attachments": [
            "final_report_documents.xlsx"
        ],
        "name": "Marc Delon",
        "read": false
    },
    {
        "id": 45,
        "recipient": "Moi",
        "sender": "olivier.martinez@strategygroupe.com",
        "object": "Dernière version des fichiers pour revue",
        "content": "Bonjour Olivier,\n\nVoici la dernière version des fichiers pour votre revue finale.\n\nBien cordialement,\nCamille Bernard",
        "attachments": [
            "last_version_for_review.xlsx"
        ],
        "name": "Camille Bernard",
        "read": false
    },
    {
        "id": 46,
        "recipient": "Moi",
        "sender": "sophie.mallet@datasolutions.com",
        "object": "Mise à jour des données pour phase finale",
        "content": "Bonjour Sophie,\n\nVoici la mise à jour des données pour la phase finale du projet.\n\nN'hésitez pas à revenir vers moi si nécessaire.\n\nCordialement,\nNathalie Durand",
        "attachments": [
            "final_phase_data.xlsx"
        ],
        "name": "Nathalie Durand",
        "read": false
    },
    {
        "id": 47,
        "recipient": "Moi",
        "sender": "georges.dumas@consulting.com",
        "object": "Analyse des risques pour le projet XYZ",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe l'analyse des risques pour le projet XYZ. Ce document identifie les principaux risques potentiels, leur impact sur le projet et les stratégies proposées pour les atténuer.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nGeorges Dumas",
        "attachments": [
            "analyse_risques_projet_XYZ.pdf"
        ],
        "name": "Georges Dumas",
        "read": false
    },
    {
        "id": 48,
        "recipient": "Moi",
        "sender": "lucie.robert@technology.com",
        "object": "Plan de test pour le logiciel de gestion",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe le plan de test pour le logiciel de gestion. Ce document décrit les étapes de test, les scénarios, et les résultats attendus. Les tests porteront sur l'efficacité du logiciel et la satisfaction utilisateur.\n\nMerci de bien vouloir examiner ce document et de me faire part de vos remarques.\n\nCordialement,\nLucie Robert",
        "attachments": [
            "plan_test_logiciel_gestion.pdf"
        ],
        "name": "Lucie Robert",
        "read": false
    },
    {
        "id": 49,
        "recipient": "Moi",
        "sender": "emmanuel.bellet@analysisgroup.com",
        "object": "Synthèse des retours utilisateurs sur le produit",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint la synthèse des retours utilisateurs sur le produit. Ce document résume les commentaires des clients, les suggestions d'amélioration et les plaintes reçues. Les insights serviront à ajuster nos stratégies de développement et à mieux répondre aux besoins des utilisateurs.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos commentaires.\n\nCordialement,\nEmmanuel Bellet",
        "attachments": [
            "synthese_retours_utilisateurs.pdf"
        ],
        "name": "Emmanuel Bellet",
        "read": false
    },
    {
        "id": 50,
        "recipient": "Moi",
        "sender": "isabelle.carlier@productmanagement.com",
        "object": "Prévisions de vente pour 2025",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe les prévisions de vente pour l'année 2025. Ce document inclut une analyse des tendances du marché, les prévisions de croissance et les stratégies recommandées pour maximiser les ventes.\n\nMerci de bien vouloir examiner ces informations et de me faire part de vos remarques.\n\nCordialement,\nIsabelle Carlier",
        "attachments": [
            "previsions_vente_2025.pdf"
        ],
        "name": "Isabelle Carlier",
        "read": false
    },
    {
        "id": 51,
        "recipient": "Moi",
        "sender": "laurent.meyer@financialreporting.com",
        "object": "Rapport financier annuel",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport financier annuel pour l'année. Ce document inclut les états financiers, le bilan des dépenses, et les prévisions budgétaires pour l'année suivante.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nLaurent Meyer",
        "attachments": [
            "rapport_financier.pdf"
        ],
        "name": "Laurent Meyer",
        "read": false
    },
    {
        "id": 52,
        "recipient": "Moi",
        "sender": "valerie.gerard@consultingfirm.com",
        "object": "Propositions d'optimisation des processus",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe les propositions d'optimisation des processus pour l'année 2025. Ces recommandations visent à améliorer l'efficacité opérationnelle et à réduire les coûts d'exploitation. Merci de bien vouloir examiner ce document et de me faire part de vos remarques.\n\nCordialement,\nValérie Gérard",
        "attachments": [
            "optimisation_processus_2025.pdf"
        ],
        "name": "Valérie Gérard",
        "read": false
    },
    {
        "id": 53,
        "recipient": "Moi",
        "sender": "nicolas.roux@datasciences.com",
        "object": "Rapport de recherche sur le marché",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport de recherche sur le marché. Ce document analyse les tendances actuelles, les segments de marché clés et les prévisions pour l'année prochaine.\n\nMerci de bien vouloir examiner ces informations et de me faire part de vos remarques.\n\nCordialement,\nNicolas Roux",
        "attachments": [
            "rapport_recherche_marche.pdf"
        ],
        "name": "Nicolas Roux",
        "read": false
    },
    {
        "id": 54,
        "recipient": "Moi",
        "sender": "marie-pierre.forestier@businessanalytics.com",
        "object": "Analyses prédictives pour 2025",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe les analyses prédictives pour l'année 2025. Ce document inclut des modélisations statistiques et des scénarios futurs pour guider la prise de décisions stratégiques.\n\nMerci de bien vouloir examiner ce document et de me faire part de vos remarques.\n\nCordialement,\nMarie-Pierre Forestier",
        "attachments": [
            "analyses_predictives_2025.pdf"
        ],
        "name": "Marie-Pierre Forestier",
        "read": false
    },
    {
        "id": 55,
        "recipient": "Moi",
        "sender": "lucas.simon@digitalstrategy.com",
        "object": "Plan de communication pour 2025",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe le plan de communication pour l'année 2025. Ce document détaille les stratégies de communication, les canaux utilisés et les messages clés pour maximiser l'impact des campagnes de communication.\n\nMerci de bien vouloir examiner ces informations et de me faire part de vos remarques.\n\nCordialement,\nLucas Simon",
        "attachments": [
            "plan_communication_2025.pdf"
        ],
        "name": "Lucas Simon",
        "read": false
    },
    {
        "id": 56,
        "recipient": "Moi",
        "sender": "carlos.gomez@globalcorp.com",
        "object": "Mise à jour des prévisions de production",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe la mise à jour des prévisions de production. Ce document couvre les prévisions de production pour le reste de l'année en cours, avec des détails sur les ajustements nécessaires pour répondre à la demande accrue.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nCarlos Gomez",
        "attachments": [
            "previsions_production.pdf"
        ],
        "name": "Carlos Gomez",
        "read": false
    },
    {
        "id": 57,
        "recipient": "Moi",
        "sender": "mariana.perez@innovationlabs.com",
        "object": "Plan de développement durable pour le projet ABC",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe le plan de développement durable pour le projet ABC. Ce document présente les objectifs écologiques, les initiatives mises en œuvre et les résultats attendus pour l'année à venir. Les stratégies incluent des solutions d'efficacité énergétique, la gestion des ressources et l'intégration des pratiques écologiques dans les opérations.\n\nMerci de bien vouloir examiner ce plan et de me faire part de vos remarques.\n\nCordialement,\nMariana Perez",
        "attachments": [
            "plan_developpement_durable_ABC.pdf"
        ],
        "name": "Mariana Perez",
        "read": false
    },
    {
        "id": 58,
        "recipient": "Moi",
        "sender": "serge.lambert@qualityassurance.com",
        "object": "Rapport d'audit qualité pour novembre",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'audit qualité pour le mois de novembre. Ce document présente les résultats des audits réalisés, les écarts par rapport aux normes de qualité, et les actions correctives recommandées.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos remarques.\n\nCordialement,\nSerge Lambert",
        "attachments": [
            "rapport_audit_qualite_novembre.pdf"
        ],
        "name": "Serge Lambert",
        "read": false
    },
    {
        "id": 59,
        "recipient": "Moi",
        "sender": "emilie.fernandez@financegroup.com",
        "object": "Analyse financière pour le mois de novembre",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe l'analyse financière pour le mois de novembre. Ce document couvre les flux de trésorerie, les ratios financiers et les performances des investissements. Les résultats sont suivis d'une analyse des écarts et des prévisions pour le mois de décembre.\n\nMerci de bien vouloir examiner ces informations et de me faire part de vos retours.\n\nCordialement,\nÉmilie Fernandez",
        "attachments": [
            "analyse_financiere_novembre.pdf"
        ],
        "name": "Émilie Fernandez",
        "read": false
    },
    {
        "id": 60,
        "recipient": "Moi",
        "sender": "abdul.siddiqui@marketresearch.com",
        "object": "Étude de marché pour le produit X",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe l'étude de marché pour le produit X. Ce document analyse les tendances actuelles du marché, la demande des consommateurs et les concurrents clés. Les insights permettront de guider la stratégie marketing et de répondre aux attentes du marché.\n\nMerci de bien vouloir examiner ce document et de me faire part de vos remarques.\n\nCordialement,\nAbdul Siddiqui",
        "attachments": [
            "etude_marche_produit_X.pdf"
        ],
        "name": "Abdul Siddiqui",
        "read": false
    },
    {
        "id": 61,
        "recipient": "Moi",
        "sender": "yang.jiang@chinesecorp.com",
        "object": "Rapport d'analyse de la chaîne logistique",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de la chaîne logistique pour le mois de novembre. Ce document présente les points faibles identifiés, les recommandations pour améliorer l'efficacité et les coûts associés.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nYang Jiang",
        "attachments": [
            "rapport_chaine_logistique_novembre.pdf"
        ],
        "name": "Yang Jiang",
        "read": false
    },
    {
        "id": 62,
        "recipient": "Moi",
        "sender": "manuel.lopez@spanishconsulting.com",
        "object": "Mise à jour des prévisions économiques pour décembre",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe la mise à jour des prévisions économiques pour le mois de décembre. Ce document analyse les indicateurs économiques, les prévisions d'inflation et les impacts potentiels sur le marché financier.\n\nMerci de bien vouloir examiner ces informations et de me faire part de vos retours.\n\nCordialement,\nManuel Lopez",
        "attachments": [
            "previsions_economiques_decembre.pdf"
        ],
        "name": "Manuel Lopez",
        "read": false
    },
    {
        "id": 63,
        "recipient": "Moi",
        "sender": "alejandro.martinez@latinfinance.com",
        "object": "Rapport d'investissement pour décembre",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe le rapport d'investissement pour le mois de décembre. Ce document présente les opportunités d'investissement, les risques associés et les stratégies recommandées pour maximiser le rendement des portefeuilles.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos remarques.\n\nCordialement,\nAlejandro Martinez",
        "attachments": [
            "rapport_investissement_decembre.pdf"
        ],
        "name": "Alejandro Martinez",
        "read": false
    },
    {
        "id": 64,
        "recipient": "Moi",
        "sender": "michele.bianchi@italianstrategy.com",
        "object": "Prévisions du marché immobilier pour décembre",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe les prévisions du marché immobilier pour le mois de décembre. Ce document inclut des analyses des tendances du marché, des projections de prix et des recommandations d'investissement.\n\nMerci de bien vouloir examiner ces informations et de me faire part de vos remarques.\n\nCordialement,\nMichele Bianchi",
        "attachments": [
            "previsions_marché_immobilier_decembre.pdf"
        ],
        "name": "Michele Bianchi",
        "read": false
    },
    {
        "id": 65,
        "recipient": "Moi",
        "sender": "john.smith@usconsulting.com",
        "object": "Rapport de sécurité pour le mois de novembre",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe le rapport de sécurité pour le mois de novembre. Ce document présente les incidents signalés, les mesures de prévention mises en place et les recommandations pour améliorer la sécurité dans l'organisation.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nJohn Smith",
        "attachments": [
            "rapport_securite_novembre.pdf"
        ],
        "name": "John Smith",
        "read": false
    },
    {
        "id": 66,
        "recipient": "Moi",
        "sender": "jurgen.klein@eurocorp.com",
        "object": "Rapport de performance pour le mois de novembre",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe le rapport de performance pour le mois de novembre. Ce document inclut une évaluation des objectifs atteints, des écarts et des stratégies pour optimiser la performance à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nJurgen Klein",
        "attachments": [
            "rapport_performance_novembre.pdf"
        ],
        "name": "Jurgen Klein",
        "read": false
    },
    {
        "id": 67,
        "recipient": "Moi",
        "sender": "piotr.majewski@polishconsulting.com",
        "object": "Plan d'action pour le mois de décembre",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe le plan d'action pour le mois de décembre. Ce document détaille les priorités, les ressources disponibles et les objectifs à atteindre pour ce mois.\n\nMerci de bien vouloir examiner ce plan et de me faire part de vos remarques.\n\nCordialement,\nPiotr Majewski",
        "attachments": [
            "plan_action_decembre.pdf"
        ],
        "name": "Piotr Majewski",
        "read": false
    },
    {
        "id": 68,
        "recipient": "Moi",
        "sender": "hassan.ahmed@middleeastcorp.com",
        "object": "Rapport de gestion pour décembre",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe le rapport de gestion pour le mois de décembre. Ce document couvre les performances des équipes, les défis rencontrés et les initiatives proposées pour améliorer l'efficacité opérationnelle.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nHassan Ahmed",
        "attachments": [
            "rapport_gestion_decembre.pdf"
        ],
        "name": "Hassan Ahmed",
        "read": false
    },
    {
        "id": 69,
        "recipient": "Moi",
        "sender": "emilia.moreno@latinamarketing.com",
        "object": "Analyse de la performance des campagnes publicitaires",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe l'analyse de la performance des campagnes publicitaires pour le mois de décembre. Ce document inclut les indicateurs clés, les résultats obtenus et les recommandations pour maximiser l'impact des futures campagnes.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nEmilia Moreno",
        "attachments": [
            "analyse_performance_campagnes_decembre.pdf"
        ],
        "name": "Emilia Moreno",
        "read": false
    },
    {
        "id": 70,
        "recipient": "Moi",
        "sender": "william.taylor@ukconsulting.com",
        "object": "Rapport d'analyse de la satisfaction client",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe le rapport d'analyse de la satisfaction client pour le mois de décembre. Ce document analyse les retours des clients, les tendances émergentes et les recommandations pour améliorer l'expérience client.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nWilliam Taylor",
        "attachments": [
            "analyse_satisfaction_client_decembre.pdf"
        ],
        "name": "William Taylor",
        "read": false
    },
    {
        "id": 71,
        "recipient": "Moi",
        "sender": "yvette.muller@frenchconsulting.com",
        "object": "Rapport de formation pour décembre",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe le rapport de formation pour le mois de décembre. Ce document couvre les modules de formation, les participants et les évaluations des formations dispensées.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nYvette Muller",
        "attachments": [
            "rapport_formation_decembre.pdf"
        ],
        "name": "Yvette Muller",
        "read": false
    },
    {
        "id": 72,
        "recipient": "Moi",
        "sender": "jakob.wagner@germansolutions.com",
        "object": "Rapport de conformité pour décembre",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe le rapport de conformité pour le mois de décembre. Ce document inclut les audits réalisés, les écarts constatés par rapport aux règlements et les actions correctives recommandées.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nJakob Wagner",
        "attachments": [
            "rapport_conformite_decembre.pdf"
        ],
        "name": "Jakob Wagner",
        "read": false
    },
    {
        "id": 73,
        "recipient": "Moi",
        "sender": "tomas.anderson@swedishconsulting.com",
        "object": "Mise à jour des prévisions de vente pour décembre",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe la mise à jour des prévisions de vente pour le mois de décembre. Ce document inclut les tendances actuelles du marché, les prévisions de croissance et les stratégies recommandées pour maximiser les ventes.\n\nMerci de bien vouloir examiner ces informations et de me faire part de vos remarques.\n\nCordialement,\nTomas Anderson",
        "attachments": [
            "previsions_vente_decembre.pdf"
        ],
        "name": "Tomas Anderson",
        "read": false
    },
    {
        "id": 74,
        "recipient": "Moi",
        "sender": "mark.owens@australiangroup.com",
        "object": "Rapport de performance pour décembre",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe le rapport de performance pour le mois de décembre. Ce document analyse les objectifs atteints, les écarts et les stratégies pour améliorer la performance à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nMark Owens",
        "attachments": [
            "rapport_performance_decembre.pdf"
        ],
        "name": "Mark Owens",
        "read": false
    },
    {
        "id": 75,
        "recipient": "Moi",
        "sender": "olivia.hill@ukanalysis.com",
        "object": "Rapport d'audit qualité pour décembre",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe le rapport d'audit qualité pour le mois de décembre. Ce document couvre les résultats des audits, les écarts par rapport aux normes de qualité, et les recommandations pour les améliorations nécessaires.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos remarques.\n\nCordialement,\nOlivia Hill",
        "attachments": [
            "rapport_audit_qualite_decembre.pdf"
        ],
        "name": "Olivia Hill",
        "read": false
    },
    {
        "id": 76,
        "recipient": "Moi",
        "sender": "katarina.kovacs@hungariananalysis.com",
        "object": "Rapport d'analyse de la chaîne logistique pour décembre",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de la chaîne logistique pour le mois de décembre. Ce document inclut les recommandations pour améliorer l'efficacité, les coûts associés et les points faibles identifiés.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nKatarina Kovacs",
        "attachments": [
            "rapport_chaine_logistique_decembre.pdf"
        ],
        "name": "Katarina Kovacs",
        "read": false
    },
    {
        "id": 77,
        "recipient": "Moi",
        "sender": "dmitry.sokolov@russianconsulting.com",
        "object": "Rapport de performance pour septembre",
        "content": "Bonjour,\n\nLe rapport de performance pour le mois de septembre est maintenant disponible. Il inclut une évaluation des objectifs atteints, des écarts par rapport aux attentes initiales et des recommandations pour améliorer la performance à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nDmitry Sokolov",
        "attachments": [
            "rapport_performance_septembre.pdf"
        ],
        "name": "Dmitry Sokolov",
        "read": false
    },
    {
        "id": 78,
        "recipient": "Moi",
        "sender": "vivian.nguyen@asianinsights.com",
        "object": "Analyse des tendances du marché asiatique pour octobre",
        "content": "Bonjour,\n\nL'analyse des tendances du marché asiatique pour le mois d'octobre est prête. Ce document examine les principaux développements économiques, la demande des consommateurs et les prévisions pour les mois à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nVivian Nguyen",
        "attachments": [
            "analyse_tendances_marche_asiatique_octobre.pdf"
        ],
        "name": "Vivian Nguyen",
        "read": false
    },
    {
        "id": 79,
        "recipient": "Moi",
        "sender": "georg.smith@ukresearch.com",
        "object": "Étude de marché pour le secteur technologique européen",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe l'étude de marché pour le secteur technologique européen. Ce document analyse les tendances actuelles, les innovations et les prévisions pour l'année à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nGeorg Smith",
        "attachments": [
            "etude_marche_technologie_europeen_octobre.pdf"
        ],
        "name": "Georg Smith",
        "read": false
    },
    {
        "id": 80,
        "recipient": "Moi",
        "sender": "linda.jones@usconsulting.com",
        "object": "Rapport d'audit qualité pour octobre",
        "content": "Bonjour,\n\nLe rapport d'audit qualité pour le mois d'octobre est prêt. Il couvre les résultats des audits réalisés, les écarts par rapport aux normes de qualité et les recommandations pour les améliorations nécessaires.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nLinda Jones",
        "attachments": [
            "rapport_audit_qualite_octobre.pdf"
        ],
        "name": "Linda Jones",
        "read": false
    },
    {
        "id": 81,
        "recipient": "Moi",
        "sender": "santiago.gonzalez@spanishconsulting.com",
        "object": "Plan de développement durable pour novembre",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe le plan de développement durable pour le mois de novembre. Ce document détaille les initiatives écologiques, les objectifs fixés et les actions prévues pour améliorer l'impact environnemental du projet.\n\nMerci de bien vouloir examiner ce plan et de me faire part de vos remarques.\n\nCordialement,\nSantiago Gonzalez",
        "attachments": [
            "plan_developpement_durable_novembre.pdf"
        ],
        "name": "Santiago Gonzalez",
        "read": false
    },
    {
        "id": 82,
        "recipient": "Moi",
        "sender": "hassan.ali@middleeastcorp.com",
        "object": "Rapport de gestion pour octobre",
        "content": "Bonjour,\n\nLe rapport de gestion pour le mois d'octobre est maintenant disponible. Ce document couvre les performances des équipes, les défis rencontrés et les initiatives proposées pour améliorer l'efficacité opérationnelle.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nHassan Ali",
        "attachments": [
            "rapport_gestion_octobre.pdf"
        ],
        "name": "Hassan Ali",
        "read": false
    },
    {
        "id": 83,
        "recipient": "Moi",
        "sender": "yukiko.saito@asianstrategy.com",
        "object": "Rapport de performance pour novembre",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe le rapport de performance pour le mois de novembre. Ce document inclut une évaluation des objectifs atteints, des écarts par rapport aux attentes initiales et des recommandations pour améliorer la performance à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nYukiko Saito",
        "attachments": [
            "rapport_performance_novembre.pdf"
        ],
        "name": "Yukiko Saito",
        "read": false
    },
    {
        "id": 84,
        "recipient": "Moi",
        "sender": "meiko.ito@japanconsulting.com",
        "object": "Étude de marché pour le secteur automobile japonais",
        "content": "Bonjour,\n\nVeuillez trouver en pièce jointe l'étude de marché pour le secteur automobile japonais. Ce document analyse les tendances actuelles, les prévisions de vente et les stratégies recommandées pour l'année à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nMeiko Ito",
        "attachments": [
            "etude_marche_automobile_japonais_novembre.pdf"
        ],
        "name": "Meiko Ito",
        "read": false
    },
    {
        "id": 85,
        "recipient": "Moi",
        "sender": "maia.kim@southkoreaconsulting.com",
        "object": "Rapport d'audit qualité pour novembre",
        "content": "Bonjour,\n\nLe rapport d'audit qualité pour le mois de novembre est prêt. Il couvre les résultats des audits réalisés, les écarts par rapport aux normes de qualité et les recommandations pour les améliorations nécessaires.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nMaia Kim",
        "attachments": [
            "rapport_audit_qualite_novembre.pdf"
        ],
        "name": "Maia Kim",
        "read": false
    },
    {
        "id": 86,
        "recipient": "Moi",
        "sender": "lucas.schmidt@germanconsulting.com",
        "object": "Rapport de performance pour novembre",
        "content": "Bonjour,\n\nLe rapport de performance pour le mois de novembre est joint à ce message. Ce document inclut une évaluation détaillée des objectifs atteints, des écarts par rapport aux attentes initiales et des recommandations pour améliorer la performance à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nLucas Schmidt",
        "attachments": [
            "rapport_performance_novembre.pdf"
        ],
        "name": "Lucas Schmidt",
        "read": false
    },
    {
        "id": 87,
        "recipient": "Moi",
        "sender": "serena.wilson@ukstrategy.com",
        "object": "Analyse des risques pour le projet A",
        "content": "Bonjour,\n\nL'analyse des risques pour le projet A est incluse dans le document ci-joint. Ce rapport identifie les risques potentiels, évalue leur impact potentiel sur le projet et propose des stratégies pour les gérer efficacement.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nSerena Wilson",
        "attachments": [
            "analyse_risques_projet_A.pdf"
        ],
        "name": "Serena Wilson",
        "read": false
    },
    {
        "id": 88,
        "recipient": "Moi",
        "sender": "hamed.khalil@middleeastresearch.com",
        "object": "Étude de marché pour le secteur des télécommunications au Moyen-Orient",
        "content": "Bonjour,\n\nL'étude de marché pour le secteur des télécommunications au Moyen-Orient est incluse dans le document ci-joint. Ce rapport analyse les tendances actuelles, les défis technologiques et les perspectives futures pour le marché.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nHamed Khalil",
        "attachments": [
            "etude_marche_telecommunications_moyen_orient.pdf"
        ],
        "name": "Hamed Khalil",
        "read": false
    },
    {
        "id": 89,
        "recipient": "Moi",
        "sender": "emmanuelle.lacroix@franceconsulting.com",
        "object": "Rapport de satisfaction client pour novembre",
        "content": "Bonjour,\n\nLe rapport de satisfaction client pour le mois d'octobre est joint à ce message. Ce document analyse les retours clients, les points forts et les domaines à améliorer en vue d'améliorer l'expérience utilisateur.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nEmmanuelle Lacroix",
        "attachments": [
            "rapport_satisfaction_client_octobre.pdf"
        ],
        "name": "Emmanuelle Lacroix",
        "read": false
    },
    {
        "id": 90,
        "recipient": "Moi",
        "sender": "yousef.alsharif@middleeastrnd.com",
        "object": "Étude comparative des tendances technologiques mondiales",
        "content": "Bonjour,\n\nL'étude comparative des tendances technologiques mondiales est incluse dans le document ci-joint. Ce rapport examine les innovations récentes, les marchés émergents et les perspectives futures pour l'industrie technologique.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nYousef Alsharif",
        "attachments": [
            "etude_comparative_tendances_technologiques.pdf"
        ],
        "name": "Yousef Alsharif",
        "read": false
    },
    {
        "id": 91,
        "recipient": "Moi",
        "sender": "matteo.rossi@italianbusiness.com",
        "object": "Bilan de performance Q4",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le bilan de performance pour le quatrième trimestre de. Ce document présente une évaluation complète des résultats atteints et des stratégies à mettre en œuvre pour améliorer les performances pour l'année prochaine.\n\nMerci de bien vouloir examiner ce bilan et de me faire part de vos retours.\n\nCordialement,\nMatteo Rossi",
        "attachments": [
            "bilan_performance_Q4.pdf"
        ],
        "name": "Matteo Rossi",
        "read": false
    },
    {
        "id": 92,
        "recipient": "Moi",
        "sender": "olga.pavlova@russianenterprise.com",
        "object": "Rapport d'analyse de marché pour la Russie",
        "content": "Bonjour,\n\nLe rapport d'analyse de marché pour la Russie est joint à ce message. Ce document explore les tendances actuelles, les perspectives économiques et les stratégies de marché pour les entreprises opérant en Russie.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nOlga Pavlova",
        "attachments": [
            "analyse_marche_russie.pdf"
        ],
        "name": "Olga Pavlova",
        "read": false
    },
    {
        "id": 93,
        "recipient": "Moi",
        "sender": "francois.benoit@francaisconsulting.com",
        "object": "Rapport d'études de cas pour le projet Z",
        "content": "Bonjour,\n\nLe rapport d'études de cas pour le projet Z est joint à ce message. Ce document fournit une analyse détaillée des résultats obtenus, des défis rencontrés et des recommandations pour les prochaines phases du projet.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nFrançois Benoit",
        "attachments": [
            "etudes_cas_projet_Z.pdf"
        ],
        "name": "François Benoit",
        "read": false
    },
    {
        "id": 94,
        "recipient": "Moi",
        "sender": "ismael.ramos@spanishconsulting.com",
        "object": "Prévisions économiques pour l'Espagne en 2025",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint les prévisions économiques pour l'Espagne en 2025. Ce document analyse les tendances actuelles, les facteurs influents et les prévisions pour l'année à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nIsmael Ramos",
        "attachments": [
            "previsions_economiques_espagne_2025.pdf"
        ],
        "name": "Ismael Ramos",
        "read": false
    },
    {
        "id": 95,
        "recipient": "Moi",
        "sender": "roberto.ferrara@italianbiz.com",
        "object": "Synthèse des tendances du marché italien",
        "content": "Bonjour,\n\nLa synthèse des tendances du marché italien est incluse dans le document ci-joint. Ce rapport examine les dynamiques actuelles, les segments clés du marché et les prévisions pour l'année prochaine.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nRoberto Ferrara",
        "attachments": [
            "tendances_marche_italien.pdf"
        ],
        "name": "Roberto Ferrara",
        "read": false
    },
    {
        "id": 96,
        "recipient": "Moi",
        "sender": "natalia.jones@britishconsulting.com",
        "object": "Rapport de performance Q3",
        "content": "Bonjour,\n\nLe rapport de performance pour le troisième trimestre de est joint à ce message. Ce document évalue les performances atteintes, les objectifs manqués et les recommandations pour améliorer les résultats futurs.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nNatalia Jones",
        "attachments": [
            "rapport_performance_Q3.pdf"
        ],
        "name": "Natalia Jones",
        "read": false
    },
    {
        "id": 97,
        "recipient": "Moi",
        "sender": "peter.smith@usconsulting.com",
        "object": "Tendances du marché américain",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint les tendances du marché américain pour. Ce document examine les changements clés, les prévisions économiques et les opportunités pour les entreprises opérant aux États-Unis.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nPeter Smith",
        "attachments": [
            "tendances_marche_americain.pdf"
        ],
        "name": "Peter Smith",
        "read": false
    },
    {
        "id": 98,
        "recipient": "Moi",
        "sender": "feng.chen@chinesebusiness.com",
        "object": "Analyse du marché chinois pour le secteur manufacturier",
        "content": "Bonjour,\n\nL'analyse du marché chinois pour le secteur manufacturier est incluse dans le document ci-joint. Ce rapport examine les tendances actuelles, les défis et les opportunités pour les entreprises opérant en Chine.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nFeng Chen",
        "attachments": [
            "analyse_marche_chine.pdf"
        ],
        "name": "Feng Chen",
        "read": false
    },
    {
        "id": 99,
        "recipient": "Moi",
        "sender": "maria.gomez@spanishbiz.com",
        "object": "Rapport d'enquête sur le climat économique en Espagne",
        "content": "Bonjour,\n\nLe rapport d'enquête sur le climat économique en Espagne est joint à ce message. Ce document analyse les indicateurs macroéconomiques, les prévisions de croissance et les défis futurs pour l'économique espagnole.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nMaria Gomez",
        "attachments": [
            "enquete_climat_economique_espagne.pdf"
        ],
        "name": "Maria Gomez",
        "read": false
    },
    {
        "id": 100,
        "recipient": "Moi",
        "sender": "ali.khan@pakistanconsulting.com",
        "object": "Tendances du marché au Pakistan pour",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint les tendances du marché au Pakistan pour. Ce document examine les dynamiques du marché, les défis spécifiques et les opportunités pour les entreprises opérant au Pakistan.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nAli Khan",
        "attachments": [
            "tendances_marche_pakistan.pdf"
        ],
        "name": "Ali Khan",
        "read": false
    },
    {
        "id": 101,
        "recipient": "Moi",
        "sender": "sara.lee@australianbusiness.com",
        "object": "Étude de cas pour le marché australien",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint l'étude de cas pour le marché australien. Ce document analyse les tendances actuelles, les défis spécifiques et les stratégies à adopter pour réussir sur ce marché.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nSara Lee",
        "attachments": [
            "etude_cas_marche_australien.pdf"
        ],
        "name": "Sara Lee",
        "read": false
    },
    {
        "id": 102,
        "recipient": "Moi",
        "sender": "nina.smith@canadianconsulting.com",
        "object": "Rapport d'analyse de marché pour le secteur énergétique au Canada",
        "content": "Bonjour,\n\nLe rapport d'analyse de marché pour le secteur énergétique au Canada est joint à ce message. Ce document examine les perspectives actuelles, les défis et les opportunités pour le marché énergétique canadien.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nNina Smith",
        "attachments": [
            "analyse_marche_energetique_canada.pdf"
        ],
        "name": "Nina Smith",
        "read": false
    },
    {
        "id": 103,
        "recipient": "Moi",
        "sender": "kevin.lee@singaporeconsulting.com",
        "object": "Prévisions économiques pour Singapour en 2025",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint les prévisions économiques pour Singapour en 2025. Ce document analyse les tendances économiques, les facteurs influents et les prévisions pour l'année à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nKevin Lee",
        "attachments": [
            "previsions_economiques_singapour_2025.pdf"
        ],
        "name": "Kevin Lee",
        "read": false
    },
    {
        "id": 104,
        "recipient": "Moi",
        "sender": "meng.wang@chineseenterprise.com",
        "object": "Synthèse des tendances du marché chinois pour le secteur de l'énergie",
        "content": "Bonjour,\n\nLa synthèse des tendances du marché chinois pour le secteur de l'énergie est incluse dans le document ci-joint. Ce rapport examine les dynamiques actuelles, les défis et les opportunités pour les entreprises opérant en Chine.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nMeng Wang",
        "attachments": [
            "tendances_marche_chine_energie.pdf"
        ],
        "name": "Meng Wang",
        "read": false
    },
    {
        "id": 105,
        "recipient": "Moi",
        "sender": "manuel.perez@spanishconsulting.com",
        "object": "Rapport d'étude de marché pour l'Espagne",
        "content": "Bonjour,\n\nLe rapport d'étude de marché pour l'Espagne est joint à ce message. Ce document analyse les segments clés du marché, les défis et les opportunités pour les entreprises opérant en Espagne.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nManuel Perez",
        "attachments": [
            "etude_marche_espagne.pdf"
        ],
        "name": "Manuel Perez",
        "read": false
    },
    {
        "id": 106,
        "recipient": "Moi",
        "sender": "juan.sanchez@latinomricanbusiness.com",
        "object": "Rapport de performance Q3",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport de performance pour le troisième trimestre de. Ce document évalue les résultats atteints, les écarts par rapport aux objectifs fixés et les recommandations pour améliorer les performances à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nJuan Sanchez",
        "attachments": [
            "rapport_performance_Q3.pdf"
        ],
        "name": "Juan Sanchez",
        "read": false
    },
    {
        "id": 107,
        "recipient": "Moi",
        "sender": "sophie.miller@canadianstrategy.com",
        "object": "Analyse de la performance Q3",
        "content": "Bonjour,\n\nL'analyse de la performance pour le troisième trimestre de est incluse dans le document ci-joint. Ce rapport présente une évaluation complète des résultats atteints, des défis rencontrés et des recommandations pour les phases suivantes.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nSophie Miller",
        "attachments": [
            "analyse_performance_Q3.pdf"
        ],
        "name": "Sophie Miller",
        "read": false
    },
    {
        "id": 108,
        "recipient": "Moi",
        "sender": "ahmed.abdullah@uaeconsulting.com",
        "object": "Rapport de performance Q3",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport de performance pour le troisième trimestre de. Ce document inclut une évaluation détaillée des objectifs atteints, des écarts par rapport aux attentes initiales et des recommandations pour améliorer la performance à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nAhmed Abdullah",
        "attachments": [
            "rapport_performance_Q3.pdf"
        ],
        "name": "Ahmed Abdullah",
        "read": false
    },
    {
        "id": 109,
        "recipient": "Moi",
        "sender": "marcos.rios@latinomricanbusiness.com",
        "object": "Tendances du marché latino-américain pour",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint les tendances du marché latino-américain pour. Ce document examine les dynamiques clés, les défis spécifiques et les opportunités pour les entreprises opérant en Amérique latine.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nMarcos Rios",
        "attachments": [
            "tendances_marche_latin_america.pdf"
        ],
        "name": "Marcos Rios",
        "read": false
    },
    {
        "id": 110,
        "recipient": "Moi",
        "sender": "amina.said@africanconsulting.com",
        "object": "Rapport d'analyse de marché pour l'Afrique",
        "content": "Bonjour,\n\nLe rapport d'analyse de marché pour l'Afrique est joint à ce message. Ce document analyse les perspectives économiques, les tendances actuelles et les stratégies de marché pour les entreprises opérant en Afrique.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nAmina Said",
        "attachments": [
            "analyse_marche_afrique.pdf"
        ],
        "name": "Amina Said",
        "read": false
    },
    {
        "id": 111,
        "recipient": "Moi",
        "sender": "keith.patterson@australianbusiness.com",
        "object": "Tendances du marché australien pour le secteur des services",
        "content": "Bonjour,\n\nLa synthèse des tendances du marché australien pour le secteur des services est incluse dans le document ci-joint. Ce rapport analyse les dynamiques actuelles, les défis spécifiques et les stratégies à adopter pour les entreprises opérant en Australie.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nKeith Patterson",
        "attachments": [
            "tendances_marche_australien_services.pdf"
        ],
        "name": "Keith Patterson",
        "read": false
    },
    {
        "id": 112,
        "recipient": "Moi",
        "sender": "louise.anderson@canadianstrategy.com",
        "object": "Rapport d'analyse de marché pour le secteur de la santé au Canada",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour le secteur de la santé au Canada. Ce document examine les défis spécifiques, les tendances actuelles et les opportunités pour les entreprises opérant dans le domaine de la santé au Canada.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nLouise Anderson",
        "attachments": [
            "analyse_marche_sante_canada.pdf"
        ],
        "name": "Louise Anderson",
        "read": false
    },
    {
        "id": 113,
        "recipient": "Moi",
        "sender": "mark.evans@usconsulting.com",
        "object": "Étude de marché pour le secteur technologique aux États-Unis",
        "content": "Bonjour,\n\nL'étude de marché pour le secteur technologique aux États-Unis est incluse dans le document ci-joint. Ce rapport analyse les tendances clés, les défis et les stratégies à adopter pour les entreprises opérant dans ce secteur.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nMark Evans",
        "attachments": [
            "etude_marche_techno_us.pdf"
        ],
        "name": "Mark Evans",
        "read": false
    },
    {
        "id": 114,
        "recipient": "Moi",
        "sender": "alexa.perez@latinomricanbusiness.com",
        "object": "Rapport d'analyse de marché pour le Mexique",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour le Mexique. Ce document examine les dynamiques du marché, les défis spécifiques et les opportunités pour les entreprises opérant au Mexique.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nAlexa Perez",
        "attachments": [
            "analyse_marche_mexique.pdf"
        ],
        "name": "Alexa Perez",
        "read": false
    },
    {
        "id": 115,
        "recipient": "Moi",
        "sender": "christopher.wright@ukconsulting.com",
        "object": "Étude de marché pour le secteur de la construction au Royaume-Uni",
        "content": "Bonjour,\n\nL'étude de marché pour le secteur de la construction au Royaume-Uni est incluse dans le document ci-joint. Ce rapport examine les tendances actuelles, les défis et les opportunités pour les entreprises opérant dans ce secteur.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nChristopher Wright",
        "attachments": [
            "etude_marche_construction_uk.pdf"
        ],
        "name": "Christopher Wright",
        "read": false
    },
    {
        "id": 116,
        "recipient": "Moi",
        "sender": "olga.kovalenko@russianbusiness.com",
        "object": "Rapport d'analyse de marché pour la Russie",
        "content": "Bonjour,\n\nLe rapport d'analyse de marché pour la Russie est joint à ce message. Ce document analyse les perspectives économiques, les dynamiques du marché et les stratégies de croissance pour les entreprises opérant en Russie.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nOlga Kovalenko",
        "attachments": [
            "analyse_marche_russie.pdf"
        ],
        "name": "Olga Kovalenko",
        "read": false
    },
    {
        "id": 117,
        "recipient": "Moi",
        "sender": "lina.alvarez@spanishconsulting.com",
        "object": "Rapport d'analyse de marché pour le secteur agricole en Espagne",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour le secteur agricole en Espagne. Ce document examine les tendances actuelles, les défis spécifiques et les opportunités pour les entreprises opérant dans le secteur agricole.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nLina Alvarez",
        "attachments": [
            "analyse_marche_agricole_espagne.pdf"
        ],
        "name": "Lina Alvarez",
        "read": false
    },
    {
        "id": 118,
        "recipient": "Moi",
        "sender": "omar.ali@africanbusiness.com",
        "object": "Rapport d'étude de marché pour le Kenya",
        "content": "Bonjour,\n\nLe rapport d'étude de marché pour le Kenya est joint à ce message. Ce document analyse les perspectives économiques, les tendances actuelles et les opportunités pour les entreprises opérant au Kenya.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nOmar Ali",
        "attachments": [
            "etude_marche_kenya.pdf"
        ],
        "name": "Omar Ali",
        "read": false
    },
    {
        "id": 119,
        "recipient": "Moi",
        "sender": "francois.leclerc@francoisconsulting.com",
        "object": "Analyse de marché pour le secteur manufacturier au Canada",
        "content": "Bonjour,\n\nLe rapport d'analyse de marché pour le secteur manufacturier au Canada est joint à ce message. Ce document examine les dynamiques actuelles, les défis spécifiques et les opportunités pour les entreprises opérant au Canada.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nFrançois Leclerc",
        "attachments": [
            "analyse_marche_manufacturier_canada.pdf"
        ],
        "name": "François Leclerc",
        "read": false
    },
    {
        "id": 120,
        "recipient": "Moi",
        "sender": "elena.gomez@spanishconsulting.com",
        "object": "Rapport d'analyse de marché pour l'Argentine",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour l'Argentine. Ce document analyse les dynamiques du marché, les défis spécifiques et les opportunités pour les entreprises opérant en Argentine.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nElena Gomez",
        "attachments": [
            "analyse_marche_argentine.pdf"
        ],
        "name": "Elena Gomez",
        "read": false
    },
    {
        "id": 121,
        "recipient": "Moi",
        "sender": "mike.johnson@usconsulting.com",
        "object": "Étude de marché pour le secteur de la finance aux États-Unis",
        "content": "Bonjour,\n\nL'étude de marché pour le secteur de la finance aux États-Unis est incluse dans le document ci-joint. Ce rapport analyse les tendances actuelles, les défis et les opportunités pour les entreprises opérant dans ce secteur.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nMike Johnson",
        "attachments": [
            "etude_marche_finance_us.pdf"
        ],
        "name": "Mike Johnson",
        "read": false
    },
    {
        "id": 122,
        "recipient": "Moi",
        "sender": "sandra.kim@koreaconsulting.com",
        "object": "Rapport d'analyse de marché pour la Corée du Sud",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour la Corée du Sud. Ce document examine les dynamiques actuelles, les défis et les stratégies pour les entreprises opérant en Corée du Sud.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nSandra Kim",
        "attachments": [
            "analyse_marche_coree_du_sud.pdf"
        ],
        "name": "Sandra Kim",
        "read": false
    },
    {
        "id": 123,
        "recipient": "Moi",
        "sender": "charles.brown@ukconsulting.com",
        "object": "Rapport de performance Q3",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport de performance pour le troisième trimestre de. Ce document évalue les résultats atteints, les écarts par rapport aux objectifs fixés et les recommandations pour améliorer les performances à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nCharles Brown",
        "attachments": [
            "rapport_performance_Q3.pdf"
        ],
        "name": "Charles Brown",
        "read": false
    },
    {
        "id": 124,
        "recipient": "Moi",
        "sender": "yuki.kato@japaneseenterprise.com",
        "object": "Tendances du marché japonais pour",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint les tendances du marché japonais pour. Ce document examine les dynamiques clés, les défis spécifiques et les opportunités pour les entreprises opérant au Japon.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nYuki Kato",
        "attachments": [
            "tendances_marche_japon.pdf"
        ],
        "name": "Yuki Kato",
        "read": false
    },
    {
        "id": 125,
        "recipient": "Moi",
        "sender": "francois.laroche@francoisconsulting.com",
        "object": "Rapport d'étude de marché pour la France",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'étude de marché pour la France. Ce document analyse les segments clés du marché, les défis spécifiques et les stratégies à adopter pour réussir en France.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nFrançois Laroche",
        "attachments": [
            "etude_marche_france.pdf"
        ],
        "name": "François Laroche",
        "read": false
    },
    {
        "id": 126,
        "recipient": "Moi",
        "sender": "anjali.singh@indianbusiness.com",
        "object": "Rapport d'analyse de marché pour l'Inde",
        "content": "Bonjour,\n\nLe rapport d'analyse de marché pour l'Inde est joint à ce message. Ce document examine les dynamiques actuelles, les défis spécifiques et les opportunités pour les entreprises opérant en Inde.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nAnjali Singh",
        "attachments": [
            "analyse_marche_inde.pdf"
        ],
        "name": "Anjali Singh",
        "read": false
    },
    {
        "id": 127,
        "recipient": "Moi",
        "sender": "marcus.smith@usconsulting.com",
        "object": "Rapport d'analyse de marché pour le secteur de la santé aux États-Unis",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour le secteur de la santé aux États-Unis. Ce document examine les tendances actuelles, les défis spécifiques et les opportunités pour les entreprises opérant dans ce secteur.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nMarcus Smith",
        "attachments": [
            "analyse_marche_sante_us.pdf"
        ],
        "name": "Marcus Smith",
        "read": false
    },
    {
        "id": 128,
        "recipient": "Moi",
        "sender": "lucas.cortez@latinomricanbusiness.com",
        "object": "Rapport d'analyse de marché pour le Brésil",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour le Brésil. Ce document examine les dynamiques du marché, les défis spécifiques et les opportunités pour les entreprises opérant au Brésil.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nLucas Cortez",
        "attachments": [
            "analyse_marche_bresil.pdf"
        ],
        "name": "Lucas Cortez",
        "read": false
    },
    {
        "id": 129,
        "recipient": "Moi",
        "sender": "carmen.rodriguez@spanishconsulting.com",
        "object": "Rapport d'étude de marché pour l'Espagne",
        "content": "Bonjour,\n\nLe rapport d'étude de marché pour l'Espagne est joint à ce message. Ce document analyse les segments clés du marché, les défis spécifiques et les stratégies à adopter pour réussir sur ce marché.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nCarmen Rodriguez",
        "attachments": [
            "etude_marche_espagne.pdf"
        ],
        "name": "Carmen Rodriguez",
        "read": false
    },
    {
        "id": 130,
        "recipient": "Moi",
        "sender": "jose.martinez@spanishconsulting.com",
        "object": "Rapport d'analyse de marché pour l'Amérique Latine",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour l'Amérique Latine. Ce document examine les dynamiques clés, les défis spécifiques et les opportunités pour les entreprises opérant en Amérique Latine.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nJosé Martinez",
        "attachments": [
            "analyse_marche_amerique_latine.pdf"
        ],
        "name": "José Martinez",
        "read": false
    },
    {
        "id": 131,
        "recipient": "Moi",
        "sender": "peter.hansen@australianbusiness.com",
        "object": "Tendances du marché australien pour",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint les tendances du marché australien pour. Ce document examine les dynamiques clés, les défis spécifiques et les opportunités pour les entreprises opérant en Australie.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nPeter Hansen",
        "attachments": [
            "tendances_marche_australien.pdf"
        ],
        "name": "Peter Hansen",
        "read": false
    },
    {
        "id": 132,
        "recipient": "Moi",
        "sender": "helen.lee@koreaconsulting.com",
        "object": "Rapport d'analyse de marché pour la Corée du Sud",
        "content": "Bonjour,\n\nLe rapport d'analyse de marché pour la Corée du Sud est joint à ce message. Ce document examine les dynamiques actuelles, les défis spécifiques et les opportunités pour les entreprises opérant en Corée du Sud.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nHelen Lee",
        "attachments": [
            "analyse_marche_coree_du_sud.pdf"
        ],
        "name": "Helen Lee",
        "read": false
    },
    {
        "id": 133,
        "recipient": "Moi",
        "sender": "ana.perez@spanishconsulting.com",
        "object": "Étude de marché pour le secteur des services en Espagne",
        "content": "Bonjour,\n\nL'étude de marché pour le secteur des services en Espagne est incluse dans le document ci-joint. Ce rapport analyse les tendances clés, les défis et les opportunités pour les entreprises opérant dans ce secteur.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nAna Perez",
        "attachments": [
            "etude_marche_services_espagne.pdf"
        ],
        "name": "Ana Perez",
        "read": false
    },
    {
        "id": 134,
        "recipient": "Moi",
        "sender": "leonardo.oliveira@latinamericanbusiness.com",
        "object": "Rapport d'analyse de marché pour le Pérou",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour le Pérou. Ce document examine les dynamiques du marché, les défis spécifiques et les opportunités pour les entreprises opérant au Pérou.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nLeonardo Oliveira",
        "attachments": [
            "analyse_marche_perou.pdf"
        ],
        "name": "Leonardo Oliveira",
        "read": false
    },
    {
        "id": 135,
        "recipient": "Moi",
        "sender": "julia.martins@portugueseconsulting.com",
        "object": "Rapport d'analyse de marché pour le Portugal",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour le Portugal. Ce document examine les dynamiques actuelles, les défis spécifiques et les opportunités pour les entreprises opérant au Portugal.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nJulia Martins",
        "attachments": [
            "analyse_marche_portugal.pdf"
        ],
        "name": "Julia Martins",
        "read": false
    },
    {
        "id": 136,
        "recipient": "Moi",
        "sender": "luca.mancini@italianbusiness.com",
        "object": "Rapport d'étude de marché pour l'Italie",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'étude de marché pour l'Italie. Ce document analyse les dynamiques du marché, les défis spécifiques et les opportunités pour les entreprises opérant en Italie.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nLuca Mancini",
        "attachments": [
            "etude_marche_italie.pdf"
        ],
        "name": "Luca Mancini",
        "read": false
    },
    {
        "id": 137,
        "recipient": "Moi",
        "sender": "noel.mendes@portugueseconsulting.com",
        "object": "Rapport d'analyse de marché pour le secteur du tourisme au Portugal",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour le secteur du tourisme au Portugal. Ce document examine les dynamiques clés, les défis spécifiques et les opportunités pour les entreprises opérant dans ce secteur.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nNoel Mendes",
        "attachments": [
            "analyse_marche_tourisme_portugal.pdf"
        ],
        "name": "Noel Mendes",
        "read": false
    },
    {
        "id": 138,
        "recipient": "Moi",
        "sender": "david.jones@australianbusiness.com",
        "object": "Rapport d'analyse de marché pour l'Australie",
        "content": "Bonjour,\n\nLe rapport d'analyse de marché pour l'Australie est joint à ce message. Ce document examine les dynamiques du marché, les défis spécifiques et les opportunités pour les entreprises opérant en Australie.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nDavid Jones",
        "attachments": [
            "analyse_marche_australie.pdf"
        ],
        "name": "David Jones",
        "read": false
    },
    {
        "id": 139,
        "recipient": "Moi",
        "sender": "francois.bois@francoisconsulting.com",
        "object": "Étude de marché pour le secteur de l'énergie au Canada",
        "content": "Bonjour,\n\nL'étude de marché pour le secteur de l'énergie au Canada est incluse dans le document ci-joint. Ce rapport analyse les tendances clés, les défis et les opportunités pour les entreprises opérant dans ce secteur.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nFrançois Bois",
        "attachments": [
            "etude_marche_energie_canada.pdf"
        ],
        "name": "François Bois",
        "read": false
    },
    {
        "id": 140,
        "recipient": "Moi",
        "sender": "catherine.smith@usconsulting.com",
        "object": "Rapport d'analyse de marché pour le secteur des télécommunications",
        "content": "Bonjour,\n\nLe rapport d'analyse de marché pour le secteur des télécommunications aux États-Unis est joint à ce message. Ce document analyse les dynamiques actuelles, les défis et les opportunités pour les entreprises opérant dans ce secteur.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nCatherine Smith",
        "attachments": [
            "analyse_marche_telecoms_us.pdf"
        ],
        "name": "Catherine Smith",
        "read": false
    },
    {
        "id": 141,
        "recipient": "Moi",
        "sender": "raoul.duval@frenchconsulting.com",
        "object": "Étude de marché pour le secteur automobile en France",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint l'étude de marché pour le secteur automobile en France. Ce document analyse les tendances actuelles, les défis spécifiques et les opportunités pour les entreprises opérant dans ce secteur.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nRaoul Duval",
        "attachments": [
            "etude_marche_automobile_france.pdf"
        ],
        "name": "Raoul Duval",
        "read": false
    },
    {
        "id": 142,
        "recipient": "Moi",
        "sender": "maria.santos@portugueseconsulting.com",
        "object": "Rapport d'analyse de marché pour le Portugal",
        "content": "Bonjour,\n\nLe rapport d'analyse de marché pour le Portugal est joint à ce message. Ce document examine les dynamiques clés, les défis spécifiques et les opportunités pour les entreprises opérant au Portugal.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nMaria Santos",
        "attachments": [
            "analyse_marche_portugal.pdf"
        ],
        "name": "Maria Santos",
        "read": false
    },
    {
        "id": 143,
        "recipient": "Moi",
        "sender": "susan.kim@koreaconsulting.com",
        "object": "Rapport d'analyse de marché pour la Corée du Sud",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour la Corée du Sud. Ce document examine les dynamiques actuelles, les défis spécifiques et les opportunités pour les entreprises opérant en Corée du Sud.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nSusan Kim",
        "attachments": [
            "analyse_marche_coree_du_sud.pdf"
        ],
        "name": "Susan Kim",
        "read": false
    },
    {
        "id": 144,
        "recipient": "Moi",
        "sender": "john.doe@usconsulting.com",
        "object": "Rapport de performance pour le deuxième trimestre",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport de performance pour le deuxième trimestre de. Ce document évalue les résultats atteints, les écarts par rapport aux objectifs fixés et les recommandations pour améliorer les performances à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nJohn Doe",
        "attachments": [
            "rapport_performance_Q2.pdf"
        ],
        "name": "John Doe",
        "read": false
    },
    {
        "id": 145,
        "recipient": "Moi",
        "sender": "pierre.clement@frenchconsulting.com",
        "object": "Étude de marché pour le secteur immobilier en France",
        "content": "Bonjour,\n\nL'étude de marché pour le secteur immobilier en France est incluse dans le document ci-joint. Ce rapport analyse les dynamiques clés, les défis et les opportunités pour les entreprises opérant dans ce secteur.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nPierre Clément",
        "attachments": [
            "etude_marche_immobilier_france.pdf"
        ],
        "name": "Pierre Clément",
        "read": false
    },
    {
        "id": 146,
        "recipient": "Moi",
        "sender": "sergio.gomez@latinamericanbusiness.com",
        "object": "Rapport d'analyse de marché pour le Chili",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour le Chili. Ce document examine les dynamiques du marché, les défis spécifiques et les opportunités pour les entreprises opérant au Chili.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nSergio Gomez",
        "attachments": [
            "analyse_marche_chili.pdf"
        ],
        "name": "Sergio Gomez",
        "read": false
    },
    {
        "id": 147,
        "recipient": "Moi",
        "sender": "fernando.garcia@spanishconsulting.com",
        "object": "Rapport d'analyse de marché pour l'Espagne",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour l'Espagne. Ce document examine les dynamiques actuelles, les défis spécifiques et les opportunités pour les entreprises opérant en Espagne.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nFernando Garcia",
        "attachments": [
            "analyse_marche_espagne.pdf"
        ],
        "name": "Fernando Garcia",
        "read": false
    },
    {
        "id": 148,
        "recipient": "Moi",
        "sender": "anabelle.baumann@germanbusiness.com",
        "object": "Rapport d'analyse de marché pour l'Allemagne",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour l'Allemagne. Ce document examine les dynamiques clés, les défis spécifiques et les opportunités pour les entreprises opérant en Allemagne.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nAnabelle Baumann",
        "attachments": [
            "analyse_marche_allemagne.pdf"
        ],
        "name": "Anabelle Baumann",
        "read": false
    },
    {
        "id": 149,
        "recipient": "Moi",
        "sender": "gerard.dupont@frenchconsulting.com",
        "object": "Rapport d'étude de marché pour la France",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'étude de marché pour la France. Ce document analyse les dynamiques clés, les défis spécifiques et les opportunités pour les entreprises opérant en France.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nGérard Dupont",
        "attachments": [
            "etude_marche_france.pdf"
        ],
        "name": "Gérard Dupont",
        "read": false
    },
    {
        "id": 150,
        "recipient": "Moi",
        "sender": "michele.bianchi@italianbusiness.com",
        "object": "Rapport d'analyse de marché pour l'Italie",
        "content": "Bonjour,\n\nLe rapport d'analyse de marché pour l'Italie est joint à ce message. Ce document examine les dynamiques actuelles, les défis spécifiques et les opportunités pour les entreprises opérant en Italie.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nMichele Bianchi",
        "attachments": [
            "analyse_marche_italie.pdf"
        ],
        "name": "Michele Bianchi",
        "read": false
    },
    {
        "id": 151,
        "recipient": "Moi",
        "sender": "carlos.hernandez@spanishconsulting.com",
        "object": "Rapport d'analyse de marché pour l'Amérique Latine",
        "content": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour l'Amérique Latine. Ce document examine les dynamiques clés, les défis spécifiques et les opportunités pour les entreprises opérant en Amérique Latine.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nCarlos Hernandez",
        "attachments": [
            "analyse_marche_amerique_latine.pdf"
        ],
        "name": "Carlos Hernandez",
        "read": false
    },
    {
        "id": 152,
        "recipient": "Moi",
        "sender": "maria.jimenez@spanishconsulting.com",
        "object": "Rapport d'étude de marché pour l'Espagne",
        "content": "Bonjour,\n\nL'étude de marché pour l'Espagne est incluse dans le document ci-joint. Ce rapport analyse les dynamiques clés, les défis et les opportunités pour les entreprises opérant en Espagne.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nMaria Jimenez",
        "attachments": [
            "etude_marche_espagne.pdf"
        ],
        "name": "Maria Jimenez",
        "read": false
    }
]