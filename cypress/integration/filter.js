// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />

// check this file using TypeScript if available
// @ts-check

import '../support/commands.js';

describe('Assignment', function () {
  before(() => {
    cy.visit('http://localhost:8888');
  });

  /*
  * Test that list containing only completed todo shows nothing in active
  */
  it('completed todo no active', () => {
    cy.typeToDo('1')
    cy.toggleFirstListItem()

    //Check All list has 1 item
    cy.todoList().children().should('have.length', 1)
    cy.clickActiveFilter()

    //Check Active list has 0 items
    cy.todoList().children().should('have.length', 0)
    
    cy.clearData(0)
  });

  /*
  * Test that list containing only active todo shows nothing in completed
  */
  it('active todo no empty completed', () => {
    cy.typeToDo('1')

    //Check All list has 1 item
    cy.todoList().children().should('have.length', 1)
    cy.clickCompletedFilter()

    cy.todoList().children().should('have.length', 0)
    
    cy.clearData(1)
  });

  /*
  * Test clear completed button
  */
  it('clear completed button', () => {
    cy.typeToDo('1')

    //Check All list has 1 item
    cy.todoList().children().should('have.length', 1)
    cy.clearCompleted().should('not.exist')

    cy.toggleFirstListItem()
    cy.clearCompleted().click()
    cy.todoList().should('not.exist')
  });

})