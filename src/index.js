function addToJs(item) {
  return document.querySelector(`.${item}`);
}
const itemsArray = document.querySelectorAll(".item");
const buttonCart = addToJs("shopping-cart");
const btnDown = addToJs("down");
const btnUp = addToJs("up");
const shopWindow = addToJs("shop-window");
let itemCart = [1, 2, 3];

btnDown.addEventListener("click", () => {
  if (itemCart[itemCart.length - 1] < itemsArray.length) {
    itemCart = itemCart.map((x) => {
      return x + 1;
    });
    console.log(itemCart);
    itemsArray[`${itemCart[0] - 2}`].classList.add("hidden");
    itemsArray[`${itemCart[1] - 2}`].classList.remove("item-border");
    itemsArray[`${itemCart[2] - 2}`].classList.add("item-border");
    itemsArray[`${itemCart[2] - 1}`].classList.remove("hidden");
  }
});
btnUp.addEventListener("click", () => {
  if (itemCart[0] > 1) {
    itemCart = itemCart.map((x) => {
      return x - 1;
    });
    console.log(itemCart);
    itemsArray[`${itemCart[0] - 1}`].classList.remove("hidden");
    itemsArray[`${itemCart[0]}`].classList.add("item-border");
    itemsArray[`${itemCart[1]}`].classList.remove("item-border");
    itemsArray[`${itemCart[2]}`].classList.add("hidden");
  }
});

buttonCart.addEventListener("click", () => {
  if (shopWindow.getAttribute("open")) {
    shopWindow.removeAttribute("open");
    shopWindow.setAttribute("close", null);
    shopWindow.addEventListener("animationend", displayClose, { once: true });
  } else {
    shopWindow.removeEventListener("animationend", displayClose, {
      once: true,
    });
    shopWindow.removeAttribute("close");
    shopWindow.setAttribute("open", "true");
    shopWindow.removeAttribute("closed");
  }
});

function displayClose() {
  shopWindow.removeAttribute("close");
  shopWindow.setAttribute("closed", null);
}
