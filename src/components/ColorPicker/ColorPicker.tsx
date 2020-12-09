import React, { FC, useState } from 'react';
import { ChromePicker, Color, ColorResult, PhotoshopPicker, SketchPicker } from 'react-color';
import { createPortal } from 'react-dom';
import { Manager, Popper, Reference } from 'react-popper';
import { OuterTrigger, Radius, View } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './ColorPicker.module.scss';
import ColorPickerLoading from './ColorPickerLoading';

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

export type Strategy = 'absolute';

export type FunctionColorChange = (color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => void;

export interface ColorPickerProps {
  /** Giao diện của color picker platform: 'chrome' | 'sketch' | 'photoshop' | 'material' | 'compact' | 'swatches' */
  pickerType?: ColorPickerType;
  /** Đầu vào cùa color: hex | hsl | rgb */
  color?: Color;
  /** Background picker */
  colorPicker?: ColorResult['rgb'];
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
  onChange?: FunctionColorChange;
  /** Sự kiện onChangeComplete */
  onChangeComplete?: FunctionColorChange;
}

const ColorPicker: FC<ColorPickerProps> & {
  Loading: typeof ColorPickerLoading;
} = ({
  disableAlpha = false,
  onlyShowColorBoard = false,
  pickerType = 'sketch',
  placement = 'bottom-start',
  strategy = 'absolute',
  radius = 5,
  color,
  isPortal = false,
  className,
  colorPicker,
  presetColor,
  onChange,
  onChangeComplete,
}) => {
  const [showPicker, setShowPicker] = useState(false);

  const _handleRenderPickerType = () => {
    let picker = null;
    const combineProps = { className: classNames(styles.pickerPallte, className) };
    switch (pickerType) {
      case 'chrome':
        picker = <ChromePicker {...combineProps} color={color} disableAlpha={disableAlpha} onChange={onChange} onChangeComplete={onChangeComplete} />;
        break;

      case 'photoshop':
        picker = <PhotoshopPicker {...combineProps} color={color} className={className} onChange={onChange} onChangeComplete={onChangeComplete} />;
        break;

      case 'sketch':
        picker = (
          <SketchPicker
            {...combineProps}
            color={color}
            disableAlpha={disableAlpha}
            className={className}
            presetColors={presetColor}
            onChange={onChange}
            onChangeComplete={onChangeComplete}
          />
        );
        break;

      default:
        picker = (
          <SketchPicker
            {...combineProps}
            color={color}
            disableAlpha={disableAlpha}
            className={className}
            presetColors={presetColor}
            onChange={onChange}
            onChangeComplete={onChangeComplete}
          />
        );
        break;
    }
    return picker;
  };

  const _handleOnclick = () => {
    setShowPicker(!showPicker);
  };

  const _onClose = () => {
    setShowPicker(false);
    console.log('close');
  };

  const _renderTarget = () => {
    return (
      <Reference>
        {({ ref }) => (
          <View ref={ref} className={styles.pickerColor} onClick={_handleOnclick}>
            <View
              className={styles.bgFade}
              radius={radius}
              tachyons={['absolute', 'absolute--fill']}
              style={{ backgroundColor: `rgba(${colorPicker?.r}, ${colorPicker?.g}, ${colorPicker?.b}, ${colorPicker?.a})` }}
            ></View>
          </View>
        )}
      </Reference>
    );
  };

  const _renderPickerBoard = () => {
    return (
      <Popper strategy={strategy} placement={placement}>
        {popperProps => {
          return (
            <View ref={popperProps.ref} style={popperProps.style} className={[styles[placement]].join(' ')}>
              <View className={styles.popperInner}>{_handleRenderPickerType()}</View>
              <View ref={popperProps.arrowProps.ref} style={popperProps.arrowProps.style} className={styles.arrow} />
            </View>
          );
        }}
      </Popper>
    );
  };

  const _renderColorPicker = () => {
    return showPicker && _renderPickerBoard();
  };

  const _renderPickerPortal = () => {
    return showPicker && createPortal(_renderPickerBoard(), document.body);
  };

  return (
    <OuterTrigger onClick={_onClose}>
      <View tachyons={['relative']}>
        {onlyShowColorBoard ? (
          _handleRenderPickerType()
        ) : (
          <Manager>
            {_renderTarget()}
            {isPortal ? _renderPickerPortal() : _renderColorPicker()}
          </Manager>
        )}
      </View>
    </OuterTrigger>
  );
};

ColorPicker.Loading = ColorPickerLoading;

export default ColorPicker;
