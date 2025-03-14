// City names list
const cities = [
	"Tokyo",
	"Delhi",
	"Shanghai",
	"São Paulo",
	"Mexico City",
	"Cairo",
	"Mumbai",
	"Beijing",
	"Dhaka",
	"Osaka",
	"New York",
	"Karachi",
	"Chengdu",
	"Istanbul",
	"Lagos",
	"Kinshasa",
	"Buenos Aires",
	"Kolkata",
	"Chennai",
	"Lima",
	"Strasbourg",
	"Haguenau",
	"Vendenheim",
	"Mulhouse",
	"Mundolsheim",
	"Colmar",
	"Selestat",
	"Illkirch",
	"Barr",
	"Shiltigheim",
	"Bangkok",
	"Paris",
	"Bogotá",
	"Hyderabad",
	"London",
	"Santiago",
	"Alexandria",
	"Los Angeles",
	"Shenzhen",
	"Lahore",
	"Bangalore",
	"Bande Aceh",
	"Birmingham",
	"Rio de Janeiro",
	"Tianjin",
	"Guangzhou",
	"Chengdu",
	"Wuhan",
	"Hangzhou",
	"Hanoi",
	"Phoenix",
	"Seattle",
	"Dallas",
	"Toronto",
	"Rome",
	"Madrid",
	"Milan",
	"Atlanta",
	"Kuala Lumpur",
	"Lille",
	"Saint Petersburg",
	"Nairobi",
	"Lisbon",
	"Montevideo",
	"Casablanca",
	"Kyiv",
	"Tel Aviv",
	"Yokohama",
	"Accra",
	"Helsinki",
	"Oslo",
	"Copenhagen",
	"Dubai",
	"Auckland",
	"Belo Horizonte",
	"Genoa",
	"Pittsburgh",
	"Brisbane",
	"Moscow",
	"San Francisco",
	"New Orleans",
	"Vancouver",
	"Stockholm",
	"Bordeaux",
	"Cincinnati",
	"Cologne",
	"Antwerp",
	"Hamburg",
	"Frankfurt",
	"Zurich",
	"Basel",
	"Lille",
	"Lyon",
	"Grenoble",
	"Marseille",
	"Bordeaux",
	"Nice",
	"Toulouse",
	"Rennes",
	"Strasbourg",
	"Montreal",
	"Ottawa",
	"Calgary",
	"Edmonton",
	"Victoria",
	"Halifax",
	"Quebec City",
	"Manila",
	"Jakarta",
	"Surabaya",
	"Bangalore",
	"Chennai",
	"Dhaka",
	"Lahore",
	"Karachi",
	"Islamabad",
	"Kuwait City",
	"Sanaa",
	"Damascus",
	"Baghdad",
	"Tehran",
	"Riyadh",
	"Jeddah",
	"Kabul",
	"Tashkent",
	"Astana",
	"Almaty",
	"Bishkek",
	"Dushanbe",
	"Chisinau",
	"Sofia",
	"Bucharest",
	"Belgrade",
	"Zagreb",
	"Sarajevo",
	"Tirana",
	"Podgorica",
	"Pristina",
	"Vilnius",
	"Riga",
	"Tallinn",
	"Minsk",
	"Brussels",
	"Amsterdam",
	"Oslo",
	"Stockholm",
	"Helsinki",
	"Copenhagen",
	"Reykjavik",
	"Monaco",
	"Vaduz",
	"San Marino",
	"Lima",
	"Quito",
	"Asunción",
	"Havana",
	"Port-au-Prince",
	"Caracas",
	"La Paz",
	"Sucre",
	"Brasilia",
	"Bogotá",
	"Medellín",
	"Barranquilla",
	"Cartagena",
	"Valparaíso",
	"Concepción",
	"Antofagasta",
	"Bucaramanga",
	"Cali",
	"Manizales",
	"Tegucigalpa",
	"San Salvador",
	"San José",
	"Guatemala City",
	"Santo Domingo",
	"Port of Spain",
	"Bridgetown",
	"Kingston",
	"Nassau",
	"George Town",
	"St. George's",
	"Freetown",
	"Monrovia",
	"Accra",
	"Kumasi",
	"Lagos",
	"Port Harcourt",
	"Nairobi",
	"Dar es Salaam",
	"Tanzania",
	"Kampala",
	"Addis Ababa",
	"Lusaka",
	"Harare",
	"Windhoek",
	"Maputo",
	"Hargeisa",
	"Mogadishu",
	"Djibouti City",
	"Asmara",
	"Khartoum",
	"Juba",
	"Bangui",
	"Kinshasa",
	"Brazzaville",
	"Yaoundé",
	"Douala",
	"Libreville",
	"Malabo",
	"N'Djamena",
	"Niamey",
	"Ouagadougou",
	"Accra",
	"Lome",
	"Bamako",
	"Conakry",
	"Monrovia",
	"Freetown",
	"Nairobi"
];

