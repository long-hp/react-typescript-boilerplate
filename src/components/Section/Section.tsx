import React, { FC, ReactNode } from 'react';
import { View, ViewProps } from 'wiloke-react-core';
import * as css from './styles';

type PickViewProps = Pick<ViewProps, 'backgroundColor'>;
export interface SectionProps extends PickViewProps {
  children: ReactNode;
  backgroundColorNative?: string;
  backgroundType?: 'full' | 'left' | 'right';
}

const Section: FC<SectionProps> = ({ children, backgroundColorNative, backgroundColor, backgroundType = 'full' }) => {
  return (
    <View tagName="section" css={css.container}>
      <View css={[css.background(backgroundColorNative, backgroundColor), css.backgroundType(backgroundType)]} />
      {children}
    </View>
  );
};

export default Section;
