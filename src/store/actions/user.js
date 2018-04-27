import { apiCall } from "../../services/api.js";
import * as t from "../actionTypes";

function fetchUserSuccess(user) {
  return {
    type: t.FETCH_USER_SUCCESS,
    user
  };
}

function fetchUserFail(error) {
  return {
    type: t.FETCH_USER_FAIL,
    error
  };
}

export function fetchUserRequest(username) {
  return async dispatch => {
    dispatch({ type: t.FETCH_USER_REQUEST });
    try {
      const result = await apiCall("get", "/users/" + username);
      dispatch(fetchUserSuccess(result.data));
      return result;
    } catch (err) {
      dispatch(fetchUserFail(err));
      return Promise.reject();
    }
  };
}