// Contry names list
const countries = [
	"Afghanistan",
	"Albanie",
	"Algérie",
	"Alsace",
	"Andorre",
	"Angola",
	"Antigua-et-Barbuda",
	"Argentine",
	"Arménie",
	"Australie",
	"Autriche",
	"Azerbaïdjan",
	"Bahamas",
	"Bahrain",
	"Bangladesh",
	"Barbade",
	"Bélarus",
	"Belgique",
	"Belize",
	"Bénin",
	"Bhoutan",
	"Bolivie",
	"Bosnie-Herzégovine",
	"Botswana",
	"Brésil",
	"Bretagne",
	"Brunei",
	"Bulgarie",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodge",
	"Cameroun",
	"Canada",
	"République Centrafricaine",
	"Tchad",
	"Chili",
	"Chine",
	"Colombie",
	"Comores",
	"Congo-Brazzaville",
	"Congo-Kinshasa",
	"Costa Rica",
	"Croatie",
	"Cuba",
	"Danemark",
	"Djibouti",
	"Dominique",
	"Égypte",
	"El Salvador",
	"Émirats Arabes Unis",
	"Équateur",
	"Erythrée",
	"Espagne",
	"Estonie",
	"Eswatini",
	"États-Unis",
	"Fidji",
	"Finlande",
	"France",
	"Gabon",
	"Gambie",
	"Géorgie",
	"Ghana",
	"Grèce",
	"Grenade",
	"Guatemala",
	"Guinée",
	"Guinée-Bissau",
	"Guyana",
	"Honduras",
	"Hongrie",
	"Islande",
	"Inde",
	"Indonésie",
	"Irak",
	"Iran",
	"Irlande",
	"Islande",
	"Italie",
	"Jamaïque",
	"Japon",
	"Jordanie",
	"Kazakhstan",
	"Kenya",
	"Kirghizistan",
	"Kiribati",
	"Kuwait",
	"Laos",
	"Lesotho",
	"Lettonie",
	"Liban",
	"Liberia",
	"Libye",
	"Liechtenstein",
	"Lituanie",
	"Luxembourg",
	"Madagascar",
	"Malaisie",
	"Malawi",
	"Maldives",
	"Mali",
	"Malte",
	"Maroc",
	"Maurice",
	"Mauritanie",
	"Mexique",
	"Micronésie",
	"Moldavie",
	"Monaco",
	"Mongolie",
	"Mozambique",
	"Namibie",
	"Nauru",
	"Népal",
	"Niger",
	"Nigeria",
	"Norvège",
	"Nouvelle-Zélande",
	"Oman",
	"Pakistan",
	"Palaos",
	"Panama",
	"Papouasie-Nouvelle-Guinée",
	"Paraguay",
	"Pays-Bas",
	"Pérou",
	"Philippines",
	"Pologne",
	"Portugal",
	"Qatar",
	"République de Corée",
	"République Dominicaine",
	"République Tchèque",
	"Roumanie",
	"Royaume-Uni",
	"Russie",
	"Rwanda",
	"Sahara Occidental",
	"Saint-Kitts-et-Nevis",
	"Saint-Vincent-et-les-Grenadines",
	"Sainte-Lucie",
	"Salvador",
	"Sénégal",
	"Serbie",
	"Seychelles",
	"Sierra Leone",
	"Singapour",
	"Slovaquie",
	"Slovénie",
	"Somalie",
	"Soudan",
	"Soudan du Sud",
	"Sri Lanka",
	"Suède",
	"Suisse",
	"Syrie",
	"Tadjikistan",
	"Tanzanie",
	"Tchad",
	"Thaïlande",
	"Timor oriental",
	"Togo",
	"Trinité-et-Tobago",
	"Tunisie",
	"Turkménistan",
	"Turquie",
	"Ukraine",
	"Uruguay",
	"Vanuatu",
	"Vatican",
	"Venezuela",
	"Vietnam",
	"Zambie",
	"Zimbabwe"
];

