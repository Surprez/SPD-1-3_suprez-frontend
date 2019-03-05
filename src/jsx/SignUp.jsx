import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class SignUp extends Component {
	render() {
		return (
			<div>
				<h2>Sign Up</h2>

				<form action='/signup' method='POST'>
					<div>
						<label>Username</label><br />
						<input type='text' id='username' name='username' required></input>
					</div>

					<div>
						<label>Password</label><br />
						<input type='password' id='password' name='password' required></input>
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
