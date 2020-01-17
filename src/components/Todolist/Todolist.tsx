import React, { Component } from 'react';
import { TodolistProps } from 'containers/TodolistContainer/TodolistContainer';

export default class Todolist extends Component<TodolistProps> {
  _handleTodolistSuccessExample = () => {
    const { getTodolistRequest } = this.props;
    getTodolistRequest('todolist');
  };

  _handleTodolistFailedExample = () => {
    const { getTodolistRequest } = this.props;
    getTodolistRequest('todolist_error');
  };

  _renderContent = () => {
    const { todolist } = this.props;
    switch (todolist.status) {
      case 'loading':
        return <div>Loading...</div>;
      case 'success':
        return <div>{JSON.stringify(todolist.data)}</div>;
      case 'failure':
        return <div>{todolist.message}</div>;
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <h2>Todolist</h2>
        <button type="button" onClick={this._handleTodolistSuccessExample}>
          Get todolist success
        </button>
        <button type="button" onClick={this._handleTodolistFailedExample}>
          Get todolist failed example
        </button>
        {this._renderContent()}
      </div>
    );
  }
}
