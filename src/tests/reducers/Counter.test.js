import reducer from '../../reducers/Counter';
import * as actions from '../../actions/Counter';

describe('Counter Reducer', () => {
  [
    {
      actionType: 'INCREASE_COUNT',
      updatedStore: { count: 1 }
    },
    {
      actionType: 'DECREASE_COUNT',
      updatedStore: { count: -1 }
    },
    {
      actionType: 'RESET_COUNT',
      updatedStore: { count: 0 }
    },
    {
      actionType: 'SET_COUNT',
      payload: 10,
      updatedStore: { count: 10 }
    }
  ].forEach(({ actionType, payload, updatedStore}) => {
    it(`Should handle ${actionType}`, () => {

      const initialStore = { count: 0 };

      const countAction = {
        type: actions[actionType],
        payload
      };

      expect(reducer(initialStore, countAction)).toEqual(updatedStore);
    });
  });
});
