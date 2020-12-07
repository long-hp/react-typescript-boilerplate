import Box from 'components/FieldBox';
import Field from 'components/Field';
import { NumberInput } from 'components/NumberInput';
import { Slider } from 'components/RangeSlider';
import React, { FC, ReactNode } from 'react';
import { ColorNames, View, WithStylesProps } from 'wiloke-react-core';
import { memoization } from 'wiloke-react-core/utils';
import styles from './SlideBeauty.module.scss';
import SlideBeautyLoading from './SlideBeautyLoading';

type BorderStyle = 'solid' | 'dashed' | 'dotted';
type BorderWidth = '0/6' | '1/6' | '2/6' | '3/6' | '4/6' | '5/6' | '6/6';

export interface SlideBeautyProps extends WithStylesProps {
  /** Giá trị thấp nhất của slide beauty */
  min?: number;
  /** Giá trị lớn nhất của slide beauty */
  max?: number;
  /** Giá mỗi lần nhảy(step) của slide beauty */
  step?: number;
  /** Giá trị của slide beauty */
  value?: number;
  /** Tiêu đề của slide beauty */
  label?: ReactNode;
  /** Note của slide beauty */
  note?: string;
  /** Bật lên thì hiểu thị dots slide beauty */
  dots?: boolean;
  /** Background color của box */
  backgroundInnerField?: ColorNames;
  /** Màu của thanh track */
  trackColor?: string;
  /** Màu của thanh rail */
  railColor?: string;
  /** Màu của nút */
  handleColor?: string;
  /** Màu viền của nút */
  handleBorder?: string;
  /** Style border của field box */
  borderStyle?: BorderStyle;
  /** Độ rộng border của field box */
  borderWidth?: BorderWidth;
  /** Bật lên thì hiện tooltip */
  tooltip?: boolean;
  /** Sự kiện onChange */
  onChangeNumber?: (value: number) => void;
}

interface SlideBeautyFC extends FC<SlideBeautyProps> {
  Loading: typeof SlideBeautyLoading;
}

const SlideBeauty: SlideBeautyFC = ({
  min = 0,
  max = 10,
  step = 1,
  value = 0,
  label,
  note,
  tooltip = false,
  dots = false,
  borderColor = 'gray4',
  borderStyle = 'solid',
  radius,
  borderWidth = '1/6',
  trackColor = '#475BE2',
  railColor = '#DBDBE0',
  handleColor = '#ffffff',
  handleBorder = '#DBDBE0',
  backgroundInnerField = 'light',
  onChangeNumber,
}) => {
  return (
    <Field label={label} fontSize={14} note={note} color="dark">
      <Box backgroundColor={backgroundInnerField} borderColor={borderColor} borderStyle={borderStyle} borderWidth={borderWidth} radius={radius}>
        <View tachyons={['flex', 'items-center']} radius="round" className={styles.inner}>
          <View className={styles.slide}>
            <Slider
              value={value}
              min={min}
              max={max}
              step={step}
              trackStyle={{ backgroundColor: `${trackColor}` }}
              railStyle={{ backgroundColor: `${railColor}` }}
              handleStyle={{ backgroundColor: `${handleColor}`, border: `1px solid ${handleBorder}` }}
              dots={dots}
              tooltip={tooltip}
              onChange={onChangeNumber}
            />
          </View>

          <View tachyons={['ml4', 'h-50']} style={{ display: 'inherit' }}>
            <NumberInput
              value={value}
              min={min}
              max={max}
              step={step}
              sizeInput="small"
              radius={8}
              borderColor="gray5"
              onChangeNumber={onChangeNumber}
            />
          </View>
        </View>
      </Box>
    </Field>
  );
};
SlideBeauty.Loading = SlideBeautyLoading;

export default memoization(SlideBeauty);
