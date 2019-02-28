import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Login extends Component {
	render() {
		return (
			<div>
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

					<div>
						<button type='submit'>Log In</button>
						<Link to='/'>return home</Link>
					</div>
				</form>
			</div>
		);
	}
}

export default Login
