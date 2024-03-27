import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";

const navLanding = {
	tituloNavbar: "Comic Festival",
	subtituloNavbar1: "Home",
	subtituloNavbar2: "About us",
	subtituloNavbar3: "Services",
	subtituloNavbar4: "Contact"	
};

const jumbotronLanding = {
	titulo: "Welcome to the Comic Festival",
	parrafo: "As you already know, new dates have been opened in Barcelona, Madrid, Vitoria-Gasteiz and Lugo.",
	boton: "¡Buy your ticket!",
	handleClick: () => {
        alert("We're sorry but all tickets are sold out 😔");
	}
}

const imagenes = [
	{
		url: "https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		descripcion: "Barcelona on April 13"
	},
	{
		url: "https://w0.peakpx.com/wallpaper/56/272/HD-wallpaper-x-men-comics-gambit-marvel-wolverine-xmen.jpg",
		descripcion: "Madrid on May 8"
	},
	{
		url: "https://w0.peakpx.com/wallpaper/432/837/HD-wallpaper-the-hulk-avengers-comics-hulk-marvel-marvel-comics-superheroes-thumbnail.jpg",
		descripcion: "Vitoria-Gasteiz on June 12"
	},
	{
		url: "https://w0.peakpx.com/wallpaper/914/407/HD-wallpaper-venom-spider-man-marvel-comics-comics-thumbnail.jpg",
		descripcion: "Lugo on August 22"
	},
];

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div className="container">
				<Navbar props={navLanding}/>
			</div>
			<div className="container">
				<Jumbotron props={jumbotronLanding}/>
			</div>
				<Card atributoImagenes={imagenes}/>
			
		</div>
	);
};

export default Home;
