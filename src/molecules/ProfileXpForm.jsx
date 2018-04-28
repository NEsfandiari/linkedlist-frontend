import React, { Component } from "react";

class XpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      job: "",
      company: "",
      start: null,
      end: null,
      description: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // Form Data
    let formJob = e.target.children[0].value;
    let formCompany = e.target.children[0].value;
    let formStartDate = e.target.children[0].value;
    let formEndDate = e.target.children[0].value;
    let formDescription = e.target.children[0].value;
    // JSON Repackage
    let Jason = {
      data: {
        ...this.props.userData,
        experience: {
          ...this.props.userData.experience,
          jobTitle: formJob,
          companyName: formCompany,
          startDate: formStartDate,
          endDate: formEndDate
        }
      }
    };

    this.props.UpdateUserRequest(this.props.userData.username, Jason);
    e.target.reset();
    this.setState({
      job: "",
      company: "",
      start: null,
      end: null,
      description: ""
    });
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            name="job"
            placeholder="Job Title"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="start">Start</label>
          <input type="date" name="start" onChange={this.handleChange} />
          <label htmlFor="end">End</label>
          <input type="date" name="end" onChange={this.handleChange} />
        </div>
        <textarea
          name="description"
          id=""
          cols="30"
          rows="7"
          placeholder="Describe your cod3 trickz"
          onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default XpForm;
