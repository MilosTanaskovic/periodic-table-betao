import React from "react";

type BodySmallProps = {
  children: React.ReactNode;
  type?: string;
  className?: string;
};

const BodySmall = (props: BodySmallProps) => {
  const { children, type = "p", className } = props;
  const As = type ? "p" : "span";

  return (
    <As className={`font-roboto font-normal text-[8px] leading-[14px] tracking-normal ${className}`}>
      {children}
    </As>
  );
};

export default BodySmall;
