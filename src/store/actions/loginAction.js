export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});
export const loginFailed = (payload) => ({
  type: LOGIN_FAILED,
  error: payload,
});
