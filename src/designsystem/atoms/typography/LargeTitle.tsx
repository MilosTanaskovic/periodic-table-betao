import React from 'react';

type LargeTitleProps = {
    children: React.ReactNode;
    className?: string;
}

const LargeTitle = (props: LargeTitleProps) => {
    const { children, className } = props;
  return (
    <h1 className={`font-bold text-4xl ${className}`}>
        {children}
    </h1>
  )
}

export default LargeTitle