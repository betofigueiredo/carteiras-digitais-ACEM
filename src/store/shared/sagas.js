import { takeLatest, put } from 'redux-saga/effects';

// Services
import sheets from '../../services/sheets';

export function* handleFetch({ sheet_url, location }) {
	try {
		const payload = yield sheets.get({ sheet_url });
		yield put({
			type: `[${location}] FETCH_RECEIVED`,
			payload,
		});
	} catch (error) {
		// TODO test error on requests
		yield put({
			type: `[${location}] FETCH_REQUEST_FAILED`,
			error,
		});
	}
}

export default function* sharedSaga() {
	yield takeLatest([
		'[associations] FETCH_REQUESTED',
		'[memberships] FETCH_REQUESTED',
	], handleFetch);
}
