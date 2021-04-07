import * as types from '../actions/profileActions';
import {RESET_APP} from '../actions/loginActions';

const initialState = {
  firstName: '',
  lastName: '',
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_PROFILE: {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
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
