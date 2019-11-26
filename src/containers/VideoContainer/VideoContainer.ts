import { connect } from 'react-redux';
import { getVideo } from 'actions/actionVideo/actionVideo';
import Video from 'components/molecules/Video/Video';

function mapStateToProps({ video }: AppState) {
  return {
    video,
  };
}

const mapDispatchToProps = {
  getVideo,
};

export type VideoProps = Connect<typeof mapStateToProps, typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Video);
