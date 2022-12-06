const dino = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");
const counterElement = document.querySelector("#counter");

document.addEventListener("keydown", (event) => {
  jump(event);
  move();
});

function jump(event) {
  if (!(event.code === "Space")) {
    return;
  }
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");
    setTimeout(function () {
      dino.classList.remove("jump");
    }, 1000);
  }
}

function move() {
  if (!cactus.classList.contains("move")) {
    cactus.classList.add("move");
  }
}
setInterval(() => {
  if (isCrashed()) {
    alert("Game Over!");
    counterElement.innerHTML = 0;
  }
});

function isCrashed() {
  let dinoPosition = dino.getBoundingClientRect();
  let cactusPosition = cactus.getBoundingClientRect();

  return (
    dinoPosition.right > cactusPosition.left &&
    dinoPosition.left < cactusPosition.right &&
    dinoPosition.bottom > cactusPosition.top
  );
}

let toAdd = 1;
let ms = 10 * 60;
setInterval(() => {
  var count = parseFloat(counterElement.innerHTML);
  counterElement.innerHTML = !isNaN(count) == true ? count + toAdd : toAdd;
}, ms);