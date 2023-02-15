// Operadores logicos : NOT(!), AND(&&), OR (||)

//Operador NOT(!) = inverte o valor logico

let ligado = true
let desligado = !ligado

/*
Tabela (NOT)
!true = false
!false = true
*/
//Operador AND (&&) = todas as expressoes tem que ser true

/*let gasolinaTanque = 1
let naReserva = gasolinaTanque <5
let podeAbastecer = desligado && naReserva
let podeViajar = ligado && !naReserva
let ficaEmCasa = !podeViajar
console.log(ficaEmCasa)*/

/*
Tabela Verdade (E)
true && true = true
true && false = false
false && false = false
false && true = false
*/
/*
Tabela Verdade (ou)
true && true = true
true && false = true
false && false = false
false && true = true
*/
let idade = 100
let podeBeber = idade >= 18 && idade <=59
let poderDirigir = idade >= 18 || idade <= 59
console.log(podeBeber)
console.log(poderDirigir)

let media = 8.5
let sabeIngles = true
let aprovado =  media >= 7

let contratado = aprovado && sabeIngles
console.log(aprovado || sabeIngles)

let x  = 5
let y =  10

let expresssao = x >3 && y<20
let expressao2 = y!= 20 || x >=5
let expressao3 = y ===10 || x <10
let expressao4 = !(x == 5)
/*if(condição){
    // faz algo se a condição for verdadeira
} 
*/
let idadeUsuario = 25
if(idadeUsuario >= 18){
    console.log(" voce e maior de idade!")
}else{
    console.log("Voce e menor de idade")
}

let nota = 5.5
if(nota >= 7 ){
    console.log("Voce esta aprovado com a nota " + nota)
}else{
    console.log("Voce esta reprovado. Tente de novo")
}

let numero = 0
if(numero > 0 ){
    console.log("O numero e positivo")
}else if(numero <0){
    console.log("O numero e menor que 0")
}else{
    console.log("O numero é zero")
}