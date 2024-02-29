import React from "react";

interface ButtonOutlineProps {
  children: React.ReactNode;
  className?: string;
  handleBtnClick?: () => void;
}

const ButtonOutline: React.FC<ButtonOutlineProps> = ({
  children,
  className,
  handleBtnClick,
}) => (
  <button
    className={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ${className}`}
    onClick={handleBtnClick}
  >
    {children}
  </button>
);

export default ButtonOutline;
