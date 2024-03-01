import React from "react";

type BodyMediumProps = {
  children: React.ReactNode;
  type?: string;
  className?: string;
};

// name
const BodyMedium = (props: BodyMediumProps) => {
  const { children, type = "p", className } = props;
  const As = type ? "p" : "span";

  return (
    <As className={`font-roboto font-normal text-[14px] md:text-[6px] lg:text-[8px] xl:text-[11px] leading-[18px] md:leading-[14px] tracking-normal ${className}`}>
      {children}
    </As>
  );
};

export default BodyMedium;
