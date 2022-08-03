import React, { Component } from 'react'
import './App.css';

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
