import * as types from '../actions/profileActions';

const initialState = {
  firstName: '1',
  lastName: '1',
  phoneNumber: '1',
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_PROFILE: {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        phoneNumber: action.payload.phoneNumber,
      };
    }
    default: {
      return state;
    }
  }
};
