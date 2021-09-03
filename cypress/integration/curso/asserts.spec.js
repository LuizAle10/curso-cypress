
/// <reference types = "cypress"/> 


it('Equality', () => {
    const a = 1; 

    expect(a).equal(1);   //quero que isso seja igual a 1
    expect(a, 'Deveria ser 1').equal(1);  //apresentando uma mensagem quando tem falha
    //melhorando a leitura
    expect(a).to.equal(1); //assim já funciona mas não está legal
    expect(a).to.be.equal(1); //melhor fluides na leitura  => espero que (a) seja igual a 1
    expect('a').not.to.be.equal('b'); //negação => espera que (a) não seja igual a (b)
})



it('Truthy', () => {
    const a = true;
    const b = null;
    let c;   //como não tem nenhum valor colocar "let" porq senão da erro no cypress

    expect(a).to.be.true;
    expect(true).to.be.true;
   // expect(false).to.be.true;
    expect(b).to.be.null;
    expect(a).to.be.not.null; //funciona
    expect(a).not.to.be.null; //funciona
    expect(c).to.be.undefined;// como (C) não tem valor definido
})

//Verificar a equalidade de objetos

it('Object Equality', () => {
    const obj = {  //objeto javaScript fica entre chaves
        a: 1,  //propriedade, dois ponto, valor
        b: 2
    }

    expect(obj).equal(obj) //verificando se ele é igual a ele mesmo
    expect(obj).equals(obj) 
    expect(obj).eq(obj) 
    expect(obj).to.be.equal(obj) 
    expect(obj).to.be.deep.equal({a: 1, b: 2})
    expect(obj).eql({a: 1, b: 2})
    expect(obj).include({ a :1 })//objeto é grande e vejo uma propriedade lá dentro
    expect(obj).to.have.property('b')//ir direto na propriedade
    expect(obj).to.have.property('b')
    expect(obj).to.have.property('b', 2)
    expect(obj).to.not.be.empty
    expect({}).to.be.empty

})


//Assertivas em cima de Arrays
it('Arrays', () => {
    const arr = [1,2,3]
    expect(arr).to.have.members([1,2,3]) //espero que o arrays possua os seguintes membros
    expect(arr).to.include.members([1,3]) //alguns membros
    expect([]).to.be.empty//verificar se o array está vazio, espere que um array vazio esteje vazio
})



//checagem de tipos
it('Types', () => {
    const num = 1
    const str = 'String'

    expect(num).to.be.a('number')
    expect(str).to.be.a('string')
    expect([]).to.be.an('array')
    expect({}).to.be.an('object')
})

//posso fazer chegagens em string, não só de igualdade
it('String', () => {
    const str = 'String de teste'

    expect(str).to.be.equal('String de teste')
    expect(str).to.have.length(15)//tamanho da string de ex: 15 caracteres
    expect(str).to.contains('de') //pegar só um trecho da string
    expect(str).to.match(/de/) //ver se existe
    expect(str).to.match(/String/) //ver se existe
    expect(str).to.match(/^String/) //iniciar com string
    expect(str).to.match(/teste$/) //finalizar com teste
    expect(str).to.match(/.{15}/) //validar o tamnho (coloquei ponto que aceita qualquer caractere)
    expect(str).to.match(/\W+/)//validar que existem apenas letras
    expect(str).to.match(/\D+/)//validar que não contém números
})



//Numeros
it('NMumbers', () => {
    const number = 4
    const floatNumber = 5.2123
    
    expect(number).to.be.equal(4)
    expect(number).to.be.above(3) //verificar se esse numero é acima de 3
    expect(number).to.be.below(7) //abaixo de 7
    expect(floatNumber).to.be.equal(5.2123)
    expect(floatNumber).to.be.closeTo(5.2, 0.1)//quero esperar que o floatNumber seja próximo de 5.2, com precisão de 0.1
    expect(floatNumber).to.be.above(5) //verificar se esse numero é acima de 5
})
