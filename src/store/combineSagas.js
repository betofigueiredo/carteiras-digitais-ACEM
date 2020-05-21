import { all, fork } from 'redux-saga/effects';

import associationsSaga from './associations/sagas';
import membershipsSaga from './memberships/sagas';

export default function* rootSaga() {
	yield all([
		fork(associationsSaga),
		fork(membershipsSaga),
	]);
}
