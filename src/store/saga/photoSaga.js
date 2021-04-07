import {call, put, all, takeLatest} from 'redux-saga/effects';
import * as types from '../actions/photoActions';
function* uploadPhotoSaga(action) {
  try {
    const response = yield fetch('https://flutter-test.redentu.com', {
      method: 'POST',
      body: {link: `${action.payload}`},

      headers: {
        'content-type': 'application/json',
      },
    });
    console.log(response);
  } catch (response) {
    console.log(response.message);
  }
}

export function* watchPhotoSaga() {
  yield all([takeLatest(types.UPLOAD_PHOTO, uploadPhotoSaga)]);
}
