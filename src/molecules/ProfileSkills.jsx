import React, { Component } from "react";
import PropTypes from "prop-types";
import SkillsForm from "./ProfileSkillsForm";

class Skills extends Component {
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
    const userData = this.props.userData;

    const add = this.state.isEditing ? (
      <button onClick={this.showAdd}>+Add Skill</button>
    ) : (
      <br />
    );
    const newForm = this.state.isAdding ? (
      <SkillsForm
        userData={userData}
        UpdateUserRequest={this.props.UpdateUserRequest}
      />
    ) : (
      <br />
    );
    const skills =
      (this.props.userData &&
        this.props.userData.skills &&
        this.props.userData.skills) ||
      [];
    const skillLi = skills.map(skill => <li>{skill}</li>);
    if (this.props.userName === this.props.userData.username) {
      return (
        <div>
          <div>
            <button>Hide</button>
            <i className="fab fa-nintendo-switch" />
            <h2>Skills</h2>
            {add}
            <button onClick={this.handleEdit}>Edit</button>
          </div>
          <ul>
            {newForm}
            {skillLi}
          </ul>
        </div>
      );
    } else
      return (
        <div>
          <div>
            <i className="fab fa-nintendo-switch" />
            <h2>Skills</h2>
            {add}
          </div>
          <ul>
            {newForm}
            {skillLi}
          </ul>
        </div>
      );
  }
}
Skills.propTypes = {
  username: PropTypes.string
};

export default Skills;
