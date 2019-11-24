import React, { Component } from 'react';

interface Props {
  children: React.ReactNode;
  className: string;
  style: React.CSSProperties;
}

type DefaultProps = Pick<Props, 'style' | 'className'>;

export default class Button extends Component<Props> {
  static defaultProps: DefaultProps = {
    style: {},
    className: '',
  };

  render() {
    const { children, className, style } = this.props;
    return (
      <div className={className} style={style}>
        <button>{children}</button>
      </div>
    );
  }
}
