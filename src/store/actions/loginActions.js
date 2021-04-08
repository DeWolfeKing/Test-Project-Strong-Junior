export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const RESET_APP = 'RESET_APP';

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});
export const loginFailed = (error) => ({
  type: LOGIN_FAILED,
  payload: error,
});
export const logout = () => ({
  type: RESET_APP,
});
