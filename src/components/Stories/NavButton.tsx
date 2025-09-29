// components/NavButton.tsx
import React from "react";

interface NavButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}

export const NavButton: React.FC<NavButtonProps> = ({
  children,
  onClick,
  className = "",
  disabled = false,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      flex items-center justify-center
      px-6 py-3 rounded-full shadow-lg
      text-white font-extrabold text-xl sm:text-2xl
      transform transition-all duration-200 ease-out
      min-w-[120px] sm:min-w-[180px]
      ${
        disabled
          ? "bg-gray-400 cursor-not-allowed opacity-70"
          : "bg-blue-500 hover:bg-blue-600 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300"
      }
      ${className}
    `}
  >
    {children}
  </button>
);
