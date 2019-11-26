import React, { Component } from 'react';
import { VideoProps } from 'containers/VideoContainer/VideoContainer';

export default class Video extends Component<VideoProps> {
  _handleClick = () => {
    const { getVideo } = this.props;
    getVideo(
      'https://cors-anywhere.herokuapp.com/https://noembed.com/embed?url=https://www.youtube.com/watch?v=TmDXAOvkqzU',
    );
  };

  _renderContent = () => {
    const { video } = this.props;
    switch (video.status) {
      case 'loading':
        return <div>loading...</div>;
      case 'success':
        return <div>{JSON.stringify(video.data)}</div>;
      case 'failed':
        return <div>{video.message}</div>;
      default:
        return null;
    }
  };

  render() {
    return (
      <div>
        <h2>Video</h2>
        {this._renderContent()}
        <button type="button" onClick={this._handleClick}>
          Get video
        </button>
      </div>
    );
  }
}
