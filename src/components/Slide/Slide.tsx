import React, { forwardRef } from 'react';
import { View } from 'wiloke-react-core';
import styles from './Slide.module.scss';

export interface SlideProps {
  title: string;
}

const Slide = forwardRef<HTMLDivElement, SlideProps>(({ title }: SlideProps, ref: any) => {
  return (
    <View ref={ref} className={styles.container}>
      {title}
    </View>
  );
});

export default Slide;
