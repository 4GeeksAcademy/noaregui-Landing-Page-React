import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<Card />
		</>
	);
};

export default Home;
