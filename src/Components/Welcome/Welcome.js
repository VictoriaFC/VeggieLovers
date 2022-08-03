import React from 'react'
import './Welcome.css'

const Welcome = ({updateMeals}) => {
	return(
		<div className='welcome-container'>
			<h1>Welcome to VeggieLovers</h1>
			<p>app blurb description goes here</p>
			<button className='get-random-meals-button' onClick={updateMeals}>get random meals</button>
		</div>
	)
}

export default Welcome 