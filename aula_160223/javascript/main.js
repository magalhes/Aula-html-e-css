let lang = "es" // pt,es,en

/*if(lang === "pt"){
    console.log("Ola, Mundo!")
}else if (lang ==="es"){
    console.log("Hola,mundo!")
}else if(lang === "en"){
    console.log("Hello, World!")
}else{
    console.log("Não existe suporte para esse idioma")
}*/

//switch-case = escolha-caso

switch(lang){
    case "pt":
        console.log("Ola mundo!")
        break
    case "es":
        console.log("Hola,mundo!")
        break
    case "en":
        console.log("Hello, World!")
        break
    default:
        console.log("Não existe suporte para esse idioma")       
}
