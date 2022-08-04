import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import { fetchAllMeals } from "../../apiCalls";


// Pages
import Nav from '../../Components/Nav/Nav.js'
import Welcome from '../../Components/Welcome/Welcome.js'
import Meals from '../../Components/Meals/Meals.js'
import Favorites from '../../Components/Favorites/Favorites.js'
import FavoritesHeader from '../../Components/FavoritesHeader/FavoritesHeader.js'
import Loading from '../../Components/Loading/Loading.js'


class App extends Component {
	constructor() {
		super()
		this.state = {
			meals: [],
			favoriteMeals: [],
			isFavorite: false,
			isLoading: false
		}
	}

	updateMeals = () => {
		this.setState({isLoading: true})
		fetchAllMeals()
		.then(response => response.json())
		.then(data => {
			this.setState({meals: this.parseApiMeals(data), isLoading: false})
		})
		.catch(error => console.log(error.message))
	}

	parseApiMeals = (data) => {
		const filteredResults = data.results
																.filter(recipe => recipe.instructions && recipe.sections)
																.slice(0, 3)

		return filteredResults.map(recipe => {
			return {
				id: recipe.id,
				name: recipe.name,
				instructions: this.parseApiInstructions(recipe.instructions),
				ingredients: this.parseApiIngredients(recipe.sections),
				isFavorite: false
			}
		})
	}

	parseApiInstructions = (apiInstructions) => {
		const parseableInstructions = apiInstructions || []

		return parseableInstructions.map(instruction => instruction.display_text)
	}

	parseApiIngredients = (sections) => {
		const parseableSections = sections || []

		return parseableSections.reduce((acc, section) => {
			section.components.forEach(component => {
				acc.push(component.raw_text)
			})
			return acc
		}, [])
	}

	addMealToFavorites = (event, id) => {
		event.preventDefault()
		const favoritedMeal = this.state.meals.find(meal => meal.id === id)
		this.setState({favoriteMeals: [...this.state.favoriteMeals, favoritedMeal], isFavorite: true})
	}

	deleteMealFromFavorites = (id) => {
    console.log(id);
    const filteredFavorites = this.state.favoriteMeals.filter(meal => meal.id != id)

    this.setState({ favoriteMeals: filteredFavorites });
  }
			
	render() {
		const { favoriteMeals, meals, isLoading } = this.state;

		return (
			<div className='App'>
					<Route exact path='/' >
						<Nav />
						<Welcome meals={meals} updateMeals={this.updateMeals} />
						{!isLoading ? 
						<Meals meals={meals} addMealToFavorites={this.addMealToFavorites}/>
						:
						<Loading />}
					</Route>
					<Route exact path='/favorites'>
						<Nav />
						<FavoritesHeader />
						<Favorites favoriteMeals={favoriteMeals} deleteMealFromFavorites={this.deleteMealFromFavorites}/>
					</Route>
			</div>
		);
	}
}

export default App;
