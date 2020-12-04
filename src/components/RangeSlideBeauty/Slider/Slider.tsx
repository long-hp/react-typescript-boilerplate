import Slider, { createSliderWithTooltip } from 'rc-slider';
import { GenericSliderProps } from 'rc-slider/lib/interface';
import React, { CSSProperties, FC } from 'react';
import { classNames } from 'wiloke-react-core/utils';
import styles from './Slider.module.scss';

const SliderWithTooltip = createSliderWithTooltip(Slider);

export interface SliderProps extends GenericSliderProps {
  /** Giá trị đầu vào của thanh trượt */
  value?: number;

  /** Style của thanh track */
  trackStyle?: CSSProperties;

  /** Style của nút điều khiển */
  handleStyle?: CSSProperties;

  /** Sự kiện onChange */
  onChange?: (value: number) => void;

  /** Sự kiện onBlur */
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;

  /** Sự kiện onFocus */
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;

  /** Sự kiện onAfterChange */
  onAfterChange?: (value: number) => void;

  /** Sự kiện onBeforeChange */
  onBeforeChange?: (value: number) => void;

  /** Bật lên sẽ hiện tooltip */
  tooltip?: boolean;

  /** Vị trí của tooltip: 'top' | 'bottom' */
  tooltipPlacement?: 'top' | 'bottom';

  /** Trạng thái ẩn/hiện của tooltip */
  tooltipVisible?: boolean;
}

const SliderComponent: FC<SliderProps> = ({
  value,
  trackStyle,
  handleStyle,
  min,
  max,
  disabled = false,
  step = 1,
  className,
  tooltip,
  tooltipPlacement = 'top',
  tooltipVisible = false,
  onChange,
  onBlur,
  onFocus,
  onAfterChange,
  onBeforeChange,
  ...rest
}) => {
  const disabledClassName = disabled ? styles.disable : '';
  const combineProps = { className: classNames(className, styles.container, disabledClassName) };

  const _renderSlide = () => {
    return tooltip ? (
      <SliderWithTooltip
        {...rest}
        {...combineProps}
        trackStyle={trackStyle}
        handleStyle={handleStyle}
        value={value}
        min={min}
        max={max}
        disabled={disabled}
        step={step}
        tipFormatter={value => value}
        tipProps={{ placement: tooltipPlacement, visible: tooltipVisible }}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onAfterChange={onAfterChange}
        onBeforeChange={onBeforeChange}
      />
    ) : (
      <Slider
        {...rest}
        {...combineProps}
        trackStyle={trackStyle}
        handleStyle={handleStyle}
        value={value}
        min={min}
        max={max}
        disabled={disabled}
        step={step}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onAfterChange={onAfterChange}
        onBeforeChange={onBeforeChange}
      />
    );
  };

  return _renderSlide();
};

export default SliderComponent;
