"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

interface MysteryBoxProps {
  title: string;
  emoji: string;
  description: string;
  mysteryContent: React.ReactNode;
  boxColorGradient: string;
  boxBorderColor: string;
  onConfirm?: (title: string) => void;
}

export const MysteryBox: React.FC<MysteryBoxProps> = ({
  title,
  emoji,
  description,
  mysteryContent,
  boxColorGradient,
  boxBorderColor,
  onConfirm,
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleBoxClick = () => {
    MySwal.fire({
      title: (
        <span className="font-display text-4xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
          🌟 Cosmic Discovery! 🌟
        </span>
      ),
      html: (
        <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-900 to-black rounded-2xl">
          <div className="text-6xl mb-4 animate-bounce">{emoji}</div>
          <h3 className="font-display text-3xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
            {title} Unlocked!
          </h3>
          <div className="text-lg text-gray-200 mb-4 text-center leading-relaxed">
            {mysteryContent}
          </div>
          <div className="flex items-center space-x-2 text-cyan-300">
            <span className="text-xl">✨</span>
            <p className="text-sm italic">The universe is full of wonders!</p>
            <span className="text-xl">✨</span>
          </div>
        </div>
      ),
      icon: "success",
      background:
        "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",
      color: "#ffffff",
      showCloseButton: true,
      closeButtonHtml: "×",
      showConfirmButton: true,
      confirmButtonText: "🚀 Explore More!",
      confirmButtonColor: "transparent",
      confirmButtonAriaLabel: "Explore more",
      showCancelButton: false,
      timer: 10000,
      timerProgressBar: true,
      customClass: {
        popup:
          "rounded-3xl shadow-2xl border-2 border-cyan-500/50 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
        title: "sweet-alert-title-dark",
        htmlContainer: "sweet-alert-html-container-dark",
        confirmButton:
          "!bg-gradient-to-r !from-cyan-500 !to-blue-500 !text-white !font-bold !py-3 !px-6 !rounded-xl !shadow-lg !border-2 !border-cyan-300/50 hover:scale-105 transition-transform",
        closeButton: "!text-gray-400 hover:!text-white !text-2xl !font-bold",
        timerProgressBar: "!bg-cyan-400",
      },
      buttonsStyling: false,
      backdrop: `
        rgba(0, 0, 0, 0.8)
        url("/images/stars-bg.gif")
        center left
        no-repeat
      `,
      didOpen: () => {
        setIsRevealed(true);
        // Add sparkle effect to the modal
        const popup = document.querySelector(".swal2-popup");
        if (popup) {
          popup.classList.add("animate-pulse");
        }
      },
      didClose: () => {
        setIsRevealed(false);
      },
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(`User confirmed ${title} mystery.`);
        if (onConfirm) {
          onConfirm(title);
        }
      }
    });
  };

  return (
    <div
      className={`
        ${boxColorGradient}
        ${boxBorderColor}
        p-6 sm:p-8 rounded-3xl shadow-2xl
        relative
        transform transition-all duration-500
        hover:scale-105 hover:shadow-cyan-500/25
        cursor-pointer group
        overflow-hidden
        border-2
        min-h-[280px]
        flex items-center justify-center
        before:content-[''] before:absolute before:inset-0
        before:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]
        before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500
        after:content-[''] after:absolute after:inset-0
        after:bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.1)_60deg,transparent_120deg)]
        after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-1000
        ${isHovered ? "shadow-2xl" : "shadow-lg"}
      `}
      onClick={handleBoxClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 text-center flex flex-col items-center justify-center w-full">
        {/* Animated emoji */}
        <div
          className={`
          text-6xl sm:text-7xl mb-4 
          transform transition-all duration-500
          ${isHovered ? "scale-110 rotate-12 animate-bounce" : "scale-100"}
          filter drop-shadow-lg
        `}
        >
          {emoji}
        </div>

        {/* Title with gradient text */}
        <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-lg">
          {title}
        </h3>

        {/* Description with subtle glow */}
        <p className="text-gray-300 text-base sm:text-lg opacity-90 font-light leading-relaxed max-w-xs drop-shadow">
          {description}
        </p>

        {/* Interactive hint */}
        <div
          className={`
          absolute -bottom-2 left-1/2 transform -translate-x-1/2
          text-cyan-400 text-xs font-semibold
          opacity-0 group-hover:opacity-100
          transition-all duration-500 delay-300
          bg-black/50 px-3 py-1 rounded-full
          border border-cyan-400/30
          ${isHovered ? "translate-y-0" : "translate-y-2"}
        `}
        >
          Click to discover! ✨
        </div>
      </div>

      {/* Shimmer effect on hover */}
      <div
        className={`
        absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
        transform -skew-x-12 translate-x-[-100%]
        group-hover:translate-x-[100%]
        transition-transform duration-1000
        rounded-3xl
      `}
      />
    </div>
  );
};
