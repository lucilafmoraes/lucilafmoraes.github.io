const botao= document.querySelector("#execute")
const soma = function() {
 //arguments - objeto que possui uma referencia para todos os parametros recebidos
 let acum = 0
 for(let i=0; i<arguments.length; i++){
     acum = acum + arguments[i]
 }
 return acum
}
console.log(soma(1,3,6))

function CriarItemdeLista(tarefa) {
    return `<li>${tarefa}</li>`
}

function CarregaLista(seletor, ...tarefa){
    const lista = document.querySelector(seletor)
    for(let i=0; i<arguments.length; i++){
        lista.innerHTML = lista.innerHTML + CriarItemdeLista(tarefas[i])
    }

}
//foreach permite interar em arrays
//programar o evento clique do botao

botao.addEventListener("click", function(){

        //inserir itens de lista na todoList
        CarregaLista("#todoList","Estudar JS", "Fazer a calculadora",
         "Fazer o jogo da velha", "Ficar rico programando")
})