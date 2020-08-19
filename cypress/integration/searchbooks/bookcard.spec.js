/// <reference types="cypress" />

context("Book cards verification", () => {
  beforeEach(() => {
    cy.visit("http://192.168.0.101:3000");
  });

  it("check searched book is selected added into the list", () => {
    cy.get("[data-testid=search-box]")
      .clear()
      .type("is your problems")
      .get("ul>li")
      .contains("Slipstream Time Hacking")
      .click()
      .get("[data-testid=search-box]")
      .should("have.value", "Slipstream Time Hacking")
      .get("[data-testid=button]")
      .click()
      .get(":nth-child(4) > .Book > [data-testid=title]")
      .should("be.visible")
      .should("contain", "Slipstream Time Hacking");
  });

  it("check if there is already one book added to list, second book is appended into the list of 1 book", () => {
    cy.get("[data-testid=search-box]")
      .clear()
      .type("is your problems")
      .get("ul>li")
      .contains("Slipstream Time Hacking")
      .click()
      .get("[data-testid=button]")
      .click()
      .get(":nth-child(4) > .Book > [data-testid=title]")
      .should("contain", "Slipstream Time Hacking")
      .get("[data-testid=search-box]")
      .clear()
      .type("is your problems")
      .get("ul>li")
      .contains("Anything You Want")
      .click()
      .get("[data-testid=button]")
      .click()
      .get(":nth-child(5) > .Book > [data-testid=title]")
      .should("contain", "Anything You Want");
  });

  it("check if there is already two book added to list, third book is appended into the list 2 books", () => {
    cy.get("[data-testid=search-box]")
      .clear()
      .type("is your problems")
      .get("ul>li")
      .contains("Slipstream Time Hacking")
      .click()
      .get("[data-testid=button]")
      .click()
      .get(":nth-child(4) > .Book > [data-testid=title]")
      .should("contain", "Slipstream Time Hacking")
      .get("[data-testid=search-box]")
      .clear()
      .type("is your problems")
      .get("ul>li")
      .contains("Anything You Want")
      .click()
      .get("[data-testid=button]")
      .click()
      .get(":nth-child(5) > .Book > [data-testid=title]")
      .should("contain", "Anything You Want")
      .get("[data-testid=search-box]")
      .clear()
      .type("is your problems")
      .get("ul>li")
      .contains("Sapiens")
      .click()
      .get("[data-testid=button]")
      .click()
      .get(":nth-child(6) > .Book > [data-testid=title]")
      .should("contain", "Sapiens");
  });

  it("check if user is able to add the book to the list, even if that books is already present in the list", () => {
    for (var i = 0; i < 5; i++) {
      cy.get("[data-testid=search-box]")
        .clear()
        .type("achieve")
        .get("ul>li")
        .contains("The Richest Man in Babylon")
        .click()
        .get("[data-testid=button]")
        .click()
        .get("[data-testid=title]")
        .should("contain", "The Richest Man in Babylon");
    }
  });
});
