import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
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
			<div className='App'>
					<Route exact path='/' >
						<Nav />
						<Welcome />
						<Meals meals={this.state.meals}/>
					</Route>
					<Route exact path='/favorites'>
						<Nav />
						<Favorites />
					</Route>
			</div>
		);
	}
}

export default App;
