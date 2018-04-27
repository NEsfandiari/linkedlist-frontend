import { apiCall } from '../../services/api.js';
import * as t from '../actionTypes';

function fetchJobsSuccess(jobs) {
  return {
    type: t.FETCH_JOBS_SUCCESS,
    jobs
  };
}

function fetchJobsFail(error) {
  return {
    type: t.FETCH_JOBS_FAIL,
    error
  };
}

export function fetchJobsRequest() {
  return async dispatch => {
    dispatch({ type: t.FETCH_JOBS_REQUEST });
    try {
      const result = await apiCall('get', '/jobs');
      dispatch(fetchJobsSuccess(result.data));
      return result;
    } catch (err) {
      dispatch(fetchJobsFail(err));
      return Promise.reject();
    }
  };
}
