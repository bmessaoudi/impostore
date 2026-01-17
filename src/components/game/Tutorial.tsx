import React, { useState } from "react";
import { useGameStore } from "@/store/gameStore";
import {
  Smartphone,
  RotateCcw,
  VenetianMask,
  Check,
  Play,
  X,
} from "lucide-react";

export function Tutorial() {
  const { updateSettings } = useGameStore();
  const [step, setStep] = useState(0);

  const handleClose = () => {
    updateSettings({ tutorialSeen: true });
  };

  const steps = [
    {
      title: "Modalità Passa & Gioca",
      icon: <Smartphone className="w-16 h-16 text-noir-gold mb-4" />,
      text: "Usa un solo telefono per tutti. Passalo al giocatore indicato quando richiesto.",
    },
    {
      title: "Scopri il Ruolo",
      icon: <VenetianMask className="w-16 h-16 text-noir-red mb-4" />,
      text: "Guarda segretamente il tuo ruolo. Se sei Cittadino, vedrai la parola segreta. Se sei Impostore, dovrai improvvisare!",
    },
    {
      title: "Descrivi e Vota",
      icon: <Play className="w-16 h-16 text-green-500 mb-4" />,
      text: "A turno, descrivete la parola senza svelarla. Alla fine del tempo (o dei turni), votate per trovare l'impostore.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-noir-card border border-noir-gold rounded-2xl max-w-sm w-full p-6 relative shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 p-2 text-gray-500 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center mt-4">
          <div className="animate-bounce-slow">{steps[step].icon}</div>
          <h2 className="text-2xl font-bold text-white mb-2">
            {steps[step].title}
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            {steps[step].text}
          </p>

          <div className="flex gap-2 w-full">
            {step < steps.length - 1 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="flex-1 bg-noir-gold text-noir-bg font-bold py-3 rounded-xl hover:bg-yellow-400 transition-colors"
              >
                AVANTI
              </button>
            ) : (
              <button
                onClick={handleClose}
                className="flex-1 bg-green-500 text-white font-bold py-3 rounded-xl hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
              >
                <Check className="w-5 h-5" />
                HO CAPITO
              </button>
            )}
          </div>

          <div className="flex gap-1 mt-6">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === step ? "w-8 bg-noir-gold" : "w-2 bg-gray-700"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
