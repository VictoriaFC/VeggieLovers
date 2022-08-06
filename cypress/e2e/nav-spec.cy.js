describe('nav functionality', () => {
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

	it('should be able to click on the Favorites button', () => {
		cy.get('nav').find('button').click()
	})

	it('should take the user to the favorites page after clicking the favorites button', () => {
		cy.get('nav').find('button').click()
		cy.url().should('eq', 'http://localhost:3000/favorites')
	})

	it('should take the user to the home page after clicking the home button', () => {
		cy.get('nav').find('button').click()
		cy.url().should('eq', 'http://localhost:3000/favorites')
		cy.get('nav').find('button').click()
		cy.url().should('eq', 'http://localhost:3000/')
	})
})