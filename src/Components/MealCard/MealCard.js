import React from 'react'
import PropTypes from 'prop-types'
import './MealCard.css'


const MealCard = (props) => {
	const {id, name, imageUrl, instructions, ingredients, addMealToFavorites, isFavorite} = props;
	const renderAddFavoritesButton = () => {
		if(isFavorite) {
			return <button>Added!</button>
		} else {
			return <button onClick={() => addMealToFavorites(id)}>Add to Favorites</button>
		}
	}

	return (
		<div className='meal-card'>
			<section className="top-section">
				<div className="meal-card-left">
					<img className="meal-image"src={imageUrl}></img>
				</div>
				<div className="meal-card-middle">
					<h3 className="meal-card-header" >{name}</h3>
					<div className="instructions-container">
						<h4>Instructions:</h4>
						<p>{instructions}</p>
					</div>
				</div>
				<div className="meal-card-right">
					<div className="ingredients-container">
						<h4>Ingredients:</h4>
						<p>{ingredients}</p>
					</div>
				</div>
			</section>
			<section className="bottom-section">
				<div>
					{renderAddFavoritesButton()}
				</div>
			</section>
		</div>
	)
}

export default MealCard 

MealCard.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	imageUrl: PropTypes.string.isRequired,
	instructions: PropTypes.array.isRequired,
	ingredients: PropTypes.array.isRequired,
	addMealToFavorites: PropTypes.func,
	isFavorite: PropTypes.bool
}

MealCard.defaultProps = {
	isFavorite: false
}