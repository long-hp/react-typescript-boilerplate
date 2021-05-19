import React, { FC, memo } from 'react';
import { LineAwesome, View, Text, LineAwesomeName } from 'wiloke-react-core';
import * as css from './styles';

export interface IconTextProps {
  iconColor?: string;
  iconName: LineAwesomeName;
  title: string;
  text: string;
}

const IconText: FC<IconTextProps> = ({ iconColor = '#FD9B9B', iconName, title, text }) => {
  return (
    <View radius={15} backgroundColor="light" css={css.container}>
      <View radius="pill" css={css.icon}>
        <View css={css.iconBackground(iconColor)} />
        <LineAwesome name={iconName} size={34} css={{ color: iconColor }} />
      </View>
      <Text tagName="h2" size={16} css={{ marginBottom: '8px' }}>
        {title}
      </Text>
      <Text>{text}</Text>
    </View>
  );
};

export default memo(IconText);
