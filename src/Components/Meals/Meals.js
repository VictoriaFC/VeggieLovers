import React from 'react'
import './Meals.css'
import MealCard from '../../Components/MealCard/MealCard.js'

const Meals = ({meals}) => {

	const mealCardInfo = meals.map(meal => {
		return(
			<MealCard 
				id={meal.id}
				key={meal.id}
				name={meal.name}
				description={meal.description}
				instructions={meal.instructions}
				ingredients={meal.ingredients}
			/>
		)
	})
	return(
		<div className='meals-container'>
			{mealCardInfo}
		</div>
	)
}

export default Meals 