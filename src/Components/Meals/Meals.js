import React from 'react'
import './Meals.css'
import MealCard from '../../Components/MealCard/MealCard.js'

const Meals = ({meals, addMealToFavorites}) => {

	const mealCardInfo = meals.map(meal => {
		return(
			<MealCard 
				id={meal.id}
				key={meal.id}
				name={meal.name}
				imageUrl={meal.imageUrl}
				instructions={meal.instructions}
				ingredients={meal.ingredients}
				isFavorite={meal.isFavorite}
				addMealToFavorites={addMealToFavorites}
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