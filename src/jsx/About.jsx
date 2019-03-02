import React from 'react'
import Keoni from '../img/Keoni.jpg'
import Nolan from '../img/Nolan.jpg'
import Raymond from '../img/Raymond.jpg'
import KJ from '../img/KJ.jpg'



const About = (props) => {
return (
<div id='content'>
	<h2>Not presentations, experiences</h2>
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
	<div id='team-photo'>
		<img src={Keoni}></img>
		<p>Keoni Murray</p>
	</div>
	<div id='team-photo'>
		<img src={Nolan}></img>
		<p>Nolan Kovacik</p>
	</div>
	<div id='team-photo'>
		<img src={Raymond}></img>
		<p>Raymond Wu</p>
	</div>
	<div id='team-photo'>
		<img src={KJ}></img>
		<p>KJ Wilson</p>
	</div>

	<p>Duis at tellus at urna condimentum mattis pellentesque. Enim lobortis scelerisque fermentum dui faucibus. Diam
		maecenas ultricies mi eget mauris pharetra. A diam sollicitudin tempor id eu nisl nunc mi. Imperdiet dui accumsan sit
		amet nulla facilisi. Id interdum velit laoreet id donec ultrices. Eget nulla facilisi etiam dignissim. Convallis
		convallis tellus id interdum velit laoreet id donec. Fermentum posuere urna nec tincidunt. Pellentesque nec nam
		aliquam sem et tortor consequat. Euismod elementum nisi quis eleifend quam. Volutpat est velit egestas dui id ornare
		arcu odio ut. Cursus eget nunc scelerisque viverra mauris. Tellus elementum sagittis vitae et leo duis. In nisl nisi
		scelerisque eu ultrices vitae auctor eu. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Imperdiet sed
		euismod nisi porta lorem mollis aliquam ut porttitor. Arcu cursus vitae congue mauris rhoncus aenean.</p>
</div>
);
}

export default About