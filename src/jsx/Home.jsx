// React imports
import React from "react";
import About from "./About.jsx";
import Hero from "./Hero.jsx";

// Default Export
const Home = props => {
	return (
		<div>
			<Hero />
			<About />
		</div>
	);
};

export default Home;
