/// <reference types="cypress" />

describe("Accessibility tests", () => {
  beforeEach(() => {
    cy.visit("/")
      .get("div")
      .injectAxe();
    cy.wait(100);
  });
  it("Has no detectable accessibility violations on load", () => {
    cy.checkA11y();
  });
});
