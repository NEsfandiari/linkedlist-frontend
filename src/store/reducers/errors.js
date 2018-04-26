import * as t from '../actionTypes';

const DEFAULT_STATE = {
  message: null
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case t.ADD_ERROR:
      return { ...state, message: action.error };
    case t.REMOVE_ERROR:
      return { ...state, message: null };
    default:
      return state;
  }
};
