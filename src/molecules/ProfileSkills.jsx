import React, { Component } from "react";
import PropTypes from "prop-types";

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
    const add = this.state.isEditing ? (
      <button onClick={this.showAdd}>+Add Skill</button>
    ) : (
      <br />
    );
    const newForm = this.state.isAdding ? (
      <form action="">
        <input type="text" placeholder="Skill" />
        <button type="submit">Submit</button>
      </form>
    ) : (
      <br />
    );
    const skills =
      (this.props.userData &&
        this.props.userData.skills &&
        this.props.userData.skills.items) ||
      [];
    const skillLi = skills.map(skill => <button>{skill.title}</button>);
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
