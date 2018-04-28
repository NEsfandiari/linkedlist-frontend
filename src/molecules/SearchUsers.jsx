import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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
    let inputField = this.state.searchInput.slice(0);
    const searchName = inputField.replace(/\s/g, '&20');
    this.props.fetchUsersRequest(searchName);
    this.setState({ searchInput: '' });
    e.target.reset();
    this.props.history.push('/users');
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
