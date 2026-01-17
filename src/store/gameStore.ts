import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { GAME_CATEGORIES } from '@/data/words';

export type Role = 'citizen' | 'impostor';
export type GameStatus = 'welcome' | 'setup' | 'distributing' | 'playing' | 'voting' | 'ended';

export interface Player {
    id: string;
    name: string;
    role: Role;
    score: number;
    isEliminated: boolean;
}

export interface GameSettings {
    impostorCount: number;
    gameMode: 'timer' | 'turns';
    timerDuration: number; // in seconds
    turnLimit: number; // Number of full rounds (everyone speaks once = 1 round)
    tutorialSeen: boolean;
}

interface GameState {
    // CONFIG
    status: GameStatus;
    players: Player[];
    settings: GameSettings;

    // CURRENT ROUND STATE
    currentWord: string;
    currentCategory: string;
    turnOrder: string[]; // Shuffle of player IDs
    currentTurnIndex: number;
    roundsPlayed: number; // Track full rounds
    revealedPlayers: string[]; // IDs of players who have seen their role
    dealerId: string | null; // Who passes the phone first (First Player)

    // ACTIONS
    addPlayer: (name: string) => void;
    removePlayer: (id: string) => void;
    updateSettings: (settings: Partial<GameSettings>) => void;
    startGame: () => void;
    revealRole: (playerId: string) => void; // Mark as revealed
    nextRoleReveal: () => void; // Move to next player for reveal
    handleTurnTimeout: () => void;
    nextTurn: () => void;
    startVoting: () => void;
    eliminatePlayer: (playerId: string) => void; // Voting result

    resetGame: (fullReset?: boolean) => void;
    setGameStatus: (status: GameStatus) => void;
}

export const useGameStore = create<GameState>()(
    persist(
        (set, get) => ({
            status: 'welcome',
            players: [],
            settings: {
                impostorCount: 1,
                gameMode: 'timer',
                timerDuration: 180,
                turnLimit: 2,
                tutorialSeen: false,
            },
            currentWord: '',
            currentCategory: '',
            turnOrder: [],
            currentTurnIndex: 0,
            roundsPlayed: 0,
            revealedPlayers: [],
            dealerId: null,

            addPlayer: (name) => set((state) => ({
                players: [
                    ...state.players,
                    {
                        id: crypto.randomUUID(),
                        name,
                        role: 'citizen',
                        score: 0,
                        isEliminated: false,
                    }
                ]
            })),

            removePlayer: (id) => set((state) => ({
                players: state.players.filter((p) => p.id !== id)
            })),

            updateSettings: (newSettings) => set((state) => ({
                settings: { ...state.settings, ...newSettings }
            })),

            startGame: () => {
                const state = get();
                if (state.players.length < 3) return; // Min players check

                // 1. Select Category & Word
                const randomCategory = GAME_CATEGORIES[Math.floor(Math.random() * GAME_CATEGORIES.length)];
                const randomWord = randomCategory.words[Math.floor(Math.random() * randomCategory.words.length)];

                // 2. Assign Roles (SAFE FIRST PLAYER LOGIC)
                // The first player in the list (or logically the one holding the phone) depends on UI.
                // Assuming 'players' array order is the order of entry or "sitting".
                // We designate index 0 as the "starter" who passes around? 
                // Or we just ensure players[0] is CITIZEN.

                const players = [...state.players].map(p => ({ ...p, role: 'citizen' as Role, isEliminated: false }));
                const playerIds = players.map(p => p.id);

                // Exclude the first player from being an impostor
                const firstPlayerId = playerIds[0];
                const potentialImpostors = playerIds.slice(1);

                // Shuffle potential impostors to pick N
                const shuffledPotentials = [...potentialImpostors].sort(() => 0.5 - Math.random());
                const impostorIds = shuffledPotentials.slice(0, state.settings.impostorCount);

                const newPlayers = players.map(p => ({
                    ...p,
                    role: impostorIds.includes(p.id) ? 'impostor' : 'citizen'
                }));

                set({
                    status: 'distributing',
                    players: newPlayers as Player[],
                    currentWord: randomWord,
                    currentCategory: randomCategory.name,
                    revealedPlayers: [],
                    turnOrder: [], // Will be set after distribution
                    dealerId: firstPlayerId,
                });
            },

            revealRole: (playerId) => set((state) => ({
                revealedPlayers: [...state.revealedPlayers, playerId]
            })),

            nextRoleReveal: () => {
                const state = get();
                const allRevealed = state.revealedPlayers.length === state.players.length;

                if (allRevealed) {
                    // 3. Shuffle Turn Order for the Game Phase
                    // Exclude eliminated (none yet)
                    const shuffledIds = [...state.players].map(p => p.id).sort(() => 0.5 - Math.random());

                    set({
                        status: 'playing',
                        turnOrder: shuffledIds,
                        currentTurnIndex: 0,
                        roundsPlayed: 0,
                    });
                }
            },

            handleTurnTimeout: () => {
                // Logic for timer... might just be UI side, but good to have action
            },

            startVoting: () => set({ status: 'voting' }),

            nextTurn: () => set((state) => {
                const nextIndex = state.currentTurnIndex + 1;

                // End of Round (all players spoke once)
                if (nextIndex >= state.turnOrder.length) {
                    const newRoundsPlayed = state.roundsPlayed + 1;

                    // Check if we reached the Turn Limit in 'turns' mode
                    if (state.settings.gameMode === 'turns' && newRoundsPlayed >= state.settings.turnLimit) {
                        return {
                            status: 'voting',
                            roundsPlayed: newRoundsPlayed,
                            currentTurnIndex: 0 // Reset for neatness
                        };
                    }

                    return {
                        currentTurnIndex: 0,
                        roundsPlayed: newRoundsPlayed
                    };
                }

                return { currentTurnIndex: nextIndex };
            }),

            eliminatePlayer: (playerId) => {
                const state = get();
                const players = state.players.map((p) =>
                    p.id === playerId ? { ...p, isEliminated: true } : p
                );

                const activePlayers = players.filter((p) => !p.isEliminated);
                const impostorCount = activePlayers.filter((p) => p.role === 'impostor').length;
                const citizenCount = activePlayers.filter((p) => p.role === 'citizen').length;

                // Remove eliminated player from turn order
                const newTurnOrder = state.turnOrder.filter(id => id !== playerId);

                if (impostorCount === 0 || citizenCount <= 1) {
                    set({ players, status: 'ended' });
                } else {
                    // Game continues: prepare for next round but stay in 'voting' 
                    // to show the result card.
                    set({
                        players,
                        status: 'voting',
                        turnOrder: newTurnOrder,
                        currentTurnIndex: 0,
                        roundsPlayed: 0
                    });
                }
            },

            resetGame: (fullReset = false) => {
                // Whether "Exit" or "Play Again", we return to Setup.
                // We keep players, settings, and scores.
                // We clear active game state.
                set((state) => ({
                    status: 'setup',
                    currentWord: '',
                    currentCategory: '',
                    turnOrder: [],
                    currentTurnIndex: 0,
                    roundsPlayed: 0,
                    revealedPlayers: [],
                    dealerId: null,
                    // Reset transient player state (role, eliminated) but keep ID, Name, Score
                    players: state.players.map(p => ({
                        ...p,
                        role: 'citizen',
                        isEliminated: false
                    }))
                }));
            },

            setGameStatus: (status) => set({ status }),

        }),
        {
            name: 'impostore-v2', // bump version to reset state for welcome screen
            storage: createJSONStorage(() => localStorage),
        },
    ),
);
