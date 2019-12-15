describe('Input form', () => {

	it('focuses input when success', () => {
		cy.visit('http://localhost:3000/pokemon-detail/3');
		cy.focused()
		.should('have.class', 'focused')
	})
})