import React from 'react';

type LargeTitleProps = {
    children: React.ReactNode;
    className?: string;
}

const LargeTitle = (props: LargeTitleProps) => {
    const { children, className } = props;
  return (
    <h1 className={`font-bold text-3xl text-block-s-500 ${className}`}>
        {children}
    </h1>
  )
}

export default LargeTitle