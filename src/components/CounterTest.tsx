import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionIncrement } from 'actions';

class CounterTest extends Component<CounterTestProps> {
  _renderContent = () => {
    const { counter } = this.props;
    const { status, data } = counter;
    switch (status) {
      case 'loading':
        return <div>Loading...</div>;
      case 'success':
        return <div>{data.counter}</div>;
      default:
        return null;
    }
  };

  render() {
    const { increment } = this.props;
    return (
      <div>
        <button type="button">-</button>
        {this._renderContent()}
        <button type="button" onClick={() => increment(2)}>
          +
        </button>
      </div>
    );
  }
}

function mapStateToProps(state: AppState) {
  return {
    counter: state.counter,
  };
}

const mapDispatchToProps = {
  increment: actionIncrement.increment,
};

type CounterTestProps = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(CounterTest);
