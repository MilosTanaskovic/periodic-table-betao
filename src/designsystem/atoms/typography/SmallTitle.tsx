import React from "react";

type SmallTitleProps = {
  children?: React.ReactNode;
  className?: string;
};

const SmallTitle = ({ children, className }: SmallTitleProps) => {
  return <h3 className={` font-medium text-[28px] leading-[37px] tracking-normal ${className}`}>{children}</h3>;
};

export default SmallTitle;
