import RSlider, { createSliderWithTooltip } from 'rc-slider';
import { GenericSliderProps } from 'rc-slider/lib/interface';
import React, { FC } from 'react';
import { ColorNames, useTheme } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './Slider.module.scss';
import SliderLoading from './SliderLoading';

const SliderWithTooltip = createSliderWithTooltip(RSlider);

export interface SliderProps extends GenericSliderProps {
  /** Giá trị đầu vào của thanh trượt */
  value?: number;
  /** Background color của nút điều khiển */
  handleColor?: ColorNames;
  /** Background color của nút điều khiển */
  handleBorderColor?: ColorNames;
  /** Background color của track */
  trackColor?: ColorNames;
  /** Background color của track */
  railColor?: ColorNames;
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
  trackColor = 'primary',
  handleBorderColor = 'gray5',
  handleColor = 'light',
  railColor = 'gray5',
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
  const { colors } = useTheme();
  const disabledClassName = disabled ? 'ui-disabled' : '';

  const generalProps = {
    value,
    min,
    max,
    disabled,
    step,
    onChange,
    onBlur,
    onFocus,
    onAfterChange,
    onBeforeChange,
  };

  const combineProps = { className: classNames(className, styles.container, disabledClassName), ...rest };

  const _renderSlide = () => {
    return tooltip ? (
      <SliderWithTooltip
        {...combineProps}
        {...generalProps}
        trackStyle={{ backgroundColor: colors[trackColor] }}
        handleStyle={{ backgroundColor: colors[handleColor], border: `1px solid ${colors[handleBorderColor]}` }}
        railStyle={{ backgroundColor: colors[railColor] }}
        tipProps={{ placement: tooltipPlacement, visible: tooltipVisible }}
      />
    ) : (
      <RSlider
        {...combineProps}
        {...generalProps}
        trackStyle={{ backgroundColor: colors[trackColor] }}
        handleStyle={{ backgroundColor: colors[handleColor], border: `1px solid ${colors[handleBorderColor]}` }}
        railStyle={{ backgroundColor: colors[railColor] }}
      />
    );
  };

  return _renderSlide();
};

Slider.Loading = SliderLoading;

export default Slider;
