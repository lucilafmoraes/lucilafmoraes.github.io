//recuperar o botão do DOM
const btExecuta = document.getElementById("executa")

 
function recuperaValor(seletor) {
    return parseFloat(document.querySelector(seletor).value) || false
}


function comparaNumeros(numero1, numero2) {
    //entrada vazia
    if(!(numero1 && numero2)) {
        return "Erro na entrada de dados"
    }
        
    //teste com números
    if(numero1>numero2) {
        return `O número ${numero1} é maior que ${numero2}`
    } else if (numero1 == numero2) {
        return `O número ${numero1} é igual ao número ${numero2}`
    } else {
        return `O número ${numero2} é maior que ${numero1}`
    }

}

function exibeMensagem (msg, seletor) {
    document.querySelector(seletor).innerHTML = msg
}


btExecuta.onclick = function() {
    //recupera o valores
    const numero1 = recuperaValor("#numero1")
    const numero2 = recuperaValor("#numero2")
    //compara  num1 com num2 
    const resposta = comparaNumeros(numero1, numero2)
    // exibir o maior número
    exibeMensagem(resposta, "#resultado2")
    
}