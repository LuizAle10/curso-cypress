
/// <reference types = "cypress"/> 

describe('Esperas...', () =>{


    before(() => {  //executar antes de cada um dos testes é o método => beforeEach
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })//coloquei dentro do describe para garantir que todos os testes aproveitem esse comportamento
    
    
    beforeEach(() => {
        cy.reload()
    })
    
    it('Deve aguardar elemento estar disponivel', ()=> {
        cy.get('#novoCampo').should('not.exist')//garantir que ele não existe
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')//após clicar novamente não deve estar presente
        cy.get('#novoCampo').should('not.exist')//nesse momento vai existir
        cy.get('#novoCampo').type('funciona') //procura elemento até está disponivel e só depois escreve
    })

    it.only('Deve fazer retrys', ()=> {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
          .should('exist')
          .type('funciona')

    })

    it.only('Uso de fino', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista li') //itens
            .find('span') // da lista de itens
            .should('contain', 'Item 1')
       //cy.get('#lista li') //itens
          //  .find('span') // pra esse caso evitar o find
           // .should('contain', 'Item 2')
        cy.get('#lista li span')   
          .should('contain', 'Item 2')
        
    })
    
    //Padrão de timeout do cypress é de 4 segundos
    //Ao inves de colocar timeout em cada valor posso dizer para o cypress que agora o 
    //timeout padrão é "x" Segundos => Alterar arquivo "cypress.json" da pasta "node_modules"
   // {
    // "defaultCommandTimeout": 1000     
   // }
  // obs: fazer isso é perigoso, só fazer quando for necessário, em casos especificos mude
  // na consulta diretamente e não na aplicação toda

    it.only('Uso do timeout', () => {
        //cy.get('#buttonDelay').click() 
        //cy.get('#novoCampo',{timeout:1000}).should('exist') //utilizando timeout  => 1000 = 1 segundo
        
        //cy.get('#buttonListDOM').click() 
        //cy.wait(5000)//evitar wait fixo e usar timeout, pois pode causar problemas, sempre vou deixar a aplicação lenta para o pior caso e os dias que ela estiver boa vai ficar lenta da mesma forma
       // cy.get('#lista li span', {timeout: 30000})   
        //  .should('contain', 'Item 2')

       cy.get('#buttonListDOM').click() 
       cy.get('#lista li span')
         .should('have.length', 1)
       cy.get('#lista li span')
         .should('have.length', 2)


    it.only('Click', () => {
       cy.get('#buttonCount')
       .click()
      // .should('have value', '1')
       //.should('have value', '11')
       .click()
       .should('have value', '111') //comandos que alteram o html não serão retentados, poderiamm causarmuita sujeira na reexecução
    })   
    
    //then aguardou que o get concluísse 
    // should fica sendo executado ao longo da espera

    //return 2 //só o then considera return
    //não existe um pior cada um tem suas qualidades

    it.only('Should vs Then', () => {
       cy.get('#buttonListDOM').then($el => {

        //.should('have.length', 1)  
        //console.log($el)

        expect($el).to.have.length(1) //mesma coisa mas em notações diferentes
        cy.get('#buttonList') // se precisar fazer novas buscar sepre usar "then"; se usar should fica em looping fazendo retentativas
        
      })
    })

})


})