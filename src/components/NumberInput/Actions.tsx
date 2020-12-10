import React, { DOMAttributes, FC } from 'react';
import { MaterialIcon, View } from 'wiloke-react-core';
import styles from './NumberInput.module.scss';

export interface ActionProps {
  increment?: DOMAttributes<HTMLElement>['onClick'];
  decrement?: DOMAttributes<HTMLElement>['onClick'];
}

const Action: FC<ActionProps> = ({ increment, decrement }) => {
  return (
    <View tachyons={['h-100', 'flex', 'flex-column', 'justify-center']}>
      <View onClick={increment} tachyons={['pointer', 'flex', 'items-center']} className={styles.actionUp}>
        <MaterialIcon name="keyboard_arrow_up" className={styles.iconUp} />
      </View>
      <View onClick={decrement} tachyons={['pointer', 'flex', 'items-center']} className={styles.actionDown}>
        <MaterialIcon name="keyboard_arrow_down" className={styles.iconDown} />
      </View>
    </View>
  );
};

export default Action;
