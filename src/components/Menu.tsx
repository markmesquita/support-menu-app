import React, { useEffect, useRef } from "react";

interface MenuProps {
  isOpen: boolean;
  children?: React.ReactNode;
  onClose: () => void; // Adicione a função onClose para fechar o menu
}

const Menu: React.FC<MenuProps> = ({ isOpen, children, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose(); // Fecha o menu se o clique ocorrer fora do menu
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={menuRef}
      className={`absolute bottom-20 right-10 mb-4 w-48 bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {children}
    </div>
  );
};

export default Menu;
