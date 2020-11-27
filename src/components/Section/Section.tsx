import React, { FC, ReactNode } from 'react';
import { ColorNames, View } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './Section.module.scss';

export interface SectionProps {
  children: ReactNode;
  backgroundColorNative?: string;
  backgroundType?: 'full' | 'left' | 'right';
  backgroundColor?: ColorNames;
}

const Section: FC<SectionProps> = ({ children, backgroundColorNative, backgroundColor, backgroundType = 'full' }) => {
  return (
    <View tagName="section" className={styles.container}>
      <View
        className={classNames(styles.background, styles[backgroundType])}
        style={{ backgroundColor: backgroundColorNative }}
        tachyons={['absolute', 'absolute--fill']}
        backgroundColor={backgroundColor}
      />
      {children}
    </View>
  );
};

export default Section;
