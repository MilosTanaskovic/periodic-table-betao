import React from "react";

type BodyLargeProps = {
  children: React.ReactNode;
  type?: string;
  className?: string;
};

const BodyLarge = (props: BodyLargeProps) => {
  const { children, type = "p", className } = props;
  const As = type ? "p" : "span";

  return (
    <As className={`font-roboto font-bold text-[14px] leading-[14px] tracking-normal self-start ${className}`}>
      {children}
    </As>
  );
};

export default BodyLarge;