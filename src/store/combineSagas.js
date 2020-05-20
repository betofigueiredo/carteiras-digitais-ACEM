import { all, fork } from 'redux-saga/effects';

import sharedSaga from './shared/sagas';

export default function* rootSaga() {
	yield all([
		fork(sharedSaga),
	]);
}
