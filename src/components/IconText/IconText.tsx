import React, { FC, memo } from 'react';
import { LineAwesome, View, Text, LineAwesomeName } from 'wiloke-react-core';

export interface IconTextProps {
  iconColor?: string;
  iconName: LineAwesomeName;
  title: string;
  text: string;
}

const IconText: FC<IconTextProps> = ({ iconColor = '#FD9B9B', iconName, title, text }) => {
  return (
    <View radius="round" backgroundColor="light" tachyons="pa4">
      <View tachyons={['flex', 'justify-center', 'items-center', 'br-pill', 'overflow-hidden', 'relative', 'z-5', 'w3', 'h3', 'mb3']}>
        <View tachyons={['absolute', 'absolute--fill', 'z-0', 'o-20']} style={{ backgroundColor: iconColor }} />
        <LineAwesome name={iconName} size={34} style={{ color: iconColor }} />
      </View>
      <Text tagName="h2" tachyons={['mb2', 'f4']}>
        {title}
      </Text>
      <Text>{text}</Text>
    </View>
  );
};

export default memo(IconText);
