export const INCREASE_COUNT = 'INCREASE_COUNT';
export const INCREASE_COUNT_ASYNC = 'INCREASE_COUNT_ASYNC';
export const DECREASE_COUNT = 'DECREASE_COUNT';
export const DECREASE_COUNT_ASYNC = 'DECREASE_COUNT_ASYNC';
export const RESET_COUNT = 'RESET_COUNT';
export const SET_COUNT = 'SET_COUNT';

export const increaseCount = () => {
  return {
    type: INCREASE_COUNT
  }
}

export const increaseCountAsync = () => {
  return {
    type: INCREASE_COUNT_ASYNC
  }
}

export const decreaseCount = () => {
  return {
    type: DECREASE_COUNT
  }
}

export const decreaseCountAsync = () => {
  return {
    type: DECREASE_COUNT_ASYNC
  }
}

export const setCount = (number) => {
  return {
    type: SET_COUNT,
    payload: number
  }
}

export const resetCount = () => {
  return {
    type: RESET_COUNT
  }
}
