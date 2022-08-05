import React from 'react'
import './FavoritesCard.css'

const FavoritesCard = ({id, name, imageUrl, instructions, ingredients, deleteMealFromFavorites, isFavorite}) => {
	return (
		<div className='meal-card'>
			<div className="meal-card-left">
				<img className="meal-image"src={imageUrl}></img>
			</div>
			<div className="meal-card-middle">
				<h3 className="meal-card-header" >{name}</h3>
				<div className="instructions-container">
					<h4>Instructions:</h4>
					<p>{instructions}</p>
				</div>
			<button onClick={() => deleteMealFromFavorites(id)}>Remove Favorite</button>
			</div>
			<div className="meal-card-right">
				<div className="ingredients-container">
					<h4>Ingredients:</h4>
					<p>{ingredients}</p>
				</div>
			</div>
		</div>
	)
}

export default FavoritesCard 