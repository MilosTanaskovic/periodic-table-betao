import React from "react";
import { ButtonOutline, LargeTitle } from "../designsystem/atoms";
import BateoLogo from "../assets/bateo-logo.png";

interface HeaderProps {
  onInvertClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onInvertClick }) => {
  return (
    <header className=" flex justify-between items-center gap-4 w-full h-20 px-4">
      {/* Logo */}
      <img src={BateoLogo} className="w-16 h-16" alt="bateo logo" />
      {/* Title */}
      <LargeTitle>Periodic Table Of Elements</LargeTitle>
      {/* invert button */}
      <ButtonOutline handleBtnClick={onInvertClick}>Invert</ButtonOutline>
    </header>
  );
};

export default Header;
