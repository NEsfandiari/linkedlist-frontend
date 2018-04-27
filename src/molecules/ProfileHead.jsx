import React, { Component } from "react";
import PropTypes from "prop-types";

class ProfHead extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const job =
      (this.props.userData &&
        this.props.userData.currentCompanyName &&
        this.props.userData.currentCompanyName.title) ||
      ":(";
    const company =
      (this.props.userData &&
        this.props.userData.currentCompanyName &&
        this.props.userData.currentCompanyName.title) ||
      "Unemployed";
    if (this.props.userName === this.props.userData.username) {
      return (
        <div>
          <i className="far fa-user-circle fa-7x" />
          <h1>{this.props.userData.username}'s Profile</h1>
          <div>
            <h3>{job}</h3>
            <h3>{company}</h3>
          </div>
        </div>
      );
    } else
      return (
        <div>
          <button>Message</button>
          <button>Connect</button>
          <i className="far fa-user-circle fa-7x" />
          <h1>{this.props.userData.username}'s' Profile</h1>
          <div>
            <h3>{job}</h3>
            <h3>{company}</h3>
          </div>
        </div>
      );
  }
}

ProfHead.propTypes = {
  username: PropTypes.string
};

export default ProfHead;
