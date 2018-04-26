import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withAuth from '../hocs/withAuth';

const User = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div>
        <h1>Welcome to Linked List!</h1>
        <Link to="/signup">Sign up here</Link>
      </div>
    );
  }
  return (
    <div>
      <h1>User Profile</h1>
      <ul>
        <li>Add resume</li>
        <li>Add messages</li>
      </ul>
    </div>
  );
};

User.propTypes = {
  currentUser: PropTypes.object
};

export default withAuth(User);
