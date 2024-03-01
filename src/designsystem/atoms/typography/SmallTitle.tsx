import React from "react";

type SmallTitleProps = {
  children?: React.ReactNode;
  className?: string;
};

// symbol
const SmallTitle = ({ children, className }: SmallTitleProps) => {
  return <h3 className={` font-medium text-[36px] md:text-[22px] lg:text-[24px] xl:text-[28px] leading-[37px] tracking-normal ${className}`}>{children}</h3>;
};

export default SmallTitle;
