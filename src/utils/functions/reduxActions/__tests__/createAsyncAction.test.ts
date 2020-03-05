import { createAsyncAction } from '../createAsyncAction';

type Endpoint = string;
type Message = string;
interface Data {
  name: string;
  email: string;
}

describe('kiểm tra createAsyncAction', () => {
  test('trường hợp đầu vào là value', () => {
    const actionTypeRequest = '@getCommentsRequest';
    const actionTypeSuccess = '@getCommentsSuccess';
    const actionTypeFailure = '@getCommentsFailure';
    const data: Data = {
      name: 'Wiloke',
      email: 'wiloke@gmail.com',
    };
    const endpoint: Endpoint = 'comments';
    const message: Message = 'Error';

    const received = {
      request: (endpoint: Endpoint) => ({
        type: actionTypeRequest,
        payload: endpoint,
      }),
      success: (data: Data) => ({
        type: actionTypeSuccess,
        payload: data,
      }),
      failure: (message: Message) => ({
        type: actionTypeFailure,
        payload: message,
      }),
    };

    const expected = createAsyncAction([actionTypeRequest, actionTypeSuccess, actionTypeFailure])<Endpoint, Data, Message>();

    expect(received.request(endpoint)).toEqual(expected.request(endpoint));
    expect(received.success(data)).toEqual(expected.success(data));
    expect(received.failure(message)).toEqual(expected.failure(message));
  });

  test('trường hợp đầu vào là object', () => {
    const actionTypeRequest = '@getCommentsRequest';
    const actionTypeSuccess = '@getCommentsSuccess';
    const actionTypeFailure = '@getCommentsFailure';
    const data: Data = {
      name: 'Wiloke',
      email: 'wiloke@gmail.com',
    };
    const endpoint: Endpoint = 'comments';
    const message: Message = 'Error';

    const received = {
      request: ({ endpoint }: { endpoint: Endpoint }) => ({
        type: actionTypeRequest,
        payload: {
          endpoint,
        },
      }),
      success: ({ endpoint, data }: { endpoint: Endpoint; data: Data }) => ({
        type: actionTypeSuccess,
        payload: {
          endpoint,
          data,
        },
      }),
      failure: ({ endpoint, message }: { endpoint: Endpoint; message: Message }) => ({
        type: actionTypeFailure,
        payload: {
          endpoint,
          message,
        },
      }),
    };

    const expected = createAsyncAction([actionTypeRequest, actionTypeSuccess, actionTypeFailure])<
      { endpoint: Endpoint },
      { endpoint: Endpoint; data: Data },
      { endpoint: Endpoint; message: Message }
    >();

    expect(received.request({ endpoint })).toEqual(expected.request({ endpoint }));
    expect(received.success({ endpoint, data })).toEqual(expected.success({ endpoint, data }));
    expect(received.failure({ endpoint, message })).toEqual(expected.failure({ endpoint, message }));
  });
});
