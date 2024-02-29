import React from "react";
import { BlockType } from "../../../types/periodic-table";

type ElementFilledProps = {
  children: React.ReactNode;
  block?: BlockType;
  isFloating?: boolean;
  className?: string;
  handleBtnClick?: () => void;
};

const backgroundColors = {
  s: "bg-block-s-500",
  p: "bg-block-p-500",
  d: "bg-block-d-500",
  f: "bg-block-f-500",
};

const ElementFilled = (props: ElementFilledProps) => {
const { children, block, isFloating, className, handleBtnClick } = props;

// Determine background color based on block type
const bgColor = backgroundColors[block as keyof typeof backgroundColors];
  
  return (
    <button
      type="button"
      className={`flex flex-col items-center rounded-md shadow-md p-2 m-1 ${bgColor} ${
        isFloating ? "" : " shadow-light-300"
      } ${className}`}
      onClick={handleBtnClick}
    >
      {children}
    </button>
  );
};

export default ElementFilled;
