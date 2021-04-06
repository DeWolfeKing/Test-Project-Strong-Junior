import {call, put, all, takeLatest} from 'redux-saga/effects';
import * as types from '../actions/loginActions';
import {create} from 'apisauce';
import {successNews} from '../actions/newsActions';
const api = create({
  baseURL:
    'https://newsapi.org/v2/everything' +
    '?q=Apple&from=2021-04-06' +
    '&sortBy=popularity'
    // '&apiKey=6cc518029f6448e9b7e720f57cd632bf',
});
function* newsSaga() {
  try {
    const response = yield api.get();
    console.warn(response);
    yield put(successNews(response.data.articles));
  } catch (response) {
    yield put(successNews(response.data.message));
  }
}

export function* watchNewsSaga() {
  yield all([takeLatest(types.LOGIN_SUCCESS, newsSaga)]);
}
