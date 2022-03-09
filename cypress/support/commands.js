// ***********************************************
// This example commands.js shows you how to
// create the custom commands: 'createDefaultTodos'
// and 'createTodo'.
//
// The commands.js file is a great place to
// modify existing commands and create custom
// commands for use throughout your tests.
//
// You can read more about custom commands here:
// https://on.cypress.io/commands
// ***********************************************

//Filters bar
Cypress.Commands.add('clickAllFilter', () => {
    cy.get('ul.filters').contains('All').click()
});

Cypress.Commands.add('clickActiveFilter', () => {
    cy.get('ul.filters').contains('Active').click()
});

Cypress.Commands.add('clickCompletedFilter', () => {
    cy.get('ul.filters').contains('Completed').click()
});

Cypress.Commands.add('clearCompleted', () => {
    cy.get('button.clear-completed')
})


//List functions
Cypress.Commands.add('typeToDo', (text) => {
    if (text.length == 0) {
        cy.get('input.new-todo').type('{enter}')
    }
    else {
        cy.get('input.new-todo').type(text).type('{enter}')
    }
  });

Cypress.Commands.add('todoList', () => {
    cy.get('ul.todo-list')
})

Cypress.Commands.add('toggleFirstListItem', () => {
    cy.todoList().get('input.toggle').first().click()
})

Cypress.Commands.add('deleteToDo', () => {
    cy.get('ul.todo-list').get('button.destroy')
})



//compound functions

/*
* Clean up to reset app to starting state.
*/
Cypress.Commands.add('clearData', () => {
    cy.clickAllFilter()
    cy.deleteToDo().click({force: true, multiple: true})
});