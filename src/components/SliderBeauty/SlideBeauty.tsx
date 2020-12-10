import Field from 'components/Field';
import Box from 'components/FieldBox';
import { NumberInput } from 'components/NumberInput';
import Slider from 'components/Slider';
import React, { FC, ReactNode } from 'react';
import { ColorNames, Radius, View, WithStylesProps } from 'wiloke-react-core';
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
  /** Radius của ô input */
  radiusInput?: Radius;
  /** Style border của input */
  borderInputStyle?: BorderStyle;
  /** Background color của input */
  borderInputColor?: ColorNames;
  /** Sự kiện onChange */
  onValueChange?: (value: number) => void;
}

const SlideBeauty: FC<SlideBeautyProps> & {
  Loading: typeof SlideBeautyLoading;
} = ({
  min = 0,
  max = 100,
  step = 1,
  value = 0,
  label,
  note,
  tooltip = false,
  dots = false,
  borderColor = 'gray5',
  borderStyle = 'solid',
  radius = 5,
  borderInputStyle = 'solid',
  radiusInput = 5,
  borderWidth = '1/6',
  borderInputColor = 'gray5',
  trackColor = '#475BE2',
  railColor = '#DBDBE0',
  handleColor = '#ffffff',
  handleBorder = '#DBDBE0',
  backgroundInnerField = 'light',
  onValueChange,
}) => {
  return (
    <Field label={label} fontSize={16} note={note} color="dark">
      <Box
        className={styles.box}
        backgroundColor={backgroundInnerField}
        borderColor={borderColor}
        borderStyle={borderStyle}
        borderWidth={borderWidth}
        radius={radius}
        tachyons={['pt0', 'pb0']}
      >
        <View tachyons={['flex', 'items-center', 'w-100', 'h-100']} radius="round" className={styles.inner}>
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
              onChange={onValueChange}
            />
          </View>

          <View tachyons={['ml4']} style={{ display: 'inherit' }}>
            <NumberInput
              value={value}
              min={min}
              max={max}
              step={step}
              radius={radiusInput}
              borderStyle={borderInputStyle}
              borderColor={borderInputColor}
              sizeInput="small"
              onValueChange={onValueChange}
            />
          </View>
        </View>
      </Box>
    </Field>
  );
};
SlideBeauty.Loading = SlideBeautyLoading;

export default SlideBeauty;
