let n1 = 7.5
let n2 = 8.5
let n3 =  4.4
let soma  = n1 + n2 + n3
let media = soma / 3
console.log("A media é " + media)

if(media >= 7){
    console.log("Aprovado")
}else if(media >= 5 && media <7){
    console.log("Reforço")
}else{
    console.log("Reprovação")
}

let altura = 1.75
let peso = 115
let imc = peso / (altura * altura)

if(imc <18.5){
    console.log("Abaixo do peso normal")
}else if(imc >= 18.5 && imc < 25) {
    console.log("peso normal")
}else if(imc >= 25.5 && imc < 30) {
    console.log("excesso de peso")
}else if(imc >= 30.0 && imc < 35){
    console.log("Obesidade classe ")
}else if(imc >= 35.0 && imc < 39.9){
    console.log("Obesidade classe 2 ")
}else{
    console.log("Obesidade classe 3")
}

let a = 5
let b = 9

if(a> b ){
    console.log("A e maior que B")
}else if ( b> a){
    console.log("B e maior que A")
}else if(a == b && b == a) {
    console.log("Os valores são iguais")
}