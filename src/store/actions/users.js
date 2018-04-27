import { apiCall } from '../../services/api.js';
import * as t from '../actionTypes';

function fetchUsersSuccess(users) {
  return {
    type: t.FETCH_USERS_SUCCESS,
    users
  };
}

function fetchUsersFail(error) {
  return {
    type: t.FETCH_USERS_FAIL,
    error
  };
}

export function fetchUsersRequest(name) {
  return async dispatch => {
    dispatch({ type: t.FETCH_USERS_REQUEST });
    try {
      const result = await apiCall('get', '/users/?q=' + name);
      dispatch(fetchUsersSuccess(result.data));
      return result;
    } catch (err) {
      dispatch(fetchUsersFail(err));
      return Promise.reject();
    }
  };
}