// Social media names list
const socialNetworks = [
	"Facebook",
	"X Corp",
	"Instagram",
	"LinkedIn",
	"Snapchat",
	"TikTok",
	"Pinterest",
	"Reddit",
	"YouTube",
	"WhatsApp",
	"Telegram",
	"Tumblr",
	"Viber",
	"Flickr",
	"WeChat",
	"Discord",
	"Quora",
	"Badoo",
	"Meetup",
	"MySpace",
	"Periscope",
	"Clubhouse",
	"Nextdoor",
	"Rumble",
	"VKontakte",
	"Odnoklassniki",
	"StumbleUpon",
	"SoundCloud",
	"Foursquare",
	"Behance",
	"Dribbble",
	"Medium",
	"Twitch",
	"Mastodon",
	"MeWe",
	"Diaspora",
	"Mix",
	"Flipboard",
	"Yelp",
	"Letterboxd",
	"Snapfish",
	"Couchsurfing",
	"Goodreads",
	"Steam",
	"ResearchGate",
	"Doximity",
	"Ravelry",
	"Patreon"
];

// First names list (Male,Female and Unisex)
const names = [
	"Liam",
	"Noah",
	"Oliver",
	"Elijah",
	"James",
	"William",
	"Benjamin",
	"Lucas",
	"Henry",
	"Alexander",
	"Sebastian",
	"Jack",
	"Owen",
	"Daniel",
	"Matthew",
	"Samuel",
	"David",
	"Joseph",
	"Carter",
	"Luke",
	"Gabriel",
	"Isaac",
	"Anthony",
	"Dylan",
	"Leo",
	"Ryan",
	"Nathan",
	"Michael",
	"Thomas",
	"Caleb",
	"Eli",
	"Olivia",
	"Emma",
	"Ava",
	"Sophia",
	"Isabella",
	"Mia",
	"Amelia",
	"Harper",
	"Evelyn",
	"Abigail",
	"Ella",
	"Avery",
	"Sofia",
	"Scarlett",
	"Grace",
	"Chloe",
	"Aria",
	"Camila",
	"Nora",
	"Riley",
	"Zoey",
	"Stella",
	"Luna",
	"Hannah",
	"Hazel",
	"Ellie",
	"Addison",
	"Autumn",
	"Skylar",
	"Leah",
	"Jordan",
	"Taylor",
	"Alex",
	"Morgan",
	"Riley",
	"Casey",
	"Jamie",
	"Avery",
	"Peyton",
	"Cameron",
	"Reese",
	"Sage",
	"Finley",
	"Quinn",
	"Skylar",
	"Emerson",
	"Hayden",
	"Rowan",
	"Dakota",
	"Jessie",
	"Alexis",
	"Charlie",
	"Blake",
	"Kendall",
	"Phoenix",
	"Marley",
	"Jaden",
	"Taylor",
	"Sawyer",
	"Harley"
];


// Vegetables list
const vegetables = [
	"Carotte", "Pomme de terre", "Patate douce", "Navet", "Radis", "Betterave", "Rutabaga", "Topinambour",
	"Céleri-rave", "Igname", "Manioc", "Salsifis", "Oignon", "Ail", "Échalote", "Poireau", "Fenouil", 
	"Ciboule", "Cive", "Oignon rouge", "Oignon blanc", "Asperge", "Brocoli", "Chou-fleur", "Chou vert", 
	"Chou rouge", "Chou de Bruxelles", "Kale", "Pak-choï", "Romanesco", "Artichaut", "Cardon", "Endive", 
	"Scarole", "Chicorée", "Laitue", "Batavia", "Frisée", "Sucrine", "Roquette", "Épinard", "Bette", 
	"Chou chinois", "Cresson", "Pourpier", "Liseron d'eau", "Mizuna", "Trévise", "Mâche", "Radicchio", 
	"Pois mange-tout", "Haricot vert", "Haricot beurre", "Haricot borlotti", "Pois cassé", "Fève", "Lentille verte", 
	"Lentille corail", "Pois chiche", "Soja", "Edamame", "Pois", "Petits pois", "Maïs", "Courgette", 
	"Aubergine", "Concombre", "Cornichon", "Courge butternut", "Courge spaghetti", "Potiron", "Potimarron", 
	"Citrouille", "Kabocha", "Chayote", "Melon amer", "Gombo", "Tomate", "Tomate cerise", "Poivron", 
	"Piment", "Jalapeño", "Piment d'Espelette", "Cayenne", "Tabasco", "Habanero", "Ancho", "Paprika"
];

