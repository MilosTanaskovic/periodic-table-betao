import React from "react";

type BodyLargeProps = {
  children: React.ReactNode;
  type?: string;
  className?: string;
};

// atomicNumber
const BodyLarge = (props: BodyLargeProps) => {
  const { children, type = "span", className } = props;
  const As = type ? "span" : "p";

  return (
    <As className={`font-roboto font-bold text-[18px] md:text-[12px] xl:text-[14px] leading-[14px] tracking-normal self-start ${className}`}>
      {children}
    </As>
  );
};

export default BodyLarge;