import React from 'react'
import { Link } from 'react-router-dom'
import logo_small from '../svg/logo-small.svg'

const Navbar = (props) => {
	return (
		<nav className='navbar'>
			<span><Link className='logo-small' to='/'><img src={logo_small} alt='logo' /></Link></span>
			<span className='spacing'></span>
			<span><Link className='button' to='/login'>Log In</Link></span>
			<span><Link className='button' to='/signup'>Sign Up</Link></span>
			<span><Link className='button' to='/keywords'>Keywords</Link></span>
			<span><a className='button' href='./logout'>Log Out</a></span>
			<span><Link className='button special' to='/speak'>Start Presentation</Link></span>
		</nav >
	)
}

export default Navbar
