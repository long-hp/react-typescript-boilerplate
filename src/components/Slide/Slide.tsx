import React, { FC } from 'react';
import { View } from 'wiloke-react-core';
import styles from './Slide.module.scss';

export interface SlideProps {}

const Slide: FC<SlideProps> = () => {
  return <View className={styles.container}></View>;
};

export default Slide;
