import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import { fetchAllMeals } from "../../apiCalls";


// Pages
import Nav from '../../Components/Nav/Nav.js'
import Welcome from '../../Components/Welcome/Welcome.js'
import Meals from '../../Components/Meals/Meals.js'
import Favorites from '../../Components/Favorites/Favorites.js'


class App extends Component {
	constructor() {
		super()
		this.state = {
			meals: [],
			favoriteMeals: []
		}
	}

	updateMeals = () => {
		fetchAllMeals()
		.then(response => response.json())
		.then(data => {
			this.setState({meals: this.parseApiMeals(data)})
		})
		.catch(error => console.log(error.message))
	}

	parseApiMeals = (data) => {
		return data.results.map(recipe => {
			return {
				id: recipe.id,
				name: recipe.name,
				description: recipe.description,
				instructions: this.parseApiInstructions(recipe.instructions),
				ingredients: this.parseApiIngredients(recipe.sections)
			}
		})
	}

	parseApiInstructions = (apiInstructions) => {
		return apiInstructions.map(instruction => instruction.display_text)
	}

	parseApiIngredients = (sections) => { 
		return sections.reduce((acc, section) => {
			section.components.forEach(component => {
				acc.push(component.raw_text)
			})
			return acc
		}, [])
	}
			
	render() {
		return (
			<div className='App'>
					<Route exact path='/' >
						<Nav />
						<Welcome meals={this.state.meals} updateMeals={this.updateMeals} />
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
