import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../hocs/withAuth';

const Feed = ({ currentUser }) => {
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
      <h1>Job Feed</h1>
      <ul>
        <li>Job 1 | Apply | View Company</li>
        <li>Job 2 | Apply | View Company</li>
        <li>Job 3 | Apply | View Company</li>
      </ul>
    </div>
  );
};

export default withAuth(Feed);
