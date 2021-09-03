
//criei novo arquivo de comandos para organização
//comandos especificos das contas

import loc from './locators'

Cypress.Commands.add('acessarMenuConta', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.CONTAS).click()

})

Cypress.Commands.add('inserirConta', conta => {
    cy.get(loc.CONTAS.SETTINGS).click()
    cy.get(loc.CONTAS.CONTAS).click()


})