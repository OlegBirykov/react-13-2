import { takeLatest, put, spawn, retry } from 'redux-saga/effects';
import { listSuccess, listFailure, detailsSuccess, detailsFailure } from '../actions/actionCreators';
import { LIST_REQUEST, DETAILS_REQUEST } from '../actions/actionTypes';
import { listRequestAPI, detailsRequestAPI } from '../api/index';

// watcher
function* watchListRequestSaga() {
  yield takeLatest(LIST_REQUEST, handleListRequestSaga);
}

// worker
function* handleListRequestSaga() {
  try {
    const retryCount = 3;
    const retryDelay = 1000;
    const data = yield retry(retryCount, retryDelay, listRequestAPI);
    yield put(listSuccess(data));
  } catch (e) {
    yield put(listFailure(e.message));
  }
}

// watcher
function* watchDetailsRequestSaga() {
  yield takeLatest(DETAILS_REQUEST, handleDetailsRequestSaga);
}

// worker
function* handleDetailsRequestSaga(action) {
  try {
    const retryCount = 3;
    const retryDelay = 1000;
    const data = yield retry(retryCount, retryDelay, detailsRequestAPI, action.payload.id);
    yield put(detailsSuccess(data));
  } catch (e) {
    yield put(detailsFailure(e.message));
  }
}

export default function* saga() {
  yield spawn(watchListRequestSaga);
  yield spawn(watchDetailsRequestSaga);
}