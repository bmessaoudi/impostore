# L'Impostore

Un gioco sociale di deduzione e investigazione per scoprire chi è l'impostore tra i tuoi amici. Perfetto per feste e serate in compagnia.

## Descrizione

L'Impostore è un party game digitale pass-and-play che trasforma il tuo smartphone in un'esperienza di gioco sociale coinvolgente. I giocatori ricevono segretamente dei ruoli: la maggioranza sono cittadini che condividono una parola segreta, mentre uno di loro è l'impostore che non la conosce. Attraverso discussioni e deduzioni, i giocatori devono identificare l'intruso prima che sia troppo tardi.

## Caratteristiche

- **Pass and Play**: Un solo dispositivo per tutti i giocatori
- **Interfaccia Intuitiva**: Design moderno e responsive ottimizzato per mobile
- **Animazioni Fluide**: Transizioni e animazioni realizzate con GSAP
- **Categorie Variegate**: Oltre 1000 parole suddivise in categorie tematiche
- **Personalizzabile**: Scegli il numero di giocatori e il numero di impostori
- **Progressive Web App**: Installabile come app nativa su dispositivi mobile
- **Ottimizzato SEO**: Metadata completi per una migliore indicizzazione

## Tecnologie Utilizzate

- **Next.js 16** - Framework React per applicazioni web moderne
- **React 19** - Libreria per interfacce utente
- **TypeScript** - Tipizzazione statica per JavaScript
- **Tailwind CSS 4** - Framework CSS utility-first
- **Zustand** - State management leggero e performante
- **GSAP** - Libreria per animazioni professionali
- **Lucide React** - Set di icone moderne e personalizzabili

## Requisiti

- Node.js 20.x o superiore
- npm, yarn, pnpm o bun

## Installazione

Clona il repository:

```bash
git clone https://github.com/tuousername/impostore.git
cd impostore
```

Installa le dipendenze:

```bash
npm install
# oppure
yarn install
# oppure
pnpm install
```

## Utilizzo

### Ambiente di Sviluppo

Avvia il server di sviluppo:

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser per vedere l'applicazione.

### Build di Produzione

Crea la build ottimizzata per la produzione:

```bash
npm run build
```

Avvia il server di produzione:

```bash
npm start
```

### Linting

Esegui il controllo del codice:

```bash
npm run lint
```

## Struttura del Progetto

```
impostore/
├── public/              # Asset statici (immagini, icone, manifest)
├── src/
│   ├── app/            # App router di Next.js
│   │   ├── layout.tsx  # Layout principale e metadata
│   │   ├── page.tsx    # Homepage e logica di routing delle fasi
│   │   └── globals.css # Stili globali
│   ├── components/     # Componenti React
│   │   ├── game/       # Componenti specifici del gioco
│   │   └── layout/     # Componenti di layout
│   ├── data/           # Dati statici (parole e categorie)
│   └── store/          # State management con Zustand
├── package.json        # Dipendenze e script
└── tsconfig.json       # Configurazione TypeScript
```

## Fasi di Gioco

1. **Welcome Screen**: Schermata iniziale con presentazione del gioco
2. **Setup**: Configurazione del numero di giocatori e impostori
3. **Distribuzione Ruoli**: Ogni giocatore scopre segretamente il proprio ruolo
4. **Game Loop**: Fase di discussione e deduzione
5. **Votazione**: I giocatori votano per eliminare il sospetto
6. **Fine Partita**: Rivelazione dell'impostore e risultati

## Personalizzazione

### Aggiungere Nuove Parole

Le parole sono organizzate nel file `src/data/words.ts`. Puoi aggiungere nuove categorie o espandere quelle esistenti:

```typescript
export const wordCategories: WordCategory[] = [
  {
    name: "Nuova Categoria",
    words: ["parola1", "parola2", "parola3"],
  },
  // ...
];
```

### Modificare i Colori

I colori principali sono definiti in `src/app/globals.css` utilizzando variabili CSS:

```css
:root {
  --noir-gold: #d4af37;
  --noir-dark: #0a0a0a;
  /* ... */
}
```

## Deployment

### Netlify

1. Crea la build di produzione:

   ```bash
   npm run build
   ```

2. Carica la cartella `.next` su Netlify

### Vercel

Il modo più semplice per deployare l'applicazione è utilizzare la [Vercel Platform](https://vercel.com/new):

```bash
vercel
```

Segui le istruzioni per completare il deployment.

## Contribuire

I contributi sono benvenuti! Se vuoi contribuire al progetto:

1. Fai un fork del repository
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Committa le tue modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Pusha il branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## Licenza

Questo progetto è distribuito sotto licenza MIT. Vedi il file `LICENSE` per maggiori dettagli.

## Autore

**Bilal Messaoudi**

- Website: [bilel.it](https://bilel.it)
- Instagram: [@bilel.it](https://instagram.com/bilel.it)

## Ringraziamenti

- Ispirato dai classici party game di deduzione sociale
- Design influenzato dall'estetica noir e mystery
- Community Next.js per il framework eccezionale

## Link Utili

- [Documentazione Next.js](https://nextjs.org/docs)
- [Documentazione React](https://react.dev)
- [Documentazione Tailwind CSS](https://tailwindcss.com/docs)
- [Documentazione GSAP](https://greensock.com/docs/)
- [Documentazione Zustand](https://zustand-demo.pmnd.rs/)

---

Realizzato con passione da Bilal Messaoudi
