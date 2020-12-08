import React, { FC, InputHTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { BorderStyle, BorderWidth, ColorNames, LineAwesome, Radius, Size, Text } from 'wiloke-react-core';
import { classNames, memoization } from 'wiloke-react-core/utils';
import styles from './Checkbox.module.scss';
import CheckboxLoading from './CheckboxLoading';

export interface CheckboxProps {
  /** Kich thuoc checkbox */
  size?: Size;
  /** Trang thai cua checkbox */
  checked?: boolean;
  /** Trang thai default cua checkbox */
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
  /** Su kien onChange */
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
}

const Checkbox: FC<CheckboxProps> & {
  Loading: typeof CheckboxLoading;
} = ({
  size = 'medium',
  checked,
  defaultChecked = false,
  disabled = false,
  children,
  className,
  Icon,
  borderColor = 'gray5',
  radius = 'round',
  borderWidth = '2/6',
  borderStyle = 'solid',
  activeColor = 'primary',
  iconActiveColor = 'light',
  onChange,
}) => {
  const [checkedState, setCheckedState] = useState(defaultChecked);
  const checkedClass = checkedState ? styles.checked : '';
  const sizeClass = styles[size];
  const disabledClass = disabled ? styles.disabled : '';
  const classes = classNames(styles.container, disabledClass, sizeClass, className);

  const defaultIconMapping: Record<Size, ReactNode> = {
    'extra-small': <LineAwesome name="check" size={12} />,
    small: <LineAwesome name="check" size={16} />,
    medium: <LineAwesome name="check" size={20} />,
    large: <LineAwesome name="check" size={24} />,
  };

  const _handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) {
      return;
    }
    setCheckedState(!checkedState);
    onChange?.(e);
  };

  useEffect(() => {
    if (typeof checked !== 'undefined') {
      setCheckedState(!!checked);
    }
  }, [checked]);

  return (
    <Text tagName="label" className={classes} tachyons={['inline-flex', 'items-center']}>
      <Text tagName="span" className={classNames(styles.checkbox, sizeClass, checkedClass, disabledClass)}>
        <input disabled={disabled} className={styles.checkboxInput} checked={checkedState} type="checkbox" onChange={_handleChange} />
        <Text tagName="span" radius={radius} borderColor={borderColor} borderStyle={borderStyle} borderWidth={borderWidth} className={styles.control}>
          {checkedState && (
            <Text className={styles.icon} color={iconActiveColor} nightModeBlacklist={['color']} tagName="span">
              {Icon || defaultIconMapping[size]}
            </Text>
          )}
          <Text className={styles.background} backgroundColor={checkedState ? activeColor : 'light'}></Text>
        </Text>
      </Text>
      {children && <Text tagName="span">{children}</Text>}
    </Text>
  );
};

Checkbox.Loading = CheckboxLoading;

export default memoization(Checkbox);
