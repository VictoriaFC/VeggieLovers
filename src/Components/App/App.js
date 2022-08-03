import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'


// Pages
import Nav from '../../Components/Nav/Nav.js'
import Welcome from '../../Components/Welcome/Welcome.js'
import Meals from '../../Components/Meals/Meals.js'

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
			</div>
		);
	}
}

export default App;
