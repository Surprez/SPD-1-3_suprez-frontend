import React from 'react'
import Keoni from '../img/Keoni.jpg'
import Nolan from '../img/Nolan.jpg'
import Raymond from '../img/Raymond.jpg'
import KJ from '../img/KJ.jpg'

const About = (props) => {
	return (
		<div id='content'>
			<h2>Experience Suprez</h2>
			<p>When giving a presentation, you’re usually given a big stage to move around in. Yet many still stick to a confined
				corner. Why is that? Well, there’s a big tether in the form of a laptop or other device. Someone has to change slides
		right? Let Suprez help with that. Just worry about delivering a powerful experience.</p>
			<h3>Fluid Storytelling</h3>
			<p>There is nothing more momentum breaking than having to look back at the screen to see where your slides are at. On
				top of that, having to click through slides or signal someone to go to the next slide as you present. With Suprez
				your visuals are generated dynamically based on the words that you say. Tell the story you wanted to tell without
		interruptions.</p>
			<h3>Customizable</h3>
			<p>Suprez gives logged in users the ability to customize their experiences by selecting what happens when certain
				keywords are spoken. Have a favorite lightbulb gif or sticker that you want to appear when you talk about your
		startup’s “lightbulb moment”? What about that “spark” that drives and motivates you?</p>

			<h3>Meet the Team</h3>
			<div id='the-team'>
				<div>
					<img className='team-photo' alt='Keoni Murray' src={Keoni} />
					<p className='team-desc'>Keoni Murray</p>
				</div>
				<div>
					<img className='team-photo' alt='Nolan Kovacik' src={Nolan} />
					<p className='team-desc'>Nolan Kovacik</p>
				</div>
				<div>
					<img className='team-photo' alt='Raymond Wu' src={Raymond} />
					<p className='team-desc'>Raymond Wu</p>
				</div>
				<div>
					<img className='team-photo' alt='KJ Wilson' src={KJ} />
					<p className='team-desc'>KJ Wilson</p>
				</div>
			</div>
		</div>
	);
}

export default About
