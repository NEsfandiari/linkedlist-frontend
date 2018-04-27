import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default class Job extends PureComponent {
  render() {
    const { equity, salary, title } = this.props.job;
    return (
      <div>
        <h3>{title}</h3>
        <ul>
          <li>Salary: ${salary}</li>
          <li>Equity: {equity}%</li>
        </ul>
        <br />
        <button>APPLY</button>
      </div>
    );
  }
}

Job.propTypes = {
  _id: PropTypes.number,
  applicants: PropTypes.array,
  company: PropTypes.string,
  equity: PropTypes.number,
  salary: PropTypes.number,
  title: PropTypes.string
};
