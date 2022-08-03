import React from 'react'
import './FavoritesCard.css'

const FavoritesCard = ({id, name, description, instructions, ingredients, removeMealFromFavorites, isFavorite}) => {
	return (
		<div className='meal-card'>
			<h3>{name}</h3>
			<p>{description}</p>
			<p>{instructions}</p>
			<p>{ingredients}</p>
			<button onClick={() => removeMealFromFavorites(id)}>Remove Favorite</button>
		</div>
	)
}

export default FavoritesCard 