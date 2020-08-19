/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://192.168.0.101:3000");
  });

  it("check the header text ", () => {
    cy.get("h1>span").contains("Search Books");
  });

  it("check if the text box is enabled", () => {
    cy.get("[data-testid=search-box]").should("be.enabled");
  });

  it(".focus() - focus on a Seach DOM element", () => {
    cy.get("[data-testid=search-box]")
      .focus()
      .should("have.attr", "placeholder", "Enter your search here");
  });

  it(".clear() - clears an input or textarea element", () => {
    cy.get("[data-testid=search-box]")
      .type("Clear this text")
      .should("have.value", "Clear this text")
      .clear()
      .should("have.value", "");
  });

  it(".clear() - verify an input in the search element", () => {
    cy.get("[data-testid=search-box]")
      .clear()
      .type("is your problems")
      .should("have.value", "is your problems");
  });

  it("Check Submit button is present in the DOM", () => {
    cy.get("[data-testid=button]").should("have.attr", "value", "submit");
  });

  it("Check Submit button is enabled", () => {
    cy.get("[data-testid=button]").should("be.enabled");
  });

  it(".submit() - click on submit a form", () => {
    cy.get("[data-testid=button]").focus().click();
  });
});
