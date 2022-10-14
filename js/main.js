//* VARIABLES
let images = [
  "./css/img/image-product-1.jpg",
  "./css/img/image-product-2.jpg",
  "./css/img/image-product-3.jpg",
  "./css/img/image-product-4.jpg",
];
const pr1 = document.querySelector(".pr1");
const pr2 = document.querySelector(".pr2");
const pr3 = document.querySelector(".pr3");
const pr4 = document.querySelector(".pr4");
const thumbnail = document.querySelector(".thumbnail");
const previewContainer = document.querySelector(".preview-container");
const preview = document.querySelectorAll(".preview");

/**
 * Check if the element has the class orange-border and remove or add. Also change the image inside the div.
 * @param {*} NodeElement
 * @returns new image source
 */

function getCarrousel(arr) {
  arr.forEach((img, index) => {
    let div = document.createElement("div");
    div.classList.add("preview");
    let imgTag = document.createElement("img");
    imgTag.src = img;
    if (index == 0) {
      imgTag.classList.add("img-opacity");
      div.classList.add("orange-border");
    }
    div.appendChild(imgTag);
    previewContainer.appendChild(div);
    div.addEventListener("click", (e) => {
      let propImg = document.getElementsByClassName("orange-border");
      propImg[0].classList.toggle("orange-border");
      let opcImg = document.getElementsByClassName("img-opacity");
      opcImg[0].classList.toggle("img-opacity")
      thumbnail.src = e.target.getAttribute("src");
      div.classList.add("orange-border");
      imgTag.classList.add("img-opacity");
    });
  });
}

getCarrousel(images);

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
