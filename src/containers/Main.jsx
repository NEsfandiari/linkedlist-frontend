import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { removeError } from '../store/actions/errors';
import { authUser, loginUser } from '../store/actions/auth';
import { fetchJobsRequest } from '../store/actions/jobs';
import { fetchUserRequest } from '../store/actions/user';
import { fetchUsersRequest } from '../store/actions/users';
import Homepage from '../organisms/Homepage';
import AuthForm from '../organisms/forms/AuthForm';
import withAuth from '../hocs/withAuth';
import Feed from '../organisms/Feed';
import User from '../organisms/User';
import Company from '../organisms/Company';
import SearchUsersList from '../organisms/SearchUsersList';

const Main = props => {
  const {
    authUser,
    currentUser,
    errors,
    removeError,
    loginUser,
    jobs,
    fetchJobsRequest,
    fetchUserRequest,
    fetchUsersRequest,
    user,
    users
  } = props;

  // const routes = [
  //   {
  //     path: '/signin',
  //     component: AuthForm
  //   },
  //   {
  //     path: '/signup',
  //     component: AuthForm
  //   },
  //   {
  //     path: '/feed',
  //     component: Feed
  //   },
  //   {
  //     path: '/user',
  //     component: User
  //   },
  //   {
  //     path: '/company',
  //     component: Company
  //   },
  //   {
  //     path: '/',
  //     component: Homepage
  //   }
  // ];

  // const renderSubRoutes = route => (
  //   <Route
  //     path={route.path}
  //     render={props => <route.component {...props} routes={route.routes} />}
  //   />
  // );

  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path="/signin"
          render={props => {
            if (currentUser.isAuthenticated) {
              return <Redirect to="/" />;
            }
            return (
              <AuthForm
                buttonText="Log in"
                errors={errors}
                removeError={removeError}
                heading="Welcome Back."
                onAuth={loginUser}
                signIn
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/signup"
          render={props => {
            if (currentUser.isAuthenticated) {
              return <Redirect to="/" />;
            }
            return (
              <AuthForm
                removeError={removeError}
                buttonText="Sign me up!"
                errors={errors}
                heading="Join Linked List today."
                onAuth={authUser}
                {...props}
              />
            );
          }}
        />
        <Route path="/secret" component={withAuth(() => <h1>Secret Page!</h1>)} />
        <Route
          exact
          path="/feed"
          render={props => (
            <Feed fetchJobsRequest={fetchJobsRequest} jobs={jobs} currentUser={currentUser} />
          )}
        />
        <Route
          exact
          path="/users/:username"
          render={props => (
            <User
              {...props}
              fetchUserRequest={fetchUserRequest}
              user={user}
              currentUser={currentUser}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={props => (
            <SearchUsersList
              {...props}
              fetchUsersRequest={fetchUsersRequest}
              currentUser={currentUser}
            />
          )}
        />
        <Route
          exact
          path="/company"
          render={props => <Company {...props} currentUser={currentUser} />}
        />

        <Route exact path="/" render={props => <Homepage {...props} currentUser={currentUser} />} />
      </Switch>

      {/* {routes.map((route, i) => <renderSubRoutes key={i} {...route} />)} */}
    </div>
  );
};

const mapStateToProps = reduxState => {
  return {
    currentUser: reduxState.currentUser,
    jobs: reduxState.jobs,
    user: reduxState.user,
    users: reduxState.users,
    errors: reduxState.errors
  };
};

Main.propTypes = {
  signIn: PropTypes.func,
  signUp: PropTypes.func,
  authUser: PropTypes.func,
  loginUser: PropTypes.func,
  currentUser: PropTypes.object,
  removeError: PropTypes.func,
  errors: PropTypes.object
};

export default withRouter(
  connect(mapStateToProps, {
    loginUser,
    authUser,
    removeError,
    fetchJobsRequest,
    fetchUserRequest,
    fetchUsersRequest
  })(Main)
);
