import React, { forwardRef, ReactNode, CSSProperties } from 'react';
import { LineAwesome, LineAwesomeName, Text, View, withTachyons, WithTachyonsProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './Alert.module.scss';

export interface AlertProps extends WithTachyonsProps {
  /** #### Bật tắt nút ( X ) */
  closable?: boolean;
  /** #### Đoạn text mô tả */
  description?: string;
  /** #### Đoạn text size to giống title */
  message: string;
  /** #### Bật tắt icon phía bên trái */
  showIcon?: boolean;
  /** #### Bật tắt border cho component */
  disableBorder?: boolean;
  /** #### Chọn kiểu alert */
  type?: 'success' | 'info' | 'warning' | 'danger';
  /** #### Chọn kích thước */
  size?: 'small' | 'medium' | 'large';
  /** #### Render Icon */
  renderIcon?: ReactNode;
  /** #### Chỉnh sửa border radius */
  radius?: 'square' | 'round' | 'pill' | number;
  /** #### Bấm nút close */
  onClose?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const getIconName = (type: string): LineAwesomeName => {
  switch (type) {
    case 'info':
      return 'exclamation-circle';
    case 'success':
      return 'check-circle-o';
    case 'warning':
      return 'exclamation-triangle';
    case 'danger':
      return 'times-circle';

    default:
      return 'info';
  }
};

const AlertComponent = forwardRef<HTMLElement, AlertProps>(
  (
    {
      closable = true,
      description,
      disableBorder,
      radius = 'square',
      message,
      className,
      showIcon = true,
      type = 'info',
      size = 'medium',
      renderIcon,
      onClose,
      ...rest
    },
    ref,
  ) => {
    const sizeClass = styles[size];
    const radiusClass = typeof radius === 'string' ? styles[radius] : '';
    const disableBorderClass = disableBorder ? styles.disableBorder : '';
    const closableClass = closable ? styles.enableClose : '';
    const showIconClass = showIcon ? styles.showIcon : '';
    const containerClass = classNames(sizeClass, radiusClass, disableBorderClass, closableClass, showIconClass, styles.container, className);

    const radiusStyle: CSSProperties = typeof radius === 'number' ? { borderRadius: radius } : {};
    const iconName = getIconName(type);

    const renderAlertIcon = () => {
      if (!showIcon) {
        return null;
      }
      if (renderIcon) {
        return renderIcon;
      }
      return <LineAwesome className={styles.icon} backgroundColor={type} tachyons={['absolute', 'left-1', 'pointer']} name={iconName} />;
    };

    const renderClose = () => {
      if (!closable) {
        return null;
      }
      return (
        <LineAwesome
          colorHover="gray9"
          size={16}
          tachyons={['absolute', 'top-1', 'right-1', 'pointer']}
          name="times"
          onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => onClose?.(event)}
          color="gray7"
        />
      );
    };

    return (
      <View {...rest} ref={ref} className={containerClass} backgroundColor={type} style={radiusStyle}>
        {renderAlertIcon()}
        <Text className={styles.message} color="gray9">
          {message}
        </Text>
        {description && (
          <Text className={styles.description} color="gray7">
            {description}
          </Text>
        )}
        {renderClose()}
        <View tachyons={['absolute', 'absolute--fill']} className={styles.bgOverlay} backgroundColor={type} />
      </View>
    );
  },
);

const Alert = withTachyons<HTMLElement, AlertProps>(AlertComponent);

export default Alert;
