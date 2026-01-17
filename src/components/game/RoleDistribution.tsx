import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { useGameStore } from "@/store/gameStore";
import { PlayerRoleCard } from "./PlayerRoleCard";
import { gsap, Flip } from "gsap/all";

gsap.registerPlugin(Flip);

export function RoleDistribution() {
  const {
    players,
    revealedPlayers,
    revealRole,
    nextRoleReveal,
    currentCategory,
    currentWord,
  } = useGameStore();

  const [currentIndex, setCurrentIndex] = useState(() => {
    const idx = players.findIndex((p) => !revealedPlayers.includes(p.id));
    return idx === -1 ? players.length : idx;
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const flipState = useRef<Flip.FlipState | null>(null);

  // Check if we are done with all players
  useEffect(() => {
    if (currentIndex >= players.length) {
      const timer = setTimeout(() => {
        nextRoleReveal();
      }, 1000); // Increased delay slightly to allow exit animation
      return () => clearTimeout(timer);
    }
  }, [currentIndex, players.length, nextRoleReveal]);

  useLayoutEffect(() => {
    if (!flipState.current) return;

    // Execute the Flip
    Flip.from(flipState.current, {
      targets: ".player-card", // animate all cards
      ease: "sine.inOut",
      duration: 0.6,
      absolute: true, // Needed for smooth layout transitions
      onEnter: (elements: Element[]) => {
        return gsap.from(elements, {
          duration: 0.3,
          yPercent: 20,
          opacity: 0,
          ease: "expo.out",
        });
      },
      onLeave: (elements: Element[]) => {
        return gsap.to(elements, {
          duration: 0.4,
          yPercent: 5,
          xPercent: -5,
          opacity: 0,
          ease: "expo.out",
          onComplete: () => {
            // Element removed by React/Flip
          },
        });
      },
    });

    flipState.current = null;
  }, [currentIndex]);

  const handleCardComplete = () => {
    // 1. Capture State
    // We capture ALL cards, including the one about to leave.
    const state = Flip.getState(".player-card");
    flipState.current = state;

    // 2. Update State (Trigger Re-render)
    setCurrentIndex((prev) => prev + 1);
  };

  const handleRevealRole = (id: string) => {
    revealRole(id);
  };

  if (players.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="flex-1 flex flex-col items-center justify-center w-full max-w-xs mx-auto perspective-1000 gap-6 min-h-[600px] relative"
    >
      {players.map((player, index) => {
        // We only render cards starting from currentIndex.
        // Wait, Flip `onLeave` handles items removed from DOM.
        // So we strictly render `index >= currentIndex`.

        if (index < currentIndex) return null;

        const stackIndex = index - currentIndex;

        // Limit visible stack to 3 cards as requested
        // stackIndex 0, 1, 2 are rendered. 3+ are hidden/null.
        if (stackIndex >= 3) return null;

        const isActive = stackIndex === 0;
        const zIndex = players.length - index;

        // Upcoming means "in stack"
        const isUpcoming = stackIndex > 0;

        return (
          <PlayerRoleCard
            key={player.id}
            player={player}
            isActive={isActive}
            // Removed isUpcoming prop as it wasn't strictly used in updated component logic,
            // but we kept stackIndex instead.
            // We pass props for types compat if needed, but updated interface below:
            stackIndex={stackIndex}
            // isUpcoming={isUpcoming} // Removed from prop interface in PlayerRoleCard
            zIndex={zIndex}
            currentCategory={currentCategory}
            currentWord={currentWord}
            onComplete={handleCardComplete}
            onRevealRole={handleRevealRole}
          />
        );
      })}
    </div>
  );
}
