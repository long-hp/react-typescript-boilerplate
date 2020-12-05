import React, { FC } from 'react';
import { View } from 'wiloke-react-core';
import styles from './Product.module.scss';

export interface ProductProps {
  id: number;
}

const Product: FC<ProductProps> = ({ id }) => {
  return (
    <View className={styles.container} backgroundColor="dark" tachyons={['flex', 'items-center', 'justify-between']}>
      {id}
    </View>
  );
};

export default Product;
