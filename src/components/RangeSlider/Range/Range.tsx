import { createSliderWithTooltip, Range } from 'rc-slider';
import { RangeProps } from 'rc-slider/lib/Range';
import React, { FC, ReactNode } from 'react';
import RangeSliderLoading from '../RangeSliderLoading';

export interface RangeComponentProps extends RangeProps {
  /** Style của 2(hoặc nhiều) thanh track  */
  trackStyle?: React.CSSProperties[];

  /** Style của 2(hoặc nhiều) nút handle  */
  handleStyle?: React.CSSProperties[];

  /** Giá trị đầu vào của range slider */
  value?: number[];

  /** Bật lên sẽ hiện tooltip */
  tooltip?: boolean;

  /** Vị trí của tooltip: 'top' | 'bottom' */
  tooltipPlacement?: 'top' | 'bottom';

  /** Trạng thái ẩn/hiện của tooltip */
  tooltipVisible?: boolean;

  /** Hàm format tooltip overlay */
  tipFormatter?: (value: number) => ReactNode;
}

interface RangeFC extends FC<RangeComponentProps> {
  Loading: typeof RangeSliderLoading;
}

const RangeWithTooltip = createSliderWithTooltip(Range);

const RangeComponent: RangeFC = ({
  tooltip = false,
  tooltipVisible = false,
  handleStyle,
  trackStyle,
  defaultValue = [10, 30],
  value = [10, 20],
  min = 0,
  max = 10,
  tooltipPlacement = 'top',
  tipFormatter,
  onChange,
  ...rest
}) => {
  const _renderRangeSlide = () => {
    return tooltip ? (
      <RangeWithTooltip
        {...rest}
        value={value}
        min={min}
        max={max}
        trackStyle={trackStyle}
        handleStyle={handleStyle}
        onChange={onChange}
        defaultValue={defaultValue}
        tipFormatter={tipFormatter}
        tipProps={{ placement: tooltipPlacement, visible: tooltipVisible }}
      />
    ) : (
      <Range
        {...rest}
        value={value}
        min={min}
        max={max}
        trackStyle={trackStyle}
        handleStyle={handleStyle}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    );
  };

  return _renderRangeSlide();
};

RangeComponent.Loading = RangeSliderLoading;

export default RangeComponent;
