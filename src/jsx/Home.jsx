// React imports
import React from "react";
import About from "./About.jsx";
import Hero from "./Hero.jsx";
import Speech from "./Speak";

// Default Export
const Home = props => {
	return (
		<div>
			<Hero />
			<Speech />
			<About />
		</div>
	);
};

export default Home;
