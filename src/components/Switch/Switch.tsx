import React, { memo, ReactNode, useEffect, useState } from 'react';
import { ActivityIndicator, ColorNames, Size, View, ViewProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import * as css from './styles';

export interface SwitchProps extends Pick<ViewProps, 'nightModeBlacklist' | 'radius' | 'className'> {
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
  renderAfter?: (value: boolean) => ReactNode;
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
  renderAfter,
  className,
  nightModeBlacklist,
  ...rest
}: SwitchProps) => {
  const [checkedState, setCheckedState] = useState(defaultChecked);
  const loadingSize = getLoadingSize(size);

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

    const innerContent = checkedState ? CheckedChildren : UnCheckedChildren;

    return (
      <View color="light" className="Inner-container" css={css.inner(size)} nightModeBlacklist={nightModeBlacklist}>
        {innerContent}
      </View>
    );
  };

  const _renderLoading = () => {
    return (
      <View
        className="Hanlde-container"
        css={css.handle(size, checkedState)}
        backgroundColor="light"
        color="gray7"
        nightModeBlacklist={nightModeBlacklist}
      >
        {loading && <ActivityIndicator size={loadingSize} className="handleLoadingIcon" nightModeBlacklist={nightModeBlacklist} />}
      </View>
    );
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
        className={classNames(className, 'Switch-container')}
        css={[css.container(size), css.disabled(disabled)]}
        onClick={_handleClick}
        nightModeBlacklist={nightModeBlacklist}
      >
        {_renderInnerContent()}
        {_renderLoading()}
      </View>
      {renderAfter?.(checkedState)}
    </>
  );
};

export default memo(Switch);
