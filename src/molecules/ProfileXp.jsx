import React from "react";
import PropTypes from "prop-types";

const Xp = props => {
  if (props.userName === props.paramName) {
    return (
      <div>
        <div>
          <button>Hide</button>
          <h2>Experience</h2>
          <button>Edit</button>
        </div>
      </div>
    );
  } else
    return (
      <div>
        <h2>Experience</h2>
      </div>
    );
};

Xp.propTypes = {
  username: PropTypes.string
};

export default Xp;
