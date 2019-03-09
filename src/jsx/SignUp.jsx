import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
	}

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = event => {
		console.log(this.props.history);
		event.preventDefault();
		Axios.post("https://suprez.herokuapp.com/signup", this.state).then(res => {
			console.log("signup");
			this.props.history.push("/speak");
			alert('you are logged in!')
		});
		// fetch('/signup', {
		// 	method: "POST",
		// 	body: JSON.stringify(this.state),
		// 	headers: {
		// 		"Content-Type": "application/json"
		// 	}
		// })
		// .then((res) => {return res.json()})
		// 	.then(resp => {
		// 		if (resp.status === 200) {
		// 			console.log("status")
		// 			this.props.history.push("/speak");
		// 		} else {
		// 			const error = new Error(resp.error);
		// 			console.log(error)
		// 			throw error;
		// 		}
		// 	})
		// 	.catch(err => {
		// 		console.log(err);
		// 		alert("error logging in!");
		// 	});
	};

	render() {
		return (
			<div>
				<h2>Sign Up</h2>

				<form onSubmit={this.handleSubmit} method="POST">
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

					<div className="inputbar">
						<button className="button" type="submit">
							Sign Up
						</button>
						<Link to="/" className="button">
							Home
						</Link>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;
