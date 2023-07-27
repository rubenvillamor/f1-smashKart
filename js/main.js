// Variables Globales
const body = document.querySelector("body");
const btnStartNode = document.querySelector("#start-btn");
const alonso = document.querySelector("#alonso");
const roadDiv = document.querySelector("#road");
const clasifDiv = document.querySelector("#clasif")
const clasifPos = document.querySelector("#pos")

const winGameNode = document.querySelector("#wingame-screen");
const gameOverNode = document.querySelector("#gameover-screen");
const startNode = document.querySelector("#start-container");
const restartBtns = document.querySelectorAll(".restart-btn");
const starButtonNode = document.getElementById("#start-btn");

// Instanciamos el juego
let gameObjeto = new Game();

// Instanciamos el audio del juego
var audio = new Audio('./audio/formula-uno-.mp3');
audio.volume = 0.02

// Management Functions
function startGame() {
  // Iniciamos el sonido del juego
  audio.play();

  btnStartNode.style.display = "none";
  roadDiv.style.display = 'block';
  startNode.style.display = 'none';
  clasifDiv.style.display = "block"

  gameObjeto.gameLoop();
}

// Event Listeners

btnStartNode.addEventListener("click", startGame);
document.getElementById('start-btn').addEventListener('click', function() {
  document.getElementById('start-container').classList.add('hide');
});

restartBtns.forEach( (btn) => {
  btn.addEventListener('click', () => {
    location.reload()
  })
})

// que Inicie el juego
window.addEventListener("keydown", function (tecla) {
  if (tecla.key === "ArrowDown") gameObjeto.alonso.moveDown();
  if (tecla.key === "ArrowUp") gameObjeto.alonso.moveUp();
  if (tecla.key === "ArrowRight") gameObjeto.alonso.moveRight();
  if (tecla.key === "ArrowLeft") gameObjeto.alonso.moveLeft();
});