import React, { FC, Fragment, InputHTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { BorderStyle, BorderWidth, ColorNames, LineAwesome, Radius, Size, Text, useStyleSheet, View } from 'wiloke-react-core';
import { memoization } from 'wiloke-react-core/utils';
import CheckboxLoading from './CheckboxLoading';
import * as css from './styles';

export interface CheckboxProps {
  /** Kích thước của checkbox */
  size?: Size;
  /** Trạng thái của checkbox */
  checked?: boolean;
  /** Trạng thái default của checkbox */
  defaultChecked?: boolean;
  /** Disabled Checkbox */
  disabled?: boolean;
  /** Backgroundcolor checkbox*/
  activeColor?: ColorNames;
  /** Color icon ben trong checkbox */
  iconActiveColor?: ColorNames;
  /** Classname */
  className?: string;
  /** Icon ben trong checkbox */
  Icon?: ReactNode;
  /** Màu border được lấy màu từ ThemeProvider */
  borderColor?: ColorNames;
  /** Kiểu của border */
  borderStyle?: BorderStyle;
  /** Border width css */
  borderWidth?: BorderWidth;
  /** Border radius css */
  radius?: Radius;
  /** Sự kiện khi bấm vào checkbox và nhận được event */
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
  /** Sự kiện khi bấm vào checkbox và nhận được value */
  onValueChange?: (value: boolean) => void;
}

interface CheckboxStatic {
  Loading: typeof CheckboxLoading;
}

const Checkbox: FC<CheckboxProps> & CheckboxStatic = ({
  size = 'small',
  checked,
  defaultChecked = false,
  disabled = false,
  children,
  Icon,
  borderColor = 'gray5',
  radius = 5,
  borderWidth = '2/6',
  borderStyle = 'solid',
  activeColor = 'primary',
  iconActiveColor = 'light',
  onChange,
  onValueChange,
}) => {
  const [checkedState, setCheckedState] = useState(defaultChecked);
  const { styles } = useStyleSheet();

  const defaultIconMapping: Record<Size, ReactNode> = {
    'extra-small': <LineAwesome name="check" size={12} />,
    small: <LineAwesome name="check" size={16} />,
    medium: <LineAwesome name="check" size={20} />,
    large: <LineAwesome name="check" size={24} />,
  };

  const _handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }
    setCheckedState(!checkedState);
    onChange?.(event);
    onValueChange?.(!checkedState);
  };

  useEffect(() => {
    if (typeof checked !== 'undefined') {
      setCheckedState(checked);
    }
  }, [checked]);

  const _renderCheckboxNative = () => {
    return <input disabled={disabled} className={styles(css.input)} checked={checkedState} type="checkbox" onChange={_handleChange} />;
  };

  const _renderCheckboxIcon = () => {
    return (
      <Text
        tagName="span"
        radius={radius}
        borderColor={borderColor}
        borderStyle={borderStyle}
        borderWidth={checkedState ? '0/6' : borderWidth}
        css={css.control(size)}
      >
        {checkedState && (
          <Fragment>
            <Text color={iconActiveColor} nightModeBlacklist="color" tagName="span" css={css.icon}>
              {Icon || defaultIconMapping[size]}
            </Text>
            <View css={css.bgIcon} backgroundColor={activeColor} />
          </Fragment>
        )}
      </Text>
    );
  };

  return (
    <Text tagName="label" css={css.container(disabled, size)}>
      <Text tagName="span" css={css.innerWrap}>
        {_renderCheckboxNative()}
        {_renderCheckboxIcon()}
      </Text>
      {!!children && (
        <Text css={css.text} tagName="span">
          {children}
        </Text>
      )}
    </Text>
  );
};

Checkbox.Loading = CheckboxLoading;

export default memoization(Checkbox);
