// import logo from '../svg/logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import SignUp from './SignUp.jsx';
import Login from './LogIn.jsx';
import Home from './Home.jsx';

// CSS files
import '../css/main.css';
import '../css/fonts.css';

const App = () => {
	return (
		<Router>
			<div id='root'>
				<Navbar />
				<Route exact path='/' component={Home} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={SignUp} />
			</div>
		</Router>
	);
}

export default App;
