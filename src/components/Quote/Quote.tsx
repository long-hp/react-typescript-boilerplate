import React, { FC } from 'react';
import { View, LineAwesome, Text, Divider } from 'wiloke-react-core';
import styles from './Quote.module.scss';

export interface QuoteProps {
  /** #### Đoạn quote */
  quote: string;
  /** #### Tên người viết */
  cite: string;
  /** #### Màu nền cho icon quote */
  iconBackgroundColor?: string;
}

const Quote: FC<QuoteProps> = ({ quote, cite, iconBackgroundColor = '#FDF1E7' }) => {
  return (
    <View>
      <View className={styles.iconWrap} style={{ backgroundColor: iconBackgroundColor }}>
        <LineAwesome name="quote-right" size={100} color="primary" className={styles.icon} />
      </View>
      <Text className={styles.quote}>{quote}</Text>
      <View tachyons={['flex', 'items-center']}>
        <Divider size={[20, 1]} color="gray1" tachyons="mr3" />
        <Text tagName="h3" className={styles.cite}>
          {cite}
        </Text>
      </View>
    </View>
  );
};

export default Quote;
