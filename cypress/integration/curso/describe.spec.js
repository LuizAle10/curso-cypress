

/// <reference types = "cypress"/> 

it.only('A external test...', () => {  // it => teste   // it.only => executa só esse teste por exemplo se tiver dois **it.only** no script ele executa o ultimo

})

describe.skip('Should group tests...', () => {  //describe => grupo de teste
     describe('Should group more specific tests...',() => {  //sub grupo de teste
         it.skip('A specific test...', () => {  //.skip => teste não executa  => posso utilizar => describe.skip

         })
})


    describe('Should group more specific tests 2...',() => { //sub grupo de teste
        it('A specific test 2...', () => {

        })
})


   it('A internal test...', () => {

   })
})
