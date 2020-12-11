import React, { memo, ReactNode, useEffect, useState } from 'react';
import { ActivityIndicator, ColorNames, Size, View, ViewProps, WithTachyonsProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './Switch.module.scss';

export interface SwitchProps extends WithTachyonsProps, Pick<ViewProps, 'nightModeBlacklist' | 'radius'> {
  /** status active của component */
  checked?: boolean;
  /** default status active cuả component */
  defaultChecked?: boolean;
  /** children của khi active */
  CheckedChildren?: ReactNode;
  /** children của khi unactive */
  UnCheckedChildren?: ReactNode;
  /** Khi bật disabled thì nút mờ đi và không thể thực hiện event */
  disabled?: boolean;
  /** Khi bật loading thì nút sẽ ở trạng thái loading và không thể thực hiện event */
  loading?: boolean;
  /** Kích thước component */
  size?: Size;
  /** Background color khi active */
  activeColor?: ColorNames;
  /** Background color khi chưa active */
  inactiveColor?: ColorNames;
  /** sự kiện onChange click vào component và nhận được event */
  onChange?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /** sự kiện onChange click vào component và nhận được value */
  onValueChange?: (value: boolean) => void;
  children?: ((value: boolean) => ReactNode) | ReactNode;
}

const getLoadingSize = (size: Size) => {
  switch (size) {
    case 'large':
      return 14;
    case 'medium':
      return 12;
    case 'small':
      return 10;
    case 'extra-small':
    default:
      return 8;
  }
};

const Switch = ({
  checked = false,
  defaultChecked = false,
  CheckedChildren,
  UnCheckedChildren,
  disabled = false,
  loading = false,
  size = 'medium',
  activeColor = 'primary',
  inactiveColor = 'gray4',
  onChange,
  onValueChange,
  children,
  className,
  nightModeBlacklist,
  ...rest
}: SwitchProps) => {
  const [checkedState, setCheckedState] = useState(defaultChecked);
  const containerCheckedClassName = checkedState ? styles.checked : '';
  const disableClassName = disabled ? 'ui-disabled' : '';
  const sizeClassName = styles[size];
  const loadingSize = getLoadingSize(size);
  const containerClassName = classNames(sizeClassName, styles.container, containerCheckedClassName, disableClassName, className);

  const _handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (loading || disabled) {
      return;
    }
    setCheckedState(!checkedState);
    onChange?.(event);
    onValueChange?.(!checkedState);
  };

  const _renderInnerContent = () => {
    if (!CheckedChildren && !UnCheckedChildren) {
      return null;
    }

    const innerCheckedClassName = checkedState ? styles.innerChecked : styles.innerUnChecked;
    const innerContent = checkedState ? CheckedChildren : UnCheckedChildren;

    return (
      <View
        color="light"
        className={classNames(styles.inner, innerCheckedClassName)}
        tachyons={['tr', 'db', 'absolute', 'flex', 'ma0']}
        nightModeBlacklist={nightModeBlacklist}
      >
        {innerContent}
      </View>
    );
  };

  const _renderLoading = () => {
    return (
      <View
        className={classNames(styles.handle)}
        radius="pill"
        tachyons={['absolute', 'flex', 'justify-center', 'items-center']}
        backgroundColor="light"
        color="gray7"
        nightModeBlacklist={nightModeBlacklist}
      >
        {loading && <ActivityIndicator size={loadingSize} className={styles.handleLoadingIcon} nightModeBlacklist={nightModeBlacklist} />}
      </View>
    );
  };

  const _renderChildren = () => {
    if (typeof children === 'function') {
      return children(checkedState);
    }
    return children;
  };

  useEffect(() => {
    setCheckedState(checked || defaultChecked);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <>
      <View
        {...rest}
        backgroundColor={checkedState ? activeColor : inactiveColor}
        className={containerClassName}
        radius="pill"
        tachyons={['relative', 'dib', 'v-mid', 'pointer', 'outline-0']}
        onClick={_handleClick}
        nightModeBlacklist={nightModeBlacklist}
      >
        {_renderInnerContent()}
        {_renderLoading()}
      </View>
      {}
    </>
  );
};

export default memo(Switch);
