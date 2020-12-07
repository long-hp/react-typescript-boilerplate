import React, { DOMAttributes, FC } from 'react';
import { MaterialIcon, View } from 'wiloke-react-core';

export interface CounterActionProps {
  increment?: DOMAttributes<HTMLElement>['onClick'];
  decrement?: DOMAttributes<HTMLElement>['onClick'];
}

const CounterAction: FC<CounterActionProps> = ({ increment, decrement }) => {
  return (
    <View tachyons={['h-100', 'flex', 'flex-column', 'justify-center']}>
      <View onClick={increment} tachyons={['pointer', 'flex', 'items-center']} style={{ lineHeight: 1, flex: '0 0 50%' }}>
        <MaterialIcon name="keyboard_arrow_up" />
      </View>
      <View onClick={decrement} tachyons={['pointer', 'flex', 'items-center']} style={{ lineHeight: 1, flex: '0 0 50%' }}>
        <MaterialIcon name="keyboard_arrow_down" />
      </View>
    </View>
  );
};

export default CounterAction;
