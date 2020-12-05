import React, { ReactNode, useState, useEffect, memo } from 'react';
import { ActivityIndicator, View, Size, WithStylesProps, WithTachyonsProps, withTachyons } from 'wiloke-react-core';
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
  /** Khi bật disabled thì nút mờ đi và không thể thực hiện event */
  disabled?: boolean;
  /** Khi bật loading thì nút sẽ ở trạng thái loading và không thể thực hiện event */
  loading?: boolean;
  /** Kích thước component */
  size?: Size;
  /** sự kiện onChange click vào component */
  onChange?: ({ checked, event }: { checked: boolean; event: React.MouseEvent<HTMLElement, MouseEvent> }) => void;
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
  const containerCheckedClassName = checkedState ? styles.checked : '';
  const disableClassName = disabled ? styles.disable : '';
  const sizeClassName = styles[size];
  const loadingSize = getLoadingSize(size);
  const containerClassName = classNames(styles.container, containerCheckedClassName, disableClassName, sizeClassName, className);

  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (loading || disabled) {
      return;
    }
    setCheckedState(!checkedState);
    onChange?.({ checked: !checkedState, event });
  };

  const _renderInnerContent = () => {
    if (!checkedChildren && !unCheckedChildren) {
      return null;
    }

    const innerCheckedClassName = checkedState ? styles.innerChecked : styles.innerUnChecked;
    const innerContent = checkedState ? checkedChildren : unCheckedChildren;

    return (
      <View color="light" className={classNames(styles.inner, innerCheckedClassName)} nightModeBlacklist={nightModeBlacklist}>
        {innerContent}
      </View>
    );
  };

  const _renderLoading = () => {
    return (
      <View className={classNames(styles.handle)} backgroundColor="light" color="gray7" nightModeBlacklist={nightModeBlacklist}>
        {loading && <ActivityIndicator size={loadingSize} className={styles.handleLoadingIcon} nightModeBlacklist={nightModeBlacklist} />}
      </View>
    );
  };

  useEffect(() => {
    setCheckedState(!!checked);
  }, [checked]);

  return (
    <View
      {...rest}
      backgroundColor={checkedState ? 'behance' : 'gray5'}
      className={containerClassName}
      onClick={handleClick}
      nightModeBlacklist={nightModeBlacklist}
    >
      {_renderInnerContent()}
      {_renderLoading()}
    </View>
  );
};

const Switch = withTachyons<HTMLElement, SwitchProps>(SwitchComponent);

export default memo(Switch);
