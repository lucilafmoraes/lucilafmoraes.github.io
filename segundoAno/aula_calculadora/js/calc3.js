//recuperando valores
//ponto antes de "calc" pois é uma classe
const calculadora = document.querySelector(".calc")
console.log(calculadora)
//testar se é um numero
const eNumero = carac => {
    //testa se o parametro carac digitado é um numero
    return ("123456789".indexOf(carac)!= -1)
}

//verificando qual butão foi clicado
calculadora.addEventListener("click", evento =>  
{
    //target elemnto que foi clicado
    const elemClicado = evento.target
    //console de evento sem traget
    //nodename propriedade do console
    if(elemClicado.nodeName == "BUTTON") 
    {

        const carac = elemClicado.textContent

        //prop. console para ver somente os elementos textuais que estão dentro da div(nao inclui tags)
        // a propriedade inner.HTML retornaria as tags junto ao conteudo textual


        //categorias de carac -
        //numeros
        //operações
        //utilitarios

        // se carac for numero => colocar no display

        //se carac for operação => guarda valor no display, guarda a operação do carac

        //se carac for utilitario => se AC => apaga

        if(eNumero(carac)) {
            const display = document.querySelector(".calc-display")
            if(display.textContent == "0")
            display.textcontent = carac
            else
                display.textContent += carac
            

        }

    }

})

