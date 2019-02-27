import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import '../css/main.css';
import '../css/fonts.css';
import '../css/App.css';


class App extends Component {
	render() {
		return (
			<div className="App">
				<nav className='navbar'>
					<a className='logo' href='./'><img alt='logo' /></a>
					<span className='spacing'></span>
					<a className='button' href='./login'>Log In</a>
					<a className='button' href='./signup'>Sign Up</a>
				</nav>

				<div className='hero'>
					<div>
						<img src={logo} className="App-logo" alt="logo" />
						<h1>Suprez!</h1>
						<h4>Not just presentations. Experiences.</h4>
					</div>

					<div>
						<a href='presentation.html' className='call-to-action button'>
							Start Presentation
				</a>
					</div>

					<div>
						<a className='more-content'>
							<img alt='downarrow button' />
						</a>
					</div>
				</div>


				<div className='content'>
					<h2>
						About Suprez
			</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet facilisis magna etiam tempor orci eu lobortis. Enim blandit volutpat maecenas volutpat blandit. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Diam quis enim lobortis scelerisque fermentum dui. Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Sed odio morbi quis commodo odio aenean sed adipiscing. Dui id ornare arcu odio ut. Quam vulputate dignissim suspendisse in est. Faucibus et molestie ac feugiat sed. Quisque id diam vel quam elementum pulvinar etiam. Quis hendrerit dolor magna eget est. Viverra adipiscing at in tellus. Dui vivamus arcu felis bibendum. Turpis cursus in hac habitasse. Ornare aenean euismod elementum nisi quis.
			</p>
					<h3>
						Instructions
			</h3>
					<p>
						A erat nam at lectus. Integer vitae justo eget magna fermentum iaculis eu non. Non nisi est sit amet facilisis magna etiam. Dui sapien eget mi proin sed libero enim. Lorem ipsum dolor sit amet. Neque viverra justo nec ultrices dui sapien. Mi in nulla posuere sollicitudin aliquam. Semper feugiat nibh sed pulvinar. Nibh venenatis cras sed felis eget velit aliquet. At varius vel pharetra vel. Sit amet facilisis magna etiam tempor orci eu. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Laoreet suspendisse interdum consectetur libero id. Morbi tristique senectus et netus et malesuada. Commodo elit at imperdiet dui accumsan sit. Duis at tellus at urna condimentum mattis pellentesque. Morbi leo urna molestie at elementum. A iaculis at erat pellentesque adipiscing commodo elit at.
			</p>
					<h3>
						Our Vision
			</h3>
					<p>
						Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Erat pellentesque adipiscing commodo elit at imperdiet dui. Vel fringilla est ullamcorper eget. Id ornare arcu odio ut sem nulla. Morbi quis commodo odio aenean. Volutpat est velit egestas dui id ornare. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Nunc id cursus metus aliquam. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Mauris a diam maecenas sed enim ut sem viverra. Ultrices neque ornare aenean euismod elementum nisi quis. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi. A diam sollicitudin tempor id eu nisl nunc. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Eu nisl nunc mi ipsum faucibus vitae aliquet. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus.
			</p>
					<p>
						At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Purus in massa tempor nec feugiat. Mauris commodo quis imperdiet massa tincidunt nunc. At varius vel pharetra vel turpis nunc. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Morbi tristique senectus et netus et malesuada. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Lacinia at quis risus sed vulputate odio ut enim. Amet consectetur adipiscing elit ut aliquam purus. Morbi non arcu risus quis varius. Amet consectetur adipiscing elit ut aliquam purus sit.
			</p>
					<h4>
						Lorem
			</h4>
					<h4>
						Ipsum
			</h4>
					<h4>
						Pudoram
			</h4>
					<h5>
						Itala
			</h5>
					<h6>
						Heroku
			</h6>
					<h3>
						Meet the Team
			</h3>
					<p>
						Duis at tellus at urna condimentum mattis pellentesque. Enim lobortis scelerisque fermentum dui faucibus. Diam maecenas ultricies mi eget mauris pharetra. A diam sollicitudin tempor id eu nisl nunc mi. Imperdiet dui accumsan sit amet nulla facilisi. Id interdum velit laoreet id donec ultrices. Eget nulla facilisi etiam dignissim. Convallis convallis tellus id interdum velit laoreet id donec. Fermentum posuere urna nec tincidunt. Pellentesque nec nam aliquam sem et tortor consequat. Euismod elementum nisi quis eleifend quam. Volutpat est velit egestas dui id ornare arcu odio ut. Cursus eget nunc scelerisque viverra mauris. Tellus elementum sagittis vitae et leo duis. In nisl nisi scelerisque eu ultrices vitae auctor eu. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Arcu cursus vitae congue mauris rhoncus aenean.
			</p>
				</div>
			</div>
		);
	}
}

export default App;
