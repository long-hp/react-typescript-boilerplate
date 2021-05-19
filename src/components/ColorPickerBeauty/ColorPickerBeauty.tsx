import ColorPicker, { ColorPickerProps } from 'components/ColorPicker';
import Box from 'components/FieldBox';
import React, { FC } from 'react';
import { ColorNames, Radius, Text, View, ViewProps } from 'wiloke-react-core';
import ColorPickerBeautyLoading from './ColorPickerBeautyLoading';
import * as css from './styles';

export interface ColorPickerBeautyProps
  extends Pick<ColorPickerProps, 'pickerType' | 'placement' | 'strategy' | 'color' | 'onChange' | 'onChangeComplete'>,
    Pick<ViewProps, 'borderWidth' | 'borderStyle' | 'borderColor'> {
  /** Background color của box */
  backgroundInnerField?: ColorNames;
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
  borderWidth = 1,
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
      css={css.box}
    >
      <View css={css.inner}>
        <ColorPicker
          pickerType={pickerType}
          radius={radiusPicker}
          placement={placement}
          strategy={strategy}
          color={color}
          onChange={onChange}
          onChangeComplete={onChangeComplete}
          renderAfter={color => (
            <View css={css.colorDetailsContainer}>
              <Text css={css.colorDetails}>{color}</Text>
            </View>
          )}
        />
      </View>
    </Box>
  );
};

ColorPickerBeauty.Loading = ColorPickerBeautyLoading;

export default ColorPickerBeauty;
