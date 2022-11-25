const addToJs = (item) => {
  return document.querySelector(`.${item}`);
};

const buttonCart = addToJs("shopping-cart");
const shopWindow = addToJs("shop-window");
const item1 = addToJs("item-1");
const item2 = addToJs("item-2");
const item3 = addToJs("item-3");
const item4 = addToJs("item-4");
const btnDown = addToJs("down");
const btnUp = addToJs("up");
let itemCart = [1, 2, 3];

btnDown.addEventListener("click", () => {
  if (itemCart[itemCart.length - 1] <= 3) {
    let item = itemCart.map((x) => {
      return x + 1;
    });
    console.log(item);
    item3.classList.add("item-border");
    item2.classList.remove("item-border");
    item4.classList.remove("hidden");
    item1.classList.add("hidden");
  }
});
btnUp.addEventListener("click", () => {
  if (itemCart[0] >= 1) {
    let item = itemCart.map((x) => {
      return x - 1;
    });
    console.log(item);
    item1.classList.remove("hidden");
    item2.classList.add("item-border");
    item3.classList.remove("item-border");
    item4.classList.add("hidden");
  }
});

buttonCart.addEventListener("click", () => {
  shopWindow.classList.toggle("hidden");
});
