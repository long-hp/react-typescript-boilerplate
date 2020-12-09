import Slide from 'components/Slide/Slide';
import React, { FC, useEffect, useRef, useState } from 'react';
import { LineAwesome, Text, View } from 'wiloke-react-core';
import styles from './SliderShow.module.scss';

export interface Slide {
  title: string;
}

export interface SliderShowProps {
  items?: Slide[];
}

const SliderShow: FC<SliderShowProps> = ({ items = [{ title: '1' }, { title: '2' }, { title: '3' }] }) => {
  const [indexActive, setIndexActive] = useState(1);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (innerRef.current !== null && itemRef.current !== null) {
      itemRef.current.style.width = `350px`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (containerRef.current !== null && innerRef.current !== null) {
      console.log(indexActive * containerRef.current.offsetWidth);
      innerRef.current.style.width = `${indexActive * containerRef.current.offsetWidth}`;
      console.log((indexActive * containerRef.current.offsetWidth) / items?.length);
      innerRef.current.style.transform = `translateX(-${(indexActive * containerRef.current.offsetWidth) / items?.length})`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexActive]);

  const _handleSlideNext = () => {
    setIndexActive(indexActive => Math.min(indexActive + 1, items.length - 1));
  };

  const _handleSlidePrev = () => {
    setIndexActive(indexActive => Math.max(indexActive - 1, 0));
  };
  console.log(indexActive);
  return (
    <View ref={containerRef} className={styles.container}>
      <View ref={innerRef} className={styles.wrapper}>
        {items.map((item: Slide, index: number) => {
          return <Slide ref={itemRef} key={index} title={item.title} />;
        })}
      </View>
      <View onClick={_handleSlideNext} className={styles.btnNext}>
        <Text tagName="span" className={styles.iconNext}>
          <LineAwesome name="arrow-right"></LineAwesome>
        </Text>
      </View>
      <View onClick={_handleSlidePrev} className={styles.btnPrev}>
        <Text tagName="span" className={styles.iconPrev}>
          <LineAwesome name="arrow-left"></LineAwesome>
        </Text>
      </View>
    </View>
  );
};

export default SliderShow;
