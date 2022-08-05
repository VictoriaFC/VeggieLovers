import React from 'react'
import './Loading.css'
import loadingGif from '../../assets/cooking-spinner.gif'


const Loading = () => {
	return(
		<div className="loading-container">
			<p>Loading...</p>
			<img className="loading-gif" src={loadingGif}/>
		</div>
	)
}

export default Loading