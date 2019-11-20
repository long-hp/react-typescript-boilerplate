import React, { Component } from 'react';

interface Props {
  title: string;
  text?: string;
}

interface State {
  count: number;
}

export default class Test extends Component<Props, State> {
  static defaultProps: Props = {
    title: 'aaa',
  };

  state: State = {
    count: 0,
  };

  render() {
    const { text } = this.props;
    return (
      <div>
        {this.props.title}
        {text}
      </div>
    );
  }
}
