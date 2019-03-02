// React imports
import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../svg/logo.svg';

// CSS files
import '../css/hero.css';

// FontAwesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faChevronCircleDown);

const Hero = (props) => {
	return (
		<div className='hero'>
			<div >
				<img src={logo} className='logo' alt='logo' />
				<h1>Suprez!</h1>
				<h4>Not just presentations. Experiences.</h4>
			</div>

			<div>
				<Link className='call-to-action button' to='/speak'>Start Your Experience</Link>
			</div>

			<div>
				<a className='more' href='#content'>
					<FontAwesomeIcon icon='chevron-circle-down' />
				</a>
			</div>
		</div>
	)
}

export default Hero
