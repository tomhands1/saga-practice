const root = state => state.randomPerson;

export const getRandomPerson = state => root(state).newPerson.results;