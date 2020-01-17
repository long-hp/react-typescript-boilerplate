import React, { FC } from 'react';

export interface FuncCompProps {
  title: string;
  text: string;
}

const FuncComp: FC<FuncCompProps> = ({ title, text }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>{text}</div>
    </div>
  );
};

export default FuncComp;
