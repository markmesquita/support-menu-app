// components/MenuItem.tsx
import React from "react";

interface MenuItemProps {
  icon: string;
  label: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full px-4 py-2 flex items-center space-x-2 hover:bg-gray-200 focus:outline-none"
    >
      <div>{icon}</div>
      <span>{label}</span>
    </button>
  );
};

export default MenuItem;
