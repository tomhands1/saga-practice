export const REQUEST_RANDOM_PERSON = 'REQUEST_RANDOM_PERSON';
export const RECEIVED_RANDOM_PERSON = 'RECEIVED_RANDOM_PERSON';
export const REQUEST_ADD_PERSON = 'REQUEST_ADD_PERSON';
export const RECEIVED_ADD_PERSON = 'RECEIVED_ADD_PERSON';
export const REQUEST_REMOVE_PERSON = 'REQUEST_REMOVE_PERSON';
export const RECEIVED_REMOVE_PERSON = 'RECEIVED_REMOVE_PERSON';

export const randomPersonRequest = () => {
  return {
    type: REQUEST_RANDOM_PERSON
  };
};

export const randomPersonReceived = data => {
  return {
    type: RECEIVED_RANDOM_PERSON,
    payload: data
  };
};

export const addPersonRequest = () => {
  return {
    type: REQUEST_ADD_PERSON
  };
};

export const addPersonReceived = data => {
  return {
    type: RECEIVED_ADD_PERSON,
    payload: data
  };
};

export const removeFirstPersonRequest = () => {
  return {
    type: REQUEST_REMOVE_PERSON
  };
};

export const removeFirstPersonReceived = () => {
  return {
    type: RECEIVED_REMOVE_PERSON
  };
};