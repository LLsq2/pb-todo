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


  it('assert list created', () => {
    cy.typeToDo('1')
    cy.typeToDo('1')
    cy.typeToDo('1')

    cy.todoList().children().should('have.length', 3)

    cy.clearData(3)
  });

  /*
  * Test long string >255 chars
  */
  it('assert long item', () => {
    var longString = '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890'
    var endString = '12345678901234567890123456789012345678901234567890123456'
    cy.typeToDo(longString.concat(longString, endString))

    cy.todoList().children().should('have.length', 1)

    cy.clearData(1)
  });

  /*
  * Test empty string
  */
  it('assert empty string', () => {
    cy.typeToDo('')

    cy.todoList().should('not.exist')
  });

  /*
  * Test delete
  */
  it('assert delete button', () => {
    cy.typeToDo('Delete this')
    cy.todoList().children().should('have.length', 1)

    cy.deleteToDo(0).click({force: true})
    cy.todoList().should('not.exist')

    
  });

})
