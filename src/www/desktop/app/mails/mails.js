let mails = [
    {
        "id": 0,
        "destinataire": "Moi",
        "expediteur": "ma.zimmermann@unistra.fr",
        "objet": "Bienvenue chez nous",
        "contenu": "Bonjour, \n\n Bienvenue ! Je suis ravi de t’accueillir dans ce rôle essentiel. Les chercheurs comptent sur toi pour répondre à leurs mails et corriger leurs erreurs.\n\nPour faciliter ta prise de fonctions, une sélection de notes laissées par ton prédécesseur est à ta disposition dans l'application 'Notes' sur le bureau. Elles contiennent des repères utiles pour que tu puisses te familiariser avec les aspects clés du poste. \n\nEncore une fois, bienvenue ! Je te souhaite beaucoup de succès dans cette nouvelle aventure.\n\nCordialement,\nMathieu Zimmermann\nChef Départemental Suprême",
        "nom": "Mathieu Zimmermann",
        "lu": false
    },
    {
        "id": 1,
        "destinataire": "Moi",
        "expediteur": "jean.dupont@ventes.com",
        "objet": "Rapport mensuel de ventes pour novembre",
        "contenu": "Bonjour,\n\nJe vous envoie le rapport mensuel des ventes pour le mois de novembre. Ce rapport inclut une analyse détaillée des performances de chaque département, ainsi que des recommandations pour améliorer les ventes au cours des prochains mois.\n\nVeuillez trouver ci-joint le document complet. Ce rapport contient des graphiques, des tableaux et des analyses approfondies des tendances de vente. Nous avons également inclus des commentaires sur les performances individuelles et des suggestions pour améliorer les résultats.\n\nN'hésitez pas à me contacter si vous avez des questions ou si vous souhaitez discuter des résultats en détail. Votre feedback est très important pour nous aider à améliorer nos stratégies de vente.\n\nCordialement,\nJean Dupont",
        "piecesJointes": [
            "rapport_ventes_novembre.pdf"
        ],
        "nom": "Jean Dupont",
        "lu": false
    },
    {
        "id": 2,
        "destinataire": "Moi",
        "expediteur": "sophie.martin@projet.com",
        "objet": "Invitation à la réunion de projet du 5 décembre",
        "contenu": "Bonjour,\n\nVous êtes cordialement invité à la réunion de projet qui aura lieu le 5 décembre à 14h. Cette réunion est cruciale pour discuter des progrès réalisés jusqu'à présent et pour planifier les prochaines étapes. L'ordre du jour inclut une revue des objectifs du projet, une discussion sur les défis rencontrés, et une planification des actions à entreprendre pour atteindre nos objectifs.\n\nNous aborderons également les résultats des analyses récentes et les prochaines étapes pour assurer le succès du projet. Votre participation est essentielle pour garantir que nous restons sur la bonne voie.\n\nMerci de confirmer votre présence dès que possible. Si vous avez des points spécifiques à discuter, veuillez les envoyer à l'avance pour que nous puissions les inclure dans l'ordre du jour.\n\nBien cordialement,\nSophie Martin",
        "piecesJointes": [
            "resultats_analyse.pdf"
        ],
        "nom": "Sophie Martin",
        "lu": false
    },
    {
        "id": 3,
        "destinataire": "Moi",
        "expediteur": "marc.smith@calendrier.com",
        "objet": "Mise à jour du calendrier pour décembre",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint la mise à jour du calendrier pour le mois de décembre. Cette mise à jour inclut toutes les réunions, les deadlines et les événements importants pour le mois à venir. Il est essentiel de bien organiser notre emploi du temps pour assurer le bon déroulement de nos activités.\n\nNous avons ajouté plusieurs nouvelles réunions et événements en fonction des besoins du projet. Veuillez vérifier les dates et les heures pour vous assurer que vous êtes disponible pour toutes les réunions importantes. Si vous avez des conflits d'horaire, veuillez me le faire savoir dès que possible.\n\nN'hésitez pas à me contacter si vous avez des questions ou si vous souhaitez apporter des modifications au calendrier. Votre collaboration est très appréciée.\n\nCordialement,\nMarc Smith",
        "piecesJointes": [
            "calendrier_decembre.xlsx"
        ],
        "nom": "Marc Smith",
        "lu": false
    },
    {
        "id": 4,
        "destinataire": "Moi",
        "expediteur": "lisa.johnson@feedback.com",
        "objet": "Feedback sur le projet de novembre",
        "contenu": "Bonjour,\n\nVoici le feedback sur le projet que nous avons discuté lors de notre dernière réunion. Ce feedback inclut des commentaires détaillés sur les différents aspects du projet, ainsi que des suggestions pour améliorer les performances et atteindre nos objectifs.\n\nMerci de votre attention et de votre collaboration. N'hésitez pas à me contacter si vous avez des questions ou si vous souhaitez discuter des points abordés.\n\nBien cordialement,\nLisa Johnson",
        "piecesJointes": [
            "feedback_projet.docx"
        ],
        "nom": "Lisa Johnson",
        "lu": false
    },
    {
        "id": 5,
        "destinataire": "Moi",
        "expediteur": "pierre.leclerc@contrat.com",
        "objet": "Nouveau contrat à signer pour le projet XYZ",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le nouveau contrat à signer pour le projet XYZ. Ce contrat inclut tous les termes et conditions nécessaires pour la réalisation du projet. Il est important de le lire attentivement avant de le signer.\n\nMerci de me retourner le contrat signé avant le 10 décembre. Si vous avez des questions ou des préoccupations, n'hésitez pas à me contacter.\n\nCordialement,\nPierre Leclerc",
        "piecesJointes": [
            "contrat_projet_XYZ.pdf"
        ],
        "nom": "Pierre Leclerc",
        "lu": false
    },
    {
        "id": 6,
        "destinataire": "Moi",
        "expediteur": "elodie.simon@analyticsgroup.com",
        "objet": "Fichier complémentaire pour analyse",
        "contenu": "Bonjour,\n\nJe vous envoie un fichier supplémentaire pour compléter votre analyse. Ce fichier contient des informations détaillées qui pourraient être utiles pour vos travaux en cours.\n\nN'hésitez pas à revenir vers moi pour toute question ou si vous avez besoin de plus de détails.\n\nCordialement,\nÉlodie Simon",
        "piecesJointes": [
            "complementary_analysis_data.xlsx"
        ],
        "nom": "Élodie Simon",
        "lu": false
    },
    {
        "id": 7,
        "destinataire": "Moi",
        "expediteur": "marie.dubois@techsolutions.com",
        "objet": "Rapport trimestriel",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport trimestriel pour le troisième trimestre. Ce rapport inclut une analyse détaillée des performances de chaque département, ainsi que des recommandations pour améliorer les résultats au cours des prochains mois.\n\nMerci de votre attention. N'hésitez pas à me contacter si vous avez des questions ou si vous souhaitez discuter des résultats en détail.\n\nCordialement,\nMarie Dubois",
        "piecesJointes": [
            "rapport_trimestriel_Q3.pdf"
        ],
        "nom": "Marie Dubois",
        "lu": false
    },
    {
        "id": 8,
        "destinataire": "Moi",
        "expediteur": "john.doe@internationalcorp.com",
        "objet": "Invitation à la conférence annuelle",
        "contenu": "Bonjour,\n\nVous êtes invité à notre conférence annuelle qui aura lieu le 15 décembre. Cette conférence est une excellente occasion de discuter des progrès réalisés et de planifier les prochaines étapes pour l'année à venir.\n\nMerci de confirmer votre présence dès que possible. Si vous avez des points spécifiques à discuter, veuillez les envoyer à l'avance pour que nous puissions les inclure dans l'ordre du jour.\n\nBien cordialement,\nJohn Doe",
        "piecesJointes": [
            "donnees_conferences"
        ],
        "nom": "John Doe",
        "lu": false
    },
    {
        "id": 9,
        "destinataire": "Moi",
        "expediteur": "lisa.taylor@financialgroup.com",
        "objet": "Analyse des prévisions financières pour décembre",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe l'analyse des prévisions financières pour le mois de décembre. Ce document inclut une évaluation détaillée des flux de trésorerie, des projections de revenus et des prévisions de dépenses. Les données sont accompagnées de graphiques et de tableaux pour une visualisation claire des tendances à venir.\n\nMerci de bien vouloir jeter un coup d'œil aux prévisions et de me faire part de vos commentaires éventuels avant la fin de la semaine. Votre retour est essentiel pour ajuster nos stratégies financières.\n\nCordialement,\nLisa Taylor",
        "piecesJointes": [
            "analyse_previsions_financieres_decembre.xlsx"
        ],
        "nom": "Lisa Taylor",
        "lu": false
    },
    {
        "id": 10,
        "destinataire": "Moi",
        "expediteur": "alex.wang@hrsolutions.com",
        "objet": "Résultats du sondage de satisfaction client",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe les résultats du sondage de satisfaction client pour le mois de novembre. Ce document présente les retours obtenus sur nos services, avec des commentaires détaillés et des suggestions pour améliorer l'expérience client. Les données sont présentées sous forme de graphiques et de tableaux pour une meilleure compréhension.\n\nMerci de bien vouloir examiner ces résultats et de me faire part de vos remarques. Votre avis est essentiel pour ajuster nos stratégies de service client.\n\nCordialement,\nAlex Wang",
        "piecesJointes": [
            "sondage_satisfaction_client_novembre.xlsx"
        ],
        "nom": "Alex Wang",
        "lu": false
    },
    {
        "id": 11,
        "destinataire": "Moi",
        "expediteur": "maria.santos@marketanalysis.com",
        "objet": "Étude de marché pour le produit XYZ",
        "contenu": "Bonjour,\n\nEn pièce jointe, vous trouverez l'étude de marché pour le produit XYZ. Cette étude inclut une analyse complète de la demande, de la concurrence et des tendances du marché. Nous avons également ajouté des recommandations stratégiques pour maximiser les ventes et améliorer la position de notre produit sur le marché.\n\nVeuillez consulter le document et me faire part de vos commentaires avant la fin de la semaine. Votre avis est très précieux pour ajuster notre stratégie commerciale.\n\nCordialement,\nMaria Santos",
        "piecesJointes": [
            "etude_marche_produit_XYZ.pdf"
        ],
        "nom": "Maria Santos",
        "lu": false
    },
    {
        "id": 12,
        "destinataire": "Moi",
        "expediteur": "nicolas.ghilardi@consulting.com",
        "objet": "Analyse des risques pour le projet ABC",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint l'analyse des risques pour le projet ABC. Ce document détaille les principaux risques identifiés, leur impact potentiel sur le projet, et les mesures de mitigation proposées. Nous avons également inclus des recommandations pour minimiser les risques tout au long de la réalisation du projet.\n\nMerci de bien vouloir vérifier les informations et de me faire part de vos suggestions. Votre retour est essentiel pour assurer la réussite du projet.\n\nCordialement,\nNicolas Ghilardi",
        "piecesJointes": [
            "analyse_risques_projet_ABC.pdf"
        ],
        "nom": "Nicolas Ghilardi",
        "lu": false
    },
    {
        "id": 13,
        "destinataire": "Moi",
        "expediteur": "carmen.oliveira@marketingstrategy.com",
        "objet": "Stratégie de contenu pour janvier 2025",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe notre stratégie de contenu pour le mois de janvier 2025. Cette stratégie comprend des recommandations pour les sujets de blog, les campagnes sur les réseaux sociaux et les emailings. Nous avons également inclus une planification détaillée pour assurer la cohérence du message et maximiser l'engagement de notre audience cible.\n\nN'hésitez pas à me contacter si vous avez des questions ou des suggestions pour ajuster la stratégie.\n\nCordialement,\nCarmen Oliveira",
        "piecesJointes": [
            "strategie_contenu_janvier_2025.xlsx"
        ],
        "nom": "Carmen Oliveira",
        "lu": false
    },
    {
        "id": 14,
        "destinataire": "Moi",
        "expediteur": "alvaro.ramos@itconsulting.com",
        "objet": "Résultats de l'audit de sécurité",
        "contenu": "Bonjour,\n\nEn pièce jointe, vous trouverez les résultats de l'audit de sécurité réalisé pour notre infrastructure IT. Ce document inclut une évaluation complète des vulnérabilités identifiées et des recommandations pour améliorer la sécurité. Les données sont accompagnées d'une analyse détaillée et de propositions d'actions correctives à mettre en œuvre.\n\nMerci de bien vouloir examiner ces résultats et de me faire part de vos remarques.\n\nCordialement,\nÁlvaro Ramos",
        "piecesJointes": [
            "audit_securite_infrastructure_IT.pdf"
        ],
        "nom": "Álvaro Ramos",
        "lu": false
    },
    {
        "id": 15,
        "destinataire": "Moi",
        "expediteur": "margaux.dupont@designstudio.com",
        "objet": "Ébauche du nouveau logo de l'entreprise",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe l'ébauche du nouveau logo pour notre entreprise. Cette proposition inclut plusieurs concepts créatifs qui reflètent l'image de notre marque. Nous avons inclus des versions colorées et en noir et blanc pour divers supports de communication.\n\nMerci de nous faire part de vos commentaires avant la fin de la semaine pour que nous puissions finaliser le logo.\n\nCordialement,\nMargaux Dupont",
        "piecesJointes": [
            "ebauche_nouveau_logo_entreprise.pdf"
        ],
        "nom": "Margaux Dupont",
        "lu": false
    },
    {
        "id": 16,
        "destinataire": "Moi",
        "expediteur": "carlos.martinez@analyticsfirm.com",
        "objet": "Étude de faisabilité pour le projet QRS",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe l'étude de faisabilité pour le projet QRS. Ce document inclut une évaluation complète des coûts, des délais et des ressources nécessaires pour la mise en œuvre du projet. Nous avons également ajouté une analyse des risques associés et des recommandations pour minimiser les impacts négatifs.\n\nMerci de bien vouloir examiner cette étude et de me faire part de vos commentaires.\n\nCordialement,\nCarlos Martinez",
        "piecesJointes": [
            "etude_faisabilite_projet_QRS.pdf"
        ],
        "nom": "Carlos Martinez",
        "lu": false
    },
    {
        "id": 17,
        "destinataire": "Moi",
        "expediteur": "sandrine.leclercq@hrsolutions.com",
        "objet": "Rapport annuel de recrutement",
        "contenu": "Bonjour,\n\nEn pièce jointe, vous trouverez le rapport annuel de recrutement pour l'année. Ce rapport inclut des statistiques détaillées sur les candidatures, les entretiens et les offres d'emploi. Nous avons également ajouté des recommandations pour optimiser le processus de recrutement et améliorer l'expérience candidat.\n\nMerci de bien vouloir consulter le document et de me faire part de vos suggestions pour améliorer nos stratégies.\n\nCordialement,\nSandrine Leclercq",
        "piecesJointes": [
            "rapport_annuel_recrutement.pdf"
        ],
        "nom": "Sandrine Leclercq",
        "lu": false
    },
    {
        "id": 18,
        "destinataire": "Moi",
        "expediteur": "nathalie.grand@consultingfirm.com",
        "objet": "Analyse SWOT pour le projet ABC",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint l'analyse SWOT pour le projet ABC. Ce document inclut une évaluation complète des forces, des faiblesses, des opportunités et des menaces identifiées pour le projet. Nous avons également ajouté des recommandations pour maximiser les points forts et atténuer les points faibles.\n\nMerci de bien vouloir examiner cette analyse et de me faire part de vos remarques.\n\nCordialement,\nNathalie Grand",
        "piecesJointes": [
            "analyse_SWOT_projet_ABC.pdf"
        ],
        "nom": "Nathalie Grand",
        "lu": false
    },
    {
        "id": 19,
        "destinataire": "Moi",
        "expediteur": "ali.khan@marketresearch.com",
        "objet": "Rapport de la recherche de marché pour le produit XYZ",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe le rapport de la recherche de marché pour le produit XYZ. Ce document présente les résultats des études de marché, les tendances du secteur et des recommandations stratégiques pour améliorer la pénétration de marché du produit.\n\nMerci de bien vouloir examiner le rapport et de me faire part de vos commentaires.\n\nCordialement,\nAli Khan",
        "piecesJointes": [
            "rapport_recherche_marche_produit_XYZ.pdf"
        ],
        "nom": "Ali Khan",
        "lu": false
    },
    {
        "id": 20,
        "destinataire": "Moi",
        "expediteur": "benjamin.harris@creativeagency.com",
        "objet": "Campagne publicitaire de fin d'année",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe notre proposition de campagne publicitaire pour la fin d'année. Cette campagne vise à promouvoir nos produits en mettant en avant les offres spéciales et les remises saisonnières. Nous avons inclus plusieurs visuels et slogans qui pourraient capturer l'attention de notre cible.\n\nMerci de bien vouloir examiner ces propositions et de me faire part de vos retours pour finaliser la campagne.\n\nCordialement,\nBenjamin Harris",
        "piecesJointes": [
            "campagne_publicitaire_fin_d_annee.pdf"
        ],
        "nom": "Benjamin Harris",
        "lu": false
    },
    {
        "id": 21,
        "destinataire": "Moi",
        "expediteur": "jacques.vanhoenacker@dataanalysis.com",
        "objet": "Analyse des données pour le mois de novembre",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint l'analyse des données pour le mois de novembre. Ce rapport inclut des graphiques et des tableaux montrant les tendances et les performances clés. Les données sont complètes et peuvent être utilisées pour une meilleure prise de décision stratégique.\n\nMerci de bien vouloir consulter le document et de me faire part de vos remarques.\n\nCordialement,\nJacques Vanhoenacker",
        "piecesJointes": [
            "analyse_donnees_novembre.pdf"
        ],
        "nom": "Jacques Vanhoenacker",
        "lu": false
    },
    {
        "id": 22,
        "destinataire": "Moi",
        "expediteur": "cindy.rodriguez@logistics.com",
        "objet": "Planification logistique pour janvier 2025",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe le plan de logistique pour le mois de janvier 2025. Ce document détaille les livraisons prévues, les itinéraires et les ressources nécessaires pour garantir un bon suivi des commandes. Nous avons également inclus des ajustements nécessaires pour répondre à la demande accrue pendant la saison de ventes.\n\nMerci de bien vouloir vérifier le plan et de me faire part de vos commentaires.\n\nCordialement,\nCindy Rodriguez",
        "piecesJointes": [
            "plan_logistique_janvier_2025.pdf"
        ],
        "nom": "Cindy Rodriguez",
        "lu": false
    },
    {
        "id": 23,
        "destinataire": "Moi",
        "expediteur": "elise.hubert@designconsulting.com",
        "objet": "Propositions de design pour le site web",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe plusieurs propositions de design pour le nouveau site web de notre entreprise. Chaque proposition est accompagnée de visuels et de descriptions détaillées. Nous avons inclus des éléments qui mettent en avant notre marque et améliorent l'expérience utilisateur.\n\nMerci de bien vouloir examiner ces propositions et de me faire part de vos préférences.\n\nCordialement,\nElise Hubert",
        "piecesJointes": [
            "propositions_design_site_web.pdf"
        ],
        "nom": "Elise Hubert",
        "lu": false
    },
    {
        "id": 24,
        "destinataire": "Moi",
        "expediteur": "jacqueline.leroux@accounting.com",
        "objet": "État des finances pour novembre",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint l'état des finances pour le mois de novembre. Ce rapport inclut des informations sur les revenus, les dépenses et les prévisions de trésorerie. Les données sont présentées sous forme de graphiques et de tableaux pour une meilleure visualisation.\n\nMerci de bien vouloir examiner ce document et de me faire part de vos remarques.\n\nCordialement,\nJacqueline Leroux",
        "piecesJointes": [
            "etat_finances_novembre.pdf"
        ],
        "nom": "Jacqueline Leroux",
        "lu": false
    },
    {
        "id": 25,
        "destinataire": "Moi",
        "expediteur": "serge.barthelemy@consultingfirm.com",
        "objet": "Résultats du test de produit",
        "contenu": "Bonjour,\n\nEn pièce jointe, vous trouverez les résultats du test de produit pour le mois de novembre. Ce document inclut une évaluation détaillée des performances du produit, des commentaires des clients et des recommandations pour améliorer la qualité.\n\nMerci de bien vouloir examiner ces résultats et de me faire part de vos remarques.\n\nCordialement,\nSerge Barthélemy",
        "piecesJointes": [
            "resultats_test_produit_novembre.pdf"
        ],
        "nom": "Serge Barthélemy",
        "lu": false
    },
    {
        "id": 26,
        "destinataire": "Moi",
        "expediteur": "michele.potier@finance.com",
        "objet": "Prévisions budgétaires pour 2025",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe les prévisions budgétaires pour l'année 2025. Ce document inclut des estimations pour les revenus, les dépenses et les investissements prévus. Les données sont accompagnées de graphiques et de tableaux pour une meilleure visualisation.\n\nMerci de bien vouloir consulter ce document et de me faire part de vos remarques.\n\nCordialement,\nMichèle Potier",
        "piecesJointes": [
            "previsions_budgetaires_2025.xlsx"
        ],
        "nom": "Michèle Potier",
        "lu": false
    },
    {
        "id": 27,
        "destinataire": "Moi",
        "expediteur": "samuel.guillot@dataanalysis.com",
        "objet": "Analyse des ventes pour novembre",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint l'analyse des ventes pour le mois de novembre. Ce rapport inclut une évaluation détaillée des performances par produit et par région, ainsi que des recommandations pour améliorer les ventes futures.\n\nMerci de bien vouloir consulter le document et de me faire part de vos commentaires.\n\nCordialement,\nSamuel Guillot",
        "piecesJointes": [
            "analyse_ventes_novembre.pdf"
        ],
        "nom": "Samuel Guillot",
        "lu": false
    },
    {
        "id": 28,
        "destinataire": "Moi",
        "expediteur": "angela.hubert@consultinggroup.com",
        "objet": "Tableau de bord stratégique pour décembre",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe le tableau de bord stratégique pour le mois de décembre. Ce document inclut des indicateurs clés de performance, des objectifs à atteindre et des analyses comparatives. Nous avons également ajouté des prévisions pour les mois à venir afin de suivre les progrès.\n\nMerci de bien vouloir examiner ce tableau et de me faire part de vos remarques.\n\nCordialement,\nAngela Hubert",
        "piecesJointes": [
            "tableau_bord_strategique_decembre.xlsx"
        ],
        "nom": "Angela Hubert",
        "lu": false
    },
    {
        "id": 29,
        "destinataire": "Moi",
        "expediteur": "jean.dupont@ventes.com",
        "objet": "Rapport mensuel de ventes pour décembre",
        "contenu": "Bonjour,\n\nJe vous envoie le rapport mensuel des ventes pour décembre. Ce document inclut des analyses sur les performances des produits, les prévisions de ventes et des recommandations pour maximiser les ventes futures.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos commentaires.\n\nCordialement,\nJean Dupont",
        "piecesJointes": [
            "rapport_ventes_decembre.pdf"
        ],
        "nom": "Jean Dupont",
        "lu": false
    },
    {
        "id": 30,
        "destinataire": "Moi",
        "expediteur": "pierre.marot@marketdata.com",
        "objet": "Tendances du marché pour le premier trimestre 2025",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe les tendances du marché pour le premier trimestre 2025. Ce document inclut des analyses sur les prévisions économiques, les comportements des consommateurs et les opportunités de marché pour notre secteur. Les données sont accompagnées de graphiques et de tableaux pour une meilleure compréhension.\n\nMerci de bien vouloir examiner ces informations et de me faire part de vos remarques.\n\nCordialement,\nPierre Marot",
        "piecesJointes": [
            "tendances_marche_q1_2025.pdf"
        ],
        "nom": "Pierre Marot",
        "lu": false
    },
    {
        "id": 31,
        "destinataire": "Moi",
        "expediteur": "sarah.lambert@hrconsulting.com",
        "objet": "Préparation de la session de formation de janvier 2025",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe le contenu de la session de formation pour le mois de janvier 2025. Ce document inclut les détails sur les objectifs de la session, le programme, et les supports pédagogiques nécessaires. Nous avons également prévu des activités interactives pour engager les participants.\n\nMerci de bien vouloir examiner ces informations et de me faire part de vos remarques.\n\nCordialement,\nSarah Lambert",
        "piecesJointes": [
            "programme_formation_janvier_2025.pdf"
        ],
        "nom": "Sarah Lambert",
        "lu": false
    },
    {
        "id": 32,
        "destinataire": "Moi",
        "expediteur": "marc.smith@projectmanagement.com",
        "objet": "État d'avancement du projet pour décembre",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint l'état d'avancement du projet pour le mois de décembre. Ce rapport résume les tâches réalisées, les défis rencontrés, et les prochaines étapes à suivre pour terminer le projet avec succès.\n\nMerci de bien vouloir examiner le document et de me faire part de vos commentaires.\n\nCordialement,\nMarc Smith",
        "piecesJointes": [
            "etat_avancement_projet_decembre.pdf"
        ],
        "nom": "Marc Smith",
        "lu": false
    },
    {
        "id": 33,
        "destinataire": "Moi",
        "expediteur": "elisabeth.bourget@finances.com",
        "objet": "Prévisions financières pour 2025",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe les prévisions financières pour l'année 2025. Ce document inclut les prévisions de revenus, les projections de dépenses, et les analyses de rentabilité pour l'année à venir.\n\nMerci de bien vouloir consulter ce document et de me faire part de vos remarques.\n\nCordialement,\nElisabeth Bourget",
        "piecesJointes": [
            "previsions_financieres_2025.pdf"
        ],
        "nom": "Elisabeth Bourget",
        "lu": false
    },
    {
        "id": 34,
        "destinataire": "Moi",
        "expediteur": "andre.martin@consultingworld.com",
        "objet": "Synthèse du séminaire de fin d'année",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint la synthèse du séminaire de fin d'année. Ce document résume les points clés abordés, les discussions principales et les actions recommandées pour l'année à venir. Les résumés des présentations et les feedbacks reçus sont également inclus.\n\nMerci de bien vouloir consulter le document et de me faire part de vos remarques.\n\nCordialement,\nAndré Martin",
        "piecesJointes": [
            "synthese_seminaire_fin_annee.pdf"
        ],
        "nom": "André Martin",
        "lu": false
    },
    {
        "id": 35,
        "destinataire": "Moi",
        "expediteur": "hannah.jones@marketingagency.com",
        "objet": "Plan de marketing pour le premier trimestre 2025",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe le plan de marketing pour le premier trimestre 2025. Ce document présente nos stratégies de promotion, les objectifs de communication et les canaux de distribution envisagés pour maximiser l'impact de nos campagnes marketing.\n\nMerci de bien vouloir examiner ces informations et de me faire part de vos retours.\n\nCordialement,\nHannah Jones",
        "piecesJointes": [
            "plan_marketing_q1_2025.pdf"
        ],
        "nom": "Hannah Jones",
        "lu": false
    },
    {
        "id": 36,
        "destinataire": "Moi",
        "expediteur": "marie.rouge@dataanalytics.com",
        "objet": "Rapport de performance des équipes pour décembre",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport de performance des équipes pour le mois de décembre. Ce document inclut une évaluation détaillée des performances individuelles et des recommandations pour améliorer l'efficacité de l'équipe.\n\nMerci de bien vouloir examiner le document et de me faire part de vos commentaires.\n\nCordialement,\nMarie Rouge",
        "piecesJointes": [
            "rapport_performance_equipes_decembre.pdf"
        ],
        "nom": "Marie Rouge",
        "lu": false
    },
    {
        "id": 37,
        "destinataire": "Moi",
        "expediteur": "pablo.garcia@innovationlab.com",
        "objet": "Propositions de nouveaux projets pour 2025",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe nos propositions de nouveaux projets pour l'année 2025. Chaque projet est accompagné d'une description, des objectifs attendus et une estimation des ressources nécessaires.\n\nMerci de bien vouloir examiner ces propositions et de me faire part de vos remarques.\n\nCordialement,\nPablo Garcia",
        "piecesJointes": [
            "propositions_nouveaux_projets_2025.pdf"
        ],
        "nom": "Pablo Garcia",
        "lu": false
    },
    {
        "id": 38,
        "destinataire": "Moi",
        "expediteur": "olga.smith@businessconsulting.com",
        "objet": "État des ressources humaines pour le premier trimestre 2025",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint l'état des ressources humaines pour le premier trimestre 2025. Ce document inclut les prévisions de recrutement, les plans de formation et les stratégies de gestion des talents.\n\nMerci de bien vouloir consulter ce document et de me faire part de vos remarques.\n\nCordialement,\nOlga Smith",
        "piecesJointes": [
            "etat_ressources_humaines_q1_2025.pdf"
        ],
        "nom": "Olga Smith",
        "lu": false
    },
    {
        "id": 39,
        "destinataire": "Moi",
        "expediteur": "ali.khan@marketresearch.com",
        "objet": "État du marché pour le premier trimestre 2025",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe l'état du marché pour le premier trimestre 2025. Ce document présente les dernières tendances, les prévisions de croissance et les analyses de la concurrence.\n\nMerci de bien vouloir examiner ces informations et de me faire part de vos remarques.\n\nCordialement,\nAli Khan",
        "piecesJointes": [
            "etat_marche_q1_2025.pdf"
        ],
        "nom": "Ali Khan",
        "lu": false
    },
    {
        "id": 40,
        "destinataire": "Moi",
        "expediteur": "benjamin.harris@creativeagency.com",
        "objet": "Évaluation des campagnes publicitaires pour 2025",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe notre évaluation des campagnes publicitaires pour l'année 2025. Ce rapport inclut une analyse des performances des campagnes précédentes, des recommandations pour l'optimisation des futures campagnes et une estimation du retour sur investissement attendu.\n\nMerci de bien vouloir examiner ce document et de me faire part de vos retours.\n\nCordialement,\nBenjamin Harris",
        "piecesJointes": [
            "evaluation_campagnes_pub_2025.pdf"
        ],
        "nom": "Benjamin Harris",
        "lu": false
    },
    {
        "id": 41,
        "destinataire": "Moi",
        "expediteur": "jacques.vanhoenacker@dataanalysis.com",
        "objet": "Analyse des données pour décembre",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint l'analyse des données pour le mois de décembre. Ce rapport inclut des graphiques et des tableaux montrant les tendances et les comportements des utilisateurs. Les insights recueillis seront utiles pour orienter nos stratégies futures.\n\nMerci de bien vouloir examiner le document et de me faire part de vos commentaires.\n\nCordialement,\nJacques Vanhoenacker",
        "piecesJointes": [
            "analyse_donnees_decembre.xlsx"
        ],
        "nom": "Jacques Vanhoenacker",
        "lu": false
    },
    {
        "id": 42,
        "destinataire": "Moi",
        "expediteur": "tamara.fisher@performance.com",
        "objet": "Rapport de performance des équipes pour décembre",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe le rapport de performance des équipes pour le mois de décembre. Ce document présente les indicateurs clés de performance, les benchmarks sectoriels et des recommandations pour améliorer les résultats des équipes.\n\nMerci de bien vouloir consulter le document et de me faire part de vos remarques.\n\nCordialement,\nTamara Fisher",
        "piecesJointes": [
            "rapport_performance_equipes_decembre.pdf"
        ],
        "nom": "Tamara Fisher",
        "lu": false
    },
    {
        "id": 43,
        "destinataire": "Moi",
        "expediteur": "samira.khan@datareporting.com",
        "objet": "Prévisions économiques pour 2025",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe les prévisions économiques pour l'année 2025. Ce document inclut des analyses macroéconomiques, les prévisions de croissance du PIB et les perspectives d'inflation. Les données sont accompagnées de graphiques pour une meilleure visualisation.\n\nMerci de bien vouloir examiner ces informations et de me faire part de vos remarques.\n\nCordialement,\nSamira Khan",
        "piecesJointes": [
            "previsions_economiques_2025.pdf"
        ],
        "nom": "Samira Khan",
        "lu": false
    },
    {
        "id": 44,
        "destinataire": "Moi",
        "expediteur": "nicolas.benjamin@datasolutions.com",
        "objet": "Documents pour le rapport final",
        "contenu": "Bonjour Nicolas,\n\nJe vous fais parvenir les documents nécessaires pour le rapport final.\n\nCordialement,\nMarc Delon",
        "piecesJointes": [
            "final_report_documents.xlsx"
        ],
        "nom": "Marc Delon",
        "lu": false
    },
    {
        "id": 45,
        "destinataire": "Moi",
        "expediteur": "olivier.martinez@strategygroupe.com",
        "objet": "Dernière version des fichiers pour revue",
        "contenu": "Bonjour Olivier,\n\nVoici la dernière version des fichiers pour votre revue finale.\n\nBien cordialement,\nCamille Bernard",
        "piecesJointes": [
            "last_version_for_review.xlsx"
        ],
        "nom": "Camille Bernard",
        "lu": false
    },
    {
        "id": 46,
        "destinataire": "Moi",
        "expediteur": "sophie.mallet@datasolutions.com",
        "objet": "Mise à jour des données pour phase finale",
        "contenu": "Bonjour Sophie,\n\nVoici la mise à jour des données pour la phase finale du projet.\n\nN'hésitez pas à revenir vers moi si nécessaire.\n\nCordialement,\nNathalie Durand",
        "piecesJointes": [
            "final_phase_data.xlsx"
        ],
        "nom": "Nathalie Durand",
        "lu": false
    },
    {
        "id": 47,
        "destinataire": "Moi",
        "expediteur": "georges.dumas@consulting.com",
        "objet": "Analyse des risques pour le projet XYZ",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe l'analyse des risques pour le projet XYZ. Ce document identifie les principaux risques potentiels, leur impact sur le projet et les stratégies proposées pour les atténuer.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nGeorges Dumas",
        "piecesJointes": [
            "analyse_risques_projet_XYZ.pdf"
        ],
        "nom": "Georges Dumas",
        "lu": false
    },
    {
        "id": 48,
        "destinataire": "Moi",
        "expediteur": "lucie.robert@technology.com",
        "objet": "Plan de test pour le logiciel de gestion",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe le plan de test pour le logiciel de gestion. Ce document décrit les étapes de test, les scénarios, et les résultats attendus. Les tests porteront sur l'efficacité du logiciel et la satisfaction utilisateur.\n\nMerci de bien vouloir examiner ce document et de me faire part de vos remarques.\n\nCordialement,\nLucie Robert",
        "piecesJointes": [
            "plan_test_logiciel_gestion.pdf"
        ],
        "nom": "Lucie Robert",
        "lu": false
    },
    {
        "id": 49,
        "destinataire": "Moi",
        "expediteur": "emmanuel.bellet@analysisgroup.com",
        "objet": "Synthèse des retours utilisateurs sur le produit",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint la synthèse des retours utilisateurs sur le produit. Ce document résume les commentaires des clients, les suggestions d'amélioration et les plaintes reçues. Les insights serviront à ajuster nos stratégies de développement et à mieux répondre aux besoins des utilisateurs.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos commentaires.\n\nCordialement,\nEmmanuel Bellet",
        "piecesJointes": [
            "synthese_retours_utilisateurs.pdf"
        ],
        "nom": "Emmanuel Bellet",
        "lu": false
    },
    {
        "id": 50,
        "destinataire": "Moi",
        "expediteur": "isabelle.carlier@productmanagement.com",
        "objet": "Prévisions de vente pour 2025",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe les prévisions de vente pour l'année 2025. Ce document inclut une analyse des tendances du marché, les prévisions de croissance et les stratégies recommandées pour maximiser les ventes.\n\nMerci de bien vouloir examiner ces informations et de me faire part de vos remarques.\n\nCordialement,\nIsabelle Carlier",
        "piecesJointes": [
            "previsions_vente_2025.pdf"
        ],
        "nom": "Isabelle Carlier",
        "lu": false
    },
    {
        "id": 51,
        "destinataire": "Moi",
        "expediteur": "laurent.meyer@financialreporting.com",
        "objet": "Rapport financier annuel",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport financier annuel pour l'année. Ce document inclut les états financiers, le bilan des dépenses, et les prévisions budgétaires pour l'année suivante.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nLaurent Meyer",
        "piecesJointes": [
            "rapport_financier.pdf"
        ],
        "nom": "Laurent Meyer",
        "lu": false
    },
    {
        "id": 52,
        "destinataire": "Moi",
        "expediteur": "valerie.gerard@consultingfirm.com",
        "objet": "Propositions d'optimisation des processus",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe les propositions d'optimisation des processus pour l'année 2025. Ces recommandations visent à améliorer l'efficacité opérationnelle et à réduire les coûts d'exploitation. Merci de bien vouloir examiner ce document et de me faire part de vos remarques.\n\nCordialement,\nValérie Gérard",
        "piecesJointes": [
            "optimisation_processus_2025.pdf"
        ],
        "nom": "Valérie Gérard",
        "lu": false
    },
    {
        "id": 53,
        "destinataire": "Moi",
        "expediteur": "nicolas.roux@datasciences.com",
        "objet": "Rapport de recherche sur le marché",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport de recherche sur le marché. Ce document analyse les tendances actuelles, les segments de marché clés et les prévisions pour l'année prochaine.\n\nMerci de bien vouloir examiner ces informations et de me faire part de vos remarques.\n\nCordialement,\nNicolas Roux",
        "piecesJointes": [
            "rapport_recherche_marche.pdf"
        ],
        "nom": "Nicolas Roux",
        "lu": false
    },
    {
        "id": 54,
        "destinataire": "Moi",
        "expediteur": "marie-pierre.forestier@businessanalytics.com",
        "objet": "Analyses prédictives pour 2025",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe les analyses prédictives pour l'année 2025. Ce document inclut des modélisations statistiques et des scénarios futurs pour guider la prise de décisions stratégiques.\n\nMerci de bien vouloir examiner ce document et de me faire part de vos remarques.\n\nCordialement,\nMarie-Pierre Forestier",
        "piecesJointes": [
            "analyses_predictives_2025.pdf"
        ],
        "nom": "Marie-Pierre Forestier",
        "lu": false
    },
    {
        "id": 55,
        "destinataire": "Moi",
        "expediteur": "lucas.simon@digitalstrategy.com",
        "objet": "Plan de communication pour 2025",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe le plan de communication pour l'année 2025. Ce document détaille les stratégies de communication, les canaux utilisés et les messages clés pour maximiser l'impact des campagnes de communication.\n\nMerci de bien vouloir examiner ces informations et de me faire part de vos remarques.\n\nCordialement,\nLucas Simon",
        "piecesJointes": [
            "plan_communication_2025.pdf"
        ],
        "nom": "Lucas Simon",
        "lu": false
    },
    {
        "id": 56,
        "destinataire": "Moi",
        "expediteur": "carlos.gomez@globalcorp.com",
        "objet": "Mise à jour des prévisions de production",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe la mise à jour des prévisions de production. Ce document couvre les prévisions de production pour le reste de l'année en cours, avec des détails sur les ajustements nécessaires pour répondre à la demande accrue.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nCarlos Gomez",
        "piecesJointes": [
            "previsions_production.pdf"
        ],
        "nom": "Carlos Gomez",
        "lu": false
    },
    {
        "id": 57,
        "destinataire": "Moi",
        "expediteur": "mariana.perez@innovationlabs.com",
        "objet": "Plan de développement durable pour le projet ABC",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe le plan de développement durable pour le projet ABC. Ce document présente les objectifs écologiques, les initiatives mises en œuvre et les résultats attendus pour l'année à venir. Les stratégies incluent des solutions d'efficacité énergétique, la gestion des ressources et l'intégration des pratiques écologiques dans les opérations.\n\nMerci de bien vouloir examiner ce plan et de me faire part de vos remarques.\n\nCordialement,\nMariana Perez",
        "piecesJointes": [
            "plan_developpement_durable_ABC.pdf"
        ],
        "nom": "Mariana Perez",
        "lu": false
    },
    {
        "id": 58,
        "destinataire": "Moi",
        "expediteur": "serge.lambert@qualityassurance.com",
        "objet": "Rapport d'audit qualité pour novembre",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'audit qualité pour le mois de novembre. Ce document présente les résultats des audits réalisés, les écarts par rapport aux normes de qualité, et les actions correctives recommandées.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos remarques.\n\nCordialement,\nSerge Lambert",
        "piecesJointes": [
            "rapport_audit_qualite_novembre.pdf"
        ],
        "nom": "Serge Lambert",
        "lu": false
    },
    {
        "id": 59,
        "destinataire": "Moi",
        "expediteur": "emilie.fernandez@financegroup.com",
        "objet": "Analyse financière pour le mois de novembre",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe l'analyse financière pour le mois de novembre. Ce document couvre les flux de trésorerie, les ratios financiers et les performances des investissements. Les résultats sont suivis d'une analyse des écarts et des prévisions pour le mois de décembre.\n\nMerci de bien vouloir examiner ces informations et de me faire part de vos retours.\n\nCordialement,\nÉmilie Fernandez",
        "piecesJointes": [
            "analyse_financiere_novembre.pdf"
        ],
        "nom": "Émilie Fernandez",
        "lu": false
    },
    {
        "id": 60,
        "destinataire": "Moi",
        "expediteur": "abdul.siddiqui@marketresearch.com",
        "objet": "Étude de marché pour le produit X",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe l'étude de marché pour le produit X. Ce document analyse les tendances actuelles du marché, la demande des consommateurs et les concurrents clés. Les insights permettront de guider la stratégie marketing et de répondre aux attentes du marché.\n\nMerci de bien vouloir examiner ce document et de me faire part de vos remarques.\n\nCordialement,\nAbdul Siddiqui",
        "piecesJointes": [
            "etude_marche_produit_X.pdf"
        ],
        "nom": "Abdul Siddiqui",
        "lu": false
    },
    {
        "id": 61,
        "destinataire": "Moi",
        "expediteur": "yang.jiang@chinesecorp.com",
        "objet": "Rapport d'analyse de la chaîne logistique",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de la chaîne logistique pour le mois de novembre. Ce document présente les points faibles identifiés, les recommandations pour améliorer l'efficacité et les coûts associés.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nYang Jiang",
        "piecesJointes": [
            "rapport_chaine_logistique_novembre.pdf"
        ],
        "nom": "Yang Jiang",
        "lu": false
    },
    {
        "id": 62,
        "destinataire": "Moi",
        "expediteur": "manuel.lopez@spanishconsulting.com",
        "objet": "Mise à jour des prévisions économiques pour décembre",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe la mise à jour des prévisions économiques pour le mois de décembre. Ce document analyse les indicateurs économiques, les prévisions d'inflation et les impacts potentiels sur le marché financier.\n\nMerci de bien vouloir examiner ces informations et de me faire part de vos retours.\n\nCordialement,\nManuel Lopez",
        "piecesJointes": [
            "previsions_economiques_decembre.pdf"
        ],
        "nom": "Manuel Lopez",
        "lu": false
    },
    {
        "id": 63,
        "destinataire": "Moi",
        "expediteur": "alejandro.martinez@latinfinance.com",
        "objet": "Rapport d'investissement pour décembre",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe le rapport d'investissement pour le mois de décembre. Ce document présente les opportunités d'investissement, les risques associés et les stratégies recommandées pour maximiser le rendement des portefeuilles.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos remarques.\n\nCordialement,\nAlejandro Martinez",
        "piecesJointes": [
            "rapport_investissement_decembre.pdf"
        ],
        "nom": "Alejandro Martinez",
        "lu": false
    },
    {
        "id": 64,
        "destinataire": "Moi",
        "expediteur": "michele.bianchi@italianstrategy.com",
        "objet": "Prévisions du marché immobilier pour décembre",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe les prévisions du marché immobilier pour le mois de décembre. Ce document inclut des analyses des tendances du marché, des projections de prix et des recommandations d'investissement.\n\nMerci de bien vouloir examiner ces informations et de me faire part de vos remarques.\n\nCordialement,\nMichele Bianchi",
        "piecesJointes": [
            "previsions_marché_immobilier_decembre.pdf"
        ],
        "nom": "Michele Bianchi",
        "lu": false
    },
    {
        "id": 65,
        "destinataire": "Moi",
        "expediteur": "john.smith@usconsulting.com",
        "objet": "Rapport de sécurité pour le mois de novembre",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe le rapport de sécurité pour le mois de novembre. Ce document présente les incidents signalés, les mesures de prévention mises en place et les recommandations pour améliorer la sécurité dans l'organisation.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nJohn Smith",
        "piecesJointes": [
            "rapport_securite_novembre.pdf"
        ],
        "nom": "John Smith",
        "lu": false
    },
    {
        "id": 66,
        "destinataire": "Moi",
        "expediteur": "jurgen.klein@eurocorp.com",
        "objet": "Rapport de performance pour le mois de novembre",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe le rapport de performance pour le mois de novembre. Ce document inclut une évaluation des objectifs atteints, des écarts et des stratégies pour optimiser la performance à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nJurgen Klein",
        "piecesJointes": [
            "rapport_performance_novembre.pdf"
        ],
        "nom": "Jurgen Klein",
        "lu": false
    },
    {
        "id": 67,
        "destinataire": "Moi",
        "expediteur": "piotr.majewski@polishconsulting.com",
        "objet": "Plan d'action pour le mois de décembre",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe le plan d'action pour le mois de décembre. Ce document détaille les priorités, les ressources disponibles et les objectifs à atteindre pour ce mois.\n\nMerci de bien vouloir examiner ce plan et de me faire part de vos remarques.\n\nCordialement,\nPiotr Majewski",
        "piecesJointes": [
            "plan_action_decembre.pdf"
        ],
        "nom": "Piotr Majewski",
        "lu": false
    },
    {
        "id": 68,
        "destinataire": "Moi",
        "expediteur": "hassan.ahmed@middleeastcorp.com",
        "objet": "Rapport de gestion pour décembre",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe le rapport de gestion pour le mois de décembre. Ce document couvre les performances des équipes, les défis rencontrés et les initiatives proposées pour améliorer l'efficacité opérationnelle.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nHassan Ahmed",
        "piecesJointes": [
            "rapport_gestion_decembre.pdf"
        ],
        "nom": "Hassan Ahmed",
        "lu": false
    },
    {
        "id": 69,
        "destinataire": "Moi",
        "expediteur": "emilia.moreno@latinamarketing.com",
        "objet": "Analyse de la performance des campagnes publicitaires",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe l'analyse de la performance des campagnes publicitaires pour le mois de décembre. Ce document inclut les indicateurs clés, les résultats obtenus et les recommandations pour maximiser l'impact des futures campagnes.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nEmilia Moreno",
        "piecesJointes": [
            "analyse_performance_campagnes_decembre.pdf"
        ],
        "nom": "Emilia Moreno",
        "lu": false
    },
    {
        "id": 70,
        "destinataire": "Moi",
        "expediteur": "william.taylor@ukconsulting.com",
        "objet": "Rapport d'analyse de la satisfaction client",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe le rapport d'analyse de la satisfaction client pour le mois de décembre. Ce document analyse les retours des clients, les tendances émergentes et les recommandations pour améliorer l'expérience client.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nWilliam Taylor",
        "piecesJointes": [
            "analyse_satisfaction_client_decembre.pdf"
        ],
        "nom": "William Taylor",
        "lu": false
    },
    {
        "id": 71,
        "destinataire": "Moi",
        "expediteur": "yvette.muller@frenchconsulting.com",
        "objet": "Rapport de formation pour décembre",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe le rapport de formation pour le mois de décembre. Ce document couvre les modules de formation, les participants et les évaluations des formations dispensées.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nYvette Muller",
        "piecesJointes": [
            "rapport_formation_decembre.pdf"
        ],
        "nom": "Yvette Muller",
        "lu": false
    },
    {
        "id": 72,
        "destinataire": "Moi",
        "expediteur": "jakob.wagner@germansolutions.com",
        "objet": "Rapport de conformité pour décembre",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe le rapport de conformité pour le mois de décembre. Ce document inclut les audits réalisés, les écarts constatés par rapport aux règlements et les actions correctives recommandées.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nJakob Wagner",
        "piecesJointes": [
            "rapport_conformite_decembre.pdf"
        ],
        "nom": "Jakob Wagner",
        "lu": false
    },
    {
        "id": 73,
        "destinataire": "Moi",
        "expediteur": "tomas.anderson@swedishconsulting.com",
        "objet": "Mise à jour des prévisions de vente pour décembre",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe la mise à jour des prévisions de vente pour le mois de décembre. Ce document inclut les tendances actuelles du marché, les prévisions de croissance et les stratégies recommandées pour maximiser les ventes.\n\nMerci de bien vouloir examiner ces informations et de me faire part de vos remarques.\n\nCordialement,\nTomas Anderson",
        "piecesJointes": [
            "previsions_vente_decembre.pdf"
        ],
        "nom": "Tomas Anderson",
        "lu": false
    },
    {
        "id": 74,
        "destinataire": "Moi",
        "expediteur": "mark.owens@australiangroup.com",
        "objet": "Rapport de performance pour décembre",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe le rapport de performance pour le mois de décembre. Ce document analyse les objectifs atteints, les écarts et les stratégies pour améliorer la performance à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nMark Owens",
        "piecesJointes": [
            "rapport_performance_decembre.pdf"
        ],
        "nom": "Mark Owens",
        "lu": false
    },
    {
        "id": 75,
        "destinataire": "Moi",
        "expediteur": "olivia.hill@ukanalysis.com",
        "objet": "Rapport d'audit qualité pour décembre",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe le rapport d'audit qualité pour le mois de décembre. Ce document couvre les résultats des audits, les écarts par rapport aux normes de qualité, et les recommandations pour les améliorations nécessaires.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos remarques.\n\nCordialement,\nOlivia Hill",
        "piecesJointes": [
            "rapport_audit_qualite_decembre.pdf"
        ],
        "nom": "Olivia Hill",
        "lu": false
    },
    {
        "id": 76,
        "destinataire": "Moi",
        "expediteur": "katarina.kovacs@hungariananalysis.com",
        "objet": "Rapport d'analyse de la chaîne logistique pour décembre",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de la chaîne logistique pour le mois de décembre. Ce document inclut les recommandations pour améliorer l'efficacité, les coûts associés et les points faibles identifiés.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nKatarina Kovacs",
        "piecesJointes": [
            "rapport_chaine_logistique_decembre.pdf"
        ],
        "nom": "Katarina Kovacs",
        "lu": false
    },
    {
        "id": 77,
        "destinataire": "Moi",
        "expediteur": "dmitry.sokolov@russianconsulting.com",
        "objet": "Rapport de performance pour septembre",
        "contenu": "Bonjour,\n\nLe rapport de performance pour le mois de septembre est maintenant disponible. Il inclut une évaluation des objectifs atteints, des écarts par rapport aux attentes initiales et des recommandations pour améliorer la performance à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nDmitry Sokolov",
        "piecesJointes": [
            "rapport_performance_septembre.pdf"
        ],
        "nom": "Dmitry Sokolov",
        "lu": false
    },
    {
        "id": 78,
        "destinataire": "Moi",
        "expediteur": "vivian.nguyen@asianinsights.com",
        "objet": "Analyse des tendances du marché asiatique pour octobre",
        "contenu": "Bonjour,\n\nL'analyse des tendances du marché asiatique pour le mois d'octobre est prête. Ce document examine les principaux développements économiques, la demande des consommateurs et les prévisions pour les mois à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nVivian Nguyen",
        "piecesJointes": [
            "analyse_tendances_marche_asiatique_octobre.pdf"
        ],
        "nom": "Vivian Nguyen",
        "lu": false
    },
    {
        "id": 79,
        "destinataire": "Moi",
        "expediteur": "georg.smith@ukresearch.com",
        "objet": "Étude de marché pour le secteur technologique européen",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe l'étude de marché pour le secteur technologique européen. Ce document analyse les tendances actuelles, les innovations et les prévisions pour l'année à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nGeorg Smith",
        "piecesJointes": [
            "etude_marche_technologie_europeen_octobre.pdf"
        ],
        "nom": "Georg Smith",
        "lu": false
    },
    {
        "id": 80,
        "destinataire": "Moi",
        "expediteur": "linda.jones@usconsulting.com",
        "objet": "Rapport d'audit qualité pour octobre",
        "contenu": "Bonjour,\n\nLe rapport d'audit qualité pour le mois d'octobre est prêt. Il couvre les résultats des audits réalisés, les écarts par rapport aux normes de qualité et les recommandations pour les améliorations nécessaires.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nLinda Jones",
        "piecesJointes": [
            "rapport_audit_qualite_octobre.pdf"
        ],
        "nom": "Linda Jones",
        "lu": false
    },
    {
        "id": 81,
        "destinataire": "Moi",
        "expediteur": "santiago.gonzalez@spanishconsulting.com",
        "objet": "Plan de développement durable pour novembre",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe le plan de développement durable pour le mois de novembre. Ce document détaille les initiatives écologiques, les objectifs fixés et les actions prévues pour améliorer l'impact environnemental du projet.\n\nMerci de bien vouloir examiner ce plan et de me faire part de vos remarques.\n\nCordialement,\nSantiago Gonzalez",
        "piecesJointes": [
            "plan_developpement_durable_novembre.pdf"
        ],
        "nom": "Santiago Gonzalez",
        "lu": false
    },
    {
        "id": 82,
        "destinataire": "Moi",
        "expediteur": "hassan.ali@middleeastcorp.com",
        "objet": "Rapport de gestion pour octobre",
        "contenu": "Bonjour,\n\nLe rapport de gestion pour le mois d'octobre est maintenant disponible. Ce document couvre les performances des équipes, les défis rencontrés et les initiatives proposées pour améliorer l'efficacité opérationnelle.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nHassan Ali",
        "piecesJointes": [
            "rapport_gestion_octobre.pdf"
        ],
        "nom": "Hassan Ali",
        "lu": false
    },
    {
        "id": 83,
        "destinataire": "Moi",
        "expediteur": "yukiko.saito@asianstrategy.com",
        "objet": "Rapport de performance pour novembre",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe le rapport de performance pour le mois de novembre. Ce document inclut une évaluation des objectifs atteints, des écarts par rapport aux attentes initiales et des recommandations pour améliorer la performance à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nYukiko Saito",
        "piecesJointes": [
            "rapport_performance_novembre.pdf"
        ],
        "nom": "Yukiko Saito",
        "lu": false
    },
    {
        "id": 84,
        "destinataire": "Moi",
        "expediteur": "meiko.ito@japanconsulting.com",
        "objet": "Étude de marché pour le secteur automobile japonais",
        "contenu": "Bonjour,\n\nVeuillez trouver en pièce jointe l'étude de marché pour le secteur automobile japonais. Ce document analyse les tendances actuelles, les prévisions de vente et les stratégies recommandées pour l'année à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nMeiko Ito",
        "piecesJointes": [
            "etude_marche_automobile_japonais_novembre.pdf"
        ],
        "nom": "Meiko Ito",
        "lu": false
    },
    {
        "id": 85,
        "destinataire": "Moi",
        "expediteur": "maia.kim@southkoreaconsulting.com",
        "objet": "Rapport d'audit qualité pour novembre",
        "contenu": "Bonjour,\n\nLe rapport d'audit qualité pour le mois de novembre est prêt. Il couvre les résultats des audits réalisés, les écarts par rapport aux normes de qualité et les recommandations pour les améliorations nécessaires.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nMaia Kim",
        "piecesJointes": [
            "rapport_audit_qualite_novembre.pdf"
        ],
        "nom": "Maia Kim",
        "lu": false
    },
    {
        "id": 86,
        "destinataire": "Moi",
        "expediteur": "lucas.schmidt@germanconsulting.com",
        "objet": "Rapport de performance pour novembre",
        "contenu": "Bonjour,\n\nLe rapport de performance pour le mois de novembre est joint à ce message. Ce document inclut une évaluation détaillée des objectifs atteints, des écarts par rapport aux attentes initiales et des recommandations pour améliorer la performance à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nLucas Schmidt",
        "piecesJointes": [
            "rapport_performance_novembre.pdf"
        ],
        "nom": "Lucas Schmidt",
        "lu": false
    },
    {
        "id": 87,
        "destinataire": "Moi",
        "expediteur": "serena.wilson@ukstrategy.com",
        "objet": "Analyse des risques pour le projet A",
        "contenu": "Bonjour,\n\nL'analyse des risques pour le projet A est incluse dans le document ci-joint. Ce rapport identifie les risques potentiels, évalue leur impact potentiel sur le projet et propose des stratégies pour les gérer efficacement.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nSerena Wilson",
        "piecesJointes": [
            "analyse_risques_projet_A.pdf"
        ],
        "nom": "Serena Wilson",
        "lu": false
    },
    {
        "id": 88,
        "destinataire": "Moi",
        "expediteur": "hamed.khalil@middleeastresearch.com",
        "objet": "Étude de marché pour le secteur des télécommunications au Moyen-Orient",
        "contenu": "Bonjour,\n\nL'étude de marché pour le secteur des télécommunications au Moyen-Orient est incluse dans le document ci-joint. Ce rapport analyse les tendances actuelles, les défis technologiques et les perspectives futures pour le marché.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nHamed Khalil",
        "piecesJointes": [
            "etude_marche_telecommunications_moyen_orient.pdf"
        ],
        "nom": "Hamed Khalil",
        "lu": false
    },
    {
        "id": 89,
        "destinataire": "Moi",
        "expediteur": "emmanuelle.lacroix@franceconsulting.com",
        "objet": "Rapport de satisfaction client pour novembre",
        "contenu": "Bonjour,\n\nLe rapport de satisfaction client pour le mois d'octobre est joint à ce message. Ce document analyse les retours clients, les points forts et les domaines à améliorer en vue d'améliorer l'expérience utilisateur.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nEmmanuelle Lacroix",
        "piecesJointes": [
            "rapport_satisfaction_client_octobre.pdf"
        ],
        "nom": "Emmanuelle Lacroix",
        "lu": false
    },
    {
        "id": 90,
        "destinataire": "Moi",
        "expediteur": "yousef.alsharif@middleeastrnd.com",
        "objet": "Étude comparative des tendances technologiques mondiales",
        "contenu": "Bonjour,\n\nL'étude comparative des tendances technologiques mondiales est incluse dans le document ci-joint. Ce rapport examine les innovations récentes, les marchés émergents et les perspectives futures pour l'industrie technologique.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nYousef Alsharif",
        "piecesJointes": [
            "etude_comparative_tendances_technologiques.pdf"
        ],
        "nom": "Yousef Alsharif",
        "lu": false
    },
    {
        "id": 91,
        "destinataire": "Moi",
        "expediteur": "matteo.rossi@italianbusiness.com",
        "objet": "Bilan de performance Q4",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le bilan de performance pour le quatrième trimestre de. Ce document présente une évaluation complète des résultats atteints et des stratégies à mettre en œuvre pour améliorer les performances pour l'année prochaine.\n\nMerci de bien vouloir examiner ce bilan et de me faire part de vos retours.\n\nCordialement,\nMatteo Rossi",
        "piecesJointes": [
            "bilan_performance_Q4.pdf"
        ],
        "nom": "Matteo Rossi",
        "lu": false
    },
    {
        "id": 92,
        "destinataire": "Moi",
        "expediteur": "olga.pavlova@russianenterprise.com",
        "objet": "Rapport d'analyse de marché pour la Russie",
        "contenu": "Bonjour,\n\nLe rapport d'analyse de marché pour la Russie est joint à ce message. Ce document explore les tendances actuelles, les perspectives économiques et les stratégies de marché pour les entreprises opérant en Russie.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nOlga Pavlova",
        "piecesJointes": [
            "analyse_marche_russie.pdf"
        ],
        "nom": "Olga Pavlova",
        "lu": false
    },
    {
        "id": 93,
        "destinataire": "Moi",
        "expediteur": "francois.benoit@francaisconsulting.com",
        "objet": "Rapport d'études de cas pour le projet Z",
        "contenu": "Bonjour,\n\nLe rapport d'études de cas pour le projet Z est joint à ce message. Ce document fournit une analyse détaillée des résultats obtenus, des défis rencontrés et des recommandations pour les prochaines phases du projet.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nFrançois Benoit",
        "piecesJointes": [
            "etudes_cas_projet_Z.pdf"
        ],
        "nom": "François Benoit",
        "lu": false
    },
    {
        "id": 94,
        "destinataire": "Moi",
        "expediteur": "ismael.ramos@spanishconsulting.com",
        "objet": "Prévisions économiques pour l'Espagne en 2025",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint les prévisions économiques pour l'Espagne en 2025. Ce document analyse les tendances actuelles, les facteurs influents et les prévisions pour l'année à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nIsmael Ramos",
        "piecesJointes": [
            "previsions_economiques_espagne_2025.pdf"
        ],
        "nom": "Ismael Ramos",
        "lu": false
    },
    {
        "id": 95,
        "destinataire": "Moi",
        "expediteur": "roberto.ferrara@italianbiz.com",
        "objet": "Synthèse des tendances du marché italien",
        "contenu": "Bonjour,\n\nLa synthèse des tendances du marché italien est incluse dans le document ci-joint. Ce rapport examine les dynamiques actuelles, les segments clés du marché et les prévisions pour l'année prochaine.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nRoberto Ferrara",
        "piecesJointes": [
            "tendances_marche_italien.pdf"
        ],
        "nom": "Roberto Ferrara",
        "lu": false
    },
    {
        "id": 96,
        "destinataire": "Moi",
        "expediteur": "natalia.jones@britishconsulting.com",
        "objet": "Rapport de performance Q3",
        "contenu": "Bonjour,\n\nLe rapport de performance pour le troisième trimestre de est joint à ce message. Ce document évalue les performances atteintes, les objectifs manqués et les recommandations pour améliorer les résultats futurs.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nNatalia Jones",
        "piecesJointes": [
            "rapport_performance_Q3.pdf"
        ],
        "nom": "Natalia Jones",
        "lu": false
    },
    {
        "id": 97,
        "destinataire": "Moi",
        "expediteur": "peter.smith@usconsulting.com",
        "objet": "Tendances du marché américain en",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint les tendances du marché américain pour. Ce document examine les changements clés, les prévisions économiques et les opportunités pour les entreprises opérant aux États-Unis.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nPeter Smith",
        "piecesJointes": [
            "tendances_marche_americain.pdf"
        ],
        "nom": "Peter Smith",
        "lu": false
    },
    {
        "id": 98,
        "destinataire": "Moi",
        "expediteur": "feng.chen@chinesebusiness.com",
        "objet": "Analyse du marché chinois pour le secteur manufacturier",
        "contenu": "Bonjour,\n\nL'analyse du marché chinois pour le secteur manufacturier est incluse dans le document ci-joint. Ce rapport examine les tendances actuelles, les défis et les opportunités pour les entreprises opérant en Chine.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nFeng Chen",
        "piecesJointes": [
            "analyse_marche_chine.pdf"
        ],
        "nom": "Feng Chen",
        "lu": false
    },
    {
        "id": 99,
        "destinataire": "Moi",
        "expediteur": "maria.gomez@spanishbiz.com",
        "objet": "Rapport d'enquête sur le climat économique en Espagne",
        "contenu": "Bonjour,\n\nLe rapport d'enquête sur le climat économique en Espagne est joint à ce message. Ce document analyse les indicateurs macroéconomiques, les prévisions de croissance et les défis futurs pour l'économie espagnole.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nMaria Gomez",
        "piecesJointes": [
            "enquete_climat_economique_espagne.pdf"
        ],
        "nom": "Maria Gomez",
        "lu": false
    },
    {
        "id": 100,
        "destinataire": "Moi",
        "expediteur": "ali.khan@pakistanconsulting.com",
        "objet": "Tendances du marché au Pakistan pour",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint les tendances du marché au Pakistan pour. Ce document examine les dynamiques du marché, les défis spécifiques et les opportunités pour les entreprises opérant au Pakistan.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nAli Khan",
        "piecesJointes": [
            "tendances_marche_pakistan.pdf"
        ],
        "nom": "Ali Khan",
        "lu": false
    },
    {
        "id": 101,
        "destinataire": "Moi",
        "expediteur": "sara.lee@australianbusiness.com",
        "objet": "Étude de cas pour le marché australien",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint l'étude de cas pour le marché australien. Ce document analyse les tendances actuelles, les défis spécifiques et les stratégies à adopter pour réussir sur ce marché.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nSara Lee",
        "piecesJointes": [
            "etude_cas_marche_australien.pdf"
        ],
        "nom": "Sara Lee",
        "lu": false
    },
    {
        "id": 102,
        "destinataire": "Moi",
        "expediteur": "nina.smith@canadianconsulting.com",
        "objet": "Rapport d'analyse de marché pour le secteur énergétique au Canada",
        "contenu": "Bonjour,\n\nLe rapport d'analyse de marché pour le secteur énergétique au Canada est joint à ce message. Ce document examine les perspectives actuelles, les défis et les opportunités pour le marché énergétique canadien.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nNina Smith",
        "piecesJointes": [
            "analyse_marche_energetique_canada.pdf"
        ],
        "nom": "Nina Smith",
        "lu": false
    },
    {
        "id": 103,
        "destinataire": "Moi",
        "expediteur": "kevin.lee@singaporeconsulting.com",
        "objet": "Prévisions économiques pour Singapour en 2025",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint les prévisions économiques pour Singapour en 2025. Ce document analyse les tendances économiques, les facteurs influents et les prévisions pour l'année à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nKevin Lee",
        "piecesJointes": [
            "previsions_economiques_singapour_2025.pdf"
        ],
        "nom": "Kevin Lee",
        "lu": false
    },
    {
        "id": 104,
        "destinataire": "Moi",
        "expediteur": "meng.wang@chineseenterprise.com",
        "objet": "Synthèse des tendances du marché chinois pour le secteur de l'énergie",
        "contenu": "Bonjour,\n\nLa synthèse des tendances du marché chinois pour le secteur de l'énergie est incluse dans le document ci-joint. Ce rapport examine les dynamiques actuelles, les défis et les opportunités pour les entreprises opérant en Chine.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nMeng Wang",
        "piecesJointes": [
            "tendances_marche_chine_energie.pdf"
        ],
        "nom": "Meng Wang",
        "lu": false
    },
    {
        "id": 105,
        "destinataire": "Moi",
        "expediteur": "manuel.perez@spanishconsulting.com",
        "objet": "Rapport d'étude de marché pour l'Espagne",
        "contenu": "Bonjour,\n\nLe rapport d'étude de marché pour l'Espagne est joint à ce message. Ce document analyse les segments clés du marché, les défis et les opportunités pour les entreprises opérant en Espagne.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nManuel Perez",
        "piecesJointes": [
            "etude_marche_espagne.pdf"
        ],
        "nom": "Manuel Perez",
        "lu": false
    },
    {
        "id": 106,
        "destinataire": "Moi",
        "expediteur": "juan.sanchez@latinamericanbusiness.com",
        "objet": "Rapport de performance Q3",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport de performance pour le troisième trimestre de. Ce document évalue les résultats atteints, les écarts par rapport aux objectifs fixés et les recommandations pour améliorer les performances à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nJuan Sanchez",
        "piecesJointes": [
            "rapport_performance_Q3.pdf"
        ],
        "nom": "Juan Sanchez",
        "lu": false
    },
    {
        "id": 107,
        "destinataire": "Moi",
        "expediteur": "sophie.miller@canadianstrategy.com",
        "objet": "Analyse de la performance Q3",
        "contenu": "Bonjour,\n\nL'analyse de la performance pour le troisième trimestre de est incluse dans le document ci-joint. Ce rapport présente une évaluation complète des résultats atteints, des défis rencontrés et des recommandations pour les phases suivantes.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nSophie Miller",
        "piecesJointes": [
            "analyse_performance_Q3.pdf"
        ],
        "nom": "Sophie Miller",
        "lu": false
    },
    {
        "id": 108,
        "destinataire": "Moi",
        "expediteur": "ahmed.abdullah@uaeconsulting.com",
        "objet": "Rapport de performance Q3",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport de performance pour le troisième trimestre de. Ce document inclut une évaluation détaillée des objectifs atteints, des écarts par rapport aux attentes initiales et des recommandations pour améliorer la performance à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nAhmed Abdullah",
        "piecesJointes": [
            "rapport_performance_Q3.pdf"
        ],
        "nom": "Ahmed Abdullah",
        "lu": false
    },
    {
        "id": 109,
        "destinataire": "Moi",
        "expediteur": "marcos.rios@latinamericanbusiness.com",
        "objet": "Tendances du marché latino-américain pour",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint les tendances du marché latino-américain pour. Ce document examine les dynamiques clés, les défis spécifiques et les opportunités pour les entreprises opérant en Amérique latine.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nMarcos Rios",
        "piecesJointes": [
            "tendances_marche_latin_america.pdf"
        ],
        "nom": "Marcos Rios",
        "lu": false
    },
    {
        "id": 110,
        "destinataire": "Moi",
        "expediteur": "amina.said@africanconsulting.com",
        "objet": "Rapport d'analyse de marché pour l'Afrique",
        "contenu": "Bonjour,\n\nLe rapport d'analyse de marché pour l'Afrique est joint à ce message. Ce document analyse les perspectives économiques, les tendances actuelles et les stratégies de marché pour les entreprises opérant en Afrique.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nAmina Said",
        "piecesJointes": [
            "analyse_marche_afrique.pdf"
        ],
        "nom": "Amina Said",
        "lu": false
    },
    {
        "id": 111,
        "destinataire": "Moi",
        "expediteur": "keith.patterson@australianbusiness.com",
        "objet": "Tendances du marché australien pour le secteur des services",
        "contenu": "Bonjour,\n\nLa synthèse des tendances du marché australien pour le secteur des services est incluse dans le document ci-joint. Ce rapport analyse les dynamiques actuelles, les défis spécifiques et les stratégies à adopter pour les entreprises opérant en Australie.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nKeith Patterson",
        "piecesJointes": [
            "tendances_marche_australien_services.pdf"
        ],
        "nom": "Keith Patterson",
        "lu": false
    },
    {
        "id": 112,
        "destinataire": "Moi",
        "expediteur": "louise.anderson@canadianstrategy.com",
        "objet": "Rapport d'analyse de marché pour le secteur de la santé au Canada",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour le secteur de la santé au Canada. Ce document examine les défis spécifiques, les tendances actuelles et les opportunités pour les entreprises opérant dans le domaine de la santé au Canada.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nLouise Anderson",
        "piecesJointes": [
            "analyse_marche_sante_canada.pdf"
        ],
        "nom": "Louise Anderson",
        "lu": false
    },
    {
        "id": 113,
        "destinataire": "Moi",
        "expediteur": "mark.evans@usconsulting.com",
        "objet": "Étude de marché pour le secteur technologique aux États-Unis",
        "contenu": "Bonjour,\n\nL'étude de marché pour le secteur technologique aux États-Unis est incluse dans le document ci-joint. Ce rapport analyse les tendances clés, les défis et les stratégies à adopter pour les entreprises opérant dans ce secteur.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nMark Evans",
        "piecesJointes": [
            "etude_marche_techno_us.pdf"
        ],
        "nom": "Mark Evans",
        "lu": false
    },
    {
        "id": 114,
        "destinataire": "Moi",
        "expediteur": "alexa.perez@latinamericanbusiness.com",
        "objet": "Rapport d'analyse de marché pour le Mexique",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour le Mexique. Ce document examine les dynamiques du marché, les défis spécifiques et les opportunités pour les entreprises opérant au Mexique.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nAlexa Perez",
        "piecesJointes": [
            "analyse_marche_mexique.pdf"
        ],
        "nom": "Alexa Perez",
        "lu": false
    },
    {
        "id": 115,
        "destinataire": "Moi",
        "expediteur": "christopher.wright@ukconsulting.com",
        "objet": "Étude de marché pour le secteur de la construction au Royaume-Uni",
        "contenu": "Bonjour,\n\nL'étude de marché pour le secteur de la construction au Royaume-Uni est incluse dans le document ci-joint. Ce rapport examine les tendances actuelles, les défis et les opportunités pour les entreprises opérant dans ce secteur.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nChristopher Wright",
        "piecesJointes": [
            "etude_marche_construction_uk.pdf"
        ],
        "nom": "Christopher Wright",
        "lu": false
    },
    {
        "id": 116,
        "destinataire": "Moi",
        "expediteur": "olga.kovalenko@russianbusiness.com",
        "objet": "Rapport d'analyse de marché pour la Russie",
        "contenu": "Bonjour,\n\nLe rapport d'analyse de marché pour la Russie est joint à ce message. Ce document analyse les perspectives économiques, les dynamiques du marché et les stratégies de croissance pour les entreprises opérant en Russie.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nOlga Kovalenko",
        "piecesJointes": [
            "analyse_marche_russie.pdf"
        ],
        "nom": "Olga Kovalenko",
        "lu": false
    },
    {
        "id": 117,
        "destinataire": "Moi",
        "expediteur": "lina.alvarez@spanishconsulting.com",
        "objet": "Rapport d'analyse de marché pour le secteur agricole en Espagne",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour le secteur agricole en Espagne. Ce document examine les tendances actuelles, les défis spécifiques et les opportunités pour les entreprises opérant dans le secteur agricole.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nLina Alvarez",
        "piecesJointes": [
            "analyse_marche_agricole_espagne.pdf"
        ],
        "nom": "Lina Alvarez",
        "lu": false
    },
    {
        "id": 118,
        "destinataire": "Moi",
        "expediteur": "omar.ali@africanbusiness.com",
        "objet": "Rapport d'étude de marché pour le Kenya",
        "contenu": "Bonjour,\n\nLe rapport d'étude de marché pour le Kenya est joint à ce message. Ce document analyse les perspectives économiques, les tendances actuelles et les opportunités pour les entreprises opérant au Kenya.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nOmar Ali",
        "piecesJointes": [
            "etude_marche_kenya.pdf"
        ],
        "nom": "Omar Ali",
        "lu": false
    },
    {
        "id": 119,
        "destinataire": "Moi",
        "expediteur": "francois.leclerc@francoisconsulting.com",
        "objet": "Analyse de marché pour le secteur manufacturier au Canada",
        "contenu": "Bonjour,\n\nLe rapport d'analyse de marché pour le secteur manufacturier au Canada est joint à ce message. Ce document examine les dynamiques actuelles, les défis spécifiques et les opportunités pour les entreprises opérant au Canada.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nFrançois Leclerc",
        "piecesJointes": [
            "analyse_marche_manufacturier_canada.pdf"
        ],
        "nom": "François Leclerc",
        "lu": false
    },
    {
        "id": 120,
        "destinataire": "Moi",
        "expediteur": "elena.gomez@spanishconsulting.com",
        "objet": "Rapport d'analyse de marché pour l'Argentine",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour l'Argentine. Ce document analyse les dynamiques du marché, les défis spécifiques et les opportunités pour les entreprises opérant en Argentine.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nElena Gomez",
        "piecesJointes": [
            "analyse_marche_argentine.pdf"
        ],
        "nom": "Elena Gomez",
        "lu": false
    },
    {
        "id": 121,
        "destinataire": "Moi",
        "expediteur": "mike.johnson@usconsulting.com",
        "objet": "Étude de marché pour le secteur de la finance aux États-Unis",
        "contenu": "Bonjour,\n\nL'étude de marché pour le secteur de la finance aux États-Unis est incluse dans le document ci-joint. Ce rapport analyse les tendances actuelles, les défis et les opportunités pour les entreprises opérant dans ce secteur.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nMike Johnson",
        "piecesJointes": [
            "etude_marche_finance_us.pdf"
        ],
        "nom": "Mike Johnson",
        "lu": false
    },
    {
        "id": 122,
        "destinataire": "Moi",
        "expediteur": "sandra.kim@koreaconsulting.com",
        "objet": "Rapport d'analyse de marché pour la Corée du Sud",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour la Corée du Sud. Ce document examine les dynamiques actuelles, les défis et les stratégies pour les entreprises opérant en Corée du Sud.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nSandra Kim",
        "piecesJointes": [
            "analyse_marche_coree_du_sud.pdf"
        ],
        "nom": "Sandra Kim",
        "lu": false
    },
    {
        "id": 123,
        "destinataire": "Moi",
        "expediteur": "charles.brown@ukconsulting.com",
        "objet": "Rapport de performance Q3",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport de performance pour le troisième trimestre de. Ce document évalue les résultats atteints, les écarts par rapport aux objectifs fixés et les recommandations pour améliorer les performances à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nCharles Brown",
        "piecesJointes": [
            "rapport_performance_Q3.pdf"
        ],
        "nom": "Charles Brown",
        "lu": false
    },
    {
        "id": 124,
        "destinataire": "Moi",
        "expediteur": "yuki.kato@japaneseenterprise.com",
        "objet": "Tendances du marché japonais pour",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint les tendances du marché japonais pour. Ce document examine les dynamiques clés, les défis spécifiques et les opportunités pour les entreprises opérant au Japon.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nYuki Kato",
        "piecesJointes": [
            "tendances_marche_japon.pdf"
        ],
        "nom": "Yuki Kato",
        "lu": false
    },
    {
        "id": 125,
        "destinataire": "Moi",
        "expediteur": "francois.laroche@francoisconsulting.com",
        "objet": "Rapport d'étude de marché pour la France",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'étude de marché pour la France. Ce document analyse les segments clés du marché, les défis spécifiques et les stratégies à adopter pour réussir en France.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nFrançois Laroche",
        "piecesJointes": [
            "etude_marche_france.pdf"
        ],
        "nom": "François Laroche",
        "lu": false
    },
    {
        "id": 126,
        "destinataire": "Moi",
        "expediteur": "anjali.singh@indianbusiness.com",
        "objet": "Rapport d'analyse de marché pour l'Inde",
        "contenu": "Bonjour,\n\nLe rapport d'analyse de marché pour l'Inde est joint à ce message. Ce document examine les dynamiques actuelles, les défis spécifiques et les opportunités pour les entreprises opérant en Inde.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nAnjali Singh",
        "piecesJointes": [
            "analyse_marche_inde.pdf"
        ],
        "nom": "Anjali Singh",
        "lu": false
    },
    {
        "id": 127,
        "destinataire": "Moi",
        "expediteur": "marcus.smith@usconsulting.com",
        "objet": "Rapport d'analyse de marché pour le secteur de la santé aux États-Unis",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour le secteur de la santé aux États-Unis. Ce document examine les tendances actuelles, les défis spécifiques et les opportunités pour les entreprises opérant dans ce secteur.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nMarcus Smith",
        "piecesJointes": [
            "analyse_marche_sante_us.pdf"
        ],
        "nom": "Marcus Smith",
        "lu": false
    },
    {
        "id": 128,
        "destinataire": "Moi",
        "expediteur": "lucas.cortez@latinamericanbusiness.com",
        "objet": "Rapport d'analyse de marché pour le Brésil",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour le Brésil. Ce document examine les dynamiques du marché, les défis spécifiques et les opportunités pour les entreprises opérant au Brésil.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nLucas Cortez",
        "piecesJointes": [
            "analyse_marche_bresil.pdf"
        ],
        "nom": "Lucas Cortez",
        "lu": false
    },
    {
        "id": 129,
        "destinataire": "Moi",
        "expediteur": "carmen.rodriguez@spanishconsulting.com",
        "objet": "Rapport d'étude de marché pour l'Espagne",
        "contenu": "Bonjour,\n\nLe rapport d'étude de marché pour l'Espagne est joint à ce message. Ce document analyse les segments clés du marché, les défis spécifiques et les stratégies à adopter pour réussir sur ce marché.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nCarmen Rodriguez",
        "piecesJointes": [
            "etude_marche_espagne.pdf"
        ],
        "nom": "Carmen Rodriguez",
        "lu": false
    },
    {
        "id": 130,
        "destinataire": "Moi",
        "expediteur": "jose.martinez@spanishconsulting.com",
        "objet": "Rapport d'analyse de marché pour l'Amérique Latine",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour l'Amérique Latine. Ce document examine les dynamiques clés, les défis spécifiques et les opportunités pour les entreprises opérant en Amérique Latine.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nJosé Martinez",
        "piecesJointes": [
            "analyse_marche_amerique_latine.pdf"
        ],
        "nom": "José Martinez",
        "lu": false
    },
    {
        "id": 131,
        "destinataire": "Moi",
        "expediteur": "peter.hansen@australianbusiness.com",
        "objet": "Tendances du marché australien pour",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint les tendances du marché australien pour. Ce document examine les dynamiques clés, les défis spécifiques et les opportunités pour les entreprises opérant en Australie.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nPeter Hansen",
        "piecesJointes": [
            "tendances_marche_australien.pdf"
        ],
        "nom": "Peter Hansen",
        "lu": false
    },
    {
        "id": 132,
        "destinataire": "Moi",
        "expediteur": "helen.lee@koreaconsulting.com",
        "objet": "Rapport d'analyse de marché pour la Corée du Sud",
        "contenu": "Bonjour,\n\nLe rapport d'analyse de marché pour la Corée du Sud est joint à ce message. Ce document examine les dynamiques actuelles, les défis spécifiques et les opportunités pour les entreprises opérant en Corée du Sud.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nHelen Lee",
        "piecesJointes": [
            "analyse_marche_coree_du_sud.pdf"
        ],
        "nom": "Helen Lee",
        "lu": false
    },
    {
        "id": 133,
        "destinataire": "Moi",
        "expediteur": "ana.perez@spanishconsulting.com",
        "objet": "Étude de marché pour le secteur des services en Espagne",
        "contenu": "Bonjour,\n\nL'étude de marché pour le secteur des services en Espagne est incluse dans le document ci-joint. Ce rapport analyse les tendances clés, les défis et les opportunités pour les entreprises opérant dans ce secteur.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nAna Perez",
        "piecesJointes": [
            "etude_marche_services_espagne.pdf"
        ],
        "nom": "Ana Perez",
        "lu": false
    },
    {
        "id": 134,
        "destinataire": "Moi",
        "expediteur": "leonardo.oliveira@latinamericanbusiness.com",
        "objet": "Rapport d'analyse de marché pour le Pérou",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour le Pérou. Ce document examine les dynamiques du marché, les défis spécifiques et les opportunités pour les entreprises opérant au Pérou.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nLeonardo Oliveira",
        "piecesJointes": [
            "analyse_marche_perou.pdf"
        ],
        "nom": "Leonardo Oliveira",
        "lu": false
    },
    {
        "id": 135,
        "destinataire": "Moi",
        "expediteur": "julia.martins@portugueseconsulting.com",
        "objet": "Rapport d'analyse de marché pour le Portugal",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour le Portugal. Ce document examine les dynamiques actuelles, les défis spécifiques et les opportunités pour les entreprises opérant au Portugal.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nJulia Martins",
        "piecesJointes": [
            "analyse_marche_portugal.pdf"
        ],
        "nom": "Julia Martins",
        "lu": false
    },
    {
        "id": 136,
        "destinataire": "Moi",
        "expediteur": "luca.mancini@italianbusiness.com",
        "objet": "Rapport d'étude de marché pour l'Italie",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'étude de marché pour l'Italie. Ce document analyse les dynamiques du marché, les défis spécifiques et les opportunités pour les entreprises opérant en Italie.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nLuca Mancini",
        "piecesJointes": [
            "etude_marche_italie.pdf"
        ],
        "nom": "Luca Mancini",
        "lu": false
    },
    {
        "id": 137,
        "destinataire": "Moi",
        "expediteur": "noel.mendes@portugueseconsulting.com",
        "objet": "Rapport d'analyse de marché pour le secteur du tourisme au Portugal",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour le secteur du tourisme au Portugal. Ce document examine les dynamiques clés, les défis spécifiques et les opportunités pour les entreprises opérant dans ce secteur.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nNoel Mendes",
        "piecesJointes": [
            "analyse_marche_tourisme_portugal.pdf"
        ],
        "nom": "Noel Mendes",
        "lu": false
    },
    {
        "id": 138,
        "destinataire": "Moi",
        "expediteur": "david.jones@australianbusiness.com",
        "objet": "Rapport d'analyse de marché pour l'Australie",
        "contenu": "Bonjour,\n\nLe rapport d'analyse de marché pour l'Australie est joint à ce message. Ce document examine les dynamiques du marché, les défis spécifiques et les opportunités pour les entreprises opérant en Australie.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nDavid Jones",
        "piecesJointes": [
            "analyse_marche_australie.pdf"
        ],
        "nom": "David Jones",
        "lu": false
    },
    {
        "id": 139,
        "destinataire": "Moi",
        "expediteur": "francois.bois@francoisconsulting.com",
        "objet": "Étude de marché pour le secteur de l'énergie au Canada",
        "contenu": "Bonjour,\n\nL'étude de marché pour le secteur de l'énergie au Canada est incluse dans le document ci-joint. Ce rapport analyse les tendances clés, les défis et les opportunités pour les entreprises opérant dans ce secteur.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nFrançois Bois",
        "piecesJointes": [
            "etude_marche_energie_canada.pdf"
        ],
        "nom": "François Bois",
        "lu": false
    },
    {
        "id": 140,
        "destinataire": "Moi",
        "expediteur": "catherine.smith@usconsulting.com",
        "objet": "Rapport d'analyse de marché pour le secteur des télécommunications",
        "contenu": "Bonjour,\n\nLe rapport d'analyse de marché pour le secteur des télécommunications aux États-Unis est joint à ce message. Ce document analyse les dynamiques actuelles, les défis et les opportunités pour les entreprises opérant dans ce secteur.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nCatherine Smith",
        "piecesJointes": [
            "analyse_marche_telecoms_us.pdf"
        ],
        "nom": "Catherine Smith",
        "lu": false
    },
    {
        "id": 141,
        "destinataire": "Moi",
        "expediteur": "raoul.duval@frenchconsulting.com",
        "objet": "Étude de marché pour le secteur automobile en France",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint l'étude de marché pour le secteur automobile en France. Ce document analyse les tendances actuelles, les défis spécifiques et les opportunités pour les entreprises opérant dans ce secteur.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nRaoul Duval",
        "piecesJointes": [
            "etude_marche_automobile_france.pdf"
        ],
        "nom": "Raoul Duval",
        "lu": false
    },
    {
        "id": 142,
        "destinataire": "Moi",
        "expediteur": "maria.santos@portugueseconsulting.com",
        "objet": "Rapport d'analyse de marché pour le Portugal",
        "contenu": "Bonjour,\n\nLe rapport d'analyse de marché pour le Portugal est joint à ce message. Ce document examine les dynamiques clés, les défis spécifiques et les opportunités pour les entreprises opérant au Portugal.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nMaria Santos",
        "piecesJointes": [
            "analyse_marche_portugal.pdf"
        ],
        "nom": "Maria Santos",
        "lu": false
    },
    {
        "id": 143,
        "destinataire": "Moi",
        "expediteur": "susan.kim@koreaconsulting.com",
        "objet": "Rapport d'analyse de marché pour la Corée du Sud",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour la Corée du Sud. Ce document examine les dynamiques actuelles, les défis spécifiques et les opportunités pour les entreprises opérant en Corée du Sud.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nSusan Kim",
        "piecesJointes": [
            "analyse_marche_coree_du_sud.pdf"
        ],
        "nom": "Susan Kim",
        "lu": false
    },
    {
        "id": 144,
        "destinataire": "Moi",
        "expediteur": "john.doe@usconsulting.com",
        "objet": "Rapport de performance pour le deuxième trimestre",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport de performance pour le deuxième trimestre de. Ce document évalue les résultats atteints, les écarts par rapport aux objectifs fixés et les recommandations pour améliorer les performances à venir.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nJohn Doe",
        "piecesJointes": [
            "rapport_performance_Q2.pdf"
        ],
        "nom": "John Doe",
        "lu": false
    },
    {
        "id": 145,
        "destinataire": "Moi",
        "expediteur": "pierre.clement@frenchconsulting.com",
        "objet": "Étude de marché pour le secteur immobilier en France",
        "contenu": "Bonjour,\n\nL'étude de marché pour le secteur immobilier en France est incluse dans le document ci-joint. Ce rapport analyse les dynamiques clés, les défis et les opportunités pour les entreprises opérant dans ce secteur.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nPierre Clément",
        "piecesJointes": [
            "etude_marche_immobilier_france.pdf"
        ],
        "nom": "Pierre Clément",
        "lu": false
    },
    {
        "id": 146,
        "destinataire": "Moi",
        "expediteur": "sergio.gomez@latinamericanbusiness.com",
        "objet": "Rapport d'analyse de marché pour le Chili",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour le Chili. Ce document examine les dynamiques du marché, les défis spécifiques et les opportunités pour les entreprises opérant au Chili.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nSergio Gomez",
        "piecesJointes": [
            "analyse_marche_chili.pdf"
        ],
        "nom": "Sergio Gomez",
        "lu": false
    },
    {
        "id": 147,
        "destinataire": "Moi",
        "expediteur": "fernando.garcia@spanishconsulting.com",
        "objet": "Rapport d'analyse de marché pour l'Espagne",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour l'Espagne. Ce document examine les dynamiques actuelles, les défis spécifiques et les opportunités pour les entreprises opérant en Espagne.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nFernando Garcia",
        "piecesJointes": [
            "analyse_marche_espagne.pdf"
        ],
        "nom": "Fernando Garcia",
        "lu": false
    },
    {
        "id": 148,
        "destinataire": "Moi",
        "expediteur": "anabelle.baumann@germanbusiness.com",
        "objet": "Rapport d'analyse de marché pour l'Allemagne",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour l'Allemagne. Ce document examine les dynamiques clés, les défis spécifiques et les opportunités pour les entreprises opérant en Allemagne.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nAnabelle Baumann",
        "piecesJointes": [
            "analyse_marche_allemagne.pdf"
        ],
        "nom": "Anabelle Baumann",
        "lu": false
    },
    {
        "id": 149,
        "destinataire": "Moi",
        "expediteur": "gerard.dupont@frenchconsulting.com",
        "objet": "Rapport d'étude de marché pour la France",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'étude de marché pour la France. Ce document analyse les dynamiques clés, les défis spécifiques et les opportunités pour les entreprises opérant en France.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nGérard Dupont",
        "piecesJointes": [
            "etude_marche_france.pdf"
        ],
        "nom": "Gérard Dupont",
        "lu": false
    },
    {
        "id": 150,
        "destinataire": "Moi",
        "expediteur": "michele.bianchi@italianbusiness.com",
        "objet": "Rapport d'analyse de marché pour l'Italie",
        "contenu": "Bonjour,\n\nLe rapport d'analyse de marché pour l'Italie est joint à ce message. Ce document examine les dynamiques actuelles, les défis spécifiques et les opportunités pour les entreprises opérant en Italie.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nMichele Bianchi",
        "piecesJointes": [
            "analyse_marche_italie.pdf"
        ],
        "nom": "Michele Bianchi",
        "lu": false
    },
    {
        "id": 151,
        "destinataire": "Moi",
        "expediteur": "carlos.hernandez@spanishconsulting.com",
        "objet": "Rapport d'analyse de marché pour l'Amérique Latine",
        "contenu": "Bonjour,\n\nVeuillez trouver ci-joint le rapport d'analyse de marché pour l'Amérique Latine. Ce document examine les dynamiques clés, les défis spécifiques et les opportunités pour les entreprises opérant en Amérique Latine.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nCarlos Hernandez",
        "piecesJointes": [
            "analyse_marche_amerique_latine.pdf"
        ],
        "nom": "Carlos Hernandez",
        "lu": false
    },
    {
        "id": 152,
        "destinataire": "Moi",
        "expediteur": "maria.jimenez@spanishconsulting.com",
        "objet": "Rapport d'étude de marché pour l'Espagne",
        "contenu": "Bonjour,\n\nL'étude de marché pour l'Espagne est incluse dans le document ci-joint. Ce rapport analyse les dynamiques clés, les défis et les opportunités pour les entreprises opérant en Espagne.\n\nMerci de bien vouloir examiner ce rapport et de me faire part de vos retours.\n\nCordialement,\nMaria Jimenez",
        "piecesJointes": [
            "etude_marche_espagne.pdf"
        ],
        "nom": "Maria Jimenez",
        "lu": false
    }
]