import React, { FC, useState } from 'react';
import { Size, View, withStyles, WithStylesProps } from 'wiloke-react-core';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import InputNumber from 'components/InputNumber';
import { classNames } from 'wiloke-react-core/utils';
import styles from './SliderBar.module.scss';

export interface SliderBarProps extends WithStylesProps {
  defaultMin?: number;
  defaultMax?: number;
  /** Kich thuoc cua Statusbar */
  size?: Size;
  /** Bat len input co width 100% */
  block?: boolean;
  /** Border cua box*/
  bordered?: boolean;
  /** disabled */
  disabled?: boolean;
  /**Trang thai default*/
  defaultStatus?: boolean;
  /** onChange */
}
const SliderWithTooltip = createSliderWithTooltip(Slider);

const SliderBarComponent: FC<SliderBarProps> = ({
  defaultMin = 0,
  defaultMax = 100,
  block = true,
  size = 'large',
  disabled = false,
  bordered = true,
  className,
  ...rest
}) => {
  const [valueState, setValueState] = useState(defaultMin);
  const sizeClass = styles[size];
  const disabledClassName = disabled ? styles.disabled : '';
  const borderedClassName = bordered ? styles.bordered : '';
  const blockClassName = block ? styles.block : '';
  const classes = classNames(styles.container, sizeClass, blockClassName, disabledClassName, borderedClassName, className);

  const _handleChange = (value: number) => {
    setValueState(value);
  };
  return (
    <View {...rest} className={classes} tachyons={['flex', 'items-center']}>
      <SliderWithTooltip
        min={defaultMin}
        max={defaultMax}
        trackStyle={{ backgroundColor: 'slateblue' }}
        handleStyle={{
          backgroundColor: '#',
          width: '19px',
          height: '19px',
          border: '1px solid #b1b1b7',
          boxShadow: '0 2px 4px rgba(39, 38, 43, 0.08)',
        }}
        value={valueState}
        onChange={_handleChange}
      />
      <View tachyons={'ml2'}>
        <InputNumber onChangeNumber={_handleChange} value={valueState} min={defaultMin} max={defaultMax} />
      </View>
    </View>
  );
};

const SliderBar = withStyles<HTMLElement, SliderBarProps>(SliderBarComponent, {
  backgroundColor: 'light',
  radius: 5,
  color: 'gray6',
});

export default SliderBar;
