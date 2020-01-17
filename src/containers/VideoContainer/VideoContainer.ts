import { connect } from 'react-redux';
import { getVideo } from 'store/actions/actionVideo/actionVideo';
import Video from 'components/Video/Video';

function mapStateToProps({ video }: AppState) {
  return {
    video,
  };
}

const mapDispatchToProps = {
  getVideoRequest: getVideo.request,
};

export type VideoProps = Connect<typeof mapStateToProps, typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Video);
