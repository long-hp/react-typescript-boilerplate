import React, { FC } from 'react';
import styles from './Demo2.module.scss';

export interface Demo2Props {}

const Demo2: FC<Demo2Props> = () => {
  return <div className={styles.container}>Demo5</div>;
};

export default Demo2;
