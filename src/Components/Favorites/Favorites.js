import React from 'react'
import './Favorites.css'
import FavoritesCard from '../FavoritesCard/FavoritesCard'

const Favorites = () => {
	return (
		<div className='favorites-container'>
			<FavoritesCard />
			<FavoritesCard />
			<FavoritesCard />
		</div>
	)
}

export default Favorites