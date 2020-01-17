import React, { Component, CSSProperties, ReactNode } from 'react';

export interface GridGenericProps<T> {
  data: T[];
  containerClassName: string;
  containerStyle: CSSProperties;
  renderItem: (item: T, index: number) => ReactNode;
}

interface DefaultDataItem {
  id: string;
}

type DefaultProps = Pick<GridGenericProps<unknown>, 'containerClassName' | 'containerStyle'>;

export default class GridGeneric<T extends DefaultDataItem> extends Component<GridGenericProps<T>> {
  static defaultProps: DefaultProps = {
    containerClassName: '',
    containerStyle: {},
  };

  _renderItem = (item: T, index: number) => {
    const { renderItem } = this.props;
    return <div key={item.id}>{renderItem(item, index)}</div>;
  };

  render() {
    const { data, containerStyle, containerClassName } = this.props;
    return (
      <div style={containerStyle} className={containerClassName}>
        {data.length && data.map(this._renderItem)}
      </div>
    );
  }
}
