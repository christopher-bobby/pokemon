describe('Initial page loads', () => {
	beforeEach(()=> {
		cy.visit('http://localhost:3000'); // initializing address
	})
	it('focuses input when success', () => {
		.should('have.class', 'pokemon-list')
	})
	cy.server();
    cy.route({
    	url: 'https://pokeapi.co/api/v2/pokemon/',
    	method: 'GET',
    	response: []
    });
})