describe('Favorites Page w/ No Favorites', () => {
	beforeEach(() => {
		cy.intercept({ method: 'GET', url: 'https://tasty.p.rapidapi.com/recipes/list*'}, {
			statusCode: 200,
			fixture: "recipes.json"
		})
		cy.visit('http://localhost:3000/favorites')
	})

  it('should display a favorites header', () => {
		cy.get('.favorites-info-container').should('be.visible')
		cy.get('.favorites-info-container').contains('h1', 'Favorites')
		cy.get('.favorites-info-container').contains('p', 'We hope you enjoy these delicious vegetarian meals!')
  })

	it('should display No Favorites Yet if no meals have been added', () => {
		cy.get('.favorites-container').should('be.visible')
		cy.get('.favorites-container').contains('h3', 'No favorites yet!')
	})
})

describe('Favorites Page w/ Favorites', () => {
	beforeEach(() => {
		cy.intercept({ method: 'GET', url: 'https://tasty.p.rapidapi.com/recipes/list*'}, {
			statusCode: 200,
			fixture: "recipes.json"
		})
		cy.visit('http://localhost:3000/')
		cy.get('.welcome-container').find('button').click()
		cy.get('.meals-container').find('.meal-card').last().contains('button', 'Add to Favorites').click()
		cy.get('nav').find('button').click()
	})

	it('should display meal that was added to favorites', () => {
		cy.get('.favorites-container').find('.fav-meal-card').should('have.length', 1)
		cy.get('.favorites-container').find('.fav-meal-card').first().should('be.visible')
	})

	it('should see image, name, instructions, ingredients and remove button on fav meal card', () => {
		cy.get('.favorites-container').find('.fav-meal-card').first().contains('h3', 'Confetti Latkes')
		cy.get('.favorites-container').find('.fav-meal-card').first().contains('h4', 'Instructions')
		cy.get('.favorites-container').find('.fav-meal-card').first().contains('p')
		cy.get('.favorites-container').find('.fav-meal-card').first().contains('h4', 'Ingredients')
		cy.get('.favorites-container').find('.fav-meal-card').first().contains('p')
		cy.get('.favorites-container').find('.fav-meal-card').first().contains('button', 'Remove Favorite')
	})

	it('should be able to remove card on click', () => {
		cy.get('.favorites-container').find('.fav-meal-card').first().find('button').click()
	})
})