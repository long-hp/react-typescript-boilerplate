import Slide from 'components/Slide/Slide';
import React, { FC, useEffect, useRef } from 'react';
import { View } from 'wiloke-react-core';
import styles from './SliderShow.module.scss';

export interface Slide {
  title: string;
}

export interface SliderShowProps {
  items?: Slide[];
}

const SliderShow: FC<SliderShowProps> = ({}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (innerRef.current !== null) {
      innerRef.current.style.flexDirection = 'column';
    }
  }, [innerRef]);

  return (
    <View ref={containerRef} className={styles.container}>
      <View ref={innerRef} className={styles.wrapper}>
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
