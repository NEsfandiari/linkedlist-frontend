import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import withAuth from "../hocs/withAuth";
import ProfHead from "../molecules/ProfileHead";
import Xp from "../molecules/ProfileXp";

const User = ({ currentUser, match }) => {
  if (currentUser.isAuthenticated) {
    // Authed
    const userName = currentUser.user.username;
    const paramName = match.params.username;

    return (
      <div>
        <ProfHead paramName={paramName} userName={userName} />
        <Xp paramName={paramName} userName={userName} />
        <ul>
          <li>Add resume</li>
          <li>Add messages</li>
        </ul>
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
};

User.propTypes = {
  currentUser: PropTypes.object
};

export default withAuth(User);
