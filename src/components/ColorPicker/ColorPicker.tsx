import React, { FC, ReactNode, useState } from 'react';
import { ChromePicker, ColorChangeHandler, PhotoshopPicker, RGBColor, SketchPicker } from 'react-color';
import { createPortal } from 'react-dom';
import { Manager, Popper, Reference } from 'react-popper';
import { OuterTrigger, Radius, useStyleSheet, View } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
// import styles from './ColorPicker.module.scss';
import ColorPickerLoading from './ColorPickerLoading';
import hexToRgb from './hexToRgb';
import rgbaObjectToString from './utils/rgbaObjectToString';
import rgbaStringToObject from './utils/rgbaStringToObject';
import * as css from './styles';

export type ColorPickerType = 'chrome' | 'sketch' | 'photoshop';
export type PresetColor = { color: string; title: string } | string;
export type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export type Strategy = 'absolute' | 'fixed';

export interface ColorPickerProps {
  /** Giao diện của color picker platform: 'chrome' | 'sketch' | 'photoshop' | 'material' | 'compact' | 'swatches' */
  pickerType?: ColorPickerType;
  /** Đầu vào cùa color */
  color?: string;
  /** Thuộc tính disable alpha của các platform: 'chrome' | 'sketch */
  disableAlpha?: boolean;
  /** bảng màu ở phía dưới của platform: sketch */
  presetColor?: PresetColor[];
  /** className của color picker */
  className?: string;
  /** Position của color picker board */
  strategy?: Strategy;
  /** Chỉ hiện bảng color picker */
  onlyShowColorBoard?: boolean;
  /** Vị trí của color picker board */
  placement?: Placement;
  /** Bo viền */
  radius?: Radius;
  /** True thì Tạo color picker board ngoài root */
  isPortal?: boolean;
  /** Sự kiện onChange */
  onChange?: (color: string) => void;
  /** Sự kiện onChangeComplete */
  onChangeComplete?: (color: string) => void;
  /** Render component đằng sau ColorPicker */
  renderAfter?: (color: string) => ReactNode;
}

const getColor = (color: string, defaultColor = 'rgba(0,0,0,1)') => {
  if (color.includes('rgba')) {
    return color;
  }
  if (color.includes('#')) {
    const { r, g, b } = hexToRgb(color);
    return `rgba(${r},${g},${b},1)`;
  }
  return defaultColor;
};

const ColorPicker: FC<ColorPickerProps> & {
  Loading: typeof ColorPickerLoading;
} = ({
  disableAlpha = false,
  onlyShowColorBoard = false,
  pickerType = 'sketch',
  placement = 'bottom-start',
  strategy = 'absolute',
  radius = 5,
  color = 'rgba(0,0,0,1)',
  isPortal = false,
  className,
  presetColor,
  onChange,
  onChangeComplete,
  renderAfter,
}) => {
  const [colorState, setColorState] = useState<RGBColor>(rgbaStringToObject(getColor(color)));
  const [showPicker, setShowPicker] = useState(false);
  const { styles } = useStyleSheet();

  const _handleOnClick = () => {
    setShowPicker(!showPicker);
  };

  const _handleOnClose = () => {
    setShowPicker(false);
  };

  const _handleChange: ColorChangeHandler = color => {
    setColorState(color.rgb);
    onChange?.(rgbaObjectToString(color.rgb));
  };

  const _handleChangeComplete: ColorChangeHandler = color => {
    setColorState(color.rgb);
    onChangeComplete?.(rgbaObjectToString(color.rgb));
  };

  const combineProps = {
    className: classNames(styles(css.container), className),
    color: colorState,
    onChange: _handleChange,
    onChangeComplete: _handleChangeComplete,
  };

  const mappingColorPicker: Record<ColorPickerType, ReactNode> = {
    chrome: <ChromePicker {...combineProps} disableAlpha={disableAlpha} />,
    photoshop: <PhotoshopPicker {...combineProps} />,
    sketch: <SketchPicker {...combineProps} disableAlpha={disableAlpha} presetColors={presetColor} />,
  };

  const targetPicker = (
    <Reference>
      {({ ref }) => (
        <View ref={ref} className="TargetPicker" css={css.targetPicker} onClick={_handleOnClick}>
          <View radius={radius} css={css.targetBackground} style={{ backgroundColor: rgbaObjectToString(colorState) }}></View>
        </View>
      )}
    </Reference>
  );

  const pickerBoard = (
    <Popper strategy={strategy} placement={placement}>
      {popperProps => {
        return (
          <View ref={popperProps.ref} style={popperProps.style} className="Placement-container" css={css.placement(placement)}>
            <View>{mappingColorPicker[pickerType]}</View>
            <View ref={popperProps.arrowProps.ref} style={popperProps.arrowProps.style} css={{ position: 'absolute' }} />
          </View>
        );
      }}
    </Popper>
  );

  const _renderColorPicker = () => showPicker && pickerBoard;

  const _renderPickerPortal = () => showPicker && createPortal(pickerBoard, document.body);

  return (
    <>
      <OuterTrigger onClick={_handleOnClose}>
        <View css={{ position: 'relative' }}>
          {onlyShowColorBoard ? (
            mappingColorPicker[pickerType]
          ) : (
            <Manager>
              {targetPicker}
              {isPortal ? _renderPickerPortal() : _renderColorPicker()}
            </Manager>
          )}
        </View>
      </OuterTrigger>
      {renderAfter?.(rgbaObjectToString(colorState))}
    </>
  );
};

ColorPicker.Loading = ColorPickerLoading;

export default ColorPicker;
