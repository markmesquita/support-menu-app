// App.tsx
import React, { useEffect, useState } from "react";
import FloatingButton from "./components/FloatingButton";
import Menu from "./components/Menu";
import MenuItem from "./components/MenuItem";
import Modal from "./components/Modal";

interface IMenuItem {
  label: string;
  icon: string;
  content: string;
}

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<IMenuItem | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuItems, setMenuItems] = useState<IMenuItem[]>([]);

  useEffect(() => {
    const getUrlParams = () => {
      const params = new URLSearchParams(window.location.search);
      const menuItemsParam = params.get("menuItems");
      if (menuItemsParam) {
        try {
          const parsedMenuItems = JSON.parse(menuItemsParam);
          setMenuItems(parsedMenuItems);
        } catch (error) {
          console.error("Error parsing menu items:", error);
        }
      }
    };

    // Chama a função ao montar o componente
    getUrlParams();
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (menuItem: IMenuItem) => {
    setSelectedMenuItem(menuItem);
    setIsMenuOpen(false);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative h-screen flex justify-center items-center bg-gray-200">
      <FloatingButton
        isOpen={isMenuOpen}
        onClick={handleMenuToggle}
        buttonStyle={isMenuOpen ? "bg-red-600" : "bg-blue-300"}
      />
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={index}
            icon={menuItem.icon}
            label={menuItem.label}
            onClick={() => handleMenuItemClick(menuItem)}
          />
        ))}
      </Menu>
      {isModalOpen && selectedMenuItem && (
        <Modal
          title={selectedMenuItem.label}
          content={selectedMenuItem.content}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default App;
