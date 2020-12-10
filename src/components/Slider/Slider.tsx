import RSlider, { createSliderWithTooltip } from 'rc-slider';
import { GenericSliderProps } from 'rc-slider/lib/interface';
import React, { CSSProperties, FC } from 'react';
import { classNames } from 'wiloke-react-core/utils';
import SliderLoading from './SliderLoading';
import styles from './Slider.module.scss';

const SliderWithTooltip = createSliderWithTooltip(RSlider);

export interface SliderProps extends GenericSliderProps {
  /** Giá trị đầu vào của thanh trượt */
  value?: number;
  /** Style của thanh track */
  trackStyle?: CSSProperties;
  /** Style của nút điều khiển */
  handleStyle?: CSSProperties;
  /** Bật lên sẽ hiện tooltip */
  tooltip?: boolean;
  /** Vị trí của tooltip: 'top' | 'bottom' */
  tooltipPlacement?: 'top' | 'bottom';
  /** Trạng thái ẩn/hiện của tooltip */
  tooltipVisible?: boolean;
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
}

const Slider: FC<SliderProps> & {
  Loading: typeof SliderLoading;
} = ({
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

  const generalProps = () => ({
    trackStyle: trackStyle,
    handleStyle: handleStyle,
    value: value,
    min: min,
    max: max,
    disabled: disabled,
    step: step,
    onChange: onChange,
    onBlur: onBlur,
    onFocus: onFocus,
    onAfterChange: onAfterChange,
    onBeforeChange: onBeforeChange,
  });

  const _renderSlide = () => {
    return tooltip ? (
      <SliderWithTooltip {...rest} {...combineProps} {...generalProps()} tipProps={{ placement: tooltipPlacement, visible: tooltipVisible }} />
    ) : (
      <Slider {...rest} {...combineProps} {...generalProps()} />
    );
  };

  return _renderSlide();
};

Slider.Loading = SliderLoading;

export default Slider;
