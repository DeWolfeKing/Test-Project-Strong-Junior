import * as types from '../actions/newsActions';

const initialState = {
  isFetching: false,
  newsData: [],
  error: '',
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_NEWS: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case types.SUCCESS_NEWS: {
      return {
        ...state,
        isFetching: false,
        newsData: action.payload,
      };
    }
    case types.FAILED_NEWS: {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    }
    default: {
      return {...state};
    }
  }
};
