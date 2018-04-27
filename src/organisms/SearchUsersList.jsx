import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withAuth from '../hocs/withAuth';
import SearchedUser from '../molecules/SearchedUser';

class SearchUsersList extends Component {
  // pass down state prop of returned users
  // componentDidMount() {
  //   this.props.fetchJobsRequest();
  // }

  render() {
    if (!this.props.currentUser.isAuthenticated) {
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
        <h1>Users Search Reults</h1>
        <ul>{this.props.users.map(user => <SearchedUser key={user._id} user={user} />)}</ul>
        <ul>
          <li>User 1 | Message | View Profile</li>
          <li>User 2 | Message | View Profile</li>
          <li>User 3 | Message | View Profile</li>
        </ul>
      </div>
    );
  }
}

SearchUsersList.propTypes = {
  currentUser: PropTypes.object,
  users: PropTypes.array
};

export default withAuth(Feed);
