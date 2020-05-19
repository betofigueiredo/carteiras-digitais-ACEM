import { all, fork } from 'redux-saga/effects';

import associationsSaga from './associations/sagas';

export default function* rootSaga() {
	yield all([
		fork(associationsSaga),
	]);
}
