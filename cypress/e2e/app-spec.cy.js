describe('app dashboard', () => {
	beforeEach(() => {
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
		cy.get('.welcome-container').find('p').contains('Are you looking for a date night idea?')
		cy.get('.welcome-container').find('button').contains('get random meals')
	})

	it('should be able to click the Get Random Meals button', () => {
		cy.get('.welcome-container').find('button').click()
	})


})