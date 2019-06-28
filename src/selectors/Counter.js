const root = state => state.counter;

export const getCount = state => root(state).count;