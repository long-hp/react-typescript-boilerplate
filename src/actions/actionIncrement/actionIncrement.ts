export interface IncrementPending {
  step: number;
}

interface IncrementSuccess {
  step: number;
}

export type IncrementPayload = IncrementPending & IncrementSuccess;

const actionIncrement = {
  increment(step: number = 0): Action<IncrementPending> {
    return {
      type: 'INCREMENT',
      payload: {
        step,
      },
    };
  },
  incrementSuccess(step: number): Action<IncrementSuccess> {
    return {
      type: 'INCREMENT_SUCCESS',
      payload: {
        step,
      },
    };
  },
};

export default actionIncrement;
