//criando um elemento xmlhttp
const http = new XMLHttpRequest()

//armazenando a url em uma const
const cardapio = document.querySelector("#cardapio") 
const url = `https://rafaelescalfoni.github.io/desenv_web/restaurante/items.json`

//...
http.open("get", url)
http.send()

http.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        cardapio.innerHTML = this.responseText
    }
}

//const carregaCardapio = cardapio => 


