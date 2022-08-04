import React from 'react'
import './Favorites.css'
import FavoritesCard from '../../Components/FavoritesCard/FavoritesCard.js'

const Favorites = ({favoriteMeals, deleteMealFromFavorites}) => {

	const favoriteCardInfo = favoriteMeals.map(meal => {
		return(
			<FavoritesCard 
				id={meal.id}
				key={meal.id}
				name={meal.name}
				description={meal.description}
				instructions={meal.instructions}
				ingredients={meal.ingredients}
				isFavorite={meal.isFavorite}
				deleteMealFromFavorites={deleteMealFromFavorites}
			/>
		)
	})
	return(
		<div className='Favorites-container'>
			{favoriteMeals.length > 0 ? favoriteCardInfo : <h3>No favorites yet!</h3>}
		</div>
	)
}

export default Favorites 