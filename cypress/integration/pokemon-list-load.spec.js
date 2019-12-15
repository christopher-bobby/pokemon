describe('Initial page loads', () => {
	beforeEach(()=> {
		cy.visit('http://localhost:3000');
	})
	it('focuses input when success', () => {
		.should('have.class', 'pokemon-list')
	})
})