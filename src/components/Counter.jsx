import React from 'react';
import { connect } from 'react-redux';
import { increaseCount, decreaseCount, resetCount, setCount, increaseCountAsync, decreaseCountAsync } from '../actions/Counter';
import { getCount } from '../selectors/Counter';
import { useInputForm } from '../hooks';
import styles from '../Counter.module.scss';

const Counter = ({ count, increaseCount, increaseCountAsync, decreaseCountAsync, decreaseCount, resetCount, setCount }) => {

  const desiredCount = useInputForm(0);

  return (
    <div className={styles.counter}>
      <div className="increment">
        <button className="counter-button" onClick={increaseCount}>+1</button>
        <button className="counter-button" onClick={increaseCountAsync}>+1 after 4 seconds</button>
      </div>
      <div className="decrement">
        <button className="counter-button" onClick={decreaseCount}>-1</button>
        <button className="counter-button" onClick={decreaseCountAsync}>-1 after 3 seconds</button>
      </div>
      <div className="resetting">
        <button className="counter-button" onClick={resetCount}>Reset</button>
      </div>
      <div className="number-setting">
        Change this number &#x2193;
        <input className="count-input" {...desiredCount} />
        <button className="counter-button" onClick={() => setCount(Number(desiredCount.value))}>Set Count to {desiredCount.value}</button>
        <div className="count-value">
          {count}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  count: getCount(state)
});

const mapDispatchToProps = {
  decreaseCount,
  increaseCount,
  increaseCountAsync,
  decreaseCountAsync,
  resetCount,
  setCount
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
