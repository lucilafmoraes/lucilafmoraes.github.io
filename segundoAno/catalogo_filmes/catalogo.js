const carregaFilme = obra => {

const getRating = star => {
    star = obra.opinioes[0].rating
    let estrelas
    switch(star){
        case(5):
            estrelas = `
            <img src="star.png" width="20px" height="20px">
            <img src="star.png" width="20px" height="20px">
            <img src="star.png" width="20px" height="20px">
            <img src="star.png" width="20px" height="20px">
            <img src="star.png" width="20px" height="20px">`
        break
        case(4):
            estrelas = `
            <img src="star.png" width="20px" height="20px">
            <img src="star.png" width="20px" height="20px">
            <img src="star.png" width="20px" height="20px">
            <img src="star.png" width="20px" height="20px">`
    }
    return estrelas
}

    
let resp = 
    `<div class ="filme">
        <h3>${obra.titulo}</h3>
        <br>
        <img src="${obra.figura}" alt="${obra.titulo}" width="150px" height="150px">
        
        <p><b>SINÓPSE:</b> <br><br>${obra.resumo}</p>
        <br>
        <p>${obra.classificacao}</p>
        <p><b>RATING: </b></p>
        ${getRating()}
    </div>`
const divResp = document.querySelector("#filme")
divResp.innerHTML += resp
}
    


const xhttp = new XMLHttpRequest()
const url = "https://rafaelescalfoni.github.io/desenv_web/filmes.json"
    
xhttp.open("get", url)
xhttp.send()
xhttp.onreadystatechange = function() {
    if(this.readyState == 4) {
        if(this.status == 200) {
            //baixar filmes
            let resposta = this.responseText
            let filme = JSON.parse(resposta)
            //iterar o array 
            filme.forEach(filme => {
                //carregar os filmes
                carregaFilme(filme)
            });
        } else {
            console.log("deu ruim")
        
        }
    } 
}
