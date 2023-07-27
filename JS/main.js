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

const gameMusicNode = document.getElementById("#game-music");
const starButtonNode = document.getElementById("#start-btn")


// Management Functions
function startGame() {
  btnStartNode.style.display = "none";
  roadDiv.style.display = 'block';
  startNode.style.display = 'none';
  clasifDiv.style.display = "block"
  
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

function toggleMusic ()  {
  if ( startGame === true) {
      gameMusicNode.play()
  } else {
    gameMusicNode.pause()
  }
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

starButtonNode.addEventListener("click", toggleMusic);