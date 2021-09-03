
/// <reference types = "cypress"/> 


describe('Cypress basics', () => {
    it.only('Should visit a page and assert title', () => {
        //visit é um comando
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')//variavel "CY" => tem uma api poderosa o suficiente para fazermos os testes atravéz dela     

        //const title = cy.title()
        //console.log(title)

        cy.pause()//pausar a execução

        //title metodo que da o titulo => receber titulo na vaviável
        cy.title().should('be.equal', 'Campo de Treinamento')//fazendo assertivas com "Should
        //uma parte do nome
        cy.title().debug().should('contain','Campo')//fazendo debug => pegar detalhe de um determinado ponto

        //posso fazer dessa forma:
        cy.title()
           .should('be.equal', 'Campo de Treinamento')
           .should('contain', 'Campo').debug()//fazendo debug 

         //posso fazer dessa forma:
         cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

        
        //TODO Imprimir o log no console
        cy.title().then (title => {   //"then e should" tratam promisses
           console.log(title)


        //TODO escrever o title em um campos de texto }

    })

    //Para a execução ficar um pouco mais rápida inserir o "Only" para executar só esse teste
    //it.only('Should find and interact with an element', () => {
        //cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        it('Should find and interact with an element', () => {
            cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        
        cy.get('#buttonSimple').click()
        cy.get('#buttonSimple').should('have.value', 'Obrigado!')//assertiva no valor do botão      
        
        //posso fazer dessa forma:
        cy.get('#buttonSimple')
        .click()
        .should('have.value', 'Obrigado!')


    })
})