
/// <reference types = "cypress"/> 

describe('Work with basic elements', () => {
    
    //Teste => verificar se texto está aparecendo na tela
    it('Text', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('body').should('contain', 'Cuidado')  //body tras todo o corpo da tela
        cy.get('span').should('contain', 'Cuidado') //verificou em um campo especifico
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...') //have.text => quer o texto exato
    })

    it.only('Links', () => { //only => executar só esse teste
       cy.visit('https://www.wcaquino.me/cypress/componentes.html')
       cy.get('[href="#"]').click() //links tem a tag "a"
       cy.get('#resultado').should('have.text','Voltou!')

       cy.reload()//dar um refresh na tela
       cy.get('#resultado').should('have.not.text','Voltou!') //verificar que não tem o texto
       cy.contains('Voltar').click() //além do get temos essa outra forma de busca => contains
       cy.get('#resultado').should('have.text', 'Voltou!')
    })


   })



