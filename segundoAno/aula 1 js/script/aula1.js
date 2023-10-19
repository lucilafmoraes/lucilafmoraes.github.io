console.log("hello mundo")
var Nome = "Lucila"
var genero = "f"

var tratamento = genero == "f" ? "senhorita" : genero == "m" ? "senhor" : " "
/*
if(genero == "f")
    tratamento = "senhorita"
else
    tratamento = "senhor"
*/
//maneira convencional
var mensagem = "Boa tarde," + tratamento + " " + Nome


//template string!
var mensagem =`boa tarde, ${tratamento} 

${Nome}`
console.log(mensagem)

var cabecalho = window.document.getElementById("titulo")
var botao = document.getElementById("executa")

botao.onclick = function(){
    var body = document.getElementById("corpo")
    var corAzul = Math.random
}