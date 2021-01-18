import React, { DOMAttributes, FC } from 'react';
import { MaterialIcon, Size, View } from 'wiloke-react-core';
import * as css from './styles';

export interface ActionProps {
  size?: Exclude<Size, 'extra-small'>;
  increment?: DOMAttributes<HTMLElement>['onClick'];
  decrement?: DOMAttributes<HTMLElement>['onClick'];
}

const Action: FC<ActionProps> = ({ size = 'medium', increment, decrement }) => {
  return (
    <View css={css.actionsContainer}>
      <View onClick={increment} css={css.actionIncre}>
        <MaterialIcon name="keyboard_arrow_up" css={css.icon(size)} />
      </View>
      <View onClick={decrement} css={css.actionDecre}>
        <MaterialIcon name="keyboard_arrow_down" css={css.icon(size)} />
      </View>
    </View>
  );
};

export default Action;
