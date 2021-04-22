import React, { ComponentType, FC } from 'react';
import { View } from 'wiloke-react-core';

export interface HoverLazyProps {
  chunks: (() => Promise<{ default: ComponentType<any> }>)[];
}

const HoverLazy: FC<HoverLazyProps> = ({ chunks, children }) => {
  const handleMouseEnter = () => {
    chunks.forEach(fn => {
      fn();
    });
  };
  return <View onMouseEnter={handleMouseEnter}>{children}</View>;
};

export default HoverLazy;
