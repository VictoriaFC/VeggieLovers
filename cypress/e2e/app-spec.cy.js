describe('Home Page', () => {
	beforeEach(() => {
		cy.intercept({ method: 'GET', url: 'https://tasty.p.rapidapi.com/recipes/list*'}, {
			statusCode: 200,
			fixture: "recipes.json"
		})
		cy.visit('http://localhost:3000/')
	})

  it('should display nav bar with logo and favorites button', () => {
		cy.get('nav').should('be.visible')
		cy.get('nav').find('.veggie-lovers-logo').contains('h1', 'VeggieLovers')
		cy.get('nav').find('button').contains('button', 'Favorites')
  })

	it('should display a welcome container', () => {
		cy.get('.welcome-container').should('be.visible')
		cy.get('.welcome-container').find('h1').contains('Welcome to VeggieLovers')
		cy.get('.welcome-container').find('h4').contains('Are you looking for date ideas?')
		cy.get('.welcome-container').find('button').contains('get random meals')
	})

	it('should be able to click the Get Random Meals button', () => {
		cy.get('.welcome-container').find('button').click()
	})

	it('should display 3 recipe ideas on click', () => {
		cy.get('.welcome-container').find('button').click()
		cy.get('.meals-container').find('.meal-card').should('have.length', 3)
	})

	it('should display recipe image on meal cards', () => {
		cy.get('.welcome-container').find('button').click()
		cy.get('.meal-card').first().find('.meal-image').should('be.visible')
	})

	it('should display recipe name on meal cards', () => {
		cy.get('.welcome-container').find('button').click()
		cy.get('.meals-container').find('.meal-card').first().contains('h3', 'Grilled Cauliflower Tacos')
	})

	it('should display recipe instructions on meal cards', () => {
		cy.get('.welcome-container').find('button').click()
		cy.get('.meals-container').find('.meal-card').first().contains('h4', 'Instructions')
		cy.get('.meals-container').find('.meal-card').first().contains('p', 'Preheat the oven')
	})

	it('should display ingredients on meal cards', () => {
		cy.get('.welcome-container').find('button').click()
		cy.get('.meals-container').find('.meal-card').first().contains('h4', 'Ingredients')
		cy.get('.meals-container').find('.meal-card').first().contains('p', '⅓ cup avocado oil')
	})

	it('should display an Add to Favorites button at the bottom of the meal cards', () => {
		cy.get('.welcome-container').find('button').click()
		cy.get('.meals-container').find('.meal-card').first().contains('button', 'Add to Favorites')
	})

	it('should be able to click the Add to Favorites button at the bottom of the meal cards', () => {
		cy.get('.welcome-container').find('button').click()
		cy.get('.meals-container').find('.meal-card').first().contains('button', 'Add to Favorites').click()
	})

	it('should be able to add recipe to favorites on click', () => {
		cy.get('.welcome-container').find('button').click()
		cy.get('.meals-container').find('.meal-card').first().contains('button', 'Add to Favorites').click()
		cy.get('nav').find('button').click()
		cy.get('.favorites-container').find('.fav-meal-card').should('have.length', 1)
		cy.get('.favorites-container').find('.fav-meal-card').contains('h3', 'Grilled Cauliflower Tacos')
	})
})