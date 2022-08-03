import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'


// Pages
import Nav from '../../Components/Nav/Nav.js'

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
				<header className="App-header">
					<h1>
						VeggieLovers
					</h1>
				</header>
			</div>
		);
	}
}

export default App;
