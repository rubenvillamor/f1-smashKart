// Variables Globales

const btnStartNode = document.querySelector("#start-btn");
const gameBoxNode = document.querySelector("#game-box");
// const alonso = document.querySelector("#alonso");
// const splashScreenNode = document.querySelector("#splash-screen");
// const winGameNode = document.querySelector("#wingame-screen");

// Management Functions

function startGame() {
  btnStartNode.style.display = "none";
  // gameBoxNode.style.animation = "roadMovement infinite 20s linear"

  // que Inicie el juego

  let gameObjeto = new Game();
  console.log(gameObjeto);
  gameObjeto.gameLoop();
}

// Event Listeners

btnStartNode.addEventListener("click", startGame);

window.addEventListener("keydown", function (tecla) {
  let top = 50;
  let right = 1200;
  console.log(tecla.key);
  if (tecla.key == "ArrowUp") {
    top -= 3;
    gameObjeto.alonso.style.top = `${top}px`;
  }
  if (tecla.key == "ArrowRight") {
    right += 3;
    gameObjeto.alonso.style.left = `${right}px`;
  }
});
