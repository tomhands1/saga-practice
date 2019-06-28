import configureMockStore from 'redux-mock-store';
import { getCount } from '../../selectors/Counter';

const mockStore = configureMockStore();

describe('Count selectors', () => {
  const count = 20;

  const store= mockStore({
    counter: {
      count
    }
  });

  let state;

  beforeEach(() => {
    state = store.getState();
  });

  it('getCount should return the value of count currently in store', () => {
    expect(getCount(state)).toEqual(count);
  });
});