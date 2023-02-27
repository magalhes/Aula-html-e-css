//aula 23.02
//topicos:funções

// Função = procedimento = método

//sintaxe básica
// //sempre começa o nome de uma função com uma letra
// function dizOla (){
//     console.log("Hello World")
//     console.log("!!!!!!!")
// }
// //invocação = chamada
// dizOla();
// dizOla();
// dizOla();

// function exemplo01(){
//     let a = 1;
//     let b = 4;
//     console.log(`A soma é ${a+b}`)
// }

// exemplo01();

// let num1 = 3;
// let num2 = 5;

// function exemplo02(){
//     console.log(`A soma é ${num1+num2}`)
// }
// //exemplo02();
// num1 = 10;
// num2 = 15;
// //exemplo02();

//paramtetros = a entrada = o que a função precisa para executar
// =informação dinamica
//a e b são parametros
// function soma( a,b){
//     console.log(`A soma é ${a} + ${b} = ${a+b}`)
// }

// soma(20,75);
// soma(10,5);
// soma(9,10);
// soma(1,1);
// function calculadora(a,b,c){
// console.log(`A soma é ${a} + ${b} = ${a+b+c}`)
// console.log(`A subtração é ${a-b-c}`)
// console.log(`A multiplicação é ${a*b*c}`)
// console.log(`A divisão é ${a/b/c}`)
// }


//  let numero1 = 50;
//  let numero2 = 25;
// let numero3 = 40;

// calculadora(numero1,numero2, numero3);
let resultado;
function notas(a,b,c){
     resultado = (a + b +c) /3;
    console.log(`a media é ${resultado}`)  
    return resultado; // indica que o valora da variavel será"externalizado"
   
}
// let medBiologia = notas(8,5,7);
// let medMatematica = notas(7.5, 8.9, 4.5);
// let medPortugues = notas(7.7, 9.6, 4.5);

// console.log(`Biologia =  ${medBiologia}`);
// console.log(` Matematica = ${medMatematica}`)
// console.log(` Portugues =  ${medPortugues}`)
function estaAprovado(n1,n2,n3){
    let med = notas(n1,n2,n3);
    if(med >= 7){
        return true;
    }else{
        return false
    }
}
    let statusAluno = estaAprovado(6.5 , 8.0, 8.6 )
    console.log(statusAluno)
//função entrada(parametro) -> processamento(logica) -> saida(retorno)
//y = f(x)
// f = função
//x = parametro
//y = resultado / retorno