import React from "react";
import { BlockType } from "../../../types/periodic-table";

type ElementFilledProps = {
  children: React.ReactNode;
  block?: BlockType;
  isSelected?: boolean;
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

const highlightColors = {
  s: "bg-block-s-200",
  p: "bg-block-p-200",
  d: "bg-block-d-200",
  f: "bg-block-f-200",
};

const ElementFilled = (props: ElementFilledProps) => {
  const { children, block, isSelected, isFloating, className, handleBtnClick } =
    props;

  // Determine background color based on block type
  //const bgColor = backgroundColors[block as keyof typeof backgroundColors];

  // Choose highlight color if isSelected is true
  const bgColor = isSelected
    ? highlightColors[block as keyof typeof highlightColors]
    : backgroundColors[block as keyof typeof backgroundColors];

  return (
    <button
      type="button"
      className={`flex flex-col items-center w-full rounded-md shadow-md p-2 my-1 ${bgColor} ${
        isFloating ? "" : " shadow-light-300"
      } ${className}`}
      onClick={handleBtnClick}
    >
      {children}
    </button>
  );
};

export default ElementFilled;
