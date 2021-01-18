import React, { FC } from 'react';
import { View, Text, ViewProps, useResponsive } from 'wiloke-react-core';

export interface SectionTitleProps extends ViewProps {
  title: string;
  text?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title, text, nightModeBlacklist, ...rest }) => {
  const { ref, size } = useResponsive({ maxWidth: 700 });

  return (
    <View {...rest} nightModeBlacklist={nightModeBlacklist} ref={ref}>
      <Text tagName="h2" color="gray9" size={size(40)} nightModeBlacklist={nightModeBlacklist}>
        {title}
      </Text>
      {!!text && (
        <Text color="gray7" size={16} css={{ marginTop: '8px' }} nightModeBlacklist={nightModeBlacklist}>
          {text}
        </Text>
      )}
    </View>
  );
};

export default SectionTitle;
