import React, { FC } from 'react';
import styles from './Demo.module.scss';

export interface DemoProps {}

const Demo: FC<DemoProps> = () => {
  return <div className={styles.container}>Demo</div>;
};

export default Demo;
