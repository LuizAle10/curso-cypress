
/// <reference types = "cypress"/> 

//retirar comportamentos repetivos para os testes serem mais limpos => utilizar HOOKS

describe('Work with basic elements', () => {
    before(() => {  //executar antes de cada um dos testes é o método => beforeEach
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })//coloquei dentro do describe para garantir que todos os testes aproveitem esse comportamento
    

    beforeEach(() => {
        cy.reload()
    })

    //Teste => verificar se texto está aparecendo na tela
    it('Text', () => {
        cy.get('body').should('contain', 'Cuidado')  //body tras todo o corpo da tela
        cy.get('span').should('contain', 'Cuidado') //verificou em um campo especifico
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...') //have.text => quer o texto exato
    })

    it('Links', () => { 
       cy.get('[href="#"]').click() //links tem a tag "a"
       cy.get('#resultado').should('have.text','Voltou!')

       cy.reload()//dar um refresh na tela
       cy.get('#resultado').should('have.not.text','Voltou!') //verificar que não tem o texto
       cy.contains('Voltar').click() //além do get temos essa outra forma de busca => contains
       cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('TextFields', () => {
       cy.get('#formNome').type('Cypress Test') //texto no input
       cy.get('#formNome').should('have.value', 'Cypress Test')  //have.value => espera o valor exato 
   
       cy.get('#elementosForm\\:sugestoes') //sempre que tiver "id" com ":" colocar "//" antes
         .type('textarea')
         .should('have.value', 'textarea')

       cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
         .type('???')

       cy.get('[data-cy=dataSobrenome]')
         .type('Teste12345{backspace}{backspace}') //imprima 12345 e apague 4 e 5 
         .should('have.value', 'Teste123')

       cy.get('#elementosForm\\:sugestoes') 
         .clear()
         //escreve 'Erro', apaga, escreve 'acerto'
         .type('Erro{selectall}acerto', {delay:100}) //delay durante a escrita de 100 milissegundos
         .should('have.value', 'acerto')

    })


    it('RadioButton', ()=>{
        cy.get('#formSexoFem')
          .click()
          .should('be.checked') //verificar se está selecionado
          cy.get('#formSexoMasc').should('not.be.checked')//verificar se o masculino não está chegado
          
          cy.get("[name='formSexo']").should('have.length', 2)//garantir que existem dois radios buttons relacionados a um grupo
    })

    it.only('Checkbox', () => {
       cy.get('#formComidaPizza') //poderia ser => [name=formComidaFavorita]
          .click()
          .should('be.checked')
        
       cy.get('[name=formComidaFavorita]').click({ multiple: true })//agrupar pelo name clicando em todos os check box do grupo 
       cy.get('#formComidaPizza').should('not.be.checked')
       cy.get('#formComidaCarne').should('be.checked')
       cy.get('#formComidaFrango').should('be.checked')
       cy.get('#formComidaVegetariana').should('be.checked')
    })

    it.only('ComboBox', () => {
        //.should('have.value' =>Para selecionar só aceita o value da options

       //valor da tag option
       cy.get('[data-test=dataEscolaridade]')
         .select('2o grau completo')
         .should('have.value', '2graucomp') //validei pelo value não pelo texto do select
      
       //value
       cy.get('[data-test=dataEscolaridade]')
         .select('1graucomp')
         .should('have.value', '1graucomp')
         //TODO validar opções do combo
    })
    
    it.only('Combo multiplo', () => {
        cy.get('[data-testid=dataEsportes]')
        .select(['natacao', 'Corrida', 'nada']) //Para o combo multiplo quando eu mando via Array eu preciso mandar o value
       //TODO validar opções selecionadas do combo multiplo
    })




    
    
})



