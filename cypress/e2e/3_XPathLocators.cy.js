describe("XPath Locators", ()=> {
    it("Find no of products", ()=>{

        //visiting the website
        cy.visit("http://www.automationpractice.pl/index.php?");

        cy.xpath("//a[@class='blockbestsellers']").click();

        //chained xpath
        cy.xpath("//ul[@id='blockbestsellers']/li").should('have.length', '6'); //assertion

    })
})