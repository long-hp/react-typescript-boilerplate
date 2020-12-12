import React, { forwardRef, ReactNode } from 'react';
import { LineAwesome, LineAwesomeName, Text, View, ViewProps } from 'wiloke-react-core';
import { classNames } from 'wiloke-react-core/utils';
import styles from './Alert.module.scss';

export type AlertType = 'success' | 'info' | 'warning' | 'danger';
export interface AlertProps extends Omit<ViewProps, 'tachyons' | 'borderColor' | 'borderStyle'> {
  /** Bật tắt nút ( X ) */
  closable?: boolean;
  /** Đoạn text mô tả */
  description?: string;
  /** Đoạn text size to giống title */
  message: string;
  /** Bật tắt icon phía bên trái */
  showIcon?: boolean;
  /** Chọn kiểu alert */
  type?: AlertType;
  /** Chọn kích thước */
  size?: 'small' | 'medium' | 'large';
  /** Render Icon */
  Icon?: ReactNode;
  /** Bấm nút close */
  onClose?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const Alert = forwardRef<HTMLElement, AlertProps>(
  (
    {
      closable = true,
      description,
      message,
      className,
      showIcon = true,
      type = 'info',
      size = 'medium',
      Icon,
      onClose,
      borderWidth = '1/6',
      ...rest
    },
    ref,
  ) => {
    const sizeClassName = styles[size];
    const closableClassName = closable ? styles.enableClose : '';
    const showIconClassName = showIcon ? styles.showIcon : '';
    const containerClassName = classNames(sizeClassName, closableClassName, showIconClassName, styles.container, className);

    const iconNameMapping: Record<AlertType, LineAwesomeName> = {
      info: 'exclamation-circle',
      success: 'check-circle-o',
      warning: 'exclamation-triangle',
      danger: 'times-circle',
    };

    const renderAlertIcon = () => {
      if (!showIcon) {
        return null;
      }
      if (Icon) {
        return Icon;
      }
      return <LineAwesome className={styles.icon} color={type} tachyons={['absolute', 'left-1', 'pointer']} name={iconNameMapping[type]} />;
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
      <View
        {...rest}
        ref={ref}
        className={containerClassName}
        tachyons={['relative', 'overflow-hidden']}
        borderWidth={borderWidth}
        borderColor={type}
        borderStyle="solid"
      >
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

export default Alert;
