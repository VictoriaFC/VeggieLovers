import React from 'react'
import PropTypes from 'prop-types'
import './FavoritesCard.css'

const FavoritesCard = ({id, name, imageUrl, instructions, ingredients, deleteMealFromFavorites, isFavorite}) => {
	return (
		<div className='meal-card'>
			<div className="meal-card-left">
				<img className="meal-image"src={imageUrl}></img>
			</div>
			<div className="meal-card-middle">
				<h3 className="meal-card-header" >{name}</h3>
				<h4>Instructions:</h4>
				<p>{instructions}</p>
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

FavoritesCard.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	instructions: PropTypes.array.isRequired,
	ingredients: PropTypes.array.isRequired,
	deleteMealFromFavorites: PropTypes.func,
	isFavorite: PropTypes.bool
}