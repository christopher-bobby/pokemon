describe('Initial page loads', () => {

	it('focuses input when success', () => {
		cy.visit('http://localhost:3000/pokemon-list');
		.should('have.class', 'pokemon-list')
	})
})