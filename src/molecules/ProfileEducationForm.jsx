import React, { Component } from "react";

class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      education: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    let formData = e.target.children[0].value;
    let Jason = {
      data: {
        ...this.props.userData,
        education: [...this.props.userData.education, { institution: formData }]
      }
    };
    this.props.UpdateUserRequest(this.props.userData.username, Jason);
    e.target.reset();
    this.setState({ education: "" });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Degree description"
          name="education"
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default EducationForm;
