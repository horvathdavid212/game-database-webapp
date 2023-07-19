import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { useState } from "react";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";

const SortSelector = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={isMenuOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
        onClick={handleMenuToggle}
      >
        Rendezés: Relevancia
      </MenuButton>
      <MenuList>
        <MenuItem>Relevancia</MenuItem>
        <MenuItem>Hozzáadás</MenuItem>
        <MenuItem>Név</MenuItem>
        <MenuItem>Megjelenés</MenuItem>
        <MenuItem>Népszerűség</MenuItem>
        <MenuItem>Pontszám</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
