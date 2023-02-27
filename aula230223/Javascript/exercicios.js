//  let calculo
//  function imc(peso, altura){
//      let calculo = peso / (altura * altura)
//      return calculo
//  }
//  let total= imc(85,1.90)
//  console.log(total.toFixed())

// function cacularImc(peso, altura){
//     let calculo = peso/ (altura * altura)
//     console.log(`O IMC é ${calculo.toFixed()}`)
// }
// cacularImc(85, 1.78);



// function percent (num1){
//   let  p = num1 *100
//     return p
// }
// let total1 = percent(0.566);

// console.log(`a porcentagem é ${total1.toFixed(2)}`)


//  function percent (num1){
//      p = num1 *100
//     return `${p}%`
//  }

//  let valorFormatado = percent(0.456);
//  console.log(valorFormatado)


// function valor(b){
//     if( b>0){
//         return true
//     }
//     else{
//         return false
//     }
// }

// let valorReal = valor(-2)
// console.log(valorReal)

// function ehNegativo(num){
//     return num < 0
// }

// console.log(ehNegativo(-10))

function real(c){
    console.log(new Intl.NumberFormat('pt-BR' , {style: 'currency' , currency:'brl'}).format(c))
}
real(1589.98526)

// function cont(d){
//     for(let i=1; i<=d; i++){
//         console.log(i)
      
//     }
// }
// console.log(cont(10))
// cont(10),


function identidade(nome, sobrenome){
    console.log(nome  + " " + sobrenome)
}

identidade("lucas", "Leão")


function circulo(raio){
    return Math.PI * raio * raio
  
}




function nivel(area){
    if(area >=1 && area <= 20){
        console.log("nivel 1")
    }else if(area >= 21 && area <=40){
        console.log("Nivel 2")
    }else{
        console.log("Nivel invalido")
    }
}
nivel(circulo(1))

