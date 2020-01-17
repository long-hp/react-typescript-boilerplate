import { getVideo } from 'store/actions/actionVideo/actionVideo';
import { Video } from 'models/Video';
import { createReducer, handleAction, ActionTypes } from 'utils/functions/reduxActions';

type VideoAction = ActionTypes<typeof getVideo>;

type VideoState = ReducerState<Video>;

const initialState: VideoState = {
  data: {},
};

const video = createReducer<VideoState, VideoAction>(initialState, [
  handleAction('@getVideoRequest', state => ({
    ...state,
    status: 'loading',
  })),
  handleAction('@getVideoSuccess', (state, action) => ({
    ...state,
    status: 'success',
    data: action.payload.data,
  })),
  handleAction('@getVideoFailure', (state, action) => ({
    ...state,
    status: 'failure',
    message: action.payload.message,
  })),
]);

export default video;
