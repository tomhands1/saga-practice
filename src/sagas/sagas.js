import { put, takeEvery, all, call, takeLatest } from 'redux-saga/effects';
import { INCREASE_COUNT, INCREASE_COUNT_ASYNC, DECREASE_COUNT, DECREASE_COUNT_ASYNC } from '../actions/Counter';
import { fetchRandomPerson } from '../api/RandomPerson';
import { randomPersonReceived, addPersonReceived, REQUEST_RANDOM_PERSON, RECEIVED_REMOVE_PERSON, REQUEST_REMOVE_PERSON } from '../actions/RandomPerson';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

//worker
function* incrementAsync() {
  yield call(delay, 4000);
  yield put({ type: INCREASE_COUNT });
};

//watcher
function* watchIncrementAsync() {
  yield takeEvery(INCREASE_COUNT_ASYNC, incrementAsync);
};

//worker
function* decrementAsync() {
  yield call(delay, 3000);
  yield put({ type: DECREASE_COUNT });
};

//watcher
function* watchDecrementAsync() {
  yield takeEvery(DECREASE_COUNT_ASYNC, decrementAsync);
};

//worker
function* getRandomUser(action) {
  try {
    // do api call
    const data = yield call(fetchRandomPerson);
    yield put(randomPersonReceived(data));
    yield put(addPersonReceived(data));
  } catch (error) {
    console.log(error);
  }
};

export function* randomUser() {
  yield takeLatest(REQUEST_RANDOM_PERSON, getRandomUser);
};

export function* removeFirstPerson() {
  yield call(delay, 3000);
  yield put({ type: RECEIVED_REMOVE_PERSON });
};

export function* watchRemoveFirstPerson() {
  yield takeEvery(REQUEST_REMOVE_PERSON, removeFirstPerson);
};

export default function* rootSaga() {
  yield all([
    watchIncrementAsync(),
    watchDecrementAsync(),
    randomUser(),
    watchRemoveFirstPerson()
  ]);
};