import { combineReducers } from 'redux';
import currentUser from './currentUser';
import errors from './errors';
import jobs from './jobs';
import user from './user';
import users from './users';

const rootReducer = combineReducers({
  currentUser,
  errors,
  jobs,
  user,
  users
});

export default rootReducer;
