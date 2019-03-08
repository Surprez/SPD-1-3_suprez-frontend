
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		return fetch('/signup', {
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
					console.log(error)
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
				<h2>Sign Up</h2>

				<form action='/signup' method='POST'>
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

					<div className='inputbar'>
						<button className='button' type='submit'>Sign Up</button>
						<Link to='/' className='button'>Home</Link>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp
