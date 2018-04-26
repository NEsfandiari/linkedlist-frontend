import React, { Component } from "react";
import withAuth from "../hocs/withAuth";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.currentUser.isAuthenticated) {
      return (
        <div>
          <ul>
            <h1>Sup</h1>
          </ul>
        </div>
      );
    }
    return <h1>HI</h1>;
  }
}

export default withAuth(Feed);
