import React, { CSSProperties, FC, ReactNode } from 'react';
import { Text, View, withStyles, WithStylesProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './Field.module.scss';

export interface FieldProps extends WithStylesProps {
  children: ReactNode;
  /** Label của field có thể có hoặc không */
  label?: ReactNode;
  /** style inline field */
  style?: CSSProperties;
  /** Font-size của label */
  fontSize?: number;
  /** Note của Field */
  note?: string;
}

const FieldComponent: FC<FieldProps> = ({ label, children, style, className, color, fontSize = 14, note, ...rest }) => {
  const combineProps = { style, className: classNames(styles.container, className) };
  return (
    <View {...rest} {...combineProps}>
      {!!label && (
        <Text color={color} tagName="p" className={styles.label} tachyons="mb2" style={{ fontSize: `${fontSize}px` }}>
          {label}
        </Text>
      )}
      {children}
      <Text className={styles.note}>{note}</Text>
    </View>
  );
};

const Field = withStyles<HTMLElement, FieldProps>(FieldComponent);

export default Field;
