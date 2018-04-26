import React from "react";
import PropTypes from "prop-types";

const ProfHead = props => {
  if (props.userName === props.paramName) {
    return (
      <div>
        <i className="far fa-user-circle" />
        <h1>{props.paramName}'s Profile</h1>
      </div>
    );
  } else
    return (
      <div>
        <button>Message</button>
        <button>Connect</button>
        <i class="far fa-user-circle" />
        <h1>{props.paramName}'s' Profile</h1>
      </div>
    );
};

ProfHead.propTypes = {
  username: PropTypes.string
};

export default ProfHead;
