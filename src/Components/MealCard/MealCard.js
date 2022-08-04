import React from 'react'
import './MealCard.css'

const MealCard = ({id, name, description, instructions, ingredients, addMealToFavorites, isFavorite}) => {
	return (
		<div className='meal-card'>
			<h3>{name}</h3>
			<p>{description}</p>
			<h4>Instructions:</h4>
			<p>{instructions}</p>
			<h4>Ingredients:</h4>
			<p>{ingredients}</p>
			<button onClick={() => addMealToFavorites(id)}>Add to Favorites</button>
		</div>
	)
}

export default MealCard 