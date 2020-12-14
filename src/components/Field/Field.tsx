import React, { FC, ReactNode } from 'react';
import { Text, View, withStyles, ViewProps } from 'wiloke-react-core';
import styles from './Field.module.scss';

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
    <View {...rest} wilokeStyles="mb-20" tachyons="relative">
      {!!label && (
        <Text color={color} size={fontSize} tagName="p" className={styles.label} tachyons={['mb2', 'mt0']}>
          {label}
        </Text>
      )}
      {children}
      <Text tagName="p" className={styles.note} color="gray6" tachyons={['mb0', 'mt1']}>
        {note}
      </Text>
    </View>
  );
};

const Field = withStyles<HTMLElement, FieldProps>(FieldComponent);

export default Field;
