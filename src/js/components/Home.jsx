import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import CardProps from "./CardProps";
import Footer from "./Footer";


const Home = () => {
return (
	<div className="container-fluid vh-100 p-0">
		<div>
			<Navbar />
			<Jumbotron></Jumbotron>
			<CardProps />
			<Footer />
		</div>
	</div>
);
};

export default Home;