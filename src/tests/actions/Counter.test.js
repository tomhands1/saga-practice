import * as actions from '../../actions/Counter';

describe('Counter actions', () => {
  [
    {
      action: actions.increaseCount,
      type: actions.INCREASE_COUNT
    },
    {
      action: actions.decreaseCount,
      type: actions.DECREASE_COUNT
    },
    {
      action: actions.increaseCountAsync,
      type: actions.INCREASE_COUNT_ASYNC
    },
    {
      action: actions.decreaseCountAsync,
      type: actions.DECREASE_COUNT_ASYNC
    },
    {
      action: actions.resetCount,
      type: actions.RESET_COUNT
    }
  ].forEach(({ action, type }) => {
    it(`${action} should return the ${type} action type`, () => {
      
      const expectedAction = {
        type: actions[type]
      };

      expect(action()).toEqual(expectedAction);
    });
  });
});