import * as types from '../actions/loginActions';
import {RESET_APP} from '../actions/loginActions';

const initialState = {
  logged: false,
  successLogin: 'User',
  successPassword: '123456',
  error: '',
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      return {
        ...initialState,
        logged: true,
      };
    }
    case types.LOGIN_FAILED: {
      return {
        ...state,
        error: action.error,
      };
    }
    case RESET_APP: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
