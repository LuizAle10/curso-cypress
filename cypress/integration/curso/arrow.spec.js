
it('nada agora', function() {})


//function soma(a,b) {
 //   return a+b;
//}


//const soma = function (a, b) {
  //  return a + b
//}

//----------Arrow Functions----------

//const soma = (a,b) => {
 //   return a + b
//}


//const soma = (a, b) => a + b

//const soma = (a,b) => {  //se colocar {} precisa colocar o "return", esse resultado no console da "undefined"
 //   a + b
//}

//const soma = (a) => a + a

//const soma = a => a + a 

const soma = () => 5 + 5  // desconsidera o valor do console.log(soma(1,4))

console.log(soma(1,4))

it ('a function test...', function() {
    console.log('Function', this)
})


it ('an arrow test...', () => (
    console.log('Arrow', this)
))