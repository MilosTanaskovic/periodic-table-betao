import React from "react";

type MediumTitleProps = {
  children: React.ReactNode;
  className?: string;
};

const MediumTitle = (props: MediumTitleProps) => {
  const { children, className } = props;
  return (
    <h2 className={`font-bold text-2xl text-black ${className}`}>
      {children}
    </h2>
  );
};

export default MediumTitle;