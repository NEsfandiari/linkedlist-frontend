import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    };
  }

  handleChange = e => {
    this.setState({ searchInput: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchUsersRequest(this.state);
    this.setState({ searchInput: '' });
    e.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Search Users"
          onChange={this.handleChange}
          name="searchInput"
          type="text"
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

SearchUsers.propTypes = {
  fetchUsersRequest: PropTypes.func.isRequired
};
