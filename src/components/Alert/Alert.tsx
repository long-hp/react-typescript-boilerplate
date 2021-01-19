import React, { forwardRef, ReactNode } from 'react';
import { LineAwesome, LineAwesomeName, Text, View, ViewProps } from 'wiloke-react-core';
import * as css from './styles';

export type AlertType = 'success' | 'info' | 'warning' | 'danger';
export interface AlertProps extends Omit<ViewProps, 'borderColor' | 'borderStyle'> {
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
  ({ closable = true, description, message, showIcon = true, type = 'info', size = 'medium', Icon, onClose, borderWidth = 1, ...rest }, ref) => {
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
      return <LineAwesome css={css.icon(size)} color={type} name={iconNameMapping[type]} />;
    };

    const renderClose = () => {
      if (!closable) {
        return null;
      }
      return (
        <LineAwesome
          css={css.close}
          colorHover="gray9"
          color="gray7"
          size={16}
          name="times"
          onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => onClose?.(event)}
        />
      );
    };

    return (
      <View
        {...rest}
        ref={ref}
        css={[css.container, css.enableClose(closable), css.showIcon(size, showIcon)]}
        borderWidth={borderWidth}
        borderColor={type}
      >
        {renderAlertIcon()}
        <Text css={css.message(size)} color="gray9">
          {message}
        </Text>
        {description && (
          <Text css={css.description(size)} color="gray7">
            {description}
          </Text>
        )}
        {renderClose()}
        <View css={css.bgOverlay} backgroundColor={type} />
      </View>
    );
  },
);

export default Alert;
