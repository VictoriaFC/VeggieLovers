import React from 'react'
import { Link, useLocation } from "react-router-dom"
import './Nav.css'

const Nav = () => {
	const location = useLocation()
	
	return(
		<nav>
			<Link to='/' className='nav-home'>
				<h1 className='logo'>VeggieLovers</h1>
			</Link>
			{location.pathname !== '/favorites' ? (
				<Link to='/favorites'>
					<button>Favorites</button>
				</Link>
			) : (
				<Link to='/' className='nav-favorites'>
					<button>Home</button>
				</Link>
			)}
		</nav>
	)
}

export default Nav 