  let cart = []
  let priceDiv = document.querySelector("#price-in-cart")
  let cartDiv = document.querySelector("#cart-list");
  let totalPriceDiv = document.querySelector("#price-in-cart-total")
  let taxDiv = document.querySelector("#tax-price")
  let cartNumberDiv = document.querySelector("#cart-number")
  let minicartDiv = document.querySelector(".minicart")
  let openedCart = false
  let menu = []

  const url = 'https://rafaelescalfoni.github.io/desenv_web/restaurante/items.json';

  function puxaApi(url, callback) {
      let xhttp = new XMLHttpRequest();
      xhttp.open("get", url);
      xhttp.send();

      xhttp.onreadystatechange = function () {
          if (xhttp.readyState == 4 && xhttp.status == 200) {
              let api = xhttp.responseText;
              let cardapio = JSON.parse(api);
              callback(cardapio);
          }
      };
  }
  //função para abrir carrinho
  function closeCart() {
    minicartDiv.classList.remove("opened")
  }
  //função para fechar carrinho
  function openCart() {
    minicartDiv.classList.add("opened")
  }

  function saveCartToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      cart = JSON.parse(cartData);
      renderNewCart();
    }
  }

  function renderNewCart() {
    cartDiv.innerHTML = "";

    let total = 0;
    let tax = 0;
    let productsTotal = 0;

    let elements = cart.map((renderItem) => {
      productsTotal +=
        Number(renderItem.price.replace("$", "")) * renderItem.quantity;

      return createCartItem(renderItem);
    });

    tax = Number((productsTotal * 0.1).toFixed(2));
    total = Number((productsTotal + tax).toFixed(2));

    cartNumberDiv.innerHTML = cart.length;

    priceDiv.innerHTML = `Total sem taxa: $${productsTotal}`;
    totalPriceDiv.innerHTML = `Total com taxa: $${total}`;
    taxDiv.innerHTML = `Taxa: $${tax}`;

    elements.forEach((element) => cartDiv.append(element));
  }

  function addToCart(item) {
    const currentTime = Date.now();
    const index = cart.findIndex((actual) => item.code === actual.code);
    item.timestamp = currentTime;
    if (index !== -1) {
      cart[index].quantity++;
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    saveCartToLocalStorage();
    renderNewCart();
  }

  setTimeout(() => {
    removeOldItems();
  }, 5 * 60 * 1000); // 5 minutes in milliseconds

  function removeOldItems() {
    const currentTime = Date.now();
    cart = cart.filter((item) => {
      const timeDifference = currentTime - item.timestamp;
      // Remove items added more than 5 minutes ago
      return timeDifference <= 5 * 60 * 1000; // 5 minutes in milliseconds
    });
  }
  function removeItemInCart(code) {
    const index = cart.findIndex((actual) => code === actual.code);
    if (index === -1) {
      throw new Error(`Cannot remove item from cart`);
    }
    if (cart[index].quantity === 1) {
      cart.splice(index, 1);
    } else {
      cart[index].quantity--;
    }

    saveCartToLocalStorage();
    renderNewCart();
  }

  removeOldItems();

  function createCartItem({ name, price, photo, code, quantity }) {
    const cartContainerDiv = document.createElement("div");
    cartContainerDiv.className = "cart-container";

    const img = document.createElement("img");
    img.src = photo;
    img.alt = "";

    const descriptionCartDiv = document.createElement("div");
    descriptionCartDiv.className = "description-cart";

    const priceQuantityDiv = document.createElement("div");
    priceQuantityDiv.className = "price-quantity-div";

    const namePara = document.createElement("p");
    namePara.textContent = name;

    const pricePara = document.createElement("p");
    pricePara.textContent = price;

    const deletePara = document.createElement("button");
    deletePara.textContent = "X";
    deletePara.classList.add("delete-button");
    deletePara.addEventListener("click", () => removeItemInCart(code));

    const quantityPara = document.createElement("p");
    quantityPara.classList.add("quantity");
    quantityPara.textContent = `Qtd: ${quantity}`;

    priceQuantityDiv.appendChild(pricePara);
    priceQuantityDiv.appendChild(quantityPara);

    descriptionCartDiv.appendChild(namePara);
    descriptionCartDiv.appendChild(priceQuantityDiv);

    cartContainerDiv.appendChild(img);
    cartContainerDiv.appendChild(descriptionCartDiv);
    cartContainerDiv.appendChild(deletePara);

    return cartContainerDiv;
  }

  function createCard({ photo, name, details, price, code }) {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    let img = document.createElement('img');
    img.setAttribute('src', `https://rafaelescalfoni.github.io/desenv_web/restaurante/${photo}`);
    img.setAttribute('alt', "Imagem do produto");
    img.classList.add('img');

    const nameCard = document.createElement("p");
    nameCard.className = "name";
    nameCard.textContent = name;

    const detailsCard = document.createElement("p");
    detailsCard.className = "details";
    detailsCard.textContent = details;

    const priceCard = document.createElement("p");
    priceCard.className = "price";
    priceCard.textContent = price;

    const button = document.createElement("button");
    button.className = "button";
    button.textContent = "Adicionar ao carrinho";
    button.addEventListener("click", () =>
      addToCart({ photo, name, details, price, code })
    );

    cardDiv.appendChild(img);
    cardDiv.appendChild(nameCard);
    cardDiv.appendChild(detailsCard);
    cardDiv.appendChild(priceCard);
    cardDiv.appendChild(button);

    return cardDiv;
  }

    function makeMenu(menu) {
    //const menuDiv = document.getElementById("menu-restaurant");
    //menu = await requestMenu();

    const menuDiv = document.getElementById("menu-restaurant");
    menu.forEach(({ photo, price, name, details, code }) => {
      menuDiv.appendChild(createCard({ photo, price, name, details, code }));
    });
  }

  loadCartFromLocalStorage()
  puxaApi(url, makeMenu)
