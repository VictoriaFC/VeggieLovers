function randomNumberBetween(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const fetchAllMeals = () => {
	const from = randomNumberBetween(0, 500)

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': process.env.REACT_APP_TASTY_API_KEY,
			'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
		}
	}

	return fetch(`https://tasty.p.rapidapi.com/recipes/list?from=${from}&size=10&tags=vegetarian&q=dinner`, options)
}