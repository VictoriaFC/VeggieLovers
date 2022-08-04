import React from 'react'
import './MealCard.css'

const MealCard = ({id, name, instructions, ingredients, addMealToFavorites, isFavorite}) => {
	return (
		<div className='meal-card'>
			<h3>{name}</h3>
			<h4>Instructions:</h4>
			<p>{instructions}</p>
			<h4>Ingredients:</h4>
			<p>{ingredients}</p>
			<button onClick={(event) => addMealToFavorites(event, id)}>Add to Favorites</button>
			{isFavorite && <button>Added!</button>}
		</div>
	)
}

export default MealCard 