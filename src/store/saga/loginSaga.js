import {call, put, all, takeLatest} from 'redux-saga/effects';
import {IN_GGG} from '../actions/loginAction';
// import {create} from 'apisauce';
// const api = create({
//     baseURL:
//         'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
//     headers: {Accept: 'application/vnd.github.v3+json'},
// });
function* loginSaga() {
  try {
    // console.warn('Я ГИРЯ');
  } catch (response) {
    console.warn('ЗАБОТЮСЬ О ТЕБЕ');
  }
}

export function* watchLoginSaga() {
  yield all([takeLatest(IN_GGG, loginSaga)]);
}
