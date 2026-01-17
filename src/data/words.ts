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
            'Stazione Spaziale', 'Piramidi', 'Polo Nord'
        ]
    },
    {
        id: 'jobs',
        name: 'Mestieri',
        words: [
            'Dottore', 'Poliziotto', 'Insegnante', 'Astronauta', 'Cuoco',
            'Pazzo', 'Giudice', 'Idraulico', 'Elettricista', 'Vigile del Fuoco',
            'Attore', 'Calciatore', 'Programmatore', 'Barbiere'
        ]
    },
    {
        id: 'food',
        name: 'Cibo',
        words: [
            'Pizza', 'Sushi', 'Hamburger', 'Pasta', 'Gelato',
            'Cioccolato', 'Insalata', 'Bistecca', 'Patatine Fritte',
            'Tacos', 'Kebab', 'Lasagna'
        ]
    },
    {
        id: 'objects',
        name: 'Oggetti',
        words: [
            'Telefono', 'Computer', 'Orologio', 'Chiavi', 'Occhiali',
            'Portafoglio', 'Zaino', 'Ombrello', 'Spazzolino',
            'Libro', 'Penna', 'Tazza'
        ]
    }
];
