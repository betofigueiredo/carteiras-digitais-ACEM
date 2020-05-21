import { takeLatest, put } from 'redux-saga/effects';

// Services
import sheets from '../../services/sheets';

export function* handleFetch({ sheet_url }) {
	try {
		const payload = yield sheets.get({ sheet_url });
		yield put({
			type: '[associations] FETCH_RECEIVED',
			payload,
		});
	} catch (error) {
		// TODO test error on requests
		yield put({
			type: '[associations] FETCH_REQUEST_FAILED',
			error,
		});
	}
}

export default function* associationsSaga() {
	yield takeLatest([
		'[associations] FETCH_REQUESTED',
	], handleFetch);
}
