import React, { FC } from 'react';
import { LineAwesome, View, Text, LineAwesomeName } from 'wiloke-react-core';
import styles from './IconTextLarge.module.scss';

export interface IconTextLargeProps {
  /** #### Màu icon */
  iconColor?: string;
  /** #### Tên icon */
  iconName: LineAwesomeName;
  /** #### Title của component */
  title: string;
  /** #### Text của component */
  text: string;
}

const IconTextLarge: FC<IconTextLargeProps> = ({ iconColor = '#FD9B9B', iconName, title, text }) => {
  return (
    <View radius={20} backgroundColor="light" className={styles.container}>
      <View className={styles.icon} tachyons={['flex', 'justify-center', 'items-center', 'br-pill']}>
        <View className={styles.iconBg} tachyons={['absolute', 'absolute--fill']} style={{ backgroundColor: iconColor }} />
        <LineAwesome name={iconName} size={34} style={{ color: iconColor }} />
      </View>
      <Text tagName="h2" className={styles.title}>
        {title}
      </Text>
      <Text>{text}</Text>
    </View>
  );
};

export default IconTextLarge;
