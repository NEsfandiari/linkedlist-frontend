import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default class SearchedUser extends PureComponent {
  render() {
    const {
      _id,
      applied,
      createdAt,
      email,
      experience,
      firstName,
      lastName,
      skills,
      username
    } = this.props.SearchedUser;
    return (
      <div>
        <h3>
          {firstName} {lastName}
        </h3>
        <ul>
          <li>Username: {username}</li>
          <li>Email: {email}</li>
          <li>Experiene: {experience[0]}</li>
          <li>Expertise: {skills[0]}</li>
          <li>Member Since: {createdAt.slice(0, 10)}</li>
        </ul>
        <br />
        <button>Message</button>
        <button>View Profile</button>
      </div>
    );
  }
}

SearchedUser.propTypes = {
  _id: PropTypes.number,
  applied: PropTypes.array,
  createdAt: PropTypes.string,
  email: PropTypes.string,
  experience: PropTypes.array,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  skills: PropTypes.array,
  username: PropTypes.string
};
