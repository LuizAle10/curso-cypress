
it ('Sem testes, ainda', () => {})

const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13);
         }, 1000)      //1 segundo para responder
    })
    
}

const system = () => {
    console.log('init');
    getSomething().then(some => {
        console.log(`Somenthing is ${some}`)
    })

    //getSomething(some => console.log (`Somenthing is ${some}`)) // entre crase para fazer a interpolação da variável
    console.log('end');
    
    //console.log(`Somenthing is ${somenthing}`); 
    //console.log("Somenthing is " + somenthing); //esse resultado é o mesmo de cima
    
    
} 

system();