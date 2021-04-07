import {all} from 'redux-saga/effects';
import {watchNewsSaga} from './newsSaga';
import {watchPhotoSaga} from './photoSaga';
export default function* rootSaga() {
  yield all([watchNewsSaga(), watchPhotoSaga()]);
}
