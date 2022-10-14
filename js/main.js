const pr1 = document.querySelector(".pr1");
const pr2 = document.querySelector(".pr2");
const pr3 = document.querySelector(".pr3");
const pr4 = document.querySelector(".pr4");
const thumbnail = document.querySelector(".thumbnail");

function changeImg(item){
console.log(item)
}

pr1.addEventListener("click", (e) => {
    changeImg(e.target.classList)
} )

pr2.addEventListener("click", (e) => {
  console.log(e.target)
} )

pr3.addEventListener("click", (e) => {
  console.log(e.target)
} )

pr4.addEventListener("click", (e) => {
  console.log(e.target)
} )
