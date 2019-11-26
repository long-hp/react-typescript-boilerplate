import { connect } from 'react-redux';
import PostTest from 'components/molecules/PostTest/PostTest';
import { getPost } from 'actions/actionGetPost/actionGetPost';

function mapStateToProps({ postTest }: AppState) {
  return {
    postTest,
  };
}

const mapDispatchToProps = {
  getPost,
};

export type PostTestProps = Connect<typeof mapStateToProps, typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(PostTest);
