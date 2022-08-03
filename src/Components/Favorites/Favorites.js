import React from 'react'
import './Favorites.css'
import FavoritesCard from '../FavoritesCard/FavoritesCard'

const Favorites = () => {
	return (
		<div className='favorites-container'>
			<h3>I'm the favorites container</h3>
			<FavoritesCard />
		</div>
	)
}

export default Favorites