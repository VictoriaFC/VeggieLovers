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
			meals: [
				{
					id: 1,
					name: "Grilled Cauliflower Tacos",
					description: "These cauliflower tacos are spiced to perfection and oh so satisfying. Cauliflower is marinated in a zesty, savory blend of lime juice, brown sugar, and tons of spices, then grilled to charred perfection. To build the tacos, layer the cauliflower on warm tortillas with plenty of the creamy, smoky poblano-pepita sauce, cabbage, cilantro, and crema.",
					instructions: 'instructions go here',
					ingredients: 'ingredients go here'
				},
				{
					id: 2, 
					name: "Korean Corn Cheese Spicy Ramen", 
					description: "We combined two Korean classics–corn cheese and spicy ramen–to make this garlicky, spicy, and cheesy dish that’s sure to be a snack time favorite!",
					instructions: 'instructions go here',
					ingredients: 'ingredients go here'
				}
			]
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
