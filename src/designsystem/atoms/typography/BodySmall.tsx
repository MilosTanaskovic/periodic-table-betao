import React from "react";

type BodySmallProps = {
  children: React.ReactNode;
  type?: string;
  className?: string;
};

// atomicWeight
const BodySmall = (props: BodySmallProps) => {
  const { children, type = "span", className } = props;
  const As = type ? "span" : "p";

  return (
    <As className={`font-roboto font-normal text-[10px] md:text-[6px] lg:text-[8px] leading-[14px] tracking-normal ${className}`}>
      {children}
    </As>
  );
};

export default BodySmall;
