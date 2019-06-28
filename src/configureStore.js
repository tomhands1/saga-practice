import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//create saga middleware
const sagaMiddleware = createSagaMiddleware();

//mount the middleware on the store
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

//run the root saga which combines all sagas
sagaMiddleware.run(rootSaga);

export default store;