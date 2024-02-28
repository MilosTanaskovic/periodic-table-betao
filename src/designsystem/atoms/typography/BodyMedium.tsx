import React from "react";

type BodyMediumProps = {
  children: React.ReactNode;
  type?: string;
  className?: string;
};

const BodyMedium = (props: BodyMediumProps) => {
  const { children, type = "p", className } = props;
  const As = type ? "p" : "span";

  return (
    <As className={`font-roboto font-normal text-[11px] leading-[14px] tracking-normal ${className}`}>
      {children}
    </As>
  );
};

export default BodyMedium;
