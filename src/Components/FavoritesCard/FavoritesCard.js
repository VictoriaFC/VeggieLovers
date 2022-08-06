import React from 'react'
import './FavoritesCard.css'

const FavoritesCard = ({id, name, imageUrl, instructions, ingredients, deleteMealFromFavorites, isFavorite}) => {
	return (
		<div className='fav-meal-card'>
			<div className="fav-meal-card-left">
				<img className="fav-meal-image"src={imageUrl}></img>
			</div>
			<div className="fav-meal-card-middle">
				<h3 className="fav-meal-card-header" >{name}</h3>
				<div className="fav-instructions-container">
					<h4>Instructions:</h4>
					<p>{instructions}</p>
				</div>
			<button onClick={() => deleteMealFromFavorites(id)}>Remove Favorite</button>
			</div>
			<div className="fav-meal-card-right">
				<div className="fav-ingredients-container">
					<h4>Ingredients:</h4>
					<p>{ingredients}</p>
				</div>
			</div>
		</div>
	)
}

export default FavoritesCard 