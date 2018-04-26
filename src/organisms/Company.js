import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withAuth from '../hocs/withAuth';

const Company = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div>
        <h1>Welcome to Linked List!</h1>
        <Link to="/signup">Sign up here</Link>
        <br />
        <Link to="/signin">Already a member?</Link>
      </div>
    );
  }
  return (
    <div>
      <h1>Company Profile</h1>
      <ul>
        <li>Add apply</li>
      </ul>
    </div>
  );
};

Company.propTypes = {
  currentUser: PropTypes.object
};

export default withAuth(Company);
