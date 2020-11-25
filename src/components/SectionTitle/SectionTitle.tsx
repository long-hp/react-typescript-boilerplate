import React, { FC } from 'react';
import { View, Text, ViewProps, useResponsive } from 'wiloke-react-core';
import styles from './SectionTitle.module.scss';

export interface SectionTitleProps extends ViewProps {
  title: string;
  text?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title, text, nightModeBlacklist, ...rest }) => {
  const { ref, size } = useResponsive({ maxWidth: 700 });

  return (
    <View {...rest} nightModeBlacklist={nightModeBlacklist} ref={ref}>
      <Text tagName="h2" color="dark1" size={size(40)} nightModeBlacklist={nightModeBlacklist}>
        {title}
      </Text>
      {!!text && (
        <Text className={styles.text} color="dark3" tachyons="mt2" nightModeBlacklist={nightModeBlacklist}>
          {text}
        </Text>
      )}
    </View>
  );
};

export default SectionTitle;
