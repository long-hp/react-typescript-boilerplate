import React, { ReactNode, useState, useEffect } from 'react';
import { ActivityIndicator, View, ColorNames, Size, WithStylesProps, WithTachyonsProps, withTachyons } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './Switch.module.scss';

export interface SwitchProps extends WithTachyonsProps, Pick<WithStylesProps, 'nightModeBlacklist'> {
  /** status active của component */
  checked?: boolean;
  /** default status active cuả component */
  defaultChecked?: boolean;
  /** children của khi active */
  checkedChildren?: ReactNode;
  /** children của khi unactive */
  unCheckedChildren?: ReactNode;
  /** #### Khi bật disabled thì nút mờ đi và không thể thực hiện event */
  disabled?: boolean;
  /** #### Khi bật loading thì nút sẽ ở trạng thái loading và không thể thực hiện event */
  loading?: boolean;
  /** Kích thước component */
  size?: Size;
  /** sự kiện onChange click vào component */
  onChange?: ({ checked, event }: { checked: boolean; event: React.MouseEvent<HTMLElement, MouseEvent> }) => void;
}

const SwitchComponent = ({
  checked,
  defaultChecked = false,
  checkedChildren,
  unCheckedChildren,
  disabled = false,
  loading = false,
  size = 'medium',
  onChange,
  className,
  nightModeBlacklist,
  ...rest
}: SwitchProps) => {
  const [checkedState, setCheckedState] = useState(defaultChecked);
  const containercheckedClass = checkedState ? styles.checked : '';
  const disableClass = disabled ? styles.disable : '';
  const sizeClass = styles[size];

  let loadingSize = 9;
  if (size === 'extra-small') loadingSize = 8;
  if (size === 'small') loadingSize = 10;
  if (size === 'medium') loadingSize = 12;
  if (size === 'large') loadingSize = 14;

  const containerBgColor: ColorNames = checkedState ? 'primary' : 'gray4';

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (loading || disabled) {
      return;
    }
    setCheckedState(!checkedState);
    onChange?.({ checked: !checkedState, event });
  };

  const renderInnerContent = () => {
    if (!checkedChildren && !unCheckedChildren) {
      return null;
    }
    const innerClass = checkedState ? styles.innerChecked : styles.innerUnChecked;
    const innerContent = checkedState ? checkedChildren : unCheckedChildren;

    return (
      <View color="light" className={classNames(styles.inner, innerClass)} nightModeBlacklist={nightModeBlacklist}>
        {innerContent}
      </View>
    );
  };

  useEffect(() => {
    setCheckedState(!!checked);
  }, [checked]);

  return (
    <View
      {...rest}
      backgroundColor={containerBgColor}
      className={classNames(styles.container, containercheckedClass, disableClass, sizeClass, className)}
      onClick={handleClick}
      nightModeBlacklist={nightModeBlacklist}
    >
      {renderInnerContent()}
      <View className={classNames(styles.handle)} backgroundColor="light" color="gray7" nightModeBlacklist={nightModeBlacklist}>
        {loading && <ActivityIndicator size={loadingSize} className={styles.handleLoadingIcon} nightModeBlacklist={nightModeBlacklist} />}
      </View>
    </View>
  );
};

const Switch = withTachyons<HTMLElement, SwitchProps>(SwitchComponent);

export default Switch;