// Sport names list
const sports = [
	"Football", "Basketball", "Tennis", "Volleyball", "Baseball", "Rugby", "Golf", "Natation", "Athlétisme", "Escrime",
	"Hockey sur glace", "Hockey sur gazon", "Handball", "Badminton", "Squash", "Boxe", "Karaté", "Judo", "Taekwondo",
	"Lutte", "Gymnastique", "Cyclisme", "Voile", "Canoë-kayak", "Escalade", "Ski alpin", "Snowboard", "Patinage artistique",
	"Patinage de vitesse", "Surf", "Planche à voile", "Tir à l'arc", "Triathlon", "Course automobile",
	"Basket-ball", "Athlétisme", "Tennis de table", "Golf", "Hockey sur glace", "Hockey sur gazon", "Badminton",
	"Squash", "Escrime", "Canoë-kayak", "Surf", "Boxe", "Football"
];


// List of climates
const climates = [
    "Équatorial", "Tropical", "Subtropical", "Désertique", "Méditerranéen",
    "Océanique", "Continental", "Polaire", "Montagnard", "Tempéré",
    "Humide", "Aride", "Mousson", "Semi-aride", "Steppe", 
    "Subpolaire", "Subtropical humide", "Subtropical sec", "Toundra",
    "Marin de l'Ouest", "Hémiboréal", "Humide continental", "Continental sec",
    "Savane", "Forêt tempérée", "Forêt tropicale humide", "Forêt boréale", 
    "Taïga", "Tropical sec", "Tempéré humide", "Désert froid"
];

// List of colors
const colors = [
    "Rouge", "Bleu", "Vert", "Jaune", "Orange", "Violet", "Rose", "Marron", "Noir", "Blanc",
    "Gris", "Cyan", "Magenta", "Turquoise", "Beige", "Bordeaux", "Ivoire", "Lavande",
    "Olive", "Or", "Argent", "Corail", "Menthe", "Chocolat", "Indigo", "Pêche", "Ocre",
    "Sable", "Bronze", "Aqua", "Saphir", "Émeraude", "Rubis", "Améthyste", "Moutarde", 
    "Fuchsia", "Bleu ciel", "Prune", "Blé", "Cerise", "Cramoisi", "Marine", "Aubergine", 
    "Anis", "Azalée", "Chartreuse", "Absinthe", "Tomate", "Fauve", "Pastel", "Bleu nuit", 
    "Orchidée", "Perle", "Noisette", "Kaki", "Sépia", "Acajou", "Safran", "Citron", 
    "Topaze", "Vert sapin", "Étain", "Rose vif", "Cuivre", "Rose pâle", "Framboise", 
    "Carmin", "Bleu pétrole", "Bleu roi", "Lilac", "Jaune canari", "Anthracite", 
    "Vert pomme", "Rose poudré", "Mauve", "Opale", "Ébène", "Bleu glacier", "Gris perle", 
    "Bleu cobalt", "Rouge sang", "Sable chaud", "Mimosa", "Lilas", "Bleu électrique", 
    "Abricot", "Turquoise clair", "Rose thé", "Grenat", "Orange brûlée", "Vert pastel", 
    "Bleu clair", "Vert citron", "Rose bonbon", "Gris fumé", "Rouge vermillon", 
    "Bleu denim", "Vert d'eau", "Jaune poussin", "Or rose", "Bleu pastel", "Vert tilleul"
];

