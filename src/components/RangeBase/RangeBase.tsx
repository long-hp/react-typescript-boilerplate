import { createSliderWithTooltip, Range } from 'rc-slider';
import { RangeProps } from 'rc-slider/lib/Range';
import React, { FC, ReactNode } from 'react';
import RangeLoading from './RangeLoading';

export interface RangeBaseProps extends RangeProps {
  /** Style của 2(hoặc nhiều) thanh track  */
  trackStyle?: React.CSSProperties[];
  /** Style của 2(hoặc nhiều) nút handle  */
  handleStyle?: React.CSSProperties[];
  /** Giá trị đầu vào của range slider */
  value?: number[];
  /** Bật lên sẽ hiện tooltip */
  tooltip?: boolean;
  /** Màu của thanh rail */
  railColor?: string;
  /** Vị trí của tooltip: 'top' | 'bottom' */
  tooltipPlacement?: 'top' | 'bottom';
  /** Trạng thái ẩn/hiện của tooltip */
  tooltipVisible?: boolean;
  /** Hàm format tooltip overlay */
  tipFormatter?: (value: number) => ReactNode;
}

const RangeWithTooltip = createSliderWithTooltip(Range);

const RangeBase: FC<RangeBaseProps> & {
  Loading: typeof RangeLoading;
} = ({
  tooltip = false,
  tooltipVisible = false,
  handleStyle,
  trackStyle,
  defaultValue = [10, 30],
  value = [10, 20],
  min = 0,
  max = 10,
  railColor = '#ccc',
  tooltipPlacement = 'top',
  tipFormatter,
  onChange,
  ...rest
}) => {
  const generalProps = () => ({
    value: value,
    min: min,
    max: max,
    trackStyle: trackStyle,
    handleStyle: handleStyle,
    defaultValue: defaultValue,
    onChange: onChange,
  });

  const _renderRangeSlide = () => {
    return tooltip ? (
      <RangeWithTooltip
        {...rest}
        {...generalProps()}
        railStyle={{ backgroundColor: `${railColor}` }}
        tipProps={{ placement: tooltipPlacement, visible: tooltipVisible }}
        tipFormatter={tipFormatter}
      />
    ) : (
      <Range {...rest} {...generalProps()} railStyle={{ backgroundColor: `${railColor}` }} onChange={onChange} />
    );
  };

  return _renderRangeSlide();
};

RangeBase.Loading = RangeLoading;

export default RangeBase;
