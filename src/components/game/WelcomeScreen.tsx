import React from "react";
import Image from "next/image";
import { useGameStore } from "@/store/gameStore";
import {
  Fingerprint,
  Play,
  ShieldAlert,
  Users,
  MessageSquare,
  Info,
} from "lucide-react";
import { Footer } from "./Footer";

export function WelcomeScreen() {
  const { setGameStatus, openTutorial } = useGameStore();

  return (
    <div className="flex-1 flex flex-col items-center justify-between p-4 animate-in fade-in duration-700 w-full max-w-sm mx-auto text-center h-full">
      {/* Top Info Button */}
      <button
        onClick={openTutorial}
        className="absolute top-6 left-6 p-2 text-gray-500 hover:text-noir-gold transition-colors"
      >
        <Info className="w-6 h-6" />
      </button>

      <div className="flex-1 flex flex-col items-center justify-center w-full">
        {/* Hero Icon */}
        <div className="relative mb-8 group cursor-pointer mt-8">
          <div className="absolute inset-0 bg-noir-red opacity-20 blur-2xl rounded-full group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative bg-linear-to-br from-gray-800 to-black p-8 rounded-full border border-noir-gold shadow-2xl group-hover:scale-105 transition-transform duration-300">
            <Fingerprint className="w-16 h-16 text-noir-gold animate-pulse" />
          </div>
        </div>

        <div className="relative w-64 h-24 mb-4">
          <Image
            src="/title.png"
            alt="L'Impostore"
            fill
            className="object-contain"
            priority
          />
        </div>
        <p className="text-noir-gold text-sm tracking-widest uppercase font-mono mb-8 opacity-80">
          Trust No One. Suspect Everyone.
        </p>

        {/* Rules Cards */}
        <div className="grid gap-3 w-full mb-8 text-left">
          <div className="bg-noir-card/60 p-4 rounded-xl border border-gray-800 flex items-start gap-4">
            <div className="bg-noir-gold/20 p-2 rounded-lg">
              <Play className="w-5 h-5 text-noir-gold" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">Pass & Play</h3>
              <p className="text-xs text-gray-400">
                Un telefono. Passalo per scoprire il tuo ruolo segreto.
              </p>
            </div>
          </div>

          <div className="bg-noir-card/60 p-4 rounded-xl border border-gray-800 flex items-start gap-4">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <MessageSquare className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">Descrivi</h3>
              <p className="text-xs text-gray-400">
                Descrivi la parola segreta senza svelarla troppo.
              </p>
            </div>
          </div>

          <div className="bg-noir-card/60 p-4 rounded-xl border border-gray-800 flex items-start gap-4">
            <div className="bg-noir-red/20 p-2 rounded-lg">
              <ShieldAlert className="w-5 h-5 text-noir-red" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">Smaschera</h3>
              <p className="text-xs text-gray-400">
                Vota ed elimina l'infiltrato prima che sia tardi.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setGameStatus("setup")}
          className="w-full bg-linear-to-r from-noir-red to-red-600 text-white font-bold text-lg py-5 rounded-2xl shadow-[0_0_20px_rgba(230,57,70,0.4)] hover:shadow-[0_0_30px_rgba(230,57,70,0.6)] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group mb-4"
        >
          <span>INIZIA LA MISSIONE</span>
          <Users className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <Footer />
    </div>
  );
}
