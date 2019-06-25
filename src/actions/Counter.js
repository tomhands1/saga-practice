export const INCREASE_COUNT = 'INCREASE_COUNT';
export const DECREASE_COUNT = 'DECREASE_COUNT';
export const RESET_COUNT = 'RESET_COUNT';

export const increaseCount = () => {
  console.log('Here')
  return {
    type: INCREASE_COUNT
  }
}

export const decreaseCount = () => {
  return {
    type: DECREASE_COUNT
  }
}

export const resetCount = () => {
  return {
    type: RESET_COUNT
  }
}
