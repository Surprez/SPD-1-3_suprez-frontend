import React, { Component } from "react";
import { Link } from "react-router-dom";

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
						<label>Username</label><br />
						<input
							type='text'
							id='username'
							name='username'
							required
							value={this.state.username}
							onInput={this.handleChange}
						/>
					</div>

					<div>
						<label>Password</label><br />
						<input
							type="password"
							id="password"
							name="password"
							value={this.state.password}
							onInput={this.handleChange}
							required
						/>
					</div>

					<div className='inputbar'>
						<button className='button' type='submit'>Sign Up</button>
						<Link to='/' className='button'>Home</Link>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;
