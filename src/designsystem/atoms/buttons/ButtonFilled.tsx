import React from "react";

type ButtonFilledProps = {
  children: React.ReactNode;
  isFloating?: boolean;
  className?: string;
  handleBtnClick?: () => void;
};

const ButtonFilled = (props: ButtonFilledProps) => {
    const { children, isFloating, className, handleBtnClick } = props;
    return (
        <button
            type="button"
            className={`flex flex-col items-center rounded-md shadow-md p-2 ${
                isFloating ? "shadow-accent-low" : ""
            } ${className}`}
            onClick={handleBtnClick}
        >
            {children}
        </button>
    );
};

export default ButtonFilled;
