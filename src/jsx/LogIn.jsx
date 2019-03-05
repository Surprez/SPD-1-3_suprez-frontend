// Login.jsx
import React, { Component } from "react";

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
	}
	handleInputChange = event => {
		const { value, name } = event.target;
		this.setState({
			[name]: value
		});
	};
	onSubmit = event => {
		event.preventDefault();
		return fetch('/login', {
			method: "POST",
			body: JSON.stringify(this.state),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => {
				if (res.status === 200) {
					this.props.history.push("/speak");
				} else {
					const error = new Error(res.error);
					throw error;
				}
			})
			.catch(err => {
				console.log(err);
				alert("error logging in!");
			});
	};
	render() {
		return (
			<div>
<<<<<<< HEAD
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						name="username"
						placeholder="Enter username"
						value={this.state.username}
						onChange={this.handleInputChange}
						required
					/>
					<input
						type="password"
						name="password"
						placeholder="Enter password"
						value={this.state.password}
						onChange={this.handleInputChange}
						required
					/>
					<input type="submit" value="Submit" />
=======
				<h2>Log In</h2>

				<form action='/login' method='POST'>
					<div>
						<label>Username</label><br />
						<input type='text' id='username' name='username' required></input>
					</div>

					<div>
						<label>Password</label><br />
						<input type='password' id='password' name='password' required></input>
					</div>

					<div className='inputbar'>
						<button type='submit'>Log In</button>
						<Link to='/' className='button'>Home</Link>
					</div>
>>>>>>> 71e85bf8da7db556be77f6cdc3d5f38032a581b0
				</form>
			</div>
		);
	}
}

{
	/* <Link to='/'>return home</Link> */
}
