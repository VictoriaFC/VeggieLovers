import React from 'react'
import './Favorites.css'
import FavoritesCard from '../../Components/FavoritesCard/FavoritesCard.js'

const Favorites = ({favoriteMeals, removeMealFromFavorites}) => {

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
				removeMealFromFavorites={removeMealFromFavorites}
			/>
		)
	})
	return(
		<div className='Favorites-container'>
			{favoriteCardInfo}
		</div>
	)
}

export default Favorites 