import React from 'react'
import './MealCard.css'


const MealCard = ({id, name, imageUrl, instructions, ingredients, addMealToFavorites, isFavorite}) => {
	
	const renderAddFavoritesButton = () => {
		if(isFavorite) {
			return <button>Added!</button>
		} else {
			return <button onClick={() => addMealToFavorites(id)}>Add to Favorites</button>
		}
	}

	return (
		<div className='meal-card'>
			<div className="meal-card-left">
				<img className="meal-image"src={imageUrl}></img>
			</div>
			<div className="meal-card-middle">
				<h3 className="meal-card-header" >{name}</h3>
				<h4>Instructions:</h4>
				<p>{instructions}</p>
				{renderAddFavoritesButton()}
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

export default MealCard 