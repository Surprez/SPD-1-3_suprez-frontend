// import logo from '../svg/logo.svg';
import React from 'react';
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

const App = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<Route exact path='/' component={Home} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={SignUp} />
				<Route exact path='/keywords' component={Keywords} />
				<Route exact path='/speak' component={Speak} />
			</div>
		</Router>
	);
}

export default App;
