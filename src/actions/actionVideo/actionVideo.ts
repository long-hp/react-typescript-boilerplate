import { Video } from 'models/Video';
import { createAction } from 'utils/functions/reduxActions';

export interface VideoPending {
  endpoint: string;
}

export interface VideoSuccess {
  data: Video;
}

export interface VideoFailed {
  message: string;
}

export const getVideo = createAction('@getVideo', (endpoint: string) => ({
  endpoint,
}));

export const getVideoSuccess = createAction('@getVideoSuccess', (data: Video) => ({
  data,
}));

export const getVideoFailed = createAction('@getVideoFailed', (message: string) => ({
  message,
}));
