// components/FloatingButton.tsx
import React from "react";
import logo from "../assets/logo.png";

interface FloatingButtonProps {
  isOpen: boolean;
  onClick: () => void;
  buttonStyle: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  isOpen,
  onClick,
  buttonStyle,
}) => {
  return (
    <button
      id="floating-button"
      className={`fixed bottom-10 right-10 w-12 h-12 flex justify-center items-center rounded-full text-white text-lg shadow-lg cursor-pointer transition-all duration-300 ${buttonStyle}`}
      onClick={onClick}
      title="Sinart Ajuda"
    >
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <img src={logo} alt="Sinart Ajuda" className="w-6 h-6" /> // Substitua o ícone pelo logo
      )}
    </button>
  );
};

export default FloatingButton;
