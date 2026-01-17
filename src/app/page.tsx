"use client";

import { useGameStore } from "@/store/gameStore";
import { GameLayout } from "@/components/layout/GameLayout";
import { SetupPhase } from "@/components/game/SetupPhase";
import { RoleDistribution } from "@/components/game/RoleDistribution";
import { GameLoop } from "@/components/game/GameLoop";
import { VotingPhase } from "@/components/game/VotingPhase";
import { WelcomeScreen } from "@/components/game/WelcomeScreen";
import { Tutorial } from "@/components/game/Tutorial";
import { useEffect, useState } from "react";

export default function Home() {
  const [isHydrated, setIsHydrated] = useState(false);
  const status = useGameStore((state) => state.status);
  const settings = useGameStore((state) => state.settings);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <GameLayout>
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-pulse text-noir-gold">Loading...</div>
        </div>
      </GameLayout>
    );
  }

  return (
    <GameLayout hideHeader={status === "welcome"}>
      {/* Tutorial Overlay */}
      {status === "setup" && !settings.tutorialSeen && <Tutorial />}

      {status === "welcome" && <WelcomeScreen />}
      {status === "setup" && <SetupPhase />}
      {status === "distributing" && <RoleDistribution />}
      {status === "playing" && <GameLoop />}
      {(status === "voting" || status === "ended") && <VotingPhase />}
    </GameLayout>
  );
}
