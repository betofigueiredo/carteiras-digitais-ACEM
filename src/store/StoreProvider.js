import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import monitorReducersEnhancer from '../utils/enhancers/monitorReducer';

// sagas
import rootSaga from './combineSagas';
// reducers
import combined_reducers from './combinedReducers';

const reducers = combineReducers(combined_reducers);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);
const store = createStore(reducers, composedEnhancers);

sagaMiddleware.run(rootSaga);

const StoreProvider = ({ children }) => (
	<Provider store={store}>
		{children}
	</Provider>
);

StoreProvider.propTypes = {
	children: PropTypes.element.isRequired,
};

export default StoreProvider;
