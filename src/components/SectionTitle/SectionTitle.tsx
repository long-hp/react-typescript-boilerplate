import React, { FC } from 'react';
import { View, Text, ViewProps } from 'wiloke-react-core';
import styles from './SectionTitle.module.scss';

export interface SectionTitleProps extends ViewProps {
  title: string;
  text?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title, text, nightModeBlacklist, ...rest }) => {
  return (
    <View {...rest} nightModeBlacklist={nightModeBlacklist}>
      <Text tagName="h2" className={styles.title} color="dark1" nightModeBlacklist={nightModeBlacklist}>
        {title}
      </Text>
      {!!text && (
        <Text className={styles.text} color="dark3" nightModeBlacklist={nightModeBlacklist}>
          {text}
        </Text>
      )}
    </View>
  );
};

export default SectionTitle;
