/// <reference types="cypress" />
describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:3000/');
  });
});

describe('Check next and previous button clicks', () => {
  beforeEach(() => {
    // Assuming you have the base URL set in your cypress.json,
    // or you would need to specify the full URL here.
    cy.visit('localhost:3000/'); // Adjust the path to the page where your test should run.
  });

  it('Clicks through all the users and back', () => {
    for (let i = 0; i < 11; i++) {
      cy.get('#user-next', { timeout: 10000 }) // Wait up to 10 seconds for the element to appear.
        .should('be.visible')
        .should('not.be.disabled')
        .click();
    }
    cy.get('#user-next', { timeout: 10000 })
      .should('be.visible')
      .should('be.disabled');
    for (let i = 12; i > 1; i--) {
      cy.get('#user-prev', { timeout: 10000 }) // Wait up to 10 seconds for the element to appear.
        .should('be.visible')
        .should('not.be.disabled')
        .click();
    }
    cy.get('#user-prev', { timeout: 10000 })
      .should('be.visible')
      .should('be.disabled');
  });
});
