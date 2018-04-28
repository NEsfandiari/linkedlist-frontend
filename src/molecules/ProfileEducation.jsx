import React, { Component } from "react";
import PropTypes from "prop-types";
import EducationForm from "./ProfileEducationForm";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      isAdding: false
    };
  }

  showAdd = e => {
    e.preventDefault();
    this.setState({ isAdding: !this.state.isAdding });
  };

  handleEdit = e => {
    e.preventDefault();
    this.setState({ isEditing: !this.state.isEditing });
  };

  render() {
    const add = this.state.isEditing ? (
      <button onClick={this.showAdd}>+Add Education</button>
    ) : (
      <br />
    );
    const newForm = this.state.isAdding ? (
      <EducationForm
        userData={this.props.userData}
        UpdateUserRequest={this.props.UpdateUserRequest}
      />
    ) : (
      <br />
    );
    const edus = this.props.userData.education || [];
    const eduLi = edus.map(edu => <li>{edu.institution}</li>);
    if (this.props.userName === this.props.userData.username) {
      return (
        <div>
          <div>
            <button>Hide</button>
            <i className="fas fa-graduation-cap" />
            <h2>Education</h2>
            {add}
            <button onClick={this.handleEdit}>Edit</button>
          </div>
          <ul>
            {newForm}
            {eduLi}
          </ul>
        </div>
      );
    } else
      return (
        <div>
          <div>
            <i className="fas fa-graduation-cap" />
            <h2>Experience</h2>
          </div>
          <ul>{eduLi}</ul>
        </div>
      );
  }
}
Education.propTypes = {
  username: PropTypes.string
};

export default Education;
