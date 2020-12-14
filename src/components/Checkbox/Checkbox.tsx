import React, { FC, Fragment, InputHTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { BorderStyle, BorderWidth, ColorNames, LineAwesome, Radius, Size, Text, View } from 'wiloke-react-core';
import { classNames, memoization } from 'wiloke-react-core/utils';
import styles from './Checkbox.module.scss';
import CheckboxLoading from './CheckboxLoading';

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
  className,
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
  const sizeClassName = styles[size];
  const disabledClassName = disabled ? styles.disabled : '';
  const containerClasses = classNames(styles.container, disabledClassName, sizeClassName, className);

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
    return (
      <input
        disabled={disabled}
        className={classNames('absolute', 'absolute--fill', 'z-1', 'o-0')}
        checked={checkedState}
        type="checkbox"
        onChange={_handleChange}
      />
    );
  };

  const _renderCheckboxIcon = () => {
    return (
      <Text
        tagName="span"
        radius={radius}
        borderColor={borderColor}
        borderStyle={borderStyle}
        borderWidth={checkedState ? '0/6' : borderWidth}
        tachyons={['relative', 'top-0', 'left-0', 'db', 'overflow-hidden', 'flex', 'justify-center', 'items-center']}
        className={styles.control}
      >
        {checkedState && (
          <Fragment>
            <Text
              color={iconActiveColor}
              nightModeBlacklist="color"
              tagName="span"
              tachyons={['relative', 'z-1', 'flex', 'justify-center', 'items-center']}
            >
              {Icon || defaultIconMapping[size]}
            </Text>
            <View tachyons={['absolute', 'absolute--fill']} backgroundColor={activeColor} />
          </Fragment>
        )}
      </Text>
    );
  };

  return (
    <Text tagName="label" className={containerClasses} tachyons="pointer">
      <Text tagName="span" tachyons={['relative', 'dib', 'v-mid']} className={classNames(styles.checkbox, sizeClassName, disabledClassName)}>
        {_renderCheckboxNative()}
        {_renderCheckboxIcon()}
      </Text>
      {!!children && (
        <Text tachyons={['ml2', 'dib', 'v-mid']} tagName="span">
          {children}
        </Text>
      )}
    </Text>
  );
};

Checkbox.Loading = CheckboxLoading;

export default memoization(Checkbox);
