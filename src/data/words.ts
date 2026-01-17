export interface Category {
    id: string;
    name: string;
    words: string[];
}

export const GAME_CATEGORIES: Category[] = [
    {
        id: 'locations',
        name: 'Luoghi',
        words: [
            'Spiaggia', 'Ospedale', 'Ristorante', 'Scuola', 'Aereo',
            'Supermercato', 'Banca', 'Hotel', 'Circo', 'Casinò',
            'Stazione di Polizia', 'Base Militare', 'Sottomarino',
            'Stazione Spaziale', 'Piramidi', 'Polo Nord', 'Biblioteca', 'Cinema',
            'Teatro', 'Museo', 'Stadio', 'Palestra', 'Parco', 'Zoo',
            'Aeroporto', 'Porto', 'Stazione Ferroviaria', 'Farmacia', 'Chiesa',
            'Cattedrale', 'Moschea', 'Sinagoga', 'Castello', 'Grattacielo',
            'Faro', 'Molo', 'Isola Deserta', 'Foresta', 'Giungla', 'Deserto',
            'Montagna', 'Grotta', 'Vulcano', 'Cascata', 'Lago', 'Fiume',
            'Campeggio', 'Ufficio Postale', 'Municipio', 'Prigione', 'Cimitero',
            'Laboratorio', 'Fabbrica', 'Centrale Elettrica', 'Diga', 'Ponte',
            'Galleria d\'Arte', 'Discoteca', 'Bar', 'Caffetteria', 'Panificio',
            'Gelateria', 'Pizzeria', 'Macelleria', 'Pescheria', 'Fruttivendolo',
            'Negozio di Giocattoli', 'Negozio di Vestiti', 'Centro Commerciale', 'Parcheggio',
            'Benzinaio', 'Autolavaggio', 'Officina', 'Cantina', 'Soffitta', 'Garage',
            'Balcone', 'Giardino', 'Cortile', 'Terrazza', 'Ascensore', 'Scale', 'Corridoio',
            'Cucina', 'Salotto', 'Bagno', 'Camera da Letto', 'Studio', 'Ripostiglio'
        ]
    },
    {
        id: 'jobs',
        name: 'Mestieri',
        words: [
            'Dottore', 'Poliziotto', 'Insegnante', 'Astronauta', 'Cuoco',
            'Pazzo', 'Giudice', 'Idraulico', 'Elettricista', 'Vigile del Fuoco',
            'Attore', 'Calciatore', 'Programmatore', 'Barbiere', 'Infermiere',
            'Dentista', 'Veterinario', 'Farmacista', 'Avvocato', 'Notaio',
            'Architetto', 'Ingegnere', 'Muratore', 'Falegname', 'Fabbro',
            'Giardiniere', 'Contadino', 'Pescatore', 'Cacciatore', 'Sarto',
            'Stilista', 'Modella', 'Fotografo', 'Giornalista', 'Scrittore',
            'Pittore', 'Scultore', 'Musicista', 'Cantante', 'Ballerino',
            'Regista', 'Pilota', 'Hostess', 'Capitano', 'Marinaio',
            'Tassista', 'Autista', 'Meccanico', 'Benzinaio', 'Postino',
            'Corriere', 'Commesso', 'Cassiere', 'Cameriere', 'Barista',
            'Bagnino', 'Istruttore di Nuoto', 'Allenatore', 'Arbitro', 'Atleta',
            'Ciclista', 'Tennista', 'Sciatore', 'Nuotatore', 'Pugile',
            'Militare', 'Generale', 'Spia', 'Detective', 'Guardia Giurata',
            'Ladro', 'Pirata', 'Mago', 'Clown', 'Acrobata', 'Domatore',
            'Sacerdote', 'Suora', 'Monaco', 'Papa', 'Politico',
            'Sindaco', 'Presidente', 'Re', 'Regina', 'Principe',
            'Principessa', 'Scienziato', 'Ricercatore', 'Archeologo', 'Astronomo'
        ]
    },
    {
        id: 'food',
        name: 'Cibo',
        words: [
            'Pizza', 'Sushi', 'Hamburger', 'Pasta', 'Gelato',
            'Cioccolato', 'Insalata', 'Bistecca', 'Patatine Fritte',
            'Tacos', 'Kebab', 'Lasagna', 'Risotto', 'Minestrone', 'Zuppa',
            'Pollo Arrosto', 'Pesce Grigliato', 'Gamberi', 'Aragosta', 'Granchio',
            'Ostriche', 'Cozze', 'Vongole', 'Salmone', 'Tonno', 'Merluzzo',
            'Sardine', 'Acciughe', 'Formaggio', 'Mozzarella', 'Parmigiano',
            'Gorgonzola', 'Ricotta', 'Yogurt', 'Burro', 'Panna', 'Latte',
            'Uova', 'Frittata', 'Omelette', 'Pane', 'Focaccia', 'Grissini',
            'Cracker', 'Biscotti', 'Torta', 'Crostata', 'Ciambella', 'Brioche',
            'Cornetto', 'Muffin', 'Pancake', 'Waffle', 'Crepe', 'Miele',
            'Marmellata', 'Nutella', 'Burro di Arachidi', 'Maionese', 'Ketchup',
            'Senape', 'Aceto', 'Olio d\'Oliva', 'Sale', 'Pepe', 'Zucchero',
            'Farina', 'Riso', 'Carrè di Agnello', 'Polpette', 'Cotoletta',
            'Spezzatino', 'Brasato', 'Arrosto', 'Wurstel', 'Salsiccia',
            'Salame', 'Prosciutto', 'Mortadella', 'Pancetta', 'Speck'
        ]
    },
    {
        id: 'objects',
        name: 'Oggetti',
        words: [
            'Telefono', 'Computer', 'Orologio', 'Chiavi', 'Occhiali',
            'Portafoglio', 'Zaino', 'Ombrello', 'Spazzolino',
            'Libro', 'Penna', 'Tazza', 'Bicchiere', 'Piatto', 'Forchetta',
            'Coltello', 'Cucchiaio', 'Pentola', 'Padella', 'Coperchio',
            'Mestolo', 'Colapasta', 'Grattugia', 'Tagliere', 'Apribottiglie',
            'Cavatappi', 'Accendino', 'Fiammiferi', 'Candela', 'Torcia',
            'Lampadina', 'Batteria', 'Caricabatterie', 'Cuffie', 'Auricolari',
            'Altoparlante', 'Microfono', 'Telecomando', 'Televisore', 'Radio',
            'Fotocamera', 'Videocamera', 'Treppiede', 'Binocolo', 'Telescopio',
            'Microscopio', 'Termometro', 'Bussola', 'Mappa', 'Mappamondo',
            'Valigia', 'Borsa', 'Sacchetto', 'Scatola', 'Cesta',
            'Vaso', 'Quadro', 'Specchio', 'Tappeto', 'Cuscino',
            'Coperta', 'Lenzuolo', 'Asciugamano', 'Sapone', 'Shampoo',
            'Dentifricio', 'Pettine', 'Spazzola', 'Phon', 'Rasoio',
            'Forbici', 'Colla', 'Nastro Adesivo', 'Graffettatrice', 'Perforatrice',
            'Matita', 'Gomma', 'Temperino', 'Righello', 'Squadra',
            'Compasso', 'Calcolatrice', 'Quaderno', 'Agenda', 'Diario'
        ]
    },
    {
        id: 'animals',
        name: 'Animali',
        words: [
            'Cane', 'Gatto', 'Topo', 'Criceto', 'Coniglio',
            'Tartaruga', 'Pappagallo', 'Canarino', 'Pesce Rosso', 'Serpente',
            'Cavia', 'Furetto', 'Cavallo', 'Asino', 'Mucca', 'Toro',
            'Maiale', 'Pecora', 'Capra', 'Gallina', 'Gallo', 'Papera',
            'Oca', 'Tacchino', 'Leone', 'Tigre', 'Leopardo', 'Ghepardo',
            'Pantera', 'Giaguaro', 'Lupo', 'Volpe', 'Orso', 'Panda',
            'Koala', 'Canguro', 'Elefante', 'Rinoceronte', 'Ippopotamo', 'Giraffa',
            'Zebra', 'Gazzella', 'Cammello', 'Dromedario', 'Scimmia', 'Gorilla',
            'Scimpanzé', 'Orango', 'Lemure', 'Bradipo', 'Pipistrello', 'Scoiattolo',
            'Castoro', 'Riccio', 'Istrice', 'Talpa', 'Lontra', 'Foca',
            'Tricheco', 'Delfino', 'Balena', 'Orca', 'Squalo', 'Polpo',
            'Calamaro', 'Medusa', 'Granchio', 'Aragosta', 'Gambero', 'Stella Marina',
            'Tartaruga Marina', 'Coccodrillo', 'Alligatore', 'Iguana', 'Camaleonte',
            'Rana', 'Rospo', 'Salamandra', 'Aquila', 'Falco', 'Gufo',
            'Civetta', 'Pinguino', 'Struzzo', 'Pavone', 'Fenicottero', 'Cigno',
            'Pellicano', 'Gabbiano', 'Rondine', 'Passero', 'Piccione', 'Corvo',
            'Pipistrello', 'Ape', 'Vespa', 'Formica', 'Mosca', 'Zanzara',
            'Farfalla', 'Libellula', 'Scarabeo', 'Coccinella', 'Ragno', 'Scorpione'
        ]
    },
    {
        id: 'clothing',
        name: 'Abbigliamento',
        words: [
            'Maglietta', 'Camicia', 'Pantaloni', 'Jeans', 'Gonna',
            'Vestito', 'Abito', 'Giacca', 'Cappotto', 'Impermeabile',
            'Giubbotto', 'Felpa', 'Maglione', 'Cardigan', 'Gilet',
            'Tuta', 'Shorts', 'Bermuda', 'Leggings', 'Calze',
            'Calzini', 'Collant', 'Mutande', 'Reggiseno', 'Boxer',
            'Canottiera', 'Pigiama', 'Camicia da Notte', 'Vestaglia', 'Costume da Bagno',
            'Bikini', 'Scarpe', 'Stivali', 'Stivaletti', 'Sandali',
            'Infradito', 'Ciabatte', 'Pantofole', 'Scarpe da Ginnastica', 'Tacchi Alti',
            'Mocassini', 'Cintura', 'Bretelle', 'Cravatta', 'Papillon',
            'Sciarpa', 'Foulard', 'Guanti', 'Cappello', 'Berretto',
            'Coppola', 'Cilindro', 'Bombetta', 'Sombrero', 'Casco',
            'Occhiali da Sole', 'Borsa', 'Borsetta', 'Zaino', 'Valigetta',
            'Portafoglio', 'Portamonete', 'Ombrello', 'Orologio', 'Anello',
            'Collana', 'Braccialetto', 'Orecchini', 'Spilla', 'Gemelli'
        ]
    },
    {
        id: 'body',
        name: 'Corpo Umano',
        words: [
            'Testa', 'Capelli', 'Faccia', 'Fronte', 'Occhio',
            'Sopracciglio', 'Ciglio', 'Naso', 'Orecchio', 'Guancia',
            'Bocca', 'Labbra', 'Dente', 'Lingua', 'Mento',
            'Barba', 'Baffi', 'Collo', 'Gola', 'Spalla',
            'Braccio', 'Gomito', 'Avambraccio', 'Polso', 'Mano',
            'Dito', 'Pollice', 'Indice', 'Medio', 'Anulare',
            'Mignolo', 'Unghia', 'Petto', 'Seno', 'Costola',
            'Pancia', 'Ombelico', 'Schiena', 'Colonna Vertebrale', 'Fianco',
            'Bacino', 'Sedere', 'Gamba', 'Coscia', 'Ginocchio',
            'Polpaccio', 'Caviglia', 'Piede', 'Tallone', 'Pianta del Piede',
            'Alluce', 'Cuore', 'Polmoni', 'Stomaco', 'Fegato',
            'Reni', 'Intestino', 'Vena', 'Arteria', 'Sangue',
            'Muscolo', 'Osso', 'Pelle', 'Cervello', 'Nervo',
            'Scheletro', 'Cranio'
        ]
    },
    {
        id: 'sports',
        name: 'Sport',
        words: [
            'Calcio', 'Basket', 'Pallavolo', 'Tennis', 'Rugby',
            'Baseball', 'Golf', 'Hockey', 'Cricket', 'Badminton',
            'Ping Pong', 'Nuoto', 'Pallanuoto', 'Tuffi', 'Sincronizzato',
            'Atletica', 'Corsa', 'Maratona', 'Salto in Alto', 'Salto in Lungo',
            'Salto con l\'Asta', 'Lancio del Peso', 'Lancio del Disco', 'Giavellotto', 'Scherma',
            'Pugilato', 'Judo', 'Karate', 'Taekwondo', 'Lotta Libera',
            'Ciclismo', 'Mountain Bike', 'BMX', 'Motociclismo', 'Formula 1',
            'Rally', 'Kart', 'Sci', 'Snowboard', 'Pattinaggio',
            'Hockey su Ghiaccio', 'Curling', 'Bob', 'Slittino', 'Alpinismo',
            'Arrampicata', 'Escursionismo', 'Trekking', 'Canottaggio', 'Canoa',
            'Kayak', 'Vela', 'Surf', 'Windsurf', 'Kitesurf',
            'Sci Nautico', 'Subacquea', 'Pesca Sportiva', 'Equitazione', 'Ippica',
            'Tiro con l\'Arco', 'Tiro a Segno', 'Bowling', 'Biliardo', 'Freccette',
            'Scacchi', 'Ginnastica Artistica', 'Ginnastica Ritmica', 'Danza', 'Yoga',
            'Pilates', 'Crossfit', 'Bodybuilding', 'Skateboard', 'Pattinaggio a Rotelle'
        ]
    },
    {
        id: 'transport',
        name: 'Trasporti',
        words: [
            'Automobile', 'Moto', 'Scooter', 'Bicicletta', 'Camion',
            'Furgone', 'Autobus', 'Pullman', 'Tram', 'Filobus',
            'Metropolitana', 'Treno', 'Treno Alta Velocità', 'Locomotiva', 'Vagone',
            'Aereo', 'Elicottero', 'Aliante', 'Mongolfiera', 'Dirigibile',
            'Razzo', 'Navetta Spaziale', 'Nave', 'Traghetto', 'Crociera',
            'Barca a Vela', 'Motoscafo', 'Yacht', 'Gommone', 'Canoa',
            'Kayak', 'Zattera', 'Sottomarino', 'Taxi', 'Uber',
            'Ambulanza', 'Auto della Polizia', 'Camion dei Pompieri', 'Carro Attrezzi', 'Betoniera',
            'Gru', 'Ruspa', 'Trattore', 'Mietitrebbia', 'Quad',
            'Segway', 'Monopattino', 'Monopattino Elettrico', 'Skateboard', 'Pattini',
            'Funivia', 'Seggiovia', 'Ovovia', 'Skilift', 'Carrozza',
            'Slitta', 'Passeggino', 'Carriola', 'Muletto', 'Ape Car'
        ]
    },
    {
        id: 'nature',
        name: 'Natura',
        words: [
            'Albero', 'Fiore', 'Erba', 'Prato', 'Cespuglio',
            'Foglia', 'Ramo', 'Tronco', 'Radice', 'Corteccia',
            'Muschio', 'Fungo', 'Pigna', 'Sasso', 'Roccia',
            'Pietra', 'Sabbia', 'Terra', 'Fango', 'Polvere',
            'Acqua', 'Goccia', 'Onda', 'Schiuma', 'Vapore',
            'Ghiaccio', 'Neve', 'Grandine', 'Pioggia', 'Temporale',
            'Fulmine', 'Tuono', 'Arcobaleno', 'Nuvola', 'Cielo',
            'Sole', 'Luna', 'Stella', 'Pianeta', 'Cometa',
            'Asteroide', 'Meteora', 'Galassia', 'Universo', 'Vento',
            'Brezza', 'Uragano', 'Tornado', 'Tromba d\'Aria', 'Nebbia',
            'Foschia', 'Rugiada', 'Brina', 'Tramonto', 'Alba',
            'Aurora Boreale', 'Eclissi', 'Terremoto', 'Maremoto', 'Tsunami',
            'Valanga', 'Frana', 'Incendio', 'Inondazione', 'Siccità',
            'Rosa', 'Tulipano', 'Margherita', 'Girasole', 'Giglio',
            'Orchidea', 'Viola', 'Papavero', 'Garofano', 'Lavanda',
            'Rosmarino', 'Salvia', 'Basilico', 'Menta', 'Prezzemolo',
            'Quercia', 'Pino', 'Abete', 'Palma', 'Ulivo',
            'Salice', 'Betulla', 'Acero', 'Cipresso', 'Bambù',
            'Cactus'
        ]
    },
    {
        id: 'home',
        name: 'Casa',
        words: [
            'Divano', 'Poltrona', 'Sedia', 'Sgabello', 'Pouf',
            'Tavolo', 'Tavolino', 'Scrivania', 'Comodino', 'Armadio',
            'Cassettiera', 'Credenza', 'Libreria', 'Scaffale', 'Mensola',
            'Letto', 'Letto a Castello', 'Culla', 'Materasso', 'Ret',
            'Lampada', 'Lampadario', 'Abat-jour', 'Faretto', 'Luce',
            'Interruttore', 'Presa', 'Spina', 'Prolunga', 'Termosifone',
            'Camino', 'Stufa', 'Condizionatore', 'Ventilatore', 'Deumidificatore',
            'Frigorifero', 'Freezer', 'Forno', 'Microonde', 'Fornelli',
            'Piano Cottura', 'Cappa', 'Lavastoviglie', 'Lavatrice', 'Asciugatrice',
            'Ferro da Stiro', 'Asse da Stiro', 'Aspirapolvere', 'Scopa', 'Paletta',
            'Mocio', 'Secchio', 'Spugna', 'Straccio', 'Detersivo',
            'Lavandino', 'Rubinetto', 'Lavabo', 'Bidet', 'Water',
            'Doccia', 'Vasca da Bagno', 'Tenda', 'Tapparella', 'Persiana',
            'Finestra', 'Porta', 'Portone', 'Zerbin', 'Campanello',
            'Chiave', 'Serratura', 'Maniglia', 'Pavimento', 'Soffitto',
            'Muro', 'Parete', 'Carta da Parati', 'Parquet', 'Piastrelle'
        ]
    },
    {
        id: 'instruments',
        name: 'Strumenti',
        words: [
            'Pianoforte', 'Chitarra', 'Chitarra Elettrica', 'Basso', 'Violino',
            'Viola', 'Violoncello', 'Contrabbasso', 'Arpa', 'Flauto',
            'Flauto Traverso', 'Flauto Dolce', 'Ottavino', 'Clarinetto', 'Sassofono',
            'Oboe', 'Fagotto', 'Tromba', 'Trombone', 'Corno Francese',
            'Tuba', 'Batteria', 'Tamburo', 'Grancassa', 'Rullante',
            'Piatti', 'Triangolo', 'Xilofono', 'Marimba', 'Vibrafono',
            'Glockenspiel', 'Timpani', 'Conga', 'Bongo', 'Djembe',
            'Tamburello', 'Maracas', 'Castanacchie', 'Nacchere', 'Gong',
            'Campana', 'Campanelli', 'Armonica', 'Fisarmonica', 'Organo',
            'Sintetizzatore', 'Tastiera', 'Ukulele', 'Mandolino', 'Banjo',
            'Liuto', 'Sitar', 'Ghironda', 'Cornamusa', 'Didgeridoo'
        ]
    },
    {
        id: 'technology',
        name: 'Tecnologia',
        words: [
            'Smartphone', 'Tablet', 'Laptop', 'Desktop', 'Monitor',
            'Tastiera', 'Mouse', 'Stampante', 'Scanner', 'Webcam',
            'Router', 'Modem', 'Wi-Fi', 'Bluetooth', 'USB',
            'Hard Disk', 'SSD', 'Chiavetta USB', 'Scheda SD', 'Processore',
            'Scheda Video', 'RAM', 'Scheda Madre', 'Alimentatore', 'Ventola',
            'Cavo', 'Adattatore', 'Presa Smart', 'Lampadina Smart', 'Assistente Vocale',
            'Alexa', 'Siri', 'Google Home', 'Robot Aspirapolvere', 'Drone',
            'Visore VR', 'Console', 'PlayStation', 'Xbox', 'Nintendo Switch',
            'Controller', 'Joystick', 'Videogioco', 'App', 'Software',
            'Sistema Operativo', 'Windows', 'MacOS', 'Linux', 'Android',
            'iOS', 'Browser', 'Sito Web', 'Social Media', 'Facebook',
            'Instagram', 'TikTok', 'Twitter', 'YouTube', 'WhatsApp',
            'Telegram', 'Email', 'Chat', 'Videochiamata', 'Cloud',
            'Server', 'Database', 'Algoritmo', 'Intelligenza Artificiale', 'Robot',
            'Satellite', 'Antenna', 'Fibra Ottica', 'Laser', 'Ologramma'
        ]
    },
    {
        id: 'fruit_veg',
        name: 'Ortofrutta',
        words: [
            'Mela', 'Pera', 'Banana', 'Arancia', 'Mandarino',
            'Limone', 'Lime', 'Pompelmo', 'Cedro', 'Pesca',
            'Albicocca', 'Susina', 'Prugna', 'Ciliegia', 'Amarena',
            'Fragola', 'Lampone', 'Mirtillo', 'Mora', 'Ribes',
            'Uva', 'Kiwi', 'Ananas', 'Mango', 'Papaya',
            'Avocado', 'Cocco', 'Melone', 'Anguria', 'Fico',
            'Dattero', 'Melograno', 'Cachi', 'Castagna', 'Noce',
            'Nocciola', 'Mandorla', 'Pistacchio', 'Anacardo', 'Arachide',
            'Pomodoro', 'Patata', 'Carota', 'Cipolla', 'Aglio',
            'Scalogno', 'Sedano', 'Finocchio', 'Zucchina', 'Melanzana',
            'Peperone', 'Cetriolo', 'Zucca', 'Spinaci', 'Bietola',
            'Lattuga', 'Rucola', 'Radicchio', 'Insalata Iceberg', 'Cavolo',
            'Verza', 'Cavolfiore', 'Broccolo', 'Cavoletto di Bruxelles', 'Carciofo',
            'Asparago', 'Fagiolo', 'Fagiolino', 'Pisello', 'Cece',
            'Lenticchia', 'Fava', 'Soia', 'Mais', 'Oliva'
        ]
    },
    {
        id: 'fantasy',
        name: 'Fantasia',
        words: [
            'Drago', 'Unicorno', 'Pegaso', 'Fenice', 'Grifone',
            'Idra', 'Chimera', 'Minotauro', 'Centauro', 'Sirena',
            'Tritone', 'Ninfa', 'Fata', 'Elfo', 'Gnomo',
            'Nano', 'Orco', 'Troll', 'Goblin', 'Gigante',
            'Ciclope', 'Titano', 'Dio', 'Dea', 'Angelo',
            'Demone', 'Diavolo', 'Fantasma', 'Spettro', 'Zombie',
            'Vampiro', 'Licantropo', 'Lupo Mannaro', 'Mummia', 'Scheletro',
            'Strega', 'Stregone', 'Mago', 'Magia', 'Incantesimo',
            'Pozione', 'Bacchetta Magica', 'Scopa Volante', 'Calderone', 'Sfera di Cristallo',
            'Tappeto Volante', 'Lampada Magica', 'Genio', 'Castello Incantato', 'Foresta Proibita',
            'Tesoro', 'Mappa del Tesoro', 'Isola che non c\'è', 'Paese delle Meraviglie', 'Oz',
            'Narnia', 'Terra di Mezzo', 'Hogwarts', 'Spada Magica', 'Scudo Magico',
            'Anello del Potere', 'Mantello dell\'Invisibilità', 'Pietra Filosofale', 'Graal'
        ]
    },
    {
        id: 'colors',
        name: 'Colori',
        words: [
            'Rosso', 'Arancione', 'Giallo', 'Verde', 'Blu',
            'Azzurro', 'Indaco', 'Violetto', 'Viola', 'Rosa',
            'Fucsia', 'Magenta', 'Lilla', 'Lavanda', 'Marrone',
            'Beige', 'Crema', 'Ocra', 'Sabbia', 'Tortora',
            'Bianco', 'Panna', 'Avorio', 'Nero', 'Grigio',
            'Antracite', 'Argento', 'Oro', 'Bronzo', 'Rame',
            'Platino', 'Bordeaux', 'Scarlatto', 'Cremisi', 'Mattone',
            'Ruggine', 'Corallo', 'Salmone', 'Pesca', 'Albicocca',
            'Limone', 'Senape', 'Smeraldo', 'Muschio', 'Oliva',
            'Salvia', 'Menta', 'Giada', 'Turchese', 'Acquamarina',
            'Petrolio', 'Zaffiro', 'Cobalto', 'Oltremare', 'Celeste',
            'Pervinca', 'Indaco', 'Prugna', 'Melanzana', 'Ciclamino'
        ]
    },
    {
        id: 'school',
        name: 'Scuola',
        words: [
            'Aula', 'Lavagna', 'Gesso', 'Cancellino', 'Pennarello',
            'Banco', 'Cattedra', 'Zaino', 'Astuccio', 'Diario',
            'Quaderno', 'Libro di Testo', 'Dizionario', 'Atlante', 'Enciclopedia',
            'Penna', 'Matita', 'Gomma', 'Temperino', 'Righello',
            'Squadra', 'Compasso', 'Goniometro', 'Calcolatrice', 'Forbici',
            'Colla', 'Nastro Adesivo', 'Evidenziatore', 'Pastelli', 'Pennarelli',
            'Acquerelli', 'Tempere', 'Pennello', 'Album da Disegno', 'Cartellina',
            'Foglio Protocollo', 'Compito in Classe', 'Interrogazione', 'Pagella', 'Voto',
            'Promozione', 'Bocciatura', 'Diploma', 'Laurea', 'Ricreazione',
            'Mensa', 'Palestra', 'Laboratorio', 'Biblioteca', 'Bidello',
            'Preside', 'Segreteria', 'Assemblea', 'Gita Scolastica', 'Autobus Scolastico',
            'Lezione', 'Materia', 'Matematica', 'Italiano', 'Storia',
            'Geografia', 'Scienze', 'Inglese', 'Francese', 'Spagnolo',
            'Tedesco', 'Latino', 'Greco', 'Arte', 'Musica',
            'Educazione Fisica', 'Religione', 'Informatica'
        ]
    },
    {
        id: 'space',
        name: 'Spazio',
        words: [
            'Sole', 'Mercurio', 'Venere', 'Terra', 'Marte',
            'Giove', 'Saturno', 'Urano', 'Nettuno', 'Plutone',
            'Luna', 'Fobos', 'Deimos', 'Io', 'Europa',
            'Ganimede', 'Callisto', 'Titano', 'Encelado', 'Tritone',
            'Stella', 'Costellazione', 'Orsa Maggiore', 'Orsa Minore', 'Cassiopea',
            'Orione', 'Stella Polare', 'Sirio', 'Alpha Centauri', 'Proxima Centauri',
            'Galassia', 'Via Lattea', 'Andromeda', 'Nebulosa', 'Buco Nero',
            'Supernova', 'Pulsar', 'Quasar', 'Cometa', 'Asteroide',
            'Meteora', 'Meteorite', 'Cratere', 'Eclissi', 'Orbita',
            'Gravità', 'Vuoto', 'Universo', 'Big Bang', 'Tuta Spaziale',
            'Casco', 'Astronauta', 'Cosmonauta', 'Razzo', 'Shuttle',
            'Stazione Spaziale', 'Sonda', 'Rover', 'Telescopio', 'Hubble',
            'Webb', 'Osservatorio', 'UFO', 'Alieno', 'Marziano'
        ]
    },
    {
        id: 'movies',
        name: 'Cinema',
        words: [
            'Attore', 'Attrice', 'Regista', 'Sceneggiatore', 'Produttore',
            'Comparsa', 'Stuntman', 'Doppiatore', 'Film', 'Cortometraggio',
            'Lungometraggio', 'Documentario', 'Cartone Animato', 'Serie TV', 'Sitcom',
            'Soap Opera', 'Telenovela', 'Reality Show', 'Telegiornale', 'Pubblicità',
            'Trailer', 'Titoli di Testa', 'Titoli di Coda', 'Colonna Sonora', 'Effetti Speciali',
            'CGI', 'Schermo Verde', 'Ciak', 'Macchina da Presa', 'Microfono',
            'Set', 'Studio', 'Cinema', 'Sala', 'Poltrona',
            'Biglietto', 'Popcorn', 'Bibita', 'Proiettore', 'Schermo',
            'Locandina', 'Premio Oscar', 'Festival', 'Red Carpet', 'Hollywood',
            'Cinecittà', 'Bollywood', 'Genere', 'Azione', 'Avventura',
            'Commedia', 'Drammatico', 'Horror', 'Thriller', 'Fantascienza',
            'Fantasy', 'Western', 'Musical', 'Guerra', 'Biografico',
            'Storico', 'Poliziesco', 'Giallo', 'Romantico', 'Erotico',
            'Muto', 'Bianco e Nero', '3D', 'IMAX', 'Streaming',
            'Netflix', 'Amazon Prime', 'Disney+', 'Hulu', 'HBO'
        ]
    }
];
