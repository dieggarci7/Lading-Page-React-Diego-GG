import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
return (
	<div className="container-fluid 100vh p-0">
		<div>
			<Navbar />
			<Jumbotron></Jumbotron>
			<Card />
			<Footer />
		</div>
	</div>
);
};

export default Home;