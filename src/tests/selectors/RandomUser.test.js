import configureMockStore from 'redux-mock-store';
import { getRandomPerson } from '../../selectors/RandomUser';

const mockStore = configureMockStore();

describe('RandomUser selectors', () => {
  const results = 'TestUser';

  const store= mockStore({
    randomPerson: {
      newPerson: {
        results
      }
    }
  });

  let state;

  beforeEach(() => {
    state = store.getState();
  });

  it('getRandomPerson should return the random person currently in store', () => {
    expect(getRandomPerson(state)).toEqual(results);
  });
});