describe("CSS Locators in Cypress", () => {
    it("Css Locator", () => {
        cy.visit("http://www.automationpractice.pl/index.php")

        //css locator -> id 
        //type is used to write text in input box
        cy.get('#search_query_top').type("T-Shirts");

        //css locator -> tag[attribute='value']
        cy.get("button[name='submit_search']").click();

        //validation/assertion
        //css locator -> class
        cy.get(".lighter").should('contain', 'T-Shirts');
    })
})