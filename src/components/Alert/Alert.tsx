import React, { forwardRef, ReactNode } from 'react';
import { LineAwesome, LineAwesomeName, Text, View, withStyles, WithStylesProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './Alert.module.scss';

export interface AlertProps extends WithStylesProps {
  /** Bật tắt nút ( X ) */
  closable?: boolean;
  /** Đoạn text mô tả */
  description?: string;
  /** Đoạn text size to giống title */
  message: string;
  /** Bật tắt icon phía bên trái */
  showIcon?: boolean;
  /** Bật tắt border cho component */
  disableBorder?: boolean;
  /** Chọn kiểu alert */
  type?: 'success' | 'info' | 'warning' | 'danger';
  /** Chọn kích thước */
  size?: 'small' | 'medium' | 'large';
  /** Render Icon */
  Icon?: ReactNode;
  /** Bấm nút close */
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
    { closable = true, description, disableBorder, message, className, showIcon = true, type = 'info', size = 'medium', Icon, onClose, ...rest },
    ref,
  ) => {
    const sizeClass = styles[size];
    const disableBorderClass = disableBorder ? styles.disableBorder : '';
    const closableClass = closable ? styles.enableClose : '';
    const showIconClass = showIcon ? styles.showIcon : '';
    const containerClass = classNames(sizeClass, disableBorderClass, closableClass, showIconClass, styles.container, className);
    const iconName = getIconName(type);

    const renderAlertIcon = () => {
      if (!showIcon) {
        return null;
      }
      if (Icon) {
        return Icon;
      }
      return <LineAwesome className={styles.icon} color={type} tachyons={['absolute', 'left-1', 'pointer']} name={iconName} />;
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
      <View {...rest} ref={ref} className={containerClass} borderColor={type} borderWidth="1/6" borderStyle="solid">
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

const Alert = withStyles<HTMLElement, AlertProps>(AlertComponent);

export default Alert;
