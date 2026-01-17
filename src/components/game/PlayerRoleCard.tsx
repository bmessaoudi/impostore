import React, { useRef, useState } from "react";
import Image from "next/image";
import { Eye, CheckCircle, Fingerprint } from "lucide-react";
import gsap from "gsap";
import { twMerge } from "tailwind-merge";
import type { Player } from "@/store/gameStore";

interface PlayerRoleCardProps {
  player: Player;
  isActive: boolean;
  stackIndex: number; // 0 = active, 1 = next, etc.
  zIndex: number;
  currentCategory: string;
  currentWord: string;
  onComplete: () => void;
  onRevealRole: (id: string) => void;
}

export function PlayerRoleCard({
  player,
  isActive,
  stackIndex,
  zIndex,
  currentCategory,
  currentWord,
  onComplete,
  onRevealRole,
}: PlayerRoleCardProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleReveal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isRevealed || isAnimating || !isActive) return;

    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        onRevealRole(player.id);
      },
    });

    tl.to(cardRef.current, {
      rotationY: 180,
      duration: 0.6,
      ease: "back.out(1.5)",
    });

    setIsRevealed(true);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isAnimating || !isActive) return;

    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        // We do NOT animate exit here. We just signal complete.
        // Parent will trigger state change -> Flip animation handles exit.
        onComplete();
      },
    });

    // 1. Reverse Flip (Close the card)
    tl.to(cardRef.current, {
      rotationY: 0,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  const isImpostor = player.role === "impostor";

  // Stack styling based on user request:
  // Active: top 0, left 0
  // Next (+1): top -20px, left 20px
  // Next (+2): top -40px, left 40px

  const topOffset = 40 + stackIndex * -20;
  const leftOffset = stackIndex * 20;
  // Apply a slight scale reduction for depth if desired, or keep 1 as per user snippet which didn't strictly specify scale.
  // User snippet has fixed positions. Let's stick to positions.
  // But usually stack looks better with slight scale. I'll transform it.
  const scale = 1;

  return (
    <div
      className={twMerge(
        "player-card absolute w-full max-w-xs transition-none", // transition-none because Flip handles it
        isActive ? "cursor-default" : "pointer-events-none",
      )}
      data-flip-id={player.id}
      style={{
        zIndex,
        top: `${topOffset}px`,
        left: `calc(50% + ${leftOffset}px)`, // Centered relative to container, plus offset
        transform: `translateX(-50%)`, // Centering
        // Note: transformOrigin might be needed if generic Flip handling is used.
      }}
    >
      <div
        className="relative w-full perspective-1000"
        style={{ aspectRatio: "853 / 1236" }}
      >
        <div
          ref={cardRef}
          className="absolute inset-0 preserve-3d"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* FRONT (Hidden / Cover) */}
          <div
            className="absolute inset-0 bg-noir-card rounded-2xl flex flex-col items-center justify-center p-6 shadow-2xl border-2 border-noir-gold overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "translateZ(1px)",
            }}
          >
            <div className="absolute inset-0">
              <Image
                src="/card-back.png"
                alt="Top Secret"
                fill
                className="object-cover opacity-60 pointer-events-none"
                style={{ backfaceVisibility: "hidden" }}
              />
            </div>
            <div
              className="absolute inset-0 bg-black/40 z-0 pointer-events-none"
              style={{ backfaceVisibility: "hidden" }}
            />

            <div className="relative z-10 flex flex-col items-center">
              <Fingerprint className="w-24 h-24 text-noir-gold mb-4 drop-shadow-md" />
              <h2 className="text-3xl font-bold text-noir-cream text-center mb-2 drop-shadow-md">
                TOP SECRET
              </h2>
              <div className="mt-8 text-center space-y-2">
                <span className="text-gray-300 text-sm font-mono tracking-widest uppercase">
                  Agente
                </span>
                <h3 className="text-3xl font-extrabold text-white drop-shadow-lg tracking-wide">
                  {player.name}
                </h3>
              </div>
            </div>
          </div>

          {/* BACK (Revealed) */}
          <div
            className={twMerge(
              "absolute inset-0 rounded-2xl p-6 flex flex-col items-center justify-center shadow-2xl border-4 overflow-hidden",
              isImpostor
                ? "bg-noir-bg border-noir-red"
                : "bg-noir-bg border-noir-gold",
            )}
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg) translateZ(1px)",
            }}
          >
            {isImpostor ? (
              <>
                <div className="absolute inset-0">
                  <Image
                    src="/card-back.png"
                    alt="Impostor Background"
                    fill
                    className="object-cover opacity-60 pointer-events-none"
                    style={{ backfaceVisibility: "hidden" }}
                  />
                </div>
                <div
                  className="absolute inset-0 bg-black/60 z-0 pointer-events-none"
                  style={{ backfaceVisibility: "hidden" }}
                />

                <div className="relative z-10 flex flex-col items-center w-full">
                  <h2 className="text-5xl font-black text-noir-red mb-4 animate-pulse drop-shadow-[0_0_10px_rgba(230,57,70,0.8)]">
                    IMPOSTORE
                  </h2>
                  <p className="text-gray-200 text-center mb-8 font-medium max-w-[90%]">
                    Non farti scoprire. La parola segreta riguarda:
                  </p>
                  <div className="bg-noir-bg/80 backdrop-blur-sm p-4 rounded-xl w-full text-center border border-noir-red/50 shadow-lg">
                    <span className="text-xs text-noir-red uppercase tracking-widest block mb-1">
                      Categoria
                    </span>
                    <span className="text-2xl text-white font-bold tracking-tight">
                      {currentCategory}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="absolute inset-0">
                  <Image
                    src="/card-back.png"
                    alt="Citizen Background"
                    fill
                    className="object-cover opacity-60 pointer-events-none"
                    style={{ backfaceVisibility: "hidden" }}
                  />
                </div>
                <div
                  className="absolute inset-0 bg-black/50 z-0 pointer-events-none"
                  style={{ backfaceVisibility: "hidden" }}
                />

                <div className="relative z-10 flex flex-col items-center w-full">
                  <h2 className="text-4xl font-black text-noir-gold mb-6 drop-shadow-md">
                    CITTADINO
                  </h2>
                  <p className="text-gray-200 text-center mb-8 font-medium max-w-[90%]">
                    Trova l'impostore. Ecco la parola:
                  </p>
                  <div className="bg-noir-bg/80 backdrop-blur-sm p-6 rounded-xl w-full text-center border border-noir-gold/50 shadow-lg">
                    <span className="text-xs text-noir-gold uppercase tracking-widest block mb-1">
                      {currentCategory}
                    </span>
                    <span className="text-3xl text-white font-black tracking-tight">
                      {currentWord}
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* CONTROLS (Floating below the card) */}
      {isActive && (
        <div className="absolute -bottom-24 left-0 right-0 flex justify-center">
          <button
            onClick={isRevealed ? handleNext : handleReveal}
            disabled={isAnimating}
            className={`font-bold text-lg py-4 px-10 rounded-full shadow-lg transition-all flex items-center gap-2 ${
              isAnimating
                ? "opacity-50 cursor-not-allowed"
                : "hover:scale-105 active:scale-95"
            } ${
              isRevealed
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-noir-gold text-noir-bg shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            }`}
          >
            {isRevealed ? (
              <>
                <CheckCircle className="w-5 h-5" />
                HO CAPITO
              </>
            ) : (
              <>
                <Eye className="w-5 h-5" />
                SCOPRI RUOLO
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
