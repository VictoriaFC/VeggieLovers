import React from 'react'
import { NavLink } from "react-router-dom"
import './Nav.css'

const Nav = () => {
	return(
		<nav className='nav-bar'>
			<NavLink className='nav-home' to='/'>Home</NavLink>
			<NavLink className='nav-favorites' to='/favorites'>Favorites</NavLink>
		</nav>
	)
}

export default Nav 