//List of jobs
const jobs = [
	"Médecin", "Infirmier", "Enseignant", "Développeur", "Avocat", "Architecte", "Ingénieur", "Plombier", "Électricien",
	"Écrivain", "Journaliste", "Pharmacien", "Comptable", "Chef cuisinier", "Agriculteur", "Chercheur", "Secrétaire",
	"Policier", "Pompier", "Psychologue", "Acteur", "Musicien", "Artiste peintre", "Photographe", "Directeur",
	"Vétérinaire", "Designer graphique", "Coiffeur", "Traducteur", "Pilote d'avion", "Dentiste", "Notaire",
	"Technicien", "Géologue", "Astronome", "Statisticien", "Banquier", "Courtier", "Bibliothécaire", "Historiographe", "Spécialiste marketing",
	"Urbaniste", "Politicien", "Maire", "Député", "Ambassadeur", "Ministre", "Consultant", "Entrepreneur",
	"Community manager", "Éditeur", "Scénariste", "Réalisateur", "Coach sportif", "Professeur de yoga",
	"Nutritionniste", "Kinésithérapeute", "Orthophoniste", "Météorologue", "Cartographe", "Professeur d'université",
	"Tailleur", "Boulanger", "Boucher", "Pâtissier", "Sculpteur", "Bijoutier", "Menuisier", "Charpentier",
	"Soudeur", "Mécanicien", "Maçon", "Conducteur de travaux", "Peintre en bâtiment", "Jardinier",
	"Horloger", "Employé de banque", "Responsable RH", "Gestionnaire de paie", "Agent immobilier", "Courtier d'assurances",
	"Guide touristique", "Chauffeur de taxi", "Livreur", "Développeur web", "Spécialiste en cybersécurité",
	"Technicien réseau", "Data scientist", "UX designer", "Ingénieur en IA", "Astrophysicien", "Biologiste marin",
	"Ecologiste", "Zoologiste", "Ornithologue", "Anthropologue", "Archéologue", "Historien", "Ingénieur civil", "Magicien", 
	"Clown", "Animateur radio", "Influenceur", "Streamer"
];

// List of all the months of the year
const months = [
	"Janvier","Février","Mars","Avril","Mai","Juin","Juillet",
	"Août","Septembre","Octobre","Novembre","Décembre"
];

// List of animals of all types
const animals = [
	"Chat", "Chien", "Cheval", "Lapin", "Hamster", "Poisson rouge", "Perroquet", 
	"Canari", "Tortue", "Cochon d'Inde", "Lion", "Tigre", "Éléphant", 
	"Girafe", "Zèbre", "Hippopotame", "Rhinocéros", "Antilope", "Gorille", 
	"Chimpanzé", "Babouin", "Crocodile", "Alligator", "Dauphin", "Baleine", 
	"Requin", "Raie manta", "Méduse", "Poulpe", "Calmar", "Crabe", 
	"Homard", "Crevette", "Moule", "Escargot", "Serpent", "Boa", 
	"Python", "Cobra", "Iguane", "Caméléon", "Gecko", "Faucon", 
	"Aigle", "Pigeon", "Canard", "Cygne", "Héron", "Pingouin", 
	"Autruche", "Émeu", "Paon", "Hirondelle", "Corbeau", "Pie", 
	"Moineau", "Chouette", "Hibou", "Loup", "Renard", "Ours brun", 
	"Ours polaire", "Ours noir", "Cerf", "Daim", "Bison", "Élan", 
	"Sanglier", "Porc-épic", "Rat", "Souris", "Hérisson", "Taupe", 
	"Castor", "Loutre", "Blaireau", "Panda géant", "Panda roux", 
	"Koala", "Kangourou", "Wallaby", "Dingo", "Ornithorynque", 
	"Abeille", "Fourmi", "Guêpe", "Papillon", "Moustique", "Libellule", 
	"Coccinelle", "Scarabée", "Scorpion", "Grenouille", 
	"Crapaud", "Salamandre", "Triton", "Esturgeon", "Morue"
];
  

// List of music genres and subgenres
const music = [
	// Main genres
	"Pop", "Rock", "Jazz", "Blues", "Classique", "Hip-hop", "Rap", 
	"Électro", "R&B", "Soul", "Funk", "Country", "Reggae", "Folk", 
	"Disco", "Techno", "House", "Trap", "Dubstep", "Trance",

	// Rock, jazz and electro subgenres
	"Rock alternatif", "Hard rock", "Punk rock", "Metal", "Heavy metal",
	"Swing", "Ragtime", "Acid jazz", " Free Jazz",
  	"Drum and bass", "Hardstyle", "Lo-fi", 
  
	// Traditional subgenres and world music
	"Flamenco", "Samba", "Tango",  "Salsa", "Merengue", 
	"Reggaeton", "K-pop", "J-pop", "Afrobeats",
	"Chanson française", "Gospel",
  
	// Modern varieties
	"Electropop", "Pop rock", "Indie pop", 
];
  
  
  
   
  



