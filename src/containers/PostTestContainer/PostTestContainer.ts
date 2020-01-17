import { connect } from 'react-redux';
import PostTest from 'components/PostTest/PostTest';
import { getPostRequest } from 'store/actions/actionGetPost/actionGetPost';

function mapStateToProps({ postTest }: AppState) {
  return {
    postTest,
  };
}

const mapDispatchToProps = {
  getPostRequest,
};

export type PostTestProps = Connect<typeof mapStateToProps, typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(PostTest);
