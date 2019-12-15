describe('Initial page loads', () => {
	beforeEach(()=> {
		cy.visit('http://localhost:3000');
	})
	it('focuses input when success', () => {
		 cy.route(
      "GET",
      "/v3/objectives/*",
      "fixture:need-responses/objective-detail.json"
    );
		cy.get('div').should('have.class', 'pokemon-list')
	})
   
})