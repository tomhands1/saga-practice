import reducer from '../../reducers/RandomPerson';
import * as actions from '../../actions/RandomPerson';

describe('Random Person Reducer', () => {
  [
    {
      actionType: 'RECEIVED_RANDOM_PERSON',
      payload: 'newRandomPerson',
      initialStore: { newPerson: {results: null}, people: [] },
      updatedStore: { newPerson: 'newRandomPerson', people: [] }
    },
    {
      actionType: 'RECEIVED_ADD_PERSON',
      payload: 'newRandomPerson',
      initialStore: { newPerson: {results: null}, people: [] },
      updatedStore: { newPerson: {results: null},people: ['newRandomPerson'] }
    },
    {
      actionType: 'RECEIVED_REMOVE_PERSON',
      initialStore: { newPerson: {results: null}, people: ['person1','person2'] },
      updatedStore: { newPerson: {results: null}, people: ['person2'] }
    }
  ].forEach(({ actionType, payload, initialStore, updatedStore}) => {
    it(`Should handle ${actionType}`, () => {

      const randomPersonAction = {
        type: actions[actionType],
        payload
      };

      expect(reducer(initialStore, randomPersonAction)).toEqual(updatedStore);
    });
  });
});