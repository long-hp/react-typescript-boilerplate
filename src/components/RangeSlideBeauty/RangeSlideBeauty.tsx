import Box from 'components/Box';
import Field from 'components/Field';
import { NumberInput } from 'components/NumberInput';
import { Slider } from 'components/RangeSlider';
import React, { FC, ReactNode } from 'react';
import { ColorNames, View } from 'wiloke-react-core';
import { memoization } from 'wiloke-react-core/utils';
import styles from './RangeSlideBeauty.module.scss';
import RangeSlideBeautyLoading from './RangeSlideBeautyLoading';

export interface RangeSlideBeautyProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  label?: ReactNode;
  note?: string;
  dots?: boolean;
  backgroundInnerField?: ColorNames;
  onChangeNumber?: (value: number) => void;
}

interface RangeSlideBeautyFC extends FC<RangeSlideBeautyProps> {
  Loading: typeof RangeSlideBeautyLoading;
}

const RangeSlideBeauty: RangeSlideBeautyFC = ({
  min = 0,
  max = 10,
  step = 1,
  value = 0,
  label,
  note,
  dots = false,
  backgroundInnerField,
  onChangeNumber,
}) => {
  return (
    <Field label={label} fontSize={20} note={note} color="dark">
      <Box backgroundColor={backgroundInnerField}>
        <View tachyons={['flex', 'items-center']} radius="round" className={styles.inner}>
          <View className={styles.slide}>
            <Slider
              value={value}
              min={min}
              max={max}
              step={step}
              trackStyle={{ backgroundColor: '#fd5c63' }}
              railStyle={{ backgroundColor: '#ccc' }}
              dots={dots}
              onChange={onChangeNumber}
            />
          </View>

          <View tachyons={['ml4', 'h-50']} style={{ display: 'inherit' }}>
            <NumberInput value={value} min={min} max={max} step={step} sizeInput="medium" borderColor="primary" onChangeNumber={onChangeNumber} />
          </View>
        </View>
      </Box>
    </Field>
  );
};
RangeSlideBeauty.Loading = RangeSlideBeautyLoading;

export default memoization(RangeSlideBeauty);
