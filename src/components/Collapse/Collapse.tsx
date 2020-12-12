import React, { FC, ReactNode } from 'react';
import { View, WithStylesProps } from 'wiloke-react-core';
import styles from './Collapse.module.scss';

export interface CollapseProps extends WithStylesProps {
  title?: ReactNode;
}

const Collapse: FC<CollapseProps> = ({
  title = 'Text',
  backgroundColor = 'gray3',
  radius = 5,
  borderColor = 'gray4',
  borderStyle = 'solid',
  borderWidth = '1/6',
}) => {
  return (
    <View
      className={styles.container}
      backgroundColor={backgroundColor}
      radius={radius}
      borderColor={borderColor}
      borderStyle={borderStyle}
      borderWidth={borderWidth}
    >
      <View>{title}</View>
    </View>
  );
};

export default Collapse;
