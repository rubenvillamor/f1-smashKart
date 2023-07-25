// Variables Globales

const body = document.querySelector("body");
const btnStartNode = document.querySelector("#start-btn");
const gameBoxNode = document.querySelector("#game-box");
const alonso = document.querySelector("#alonso");
const roadDiv = document.querySelector("#road");
// const splashScreenNode = document.querySelector("#splash-screen");
// const winGameNode = document.querySelector("#wingame-screen");

// Management Functions

function startGame() {
  btnStartNode.style.display = "none";

  let gameObjeto = new Game();
  gameObjeto.gameLoop();

  // que Inicie el juego
  window.addEventListener("keydown", function (tecla) {
    if (tecla.key === "ArrowDown") gameObjeto.alonso.moveDown();
    if (tecla.key === "ArrowUp") gameObjeto.alonso.moveUp();
    if (tecla.key === "ArrowRight") gameObjeto.alonso.moveRight();
    if (tecla.key === "ArrowLeft") gameObjeto.alonso.moveLeft();
  });
}

// Event Listeners

btnStartNode.addEventListener("click", startGame);
