describe("My First Test", () => {
    it('Test1', () => {
        //Test steps will go here

        //visiting to Google.com
        cy.visit("https://www.google.com/");

        //positive test
        //verifying title of the page
        cy.title().should('eq', 'Google');
    })

    it('Test2', () => {
        //Test steps will go here

        //visiting to Google.com
        cy.visit("https://www.google.com/");

        //negative test
        //verifying title of the page
        cy.title().should('eq', 'Google123');
    })
})