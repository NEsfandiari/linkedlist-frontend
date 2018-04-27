import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withAuth from '../hocs/withAuth';
import Job from '../molecules/Job';

class Feed extends Component {
  componentDidMount() {
    this.props.fetchJobsRequest();
  }

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
        <h1>Job Feed</h1>
        <ul>{this.props.jobs.map(job => <Job key={job._id} job={job} />)}</ul>
        <ul>
          <li>Job 1 | Apply | View Company</li>
          <li>Job 2 | Apply | View Company</li>
          <li>Job 3 | Apply | View Company</li>
        </ul>
      </div>
    );
  }
}

Feed.propTypes = {
  currentUser: PropTypes.object,
  fetchJobsRequest: PropTypes.func,
  jobs: PropTypes.array
};

export default withAuth(Feed);
