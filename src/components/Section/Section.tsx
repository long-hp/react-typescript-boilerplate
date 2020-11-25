import React, { FC, ReactNode } from 'react';
import { View } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './Section.module.scss';

export interface SectionProps {
  children: ReactNode;
  backgroundColor?: string;
  backgroundType?: 'full' | 'left' | 'right';
}

const Section: FC<SectionProps> = ({ children, backgroundColor, backgroundType = 'full' }) => {
  return (
    <View tagName="section" className={styles.container}>
      <View className={classNames(styles.background, styles[backgroundType])} style={{ backgroundColor }} tachyons={['absolute', 'absolute--fill']} />
      {children}
    </View>
  );
};

export default Section;
