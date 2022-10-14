//* VARIABLES

const pr1 = document.querySelector(".pr1");
const pr2 = document.querySelector(".pr2");
const pr3 = document.querySelector(".pr3");
const pr4 = document.querySelector(".pr4");
const thumbnail = document.querySelector(".thumbnail");
const preview = document.querySelectorAll(".preview");

/**
 * Check if the element has the class orange-border and remove or add. Also change the image inside the div.
 * @param {*} NodeElement
 * @returns new image source
 */

function changeImg(item) {
  preview.forEach((element) => {
    element.classList.contains("orange-border")
      ? element.classList.remove("orange-border")
      : null;
  });
  if (item[1] == "pr1") {
    item.add("orange-border");
    return (thumbnail.src = "./css/img/image-product-1.jpg");
  }

  if (item[1] == "pr2") {
    item.add("orange-border");
    return (thumbnail.src = "./css/img/image-product-2.jpg");
  }

  if (item[1] == "pr3") {
    item.add("orange-border");
    return (thumbnail.src = "./css/img/image-product-3.jpg");
  }

  if (item[1] == "pr4") {
    item.add("orange-border");
    return (thumbnail.src = "./css/img/image-product-4.jpg");
  }
}

//* ADD CLICK EVENT

pr1.addEventListener("click", (e) => {
  changeImg(e.target.classList);
});

pr2.addEventListener("click", (e) => {
  changeImg(e.target.classList);
});

pr3.addEventListener("click", (e) => {
  changeImg(e.target.classList);
});

pr4.addEventListener("click", (e) => {
  changeImg(e.target.classList);
});

//* BUTTONS FUNCTIONS (INCREASE AND DECREASE)

let btnDecrease = document.querySelector(".btnDecrease");
let btnIncrease = document.querySelector(".btnIncrease");

let number = 0;

function decrease() {
  if (number == 0) {
    return;
  }
  number--;
  document.querySelector(".number").innerHTML = `${number}`;
}

function increase() {
  number++;
  document.querySelector(".number").innerHTML = `${number}`;
}

btnDecrease.onclick = decrease;
btnIncrease.onclick = increase;