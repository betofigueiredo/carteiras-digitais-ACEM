import { takeLatest, put, select } from 'redux-saga/effects';

// Services
import sheets from '../../services/sheets';

// Selectors
import selectors from '../../selectors';

export function* handleFetch() {
	try {
		const sheet_url = yield select(selectors.membersSheetUrl);
		const payload = yield sheets.get({ sheet_url });
		yield put({
			type: '[memberships] FETCH_RECEIVED',
			payload,
		});
	} catch (error) {
		// TODO test error on requests
		yield put({
			type: '[memberships] FETCH_REQUEST_FAILED',
			error,
		});
	}
}

export default function* membershipsSaga() {
	yield takeLatest([
		'[memberships] FETCH_REQUESTED',
	], handleFetch);
}
