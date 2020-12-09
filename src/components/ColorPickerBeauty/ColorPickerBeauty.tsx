import ColorPicker, { ColorPickerType, FunctionColorChange, Placement, Strategy } from 'components/ColorPicker/ColorPicker';
import Field from 'components/Field';
import Box from 'components/FieldBox';
import React, { FC, ReactNode } from 'react';
import { Color, ColorResult } from 'react-color';
import { BorderStyle, BorderWidth, ColorNames, Radius, Text, View } from 'wiloke-react-core';
import ColorPickerBeautyLoading from './ColorPickerBeautyLoading';
import styles from './ColorPickerBeauty.module.scss';

export interface ColorPickerBeautyProps {
  /** Giao diện của color picker platform: 'chrome' | 'sketch' | 'photoshop' | 'material' | 'compact' | 'swatches' */
  pickerType?: ColorPickerType;
  /** Tiêu đề của slide beauty */
  label?: ReactNode;
  /** Note của slide beauty */
  note?: string;
  /** Background color của box */
  backgroundInnerField?: ColorNames;
  /** Style border của field box */
  borderStyle?: BorderStyle;
  /** Độ rộng border của field box */
  borderWidth?: BorderWidth;
  /** Màu border của field box */
  borderColor?: ColorNames;
  /** Radius của field box */
  radiusBox?: Radius;
  /** Radius của color picker */
  radiusPicker?: Radius;
  /** Đầu vào cùa color: hex | hsl | rgb */
  color?: Color;
  /** Background picker */
  colorPicker?: ColorResult['rgb'];
  /** Vị trí của color picker board */
  placement?: Placement;
  /** Chi tiết màu */
  colorDetails?: ReactNode;
  /** Position của color picker board */
  strategy?: Strategy;
  /** Sự kiện onChange */
  onChange?: FunctionColorChange;
  /** Sự kiện onChangeComplete */
  onChangeComplete?: FunctionColorChange;
}

const ColorPickerBeauty: FC<ColorPickerBeautyProps> & {
  Loading: typeof ColorPickerBeautyLoading;
} = ({
  label = 'Default color picker beauty',
  note = '*note',
  placement = 'bottom-start',
  backgroundInnerField = 'light',
  colorDetails,
  strategy = 'absolute',
  color,
  colorPicker,
  borderStyle = 'solid',
  borderColor = 'gray4',
  radiusPicker = 8,
  radiusBox = 8,
  borderWidth = '1/6',
  pickerType = 'chrome',
  onChange,
  onChangeComplete,
}) => {
  return (
    <Field label={label} fontSize={16} note={note} color="dark">
      <Box
        backgroundColor={backgroundInnerField}
        borderColor={borderColor}
        borderStyle={borderStyle}
        borderWidth={borderWidth}
        radius={radiusBox}
        tachyons={['pt2', 'pb2']}
      >
        <View tachyons={['flex', 'items-center']} radius="round" className={styles.inner}>
          <View className={styles.colorPicker} tachyons={['flex-grow-1']}>
            <ColorPicker
              pickerType={pickerType}
              colorPicker={colorPicker}
              radius={radiusPicker}
              placement={placement}
              strategy={strategy}
              color={color}
              onChange={onChange}
              onChangeComplete={onChangeComplete}
            />
          </View>

          <View tachyons={['ml4', 'h-50']} style={{ display: 'inherit' }}>
            <Text color="gray5" className={styles.colorDetails}>
              {colorDetails}
            </Text>
          </View>
        </View>
      </Box>
    </Field>
  );
};

ColorPickerBeauty.Loading = ColorPickerBeautyLoading;

export default ColorPickerBeauty;
