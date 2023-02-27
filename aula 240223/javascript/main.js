function calculadora(a,b , operador){
    if(operador === "+"){
        console.log(`${a} + ${b} = ${a+b}`)
    }else if (operador === "-"){
        console.log(`${a} - ${b} = ${a-b}`)
    }else if(operador === "*"){
        console.log(`${a} * ${b} = ${a*b}`)
    }else if(operador === "/"){
        console.log(`${a} / ${b} = ${a/b}`)
    }else{
        console.log("Operado não definido")
    }
    
}
calculadora(8,5 , "/")

function temp(f){
    let tempC = (f-32) / 1.8;
    return tempC;

}
let tempCidade = temp(75)
console.log(tempCidade)

function checarTemperatura(temp){
    if(temp< 11){
        console.log("Muito frio")
    }else if(temp >= 11 && temp <16){
        console.log("Clima bom!")
    }else if(temp >= 16&& temp <31){
        console.log("Agradavel")
    }
    else{
        console.log("Hell!")
    }
}
 tempCidade = temp(8) 
 checarTemperatura(tempCidade)
 checarTemperatura(temp(100))


 //String = cadeia de caracteres

let meuPet = "Fred";// "", '', ``
//F(0), r(1), e(2), d(d)
console.log(meuPet)
console.log(meuPet[0])
console.log(meuPet[1])
console.log(meuPet[2])
console.log(meuPet[3])


for(let i = 0; i<meuPet.length; i++){
    
}

console.log(meuPet.toLocaleLowerCase()); // acessa o ultimo caractere
console.log(meuPet.toUpperCase())// retorna tudo maiusculo

let arquivo = "batata.mpa"

console.log(arquivo.endsWith(".mp4"))// verifica se a string termina com a palavra
console.log(arquivo.startsWith("batata"))// verifica se a string inicia com palavra

let frase = "Eu comi arroz e batata";
console.log(frase.includes("Feijao"));
// buscar se uma frase inclui um trecho
console.log(frase.includes("arroz"))
console.log(frase.indexOf("c")) // busca a posição do caractere no começo
console.log(frase.lastIndexOf("c"))//busca a posição da direita p/ esquerda
console.log(frase.indexOf("x")) // -1 = não encontrou a resposta
console.log(frase.indexOf("arroz"))
console.log(frase.replace("Carne" , "ovo")) // troca uma palavra por outra

let palavra2 = "BATATA"
console.log(palavra2.slice(1))// cortou do 1 ate o final
console.log(palavra2.slice(1,4)) // cortar do 1 ate o 3