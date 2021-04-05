//import * as types from '../actions/galleryActions';
import {IN_GGG} from '../actions/loginAction';

const initialState = {
  is_Log: 'blabla',
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case IN_GGG: {
      return {
        ...state,
        is_Log: 'КТО ГИРЯ?',
      };
    }
    default: {
      return {...state};
    }
  }
};
