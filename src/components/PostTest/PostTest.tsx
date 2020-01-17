import React, { Component } from 'react';
import { PostTestProps } from 'containers/PostTestContainer/PostTestContainer';

export default class PostTest extends Component<PostTestProps> {
  _handleClick = () => {
    const { getPostRequest } = this.props;
    getPostRequest('articles');
  };

  _renderContent = () => {
    const { postTest } = this.props;
    switch (postTest.status) {
      case 'loading':
        return <div>Loading...</div>;
      case 'success':
        return <div>{JSON.stringify(postTest.data.map(item => item.body))}</div>;
      case 'failure':
        return <div>{postTest.message}</div>;
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <h2>Post test</h2>
        {this._renderContent()}
        <button type="button" onClick={this._handleClick}>
          Get post
        </button>
      </div>
    );
  }
}
