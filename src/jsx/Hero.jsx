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
			<div>
				<div>
					{/* <img src={logo} className='logo' alt='logo' /> */}

					<header>
						<h1 className='brand'>Suprez</h1>
						<h2 className='subheading'>Not just presentations.<br /><em>Experiences.</em></h2>
					</header>

				</div>

				<div>
					<h4>
						<Link className='call-to-action button' to='/speak'>Begin Your Presentation</Link>
					</h4>
				</div>
			</div>

			<div>
				<a className='more' href='#content'>
					<FontAwesomeIcon icon='chevron-circle-down' />
				</a>
			</div>
		</div >
	)
}

export default Hero
