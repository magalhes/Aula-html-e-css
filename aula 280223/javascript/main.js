//aula
//topicos : ForEach, map

// let numeros = [1,2,3]

// function mostraValor(valor) {
//     console.log(valor)
// }

// // for (let num of numeros){
// //     mostraValor(num);
// // }


// // for(let i =0; i<numeros.length; i++){
// //     mostraValor([i]);
// // }


// //forEach
// //para cade elemento no array, executa a função
// // numeros.forEach(mostraValor);



// numeros.forEach((numero) =>{
//     console.log(numero)
// })


// let soma = 0;

// numeros.forEach((numero) =>{
//   soma += numero
// })

// console.log(`A soma  é ${soma}`)


// let nomes = ["Pedro", "Paulo","Joao","Lucas"]

// let nomesCaixaAlta = []
// // nomes.forEach((nome) =>{
// //     nomesCaixaAlta.push(nome.toUpperCase)
// // })
// //transformando os nomes do array em caixa alta
// for(let nome of nomes){
//     nomesCaixaAlta.push(nome.toLocaleUpperCase())
// }

// let nomesCaixaAlta2= nomes.map((nome) =>{
//     return nome.toUpperCase()
// })
// console.log(nomesCaixaAlta)

// let nomesCaixaBaixa = nomes.map((nome) =>{
//     return nome.toLocaleLowerCase();
// })

// let nomesExcamacao = nomes.map((nome) =>{
//     return nome + " !"
// })

// console.log(nomesExcamacao)
//forEach percorre o array

// //Parâmetro = generico, representa qualquer coisa
// //Argumento = valor especifico

// let dados = [1,2,3,4,5]
// let dadosPor100= dados.map((dado) =>  dado * 100)
// console.log(dadosPor100)


//exericico I :Crie um array de palavras, para cada palavra
//verifique se o tamanho é menor 5


// let palavras = ["bootcamp", "soulcode","fullstack","js","html"]

// let palavras2 = palavras.map((palavra =>{
//     if(palavra.length < 5){
//         return "batata"
//     }else{
//        return palavra.toUpperCase();
//     }
// }))
// console.log(palavras2)

 let palavras3 = ["caixaaa" , "js", "valor", "banana"]
//map e usado para transformar
 let tamanhoPalavras = palavras3.map((palavra=>{
    if(palavra.length <5){
        return "batata"
    }else{
        return palavra.toLocaleLowerCase()
    }
 }))

 console.log(tamanhoPalavras)


 let temps = [29,10,5,-4,15,-20]

 let tempsPositivas = temps.filter((temp) => { // aplicar essa função para cada item
    if(temp >0){
        return true // temp pode fazer parte do novo array
    }else{
        return false; //temp nao fara parte do novo array 
    }
 })

 let tempsPositivas2 = temps.filter((temp) =>temp >0)
 console.log(tempsPositivas)
 console.log(tempsPositivas2)

 // Resumo geral
// forEach = apenas percorre um por um
// filter = testa um por um e gera um novo array
// map = percorre um por um e transforma o elemento
