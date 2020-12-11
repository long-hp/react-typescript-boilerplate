import Slide, { SlideProps } from 'components/Slide/Slide';
import React, { FC, MouseEvent, useEffect, useRef, useState } from 'react';
import { LineAwesome, Text, View } from 'wiloke-react-core';
import styles from './SliderShow.module.scss';

export interface SliderShowProps {
  items: SlideProps[];
}

const SliderShow: FC<SliderShowProps> = ({ items }) => {
  // const [indexActive, setIndexActive] = useState(0);
  //Check xem co dang nhap chuot hay khong
  const [isDown, setIsDown] = useState(false);
  // const [scrollLeft, setScrollLeft] = useState(null);
  // const [startX, setStartX] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current !== null && innerRef.current !== null) {
      // innerRef.current.style.transform = `translate3d(-${350}px, 0, 0)`;
      // innerRef.current.style.width = `${Children.count(children) * 350}px`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _handleSlideNext = () => {};

  const _handleSlidePrev = () => {};

  const _handleMouseDown = (event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
    console.log(event);
    setIsDown(true);
    if (containerRef.current !== null && innerRef.current !== null) {
      containerRef.current.classList.add('active');
    }
  };

  const _handleMouseMove = (event: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
    if (!isDown) return;
    console.log(event);
  };

  const _handleMouseLeave = () => {
    setIsDown(false);
  };

  const _handleMouseUp = () => {
    setIsDown(false);
  };

  return (
    <View
      onMouseLeave={_handleMouseLeave}
      onMouseMove={_handleMouseMove}
      onMouseDown={_handleMouseDown}
      onMouseUp={_handleMouseUp}
      ref={containerRef}
      className={styles.container}
    >
      <View style={{ transition: 'all 300ms ease 0s' }} ref={innerRef} className={styles.wrapper}>
        {items.map((item: SlideProps, index: number) => {
          return <Slide key={index} title={item.title} />;
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
