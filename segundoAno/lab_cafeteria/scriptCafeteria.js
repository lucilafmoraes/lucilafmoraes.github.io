const menu = document.querySelectorAll(".item");
let total = 0;
let carrinho = [];

// [{ nome: "frappuccino", preco: "13" }, {}];
// ['[{ nome: "frappuccino", preco: "13" }]'];

function Item(nome, preco) {
  this.nome = nome;
  this.preco = parseFloat(preco.substr(2));
}

window.addEventListener("DOMContentLoaded", () => {
  LoadCartOnEnter();
  total = Number(window.localStorage.getItem("total"));
  updateDisplay(".total", total);
  carrinho.forEach((produto) => {
    addProductList(".itens", { nome: produto.nome });
  });
});

const LoadCartOnEnter = () => {
  carrinho = getAllLocalStorageCart();
  console.log(carrinho);
};

const addCart = (product) => {
  carrinho.push(product);
  console.log(product);
  window.localStorage.setItem("carrinho", JSON.stringify(carrinho));
};

const getAllLocalStorageCart = () => {
  return JSON.parse(localStorage.getItem("carrinho")) ?? [];
};

const addProductList = (selector, product) => {
  const listaItensDOM = document.querySelector(selector);
  listaItensDOM.innerHTML += `<li>${product.nome}</li>`;
};

const updateDisplay = (selector, value) => {
  const valorTotalDOM = document.querySelector(selector);
  valorTotalDOM.innerHTML = value;
};

menu.forEach((item) => {
  console.log(item);
  item.addEventListener("click", () => {
    const nomeItem = item.querySelector("figcaption").textContent;
    const precoItem = item.querySelector(".item-price").textContent;

    addCart({ nome: nomeItem, preco: precoItem });
    addProductList(".itens", { nome: nomeItem });

    total += Number(precoItem.replace("R$", "").replace(",00", ""));
    window.localStorage.setItem("total", total);
    updateDisplay(".total", total);
  });
});
