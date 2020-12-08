import Slide from 'components/Slide/Slide';
import React, { FC } from 'react';
import { View } from 'wiloke-react-core';
import styles from './SliderShow.module.scss';

export interface Slide {
  img: string;
}

export interface SliderShowProps {
  slides: Slide[];
}

const SliderShow: FC<SliderShowProps> = () => {
  // const [activeIndex, setActiveIndex] = useState(0);
  return (
    <View className={styles.container}>
      <View className={styles.wrapper}>
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
      </View>
    </View>
  );
};

export default SliderShow;
