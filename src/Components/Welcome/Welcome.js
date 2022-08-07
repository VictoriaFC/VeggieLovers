import React from 'react'
import PropTypes from 'prop-types'
import './Welcome.css'

const Welcome = ({updateMeals}) => {
	return(
		<div className='welcome-container'>
			<section className="welcome-info-container">
			<h1>Welcome to VeggieLovers</h1>
			<h4>Are you looking for a date night idea?<br></br> 
			Are you vegetarian but feeling a bit uninspired when cooking?<br></br>
			You've come to the right place! At VeggieLovers we give you three delicious dinner recipes to make at home together.</h4>
			<button onClick={updateMeals}>get random meals</button>
			</section>
		</div>
	)
}

export default Welcome 

Welcome.propTypes = {
	updateMeals: PropTypes.func
}