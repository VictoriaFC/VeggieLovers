import React from 'react'
import { Link, useLocation } from "react-router-dom"
import './Nav.css'

const Nav = () => {
	const location = useLocation()

	return(
		<nav>
			{location.pathname !== '/favorites' ? (
				<Link to='/favorites'>
					<button className='nav-favorites'>Favorites</button>
				</Link>
			) : (
				<Link to='/'>
					<button className='nav-home'>Home</button>
				</Link>
			)}
			<Link to='/'>
				<h1 className='veggie-lovers-logo'>VeggieLovers</h1>
			</Link>
		</nav>
	)
}

export default Nav 