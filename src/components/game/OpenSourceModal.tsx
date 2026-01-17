import React from "react";
import { Github, X, Code2, Layers } from "lucide-react";

interface OpenSourceModalProps {
  onClose: () => void;
}

export function OpenSourceModal({ onClose }: OpenSourceModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-noir-card border border-noir-gold rounded-2xl max-w-sm w-full p-6 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 text-gray-500 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center mt-4">
          <div className="bg-noir-gold/20 p-4 rounded-full mb-6">
            <Github className="w-12 h-12 text-noir-gold" />
          </div>

          <h2 className="text-2xl font-bold text-white mb-2">Open Source</h2>
          <p className="text-gray-300 mb-6 text-sm">
            Questo progetto è open source! Sentiti libero di contribuire o dare
            un'occhiata al codice.
          </p>

          <a
            href="https://github.com/bmessaoudi/imposto"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 mb-6"
          >
            <Github className="w-5 h-5" />
            <span>GitHub Repository</span>
          </a>

          <div className="w-full text-left">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-3 uppercase tracking-wider font-bold">
              <Layers className="w-4 h-4" />
              <span>Tech Stack</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[
                "Next.js 15",
                "React 19",
                "TailwindCSS",
                "Zustand",
                "Framer Motion",
                "Lucide React",
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-gray-800/50 p-2 rounded-lg text-xs text-gray-300 text-center border border-gray-700"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
