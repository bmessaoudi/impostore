import React, { useEffect, useRef } from "react";
import { useGameStore } from "@/store/gameStore";
import { User, Check, AlertTriangle } from "lucide-react";
import gsap from "gsap";

export function GameLoop() {
  // Removed export default to match existing
  const {
    players,
    turnOrder,
    currentTurnIndex,
    roundsPlayed, // Make sure to use this
    nextTurn,
    startVoting,
    settings,
  } = useGameStore();

  const containerRef = useRef<HTMLDivElement>(null);
  const [timeLeft, setTimeLeft] = React.useState(settings.timerDuration);

  // Identify current player
  const currentUserId = turnOrder[currentTurnIndex];
  const currentPlayer = players.find((p) => p.id === currentUserId);

  // Timer Logic
  useEffect(() => {
    if (settings.gameMode === "timer" && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            startVoting();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [settings.gameMode, startVoting, timeLeft]);

  // Animation on turn change
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
      );
    }
  }, [currentTurnIndex]);

  if (!currentPlayer) return null;

  // Format time mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-between py-6 w-full max-w-sm mx-auto">
      {/* Top Bar: Info & Emergency */}
      <div className="w-full flex justify-between items-center mb-6 px-2">
        <div className="flex flex-col">
          {settings.gameMode === "timer" ? (
            <div className="text-2xl font-mono font-bold text-noir-gold animate-pulse">
              {formatTime(timeLeft)}
            </div>
          ) : (
            <div className="text-sm font-bold text-noir-cream">
              ROUND {roundsPlayed + 1}{" "}
              <span className="text-gray-500 font-normal">
                / {settings.turnLimit}
              </span>
            </div>
          )}
        </div>

        <button
          onClick={startVoting}
          className="flex items-center gap-2 bg-noir-red/20 border border-noir-red/50 text-noir-red px-4 py-2 rounded-full text-sm font-bold hover:bg-noir-red hover:text-white transition-colors"
        >
          <AlertTriangle className="w-4 h-4" />
          SI VOTA
        </button>
      </div>

      {/* Main Turn Display */}
      <div
        ref={containerRef}
        className="flex-1 w-full flex flex-col items-center justify-center space-y-6"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-noir-gold blur-2xl opacity-20 rounded-full" />
          <div className="relative bg-noir-card border-2 border-noir-gold rounded-full w-32 h-32 flex items-center justify-center shadow-lg">
            <User className="w-16 h-16 text-noir-cream" />
          </div>
        </div>

        <div className="text-center space-y-2">
          <h3 className="text-gray-400 text-sm uppercase tracking-widest">
            Tocca a
          </h3>
          <h2 className="text-4xl font-bold text-white">
            {currentPlayer.name}
          </h2>
          <p className="text-gray-500 italic max-w-xs mx-auto">
            Descrivi la parola segreta senza rivelarla troppo... <br />
            <span className="text-xs text-gray-600">
              (Ma non mentire troppo se sei l'Impostore!)
            </span>
          </p>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={nextTurn}
        className="w-full mt-8 bg-noir-gold text-noir-bg font-bold text-xl py-5 rounded-2xl shadow-lg hover:bg-yellow-400 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
      >
        <Check className="w-6 h-6" />
        FATTO
      </button>
    </div>
  );
}
