import React from 'react'
import './Welcome.css'

const Welcome = ({updateMeals}) => {
	return(
		<div className='welcome-container'>
			<section className="welcome-info-container">
			<h1>Welcome to VeggieLovers</h1>
			<p>Are you looking for a date night idea?<br></br> 
			Are you vegetarian but feeling a bit uninspired when cooking?<br></br>
			You've come to the right place! At VeggieLovers we give you three delicious dinner recipes to make at home together. Can't decide which one to make with your partner tonight? Add it to your favorites for another time! </p>
			<button onClick={updateMeals}>get random meals</button>
			</section>
		</div>
	)
}

export default Welcome 