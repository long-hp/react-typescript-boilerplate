import React, { Component } from 'react';
import { TodolistProps } from 'containers/TodolistContainer/TodolistContainer';

export default class Todolist extends Component<TodolistProps> {
  _handleTodolistSuccessExample = () => {
    const { getTodolist } = this.props;
    getTodolist('todolist');
  };

  _handleTodolistFailedExample = () => {
    const { getTodolist } = this.props;
    getTodolist('todolist_error');
  };

  _renderContent = () => {
    const { todolist } = this.props;
    switch (todolist.status) {
      case 'loading':
        return <div>Loading...</div>;
      case 'success':
        return <div>{JSON.stringify(todolist.data)}</div>;
      case 'failed':
        return <div>{todolist.message}</div>;
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <h2>Todolist</h2>
        {this._renderContent()}
        <button type="button" onClick={this._handleTodolistSuccessExample}>
          Get todolist success
        </button>
        <button type="button" onClick={this._handleTodolistFailedExample}>
          Get todolist failed example
        </button>
      </div>
    );
  }
}
