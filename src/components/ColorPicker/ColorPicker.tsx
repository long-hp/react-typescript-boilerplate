import React, { FC, useState } from 'react';
import { ChromePicker, Color, ColorChangeHandler, ColorResult, PhotoshopPicker, SketchPicker } from 'react-color';
import { createPortal } from 'react-dom';
import { Manager, Popper, Reference } from 'react-popper';
import { View } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './ColorPicker.module.scss';

export type ColorPickerType = 'chrome' | 'sketch' | 'photoshop';
export type PresetColor = { color: string; title: string } | string;

export interface ColorPickerProps {
  /** Giao diện của color picker: 'chrome' | 'sketch' | 'photoshop' | 'material' | 'compact' | 'swatches' */
  pickerType: ColorPickerType;

  /** Đầu vào cùa color: hex | hsl | rgb */
  color?: Color;

  /** Background picker */
  colorPicker?: ColorResult['rgb'];

  /** Thuộc tính disable alpha của các picker: 'chrome' | 'sketch */
  disableAlpha?: boolean;

  /**  */
  presetColor?: PresetColor[];

  className?: string;

  /** Sự kiện onChange */
  onChange?: ColorChangeHandler;

  /** Sự kiện onChange */
  onChangeComplete?: ColorChangeHandler;
}

const ColorPicker: FC<ColorPickerProps> = ({
  pickerType = 'chrome',
  color,
  disableAlpha = false,
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
          <ChromePicker color={color} disableAlpha={disableAlpha} className={className} onChange={onChange} onChangeComplete={onChangeComplete} />
        );
        break;
    }
    return picker;
  };

  const _handleOnclick = () => {
    setShowPicker(!showPicker);
  };

  const _renderTarget = () => {
    return (
      <Reference>
        {({ ref }) => (
          <View ref={ref} tagName="div" onClick={_handleOnclick}>
            <View
              className={styles.pickerColor}
              style={{ backgroundColor: `rgba(${colorPicker?.r}, ${colorPicker?.g}, ${colorPicker?.b}, ${colorPicker?.a})` }}
            ></View>
          </View>
        )}
      </Reference>
    );
  };

  const _renderColorPicker = () => {
    // const showPickerClass = showPicker ? '' : '';
    return (
      showPicker &&
      createPortal(
        <Popper strategy="fixed" placement="bottom-start">
          {popperProps => {
            return (
              <View ref={popperProps.ref} style={popperProps.style} className={[styles[popperProps.placement]].join(' ')}>
                <View className={styles.popperInner}>{_handleRenderPickerType()}</View>
                <View ref={popperProps.arrowProps.ref} style={popperProps.arrowProps.style} className={styles.arrow} />
              </View>
            );
          }}
        </Popper>,
        document.body,
      )
    );
  };

  return (
    <View className={styles.container}>
      <Manager>
        {_renderTarget()}
        {_renderColorPicker()}
      </Manager>
    </View>
  );
};

export default ColorPicker;
