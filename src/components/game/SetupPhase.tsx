import React, { useState } from "react";
import { useGameStore } from "@/store/gameStore";
import { Plus, X, Users, Trash2, Milestone, Play } from "lucide-react";
import { clsx } from "clsx";

export function SetupPhase() {
  const {
    players,
    addPlayer,
    removePlayer,
    settings,
    updateSettings,
    startGame,
  } = useGameStore();
  const [newName, setNewName] = useState("");

  const handleAddPlayer = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (newName.trim()) {
      addPlayer(newName.trim());
      setNewName("");
    }
  };

  const handleStart = () => {
    if (players.length >= 3) {
      startGame();
    }
  };

  return (
    <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Player Input Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-noir-cream flex items-center gap-2">
          <Users className="w-5 h-5 text-noir-gold" />
          Giocatori{" "}
          <span className="text-sm font-normal opacity-60">
            ({players.length})
          </span>
        </h2>

        <form onSubmit={handleAddPlayer} className="flex gap-2">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Nome giocatore..."
            className="flex-1 bg-noir-card border border-gray-700 rounded-xl px-4 py-3 text-noir-cream placeholder-gray-500 focus:outline-none focus:border-noir-gold focus:ring-1 focus:ring-noir-gold transition-all text-base"
          />
          <button
            type="submit"
            disabled={!newName.trim()}
            className="bg-noir-gold text-noir-bg p-3 rounded-xl hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Plus className="w-6 h-6" />
          </button>
        </form>

        {/* Player List */}
        <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-1 custom-scrollbar">
          {players.map((player) => (
            <div
              key={player.id}
              className="bg-noir-card/80 border border-gray-800 p-3 rounded-lg flex justify-between items-center group hover:border-gray-600 transition-colors"
            >
              <span className="font-medium truncate">{player.name}</span>
              <button
                onClick={() => removePlayer(player.id)}
                className="text-gray-500 hover:text-noir-red transition-colors p-2 -mr-2"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
          {players.length === 0 && (
            <p className="col-span-2 text-center text-gray-600 py-4 text-sm italic">
              Aggiungi almeno 3 giocatori per iniziare
            </p>
          )}
        </div>
      </div>

      {/* Settings Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-noir-cream flex items-center gap-2">
          <Milestone className="w-5 h-5 text-noir-gold" />
          Configurazione
        </h2>

        <div className="bg-noir-card/50 p-4 rounded-xl space-y-4 border border-gray-800">
          {/* Game Mode Selection */}
          <div className="flex bg-noir-bg p-1 rounded-lg border border-gray-700 mb-4">
            <button
              onClick={() => updateSettings({ gameMode: "timer" })}
              className={clsx(
                "flex-1 py-1.5 rounded-md text-sm font-medium transition-all",
                settings.gameMode === "timer"
                  ? "bg-noir-gold text-noir-bg shadow-sm"
                  : "text-gray-400 hover:text-white",
              )}
            >
              A Tempo
            </button>
            <button
              onClick={() => updateSettings({ gameMode: "turns" })}
              className={clsx(
                "flex-1 py-1.5 rounded-md text-sm font-medium transition-all",
                settings.gameMode === "turns"
                  ? "bg-noir-gold text-noir-bg shadow-sm"
                  : "text-gray-400 hover:text-white",
              )}
            >
              A Turni
            </button>
          </div>

          {/* Impostor Count */}
          <div className="flex justify-between items-center">
            <label className="text-sm text-gray-300">Impostori</label>
            <div className="flex items-center gap-3 bg-noir-bg rounded-lg p-1 border border-gray-700">
              <button
                onClick={() =>
                  updateSettings({
                    impostorCount: Math.max(1, settings.impostorCount - 1),
                  })
                }
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-700 rounded transition-colors"
                disabled={settings.impostorCount <= 1}
              >
                -
              </button>
              <span className="w-4 text-center font-bold text-noir-gold">
                {settings.impostorCount}
              </span>
              <button
                onClick={() =>
                  updateSettings({ impostorCount: settings.impostorCount + 1 })
                }
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-700 rounded transition-colors"
                disabled={settings.impostorCount >= players.length - 1}
              >
                +
              </button>
            </div>
          </div>

          {settings.gameMode === "timer" ? (
            <div className="flex justify-between items-center animate-in fade-in slide-in-from-top-1 duration-300">
              <label className="text-sm text-gray-300">Durata (minuti)</label>
              <input
                type="number"
                min="1"
                max="60"
                value={Math.round(settings.timerDuration / 60)}
                onChange={(e) =>
                  updateSettings({
                    timerDuration: Math.max(60, Number(e.target.value) * 60),
                  })
                }
                className="w-20 bg-noir-bg border border-gray-700 rounded-lg px-3 py-1.5 text-sm text-center focus:outline-none focus:border-noir-gold transition-colors"
              />
            </div>
          ) : (
            <div className="flex justify-between items-center animate-in fade-in slide-in-from-top-1 duration-300">
              <label className="text-sm text-gray-300">
                Giri di Descrizione
              </label>
              <div className="flex items-center gap-3 bg-noir-bg rounded-lg p-1 border border-gray-700">
                <button
                  onClick={() =>
                    updateSettings({
                      turnLimit: Math.max(1, (settings.turnLimit || 1) - 1),
                    })
                  }
                  className="w-8 h-8 flex items-center justify-center hover:bg-gray-700 rounded transition-colors"
                >
                  -
                </button>
                <span className="w-4 text-center font-bold text-noir-gold">
                  {settings.turnLimit || 1}
                </span>
                <button
                  onClick={() =>
                    updateSettings({ turnLimit: (settings.turnLimit || 1) + 1 })
                  }
                  className="w-8 h-8 flex items-center justify-center hover:bg-gray-700 rounded transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Start Button */}
      <div className="pt-4">
        <button
          onClick={handleStart}
          disabled={players.length < 3}
          className="w-full bg-linear-to-r from-noir-gold to-yellow-500 text-noir-bg font-bold text-lg py-4 rounded-2xl shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] active:scale-[0.98] transition-all disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <Play className="w-5 h-5 fill-current" />
          INIZIA INDAGINE
        </button>
      </div>
    </div>
  );
}
