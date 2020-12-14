import ColorPicker, { ColorPickerProps } from 'components/ColorPicker';
import Box from 'components/FieldBox';
import React, { FC, ReactNode } from 'react';
import { BorderStyle, BorderWidth, ColorNames, Radius, Text, View } from 'wiloke-react-core';
import ColorPickerBeautyLoading from './ColorPickerBeautyLoading';
import styles from './ColorPickerBeauty.module.scss';

export interface ColorPickerBeautyProps
  extends Pick<ColorPickerProps, 'pickerType' | 'placement' | 'strategy' | 'color' | 'onChange' | 'onChangeComplete'> {
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
}

const ColorPickerBeauty: FC<ColorPickerBeautyProps> & {
  Loading: typeof ColorPickerBeautyLoading;
} = ({
  placement = 'bottom-start',
  backgroundInnerField = 'light',
  strategy = 'absolute',
  color,
  borderStyle = 'solid',
  borderColor = 'gray5',
  radiusPicker = 5,
  radiusBox = 5,
  borderWidth = '1/6',
  pickerType,
  onChange,
  onChangeComplete,
}) => {
  return (
    <Box
      backgroundColor={backgroundInnerField}
      borderColor={borderColor}
      borderStyle={borderStyle}
      borderWidth={borderWidth}
      radius={radiusBox}
      className={styles.box}
    >
      <View tachyons={['flex', 'items-center', 'justify-between', 'w-100', 'h-100']} radius="round" className={styles.inner}>
        <ColorPicker
          pickerType={pickerType}
          radius={radiusPicker}
          placement={placement}
          strategy={strategy}
          color={color}
          onChange={onChange}
          onChangeComplete={onChangeComplete}
          renderAfter={color => (
            <View tachyons={['ml4']} style={{ display: 'inherit' }}>
              <Text color="gray7" className={styles.colorDetails}>
                {color}
              </Text>
            </View>
          )}
        />
      </View>
    </Box>
  );
};

ColorPickerBeauty.Loading = ColorPickerBeautyLoading;

export default ColorPickerBeauty;
