import * as t from "../actionTypes";

const DEFAULT_STATE = {};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case t.FETCH_USER_SUCCESS:
      return action.user;
    default:
      return state;
  }
};
