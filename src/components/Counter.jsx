import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/Counter';

const Counter = ({ count, increaseCount, decreaseCount, resetCount }) => {
  
  const increment = () => {
    console.log('Trying to increment');
    increaseCount();
  };

  const decrement = () => {
    console.log('Trying to decrement');
    decreaseCount();
  };

  const reset = () => {
    console.log('Trying to reset');
    resetCount();
  };
  
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      {count}
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.counter.count
});

const mapDispatchToProps = dispatch => ({
  increaseCount: () => dispatch(actions.increaseCount),
  decreaseCount: () => dispatch(actions.decreaseCount),
  resetCount: () => dispatch(actions.resetCount)
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
