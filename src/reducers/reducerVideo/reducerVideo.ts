import { getVideoSuccess, getVideoFailed } from 'actions/actionVideo/actionVideo';
import { Video } from 'models/Video';
import { createReducer, handleAction } from 'utils/functions/reduxActions';

type VideoSuccessAction = ReturnType<typeof getVideoSuccess>;
type VideoFailedAction = ReturnType<typeof getVideoFailed>;
type VideoState = ReducerState<Video>;

const initialState: VideoState = {
  status: 'success',
  data: {},
  message: '',
};

const video = createReducer<VideoState>(initialState, [
  handleAction('@getVideo', state => ({
    ...state,
    status: 'loading',
  })),
  handleAction('@getVideoSuccess', (state, action: VideoSuccessAction) => ({
    ...state,
    status: 'success',
    data: action.payload.data,
  })),
  handleAction('@getVideoFailed', (state, action: VideoFailedAction) => ({
    ...state,
    status: 'failed',
    message: action.payload.message,
  })),
]);

export default video;
