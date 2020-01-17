import { Video } from 'models/Video';
import { createAsyncAction } from 'utils/functions/reduxActions';

export const getVideo = createAsyncAction(['@getVideoRequest', '@getVideoSuccess', '@getVideoFailure'])<
  { endpoint: string },
  { data: Video },
  { message: string }
>();
