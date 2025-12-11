// Das ist ein Array
const base = [
  ["Heinrich", "m", 1985, "kranich_m.jpg"],
  ["Hannelore", "w", 1983, "kranich_w.jpg"],
  ["Kranich McKranichface", "m", 1983, "kranich_m.jpg"],
  ["Peter", "m", 1984, ""],
  ["Lieselotte", "w", 1990, ""],
];

// Wo soll das Event passieren?
let removeCartItemButtons = document.getElementsByClassName("btn-danger");
console.log(removeCartItemButtons);
for (let i = 0; i < removeCartItemButtons.length; i++) {
  let button = removeCartItemButtons[i];
  button.addEventListener("click", removeCartItem);
}
let quantityInputs = document.getElementsByClassName("cart-quantity-input");
for (let i = 0; i < quantityInputs.length; i++) {
  let input = quantityInputs[i];
  input.addEventListener("change", quantityChanged);
}

// Event Listener Aufbau
let shopItemButton = document.getElementsByClassName("shop-item-button");
// Was soll beim Event passieren?
for (let i = 0; i < shopItemButton.length; i++) {
  shopItemButton[i].addEventListener("click", intoCart);
  //   [i] im eventListener ist die Kurzschreibform von Zeile 5
}
// Welche Reaktion soll das Event haben?
// Das ist der eventHandler:
function outOfStock() {
  let error = document.getElementsByClassName("shop-item-title");
  for (let i = 0; i < error.length; i++) {
    error[i].innerText = "Out of Stock";
  }
}

// Kachel anklicken und in den Warenkorb hinzufügen
function intoCart(event) {
  let addToCart = event.target;
  let productClicked = addToCart.parentElement.parentElement;
  let productID = productClicked.getAttribute("data-productID");
  // Schleife einbauen, um Produktname nur einmal im Warenkorb auszugeben
  let rowsInCart = document.getElementsByClassName("card-row");
  console.log(rowsInCart);
  for (let i = 0; i < rowsInCart.length; i++) {
    rowsInCart[i].getAttribute("data-productID");
    console.log(rowsInCart[i].getAttribute("data-productID"));
  }

  let productPicture = productClicked
    .querySelector(".shop-item-image")
    .getAttribute("src");
  let productName = productClicked.querySelector(".shop-item-title").innerText;
  let productPrice = productClicked.querySelector(".shop-item-price").innerText;

  // Element erzeugen
  let cartRowElement = document.createElement("div");

  // Backtick-Template
  cartRowElement.innerHTML = ` 
    <div class="cart-row" data-productID = ${productID}>
          <div class="cart-item cart-column">
            <img
              class="cart-item-image"
              src="${productPicture}"
              width="100"
              height="100"
            />
            <span class="cart-item-title">${productName}</span>
          </div>
          <span class="cart-price cart-column">${productPrice}</span>
          <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" />
            <button class="btn btn-danger" type="button">REMOVE</button>
          </div>
        </div>
  `;
  // Zeile im Warenkorb ausspielen
  document.getElementById("warenkorb").append(cartRowElement);

  // EventListener ergänzen
  cartRowElement
    .querySelector(".btn-danger")
    .addEventListener("click", removeCartItem);

  console.log(productPicture);
}

function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(event) {
  let input = event.target;
  console.log(input.value);
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName("cart-items")[0];
  let cartRows = cartItemContainer.getElementsByClassName("cart-row");
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let priceElement = cartRow.getElementsByClassName("cart-price")[0];
    let quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    let price = parseFloat(priceElement.innerText.replace("€", ""));
    let quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  let totalColon = total.toString();
  total = totalColon.replace(".", ",");
  console.log(total);
  document.getElementsByClassName("cart-total-price")[0].innerText =
    total + "€";
}
/*
let Oli4 = "";
for (let i = 0; i < 4; i++) {
  if (i == 3) {
    Oli4 += "Oli";
  } else {
    Oli4 += "Oli-";
  }
}
*/
// Alternative Lösung
// let Oli4 = "Oli";
// for (let i = 0; i <3, i++){
// Oli4 += "- Oli";
// }

document.getElementsByClassName("band-name-large")[0].innerText = Oli4;
