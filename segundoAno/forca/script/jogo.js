const msg = new Array();
msg[0] = "Informe uma letra.";
msg[1] = "Parabéns, você acertou!";
msg[2] = "Errou! Preste mais atenção na próxima vez.";
msg[3] = "Ocorreu um erro, tente novamente.";
msg[4] = "Informe uma resposta.";
msg[5] = "Letra errada, tente outra.";
 
const imagem = new Array();
imagem[0] = "img/forca0.png";
imagem[1] = "img/forca1.png";
imagem[2] = "img/forca2.png";
imagem[3] = "img/forca3.png";
imagem[4] = "img/forca4.png";
imagem[5] = "img/forca5.png";
imagem[6] = "img/forca6.png";
 
//controles
const btnEscolherCategoria = document.querySelector("#btnEscolherCategoria");
const bntResponder = document.querySelector("#bntTentar")
 
//variaveis
let letrasErradas, letrasCertas, palavraSorteada, tentativas=0;
 
const sortearPalavra = lista => {
 //programe o sorteio de uma palavra aleatória
 let numElementos = lista.length
 let valorSorteado = Math.floor(Math.random() * numElementos)
 return lista[valorSorteado]
}
 
const verificarLetra = (palavraSorteada, letra) => {
 //programe aqui
 let resposta = []
 for(i=0; i < palavraSorteada.length; i++ ){
     if(palavraSorteada[i].toUpperCase() ==letra.toUpperCase())
        resposta.push(i)
 }
 //escrever nos espaços
 resposta.forEach(posicao => {
     const lisResp = document.querySelectorAll(".painel li")
    lisResp[posicao].textContent = letra.toUpperCase()
 })
 return resposta.length
}
 
const escreverQtdLetras = (palavra, seletor) => {
    const painel = document.querySelector(seletor)
    painel.innerHTML = ""
        for (let i=0; i< palavra.length; i++){
            const elemLi = document.createElement("li")
            painel.appendChild(elemLi)
 }
}
 
const desenhaForca = (seletor, estagio) => {
 const forca = document.querySelector(seletor)
 forca.innerHTML = `<img src="${imagem[estagio]}" alt="Game over">`
}
 
btnEscolherCategoria.addEventListener("click", ()=>{
 const categoria = document.querySelector("#categoria").value;
 //sortear palavra
 palavraSorteada = (categoria=="cidades")?sortearPalavra(municipios):sortearPalavra(frutas);
 console.log(palavraSorteada)
 
 // escrever a quantidade de letras
 escreverQtdLetras(palavraSorteada, ".painel")
 
 //montar a forca
 desenhaForca("#forca",0)
})
 
bntResponder.addEventListener("click", ()=>{
    if(tentativas<=6) {
        const letraEscolhida = document.querySelector("#entradaLetra").value;
        if (!verificarLetra(palavraSorteada, letraEscolhida)) {
            tentativas++
            desenhaForca("#forca", tentativas)
        }
    }
})