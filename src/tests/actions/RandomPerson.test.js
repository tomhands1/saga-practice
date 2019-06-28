import * as actions from '../../actions/RandomPerson';

describe('Random Person actions', () => {
  [
    {
      action: actions.randomPersonRequest,
      type: actions.REQUEST_RANDOM_PERSON
    },
    {
      action: actions.randomPersonReceived,
      type: actions.RECEIVED_RANDOM_PERSON
    },
    {
      action: actions.addPersonRequest,
      type: actions.REQUEST_ADD_PERSON
    },
    {
      action: actions.addPersonReceived,
      type: actions.RECEIVED_ADD_PERSON
    },
    {
      action: actions.removeFirstPersonRequest,
      type: actions.REQUEST_REMOVE_PERSON
    },
    {
      action: actions.removeFirstPersonReceived,
      type: actions.RECEIVED_REMOVE_PERSON
    }
  ].forEach(({ action, type, payload }) => {
    it(`${action} should return the ${type} action type`, () => {
      
      const expectedAction = {
        type: actions[type],
        payload
      };

      expect(action()).toEqual(expectedAction);
    });
  });
});