import React, { FC, ReactNode } from 'react';
import { Text, View, withStyles, ViewProps } from 'wiloke-react-core';
import * as css from './styles';

export interface FieldProps extends ViewProps {
  children: ReactNode;
  /** Label của field có thể có hoặc không */
  label?: ReactNode;
  /** Font-size của label */
  fontSize?: number;
  /** Note của Field */
  note?: string;
}

const FieldComponent: FC<FieldProps> = ({ label, children, color = 'gray9', fontSize = 14, note, ...rest }) => {
  return (
    <View {...rest} css={css.container}>
      {!!label && (
        <Text color={color} size={fontSize} tagName="p" css={css.label}>
          {label}
        </Text>
      )}
      {children}
      <Text tagName="p" css={css.note}>
        {note}
      </Text>
    </View>
  );
};

const Field = withStyles<HTMLElement, FieldProps>(FieldComponent);

export default Field;
