/// <reference types="cypress" />

before(function () {
  cy.fixture("data.json").then(function (data) {
    this.data = data;
  });
});

describe("Validation book details are matching in the give json data file", function () {
  it("Validate Title", function () {
    cy.visit("http://192.168.0.101:3000");
    cy.get("[data-testid=search-box]")
      .clear()
      .type("is your problems")
      .get("ul>li")
      .contains("Anything You Want")
      .click()
      .get("[data-testid=search-box]")
      .should("contain.value", this.data.titles[0]);
  });
});

describe("Validation book details are matching in the give json data file", function () {
  it("Validate Title", function () {
    var totalQueries = this.data.queries.length;
    for (var queryIndex = 0; queryIndex < totalQueries; queryIndex++) {
      var queryString = this.data.queries[queryIndex];

      cy.visit("http://192.168.0.101:3000");
      const bookElement = cy
        .get("[data-testid=search-box]")
        .clear()
        .type(queryString)
        .get("ul>li:nth-child(1)");
      if (bookElement) {
        var actualTitle = bookElement
          .click()
          .get("[data-testid=button]")
          .click()
          .get("[data-testid=title]")
          .then(($element) => {
            actualTitle = $element.text();

            var titleIndex = this.data.titles.indexOf(actualTitle);

            var expectedTitle = this.data.titles[titleIndex];
            var expectedSummary =
              this.data.summaries[titleIndex].summary.substr(0, 150) + "...";
            var expectedAuthor = this.data.authors[titleIndex].author;

            if (bookElement) {
              cy.get("[data-testid=title]")
                .should("contain", expectedTitle)
                .get("[data-testid=summary]")
                .should("contain.text", expectedSummary)
                .get("[data-testid=author]")
                .should("contain", expectedAuthor);
            }
          });
      }
    }
  });
});
