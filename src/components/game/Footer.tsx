import React, { useState } from "react";
import { Heart, Github } from "lucide-react";
import { OpenSourceModal } from "./OpenSourceModal";

interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <footer
        className={`w-full flex flex-col items-center gap-3 py-6 text-xs text-gray-500 font-mono ${className}`}
      >
        {/* Open Source Link */}
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-1.5 hover:text-noir-gold transition-colors"
        >
          <Github className="w-3 h-3" />
          <span>Open Source</span>
        </button>

        {/* Credits */}
        <div className="flex items-center gap-1">
          <span>Made with</span>
          <Heart className="w-3 h-3 text-noir-red fill-current animate-pulse" />
          <span>by</span>
          <a
            href="https://www.instagram.com/bilel.it"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors underline decoration-dotted underline-offset-2"
          >
            @bilel.it
          </a>
        </div>

        {/* Version */}
        <div className="opacity-50">v0.1.0</div>
      </footer>

      {showModal && <OpenSourceModal onClose={() => setShowModal(false)} />}
    </>
  );
}
