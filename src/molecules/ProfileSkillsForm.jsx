import React, { Component } from "react";
import { apiCall } from "../services/api.js";

class SkillsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    let formData = e.target.children[0].value;
    let Jason = {
      data: {
        ...this.props.userData,
        skills: [...this.props.userData.skills, formData]
      }
    };
    this.props.UpdateUserRequest(this.props.userData.username, Jason);
    e.target.reset();
    this.setState({ skill: "" });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Skill"
          onChange={this.handleChange}
          name="skill"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SkillsForm;
