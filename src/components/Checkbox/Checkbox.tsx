import React, { FC, InputHTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { ColorNames, LineAwesome, Size, Text } from 'wiloke-react-core';
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
  color?: ColorNames;
  /** Color icon ben trong checkbox */
  colorIcon?: ColorNames;
  /** Classname */
  className?: string;
  /** Icon ben trong checkbox */
  Icon?: ReactNode;
  /** Su kien onChange */
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
}

const Checkbox: FC<CheckboxProps> & {
  Loading: typeof CheckboxLoading;
} = ({
  size = 'extra-small',
  checked,
  defaultChecked = false,
  disabled = false,
  children,
  className,
  Icon,
  color = 'behance',
  colorIcon = 'light',
  onChange,
  ...rest
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
    <Text {...rest} tagName="label" className={classes} tachyons={['inline-flex', 'items-center']}>
      <Text tagName="span" className={classNames(styles.checkbox, sizeClass, checkedClass, disabledClass)}>
        <input disabled={disabled} className={styles.checkboxInput} checked={checkedState} type="checkbox" onChange={_handleChange} />
        <Text tagName="span" backgroundColor={checkedState ? color : 'light'} className={styles.control}>
          {checkedState && (
            <Text className={styles.icon} color={colorIcon} tagName="span">
              {Icon || defaultIconMapping[size]}
            </Text>
          )}
        </Text>
      </Text>
      {children && <Text tagName="span">{children}</Text>}
    </Text>
  );
};

Checkbox.Loading = CheckboxLoading;

export default memoization(Checkbox);
