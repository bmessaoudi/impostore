"use client";

import React, { useState } from "react";
import Image from "next/image";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { LogOut, AlertTriangle, Info } from "lucide-react";
import { useGameStore } from "@/store/gameStore";
import { Tutorial } from "@/components/game/Tutorial";

interface GameLayoutProps {
  children: React.ReactNode;
  className?: string;
  hideHeader?: boolean;
}

export function GameLayout({
  children,
  className,
  hideHeader = false,
}: GameLayoutProps) {
  const [showExitModal, setShowExitModal] = useState(false);
  const { status, resetGame } = useGameStore();

  const handleExitGame = () => {
    resetGame(true); // true = hard reset to welcome
    setShowExitModal(false);
  };

  const showExitButton = status !== "welcome" && status !== "setup";

  return (
    <div className="min-h-dvh w-full bg-noir-bg text-foreground flex flex-col items-center overflow-hidden touch-manipulation">
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-30 z-0 mix-blend-overlay">
        <Image
          src="/bg-texture.png"
          alt="texture"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dynamic Background Elements (Optional Subtle Grain or Gradient) */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-gray-800 via-transparent to-transparent z-0" />

      {/* Main Content Container */}
      <main
        className={twMerge(
          "relative z-10 w-full max-w-md flex-1 flex flex-col p-6",
          className,
        )}
      >
        {/* Header / Logo Area */}
        {!hideHeader && (
          <header className="relative py-2 flex flex-col items-center justify-center space-y-2">
            {/* Exit Button */}
            {showExitButton && (
              <button
                onClick={() => setShowExitModal(true)}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-noir-red transition-colors z-50"
                aria-label="Esci dal gioco"
              >
                <LogOut className="w-6 h-6" />
              </button>
            )}

            {/* Info Button */}
            {!showExitButton && (
              <button
                onClick={() => useGameStore.getState().openTutorial()}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-noir-gold transition-colors z-50"
                aria-label="Info Tutorial"
              >
                <Info className="w-6 h-6" />
              </button>
            )}

            <div
              className="relative w-64 md:w-80 lg:w-80 h-16 md:h-20 lg:h-20 mb-2"
              style={{ WebkitTransform: "translateZ(0)" }}
            >
              <Image
                src="/title.png"
                alt="L'Impostore"
                fill
                sizes="(min-width: 768px) 320px, 256px"
                className="object-contain"
                priority
              />
            </div>
          </header>
        )}

        {/* Content Slot */}
        <div className="flex-1 w-full flex flex-col">{children}</div>
      </main>

      {/* Exit Modal */}
      {showExitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-noir-card border border-noir-red w-full max-w-sm rounded-2xl p-6 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-noir-red/20 rounded-full flex items-center justify-center mb-2">
                <AlertTriangle className="w-8 h-8 text-noir-red" />
              </div>

              <h3 className="text-xl font-bold text-white">
                Vuoi uscire dal gioco?
              </h3>
              <p className="text-gray-300 text-sm">
                La partita in corso verrà persa e tornerai alla schermata
                principale.
              </p>

              <div className="flex gap-3 w-full mt-4">
                <button
                  onClick={() => setShowExitModal(false)}
                  className="flex-1 py-3 px-4 rounded-xl bg-gray-700 text-white font-bold hover:bg-gray-600 transition-colors"
                >
                  ANNULLA
                </button>
                <button
                  onClick={handleExitGame}
                  className="flex-1 py-3 px-4 rounded-xl bg-noir-red text-white font-bold hover:bg-red-700 transition-colors"
                >
                  ESCI
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tutorial Modal */}
      {useGameStore((state) => state.isTutorialOpen) && <Tutorial />}
    </div>
  );
}
