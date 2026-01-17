import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useGameStore } from "@/store/gameStore";
import { Fingerprint } from "lucide-react";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";

interface ResultViewProps {
  player: { name: string; role: string };
  isImpostor: boolean;
  currentWord: string;
  resetGame: (full?: boolean) => void;
  isGameOver: boolean;
  onContinue: () => void;
}

function ResultView({
  player,
  isImpostor,
  currentWord,
  resetGame,
  isGameOver,
  onContinue,
}: ResultViewProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Small delay before revealing
      gsap.to(cardRef.current, {
        rotationY: 180,
        duration: 0.8,
        delay: 0.5,
        ease: "back.out(1.2)",
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center justify-between py-2 sm:py-6 animate-in zoom-in duration-500 w-full h-full max-h-screen overflow-hidden">
      {/* CARD REVEAL */}
      <div className="relative w-40 sm:w-52 aspect-853/1236 perspective-1000 shrink-0">
        <div
          ref={cardRef}
          className="w-full h-full relative preserve-3d"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* FRONT (Card Back - Covered) */}
          <div
            className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl border-4 border-noir-gold"
            style={{ backfaceVisibility: "hidden" }}
          >
            <Image
              src="/card-back.png"
              alt="Card Back"
              fill
              className="object-cover"
            />
          </div>

          {/* BACK (Revealed Role) */}
          <div
            className={twMerge(
              "absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl border-4 rotate-y-180",
              isImpostor ? "border-noir-red" : "border-noir-gold",
            )}
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <Image
              src={isImpostor ? "/card-impostor.png" : "/card-citizen.png"}
              alt={isImpostor ? "Impostor Card" : "Citizen Card"}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 w-full">
        <h2 className="text-lg sm:text-2xl font-bold uppercase tracking-widest text-white">
          {player.name} era...
        </h2>
        <h1
          className={twMerge(
            "text-3xl sm:text-5xl font-black",
            isImpostor ? "text-noir-red" : "text-gray-400",
          )}
        >
          {isImpostor ? "L'IMPOSTORE!" : "CITTADINO"}
        </h1>

        <p className="text-noir-cream px-4 text-center text-xs sm:text-sm opacity-80 mt-1 max-w-xs leading-relaxed">
          {isImpostor ? (
            isGameOver ? (
              <>Hai scovato l'Impostore! I Cittadini vincono!</>
            ) : (
              <>Un Impostore è stato eliminato! Ma ce ne sono altri...</>
            )
          ) : isGameOver ? (
            <>
              L'Impostore ha vinto! La parola era{" "}
              <span className="text-noir-gold font-bold">{currentWord}</span>.
            </>
          ) : (
            "Ops! Era un cittadino innocente. L'Impostore è ancora tra noi..."
          )}
        </p>
      </div>

      {isGameOver ? (
        <button
          onClick={() => resetGame(false)}
          className="w-full max-w-xs bg-noir-gold text-noir-bg px-8 py-3 sm:py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform"
        >
          GIOCA ANCORA
        </button>
      ) : (
        <button
          onClick={onContinue}
          className="w-full max-w-xs bg-noir-gold text-noir-bg px-8 py-3 sm:py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform"
        >
          CONTINUA
        </button>
      )}
    </div>
  );
}

export function VotingPhase() {
  const {
    players,
    eliminatePlayer,
    resetGame,
    currentWord,
    status,
    setGameStatus,
  } = useGameStore();
  const [selectedPlayerId, setSelectedPlayerId] = useState<string | null>(null);
  const [eliminatedId, setEliminatedId] = useState<string | null>(null);

  const handleVote = (id: string) => {
    if (eliminatedId) return; // Already revealed
    setSelectedPlayerId(id);
  };

  const confirmVote = () => {
    if (selectedPlayerId) {
      setEliminatedId(selectedPlayerId);
      eliminatePlayer(selectedPlayerId);
    }
  };

  const resetSelection = () => {
    setSelectedPlayerId(null);
  };

  const eliminatedPlayer = players.find((p) => p.id === eliminatedId);
  const isImpostor = eliminatedPlayer?.role === "impostor";

  if (eliminatedId && eliminatedPlayer) {
    return (
      <ResultView
        player={eliminatedPlayer}
        isImpostor={isImpostor}
        currentWord={currentWord}
        resetGame={resetGame}
        isGameOver={status === "ended"}
        onContinue={() => setGameStatus("playing")}
      />
    );
  }

  return (
    <div className="flex-1 flex flex-col w-full py-4 animate-in fade-in duration-500">
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-noir-cream mb-1">
          Chi è l'Impostore?
        </h2>
        <p className="text-sm text-gray-400">
          Discutete e votate chi eliminare
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-8">
        {players
          .filter((player) => !player.isEliminated)
          .map((player) => (
            <button
              key={player.id}
              onClick={() => handleVote(player.id)}
              className={twMerge(
                "p-4 rounded-xl border border-gray-700 bg-noir-card transition-all relative overflow-hidden",
                selectedPlayerId === player.id
                  ? "border-noir-red bg-noir-red/20 ring-2 ring-noir-red/50"
                  : "hover:border-gray-500",
              )}
            >
              <span className="block text-lg font-bold text-white relative z-10">
                {player.name}
              </span>
              {selectedPlayerId === player.id && (
                <Fingerprint className="absolute -bottom-4 -right-4 w-16 h-16 text-noir-red opacity-20" />
              )}
            </button>
          ))}
      </div>

      {selectedPlayerId && (
        <div className="fixed bottom-10 left-0 right-0 px-6 animate-in slide-in-from-bottom-10">
          <div className="bg-noir-card border border-noir-red p-4 rounded-2xl shadow-2xl flex flex-col items-center gap-4">
            <div className="text-center">
              <p className="text-white text-lg">
                Eliminare{" "}
                <span className="font-bold text-noir-red">
                  {players.find((p) => p.id === selectedPlayerId)?.name}
                </span>
                ?
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Questa azione è irreversibile
              </p>
            </div>
            <div className="flex gap-4 w-full">
              <button
                onClick={resetSelection}
                className="flex-1 py-3 bg-gray-700 rounded-xl text-white font-bold"
              >
                ANNULLA
              </button>
              <button
                onClick={confirmVote}
                className="flex-1 py-3 bg-noir-red rounded-xl text-white font-bold"
              >
                ELIMINA
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
