import React, { Component } from "react";
// import { Link } from "react-router-dom";

//need this to send form data

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });

    console.log("handlechange", this.state.name, this.state.password);
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("handle submit", this.state.username, this.state.password);
  };

  render() {
    return (
      <div>
        <h2>Sign Up</h2>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
          </div>

          <div>
            <label>Password</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>

          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
