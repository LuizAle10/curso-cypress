

//1.Inserir Conta
//2. Alterar Conta
//3. Inserir Conta Repetida
//4. Inserir Movimentação
//5. Cálculo de saída
//6. Remover movimentação

import loc from '../../support/locators'  //importar os locators
import '../../support/commandsContas'


/// <reference types = "cypress"/> 

describe('Should test at a functional level', () => {
    before (() => {
        cy.login('TesteCypressAle@gmail.com', 'TesteCypressAle') //Comando criado em "commands" tirando a necessidade das linhas abaixo
        cy.resetApp()
        //cy.visit('https://barrigareact.wcaquino.me/')
        //cy.get(loc.LOGIN.USER).type('TesteCypressAle@gmail.com')
        //cy.get(loc.LOGIN.PASSWORD).type('TesteCypressAle')
        //cy.get(loc.LOGIN.BTN_LOGIN).click()
        //cy.get(loc.MESSAGE).should('contain', 'Bem vindo,') 
    })

    it('Should create an account', () => {
        cy.acessarMenuConta()//Acessar menu conta    
        cy.inserirConta()
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso!')  //a classe ai ser utilizada para todas as mensagens
    })

    it.only('Should update an account', () => {
        cy.acessarMenuConta()//Acessar menu conta    
        
        cy.xpath(loc.CONTAS.XPATH_BTN_ALTERAR).click()
        cy.get(loc.CONTAS.NOME)
        .clear()
        .type('Conta alterada')
        cy.get(loc.CONTAS.XPATH_BTN_ALTERAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso!')
    })
}) 

