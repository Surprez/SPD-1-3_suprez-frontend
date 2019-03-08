// import logo from '../svg/logo.svg';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Keywords from './Keywords.jsx'
import Navbar from './Navbar.jsx';
import SignUp from './SignUp.jsx';
import Login from './LogIn.jsx';
import Speak from './Speak.jsx'
import Home from './Home.jsx';

// CSS files
import '../css/main.css';
import '../css/fonts.css';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keywords: []
		};
	}

	saveKeywords = (newKeywords) => {
		console.log("HOORAY")
		this.setState({ keywords: newKeywords })
		console.log(this.state.keywords)
	}

	render() {
		return (
			<Router>
				<div>
					<Navbar />
					<Route exact path='/' component={Home} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/signup' component={SignUp} />
					<Route exact path='/keywords' component={Keywords} saveKeywords={this.saveKeywords.bind(this)} />
					<Route exact path='/speak' component={Speak} keywords={this.state.keywords} />
				</div>
			</Router>
		);
	}
}

export default App;
