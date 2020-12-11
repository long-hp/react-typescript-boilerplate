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
      <View
        onClick={increment}
        tachyons={['pointer', 'flex', 'items-center']}
        className={styles.actionUp}
        style={{ lineHeight: 1, flex: '0 0 50%', borderLeft: '1px solid #9ea6ba', borderBottom: '1px solid #9ea6ba' }}
      >
        <MaterialIcon name="keyboard_arrow_up" />
      </View>
      <View
        onClick={decrement}
        tachyons={['pointer', 'flex', 'items-center']}
        className={styles.actionDown}
        style={{ lineHeight: 1, flex: '0 0 50%', borderLeft: '1px solid #9ea6ba' }}
      >
        <MaterialIcon name="keyboard_arrow_down" />
      </View>
    </View>
  );
};

export default Action;
