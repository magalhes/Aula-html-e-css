// arrow = flecha
// arrow funcion = sintaxe + curta

// function ola(){
//     console.log("Hello")
// }
// First- class citizen = funções sao tratadas como valor
const ola = ()=>{
    console.log("Hello!")
}
ola()
// function soma(a, b){
//     console.log(`a soma é ${a+b}`)
//     return a+b 
// }

//  (a,b) =>{
//     console.log("oi")
//     return a+b

//  }

// function soma(a, b) {
//     console.log(`A soma é ${a + b}`)
//     return a + b
// }
// let resultadoSoma = soma(1,2)


// Exercício: Transforme as funções abaixo em arrow
const name =  (nome, sobrenome) => nome + " " + sobrenome
   
  
  name("lucas","leao")
 
  const contar = (maximo) => {
    for (let i = 1; i <= maximo; i++) {
      console.log(i);
    }
  }
  contar(5)

  const  imc =(peso, altura) => {
    let calculo = peso / (altura * altura);
    console.log(`O IMC é ${calculo}`);
  
    return calculo;
  }