/// <reference types="cypress" />

context("Search Books", () => {
  beforeEach(() => {
    cy.visit("http://192.168.0.101:3000");
  });

  it("check search results length is 3 query string match", () => {
    const results = cy
      .get("[data-testid=search-box]")
      .clear()
      .type("is your problems")
      .get("ul>li")
      .should("have.length", "3");
  });

  it("check search results length 3 for partial string match", () => {
    const results = cy
      .get("[data-testid=search-box]")
      .clear()
      .type("is")
      .get("ul>li")
      .should("have.length", "3");
  });

  it("check searched book is listed in the dropdown", () => {
    cy.get("[data-testid=search-box]")
      .clear()
      .type("relationship")
      .get("ul>li")
      .contains("The Nurture Assumption")
      .click()
      .get("[data-testid=search-box]")
      .should("have.value", "The Nurture Assumption");
  });

  it("check for query `is your problems` book listed contains `Sapiens`", () => {
    cy.get("[data-testid=search-box]")
      .clear()
      .type("is your problems")
      .get("ul>li")
      .contains("Sapiens")
      .click()
      .get("[data-testid=search-box]")
      .should("have.value", "Sapiens");
  });

  it("check user is able to select book in any index from the results", () => {
    cy.get("[data-testid=search-box]")
      .clear()
      .type("the")
      .get("ul>li")
      .contains("The 10X Rule")
      .click()
      .get("[data-testid=search-box]")
      .should("have.value", "The 10X Rule");
  });

  it("check if user is able to select the title & same is aucompleted in search box", () => {
    cy.get("[data-testid=search-box]")
      .clear()
      .type("relationship")
      .get("ul>li")
      .contains("The Nurture Assumption")
      .click()
      .get("[data-testid=search-box]")
      .should("have.value", "The Nurture Assumption");
  });
});
