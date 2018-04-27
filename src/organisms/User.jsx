import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import withAuth from "../hocs/withAuth";
import ProfHead from "../molecules/ProfileHead";
import Xp from "../molecules/ProfileXp";
import Education from "../molecules/ProfileEducation";
import Skills from "../molecules/ProfileSkills";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const paramName = this.props.match.params.username;
    this.props.fetchUserRequest(paramName);
  }

  render() {
    if (this.props.currentUser.isAuthenticated) {
      // Authed
      const userName = this.props.currentUser.user.username;
      const userData = this.props.user;
      return (
        <div>
          <ProfHead userData={userData} userName={userName} />
          <Xp userData={userData} userName={userName} />
          <Education userData={userData} userName={userName} />
          <Skills userData={userData} userName={userName} />
        </div>
      );
    }
    // Not Authed
    else
      return (
        <div>
          <h1>Welcome to Linked List!</h1>
          <Link to="/signup">Sign up here</Link>
          <br />
          <Link to="/signin">Already a member?</Link>
        </div>
      );
  }
}

User.propTypes = {
  currentUser: PropTypes.object,
  match: PropTypes.object,
  user: PropTypes.object
};

export default withAuth(User);
