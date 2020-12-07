import Field from 'components/Field';
import Box from 'components/FieldBox';
import { NumberInput } from 'components/NumberInput';
import RangeBase from 'components/RangeBase';
import { RangeProps } from 'rc-slider/lib/Range';
import React, { FC, ReactNode } from 'react';
import { BorderStyle, BorderWidth, ColorNames, View, WithStylesProps } from 'wiloke-react-core';
import styles from './RangeBeauty.module.scss';
import RangeBeautyLoading from './RangeBeautyLoading';

export interface RangeBeautyProps extends WithStylesProps, RangeProps {
  /** Giá trị thấp nhất của slide beauty */
  min?: number;
  /** Giá trị lớn nhất của slide beauty */
  max?: number;
  /** Giá mỗi lần nhảy(step) của slide beauty */
  step?: number;
  /** Giá trị của slide beauty */
  value?: number[];
  /** Tiêu đề của slide beauty */
  label?: ReactNode;
  /** Note của slide beauty */
  note?: string;
  /** Bật lên thì hiểu thị dots slide beauty */
  dots?: boolean;
  /** Background color của box */
  backgroundInnerField?: ColorNames;
  /** Style của 2(hoặc nhiều) thanh track  */
  trackStyle?: React.CSSProperties[];
  /** Style của 2(hoặc nhiều) nút handle  */
  handleStyle?: React.CSSProperties[];
  /** Kiểu style của border */
  borderStyle?: BorderStyle;
  /** Độ rộng border của field box */
  borderWidth?: BorderWidth;
  /** Màu của thanh rail */
  railColor?: string;
  /** Bật lên thì hiện tooltip */
  tooltip?: boolean;
  /** Giá trị tìm kiếm thứ nhất */
  lowerBound?: number;
  /** Giá trị tìm kiếm thứ hai */
  upperBound?: number;
  /** Trạng thái ẩn/hiện của tooltip */
  tooltipVisible?: boolean;
  /** Vị trí của tooltip */
  tooltipPlacement?: 'top' | 'bottom';
  /** Sự kiện onChange */
  onChangeNumber?: (value: number[]) => void;
  /** Sự kiện onChangeLowerBound */
  onChangeLowerBound?: (value: number) => void;
  /** Sự kiện onChangeUpperBound */
  onChangeUpperBound?: (value: number) => void;
}

const RangeBeauty: FC<RangeBeautyProps> & {
  Loading: typeof RangeBeautyLoading;
} = ({
  min = 0,
  max = 100,
  lowerBound = 10,
  upperBound = 10,
  tooltipVisible = true,
  tooltipPlacement = 'top',
  step = 10,
  value = [lowerBound, upperBound],
  label,
  note,
  tooltip = false,
  dots = false,
  borderColor = 'gray4',
  railColor = '#ccc',
  borderStyle = 'solid',
  trackStyle,
  handleStyle,
  radius,
  borderWidth = '1/6',
  backgroundInnerField = 'light',
  onChangeNumber,
  onChangeLowerBound,
  onChangeUpperBound,
}) => {
  return (
    <Field label={label} fontSize={16} note={note} color="dark">
      <Box backgroundColor={backgroundInnerField} borderColor={borderColor} borderStyle={borderStyle} borderWidth={borderWidth} radius={radius}>
        <View tachyons={['flex', 'items-center']} radius="round" className={styles.inner}>
          <View className={styles.slide}>
            <RangeBase
              min={min}
              max={max}
              dots={dots}
              tooltip={tooltip}
              tooltipVisible={tooltipVisible}
              tooltipPlacement={tooltipPlacement}
              step={step}
              value={value}
              railStyle={{ backgroundColor: `${railColor}` }}
              trackStyle={trackStyle}
              handleStyle={handleStyle}
              onChange={onChangeNumber}
            />
          </View>

          <View tachyons={['ml4', 'h-50']} style={{ display: 'inherit' }}>
            <NumberInput
              value={lowerBound}
              min={min}
              max={max}
              step={step}
              sizeInput="small"
              radius={8}
              borderColor="gray5"
              onChangeNumber={onChangeLowerBound}
              className={styles.input}
            />
            <NumberInput
              value={upperBound}
              min={min}
              max={max}
              step={step}
              sizeInput="small"
              radius={8}
              borderColor="gray5"
              onChangeNumber={onChangeUpperBound}
              className={styles.input}
            />
          </View>
        </View>
      </Box>
    </Field>
  );
};

RangeBeauty.Loading = RangeBeautyLoading;

export default RangeBeauty;
