import React from 'react'
import './Meals.css'
import MealCard from '../../Components/MealCard/MealCard.js'

const Meals = () => {
	return(
		<div className='meals-container'>
			<MealCard />
			<MealCard />
			<MealCard />
		</div>
	)
}

export default Meals 