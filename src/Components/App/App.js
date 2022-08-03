import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'


// Pages
import Nav from '../../Components/Nav/Nav.js'
import Welcome from '../../Components/Welcome/Welcome.js'
import Meals from '../../Components/Meals/Meals.js'
import Favorites from '../../Components/Favorites/Favorites.js'

class App extends Component {
	constructor() {
		super()
		this.state = {
			meals: []
		}
	}
	
	render() {
		return (
			<div className="App">
				<Nav />
				<Welcome />
				<Meals />
				<Favorites />
			</div>
		);
	}
}

export default App;
