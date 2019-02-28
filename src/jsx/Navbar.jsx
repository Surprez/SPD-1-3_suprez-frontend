import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
	render() {
		return (
			<nav className='navbar'>
				<Link className='logo' to='/'><img alt='logo' /></Link>
				<span className='spacing'></span>
				<Link className='button' to='/login'>Log In</Link>
				<Link className='button' to='/signup'>Sign Up</Link>
			</nav>
		)
	}
}

export default Login
