import React from 'react'
import './MealCard.css'

const MealCard = ({id, name, description, instructions, ingredients}) => {
	return (
		<div className='meal-card'>
			<h3>{name}</h3>
			<p>{description}</p>
			<p>{instructions}</p>
			<p>{ingredients}</p>
		</div>
	)
}

export default MealCard 