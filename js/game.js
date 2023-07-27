const verstappenAppeared = false;

class Game {
  constructor() {
    // Propiedades de mi juego que se ven en la pantalla
    // Creacción coche de fernando Alonso
    this.alonso = new Alonso();
    this.enemyCars = [];
    this.roadDivisors = [];
    this.isGameOn = true;
    this.frames = 0;
    this.gameInProgress = true;
    this.verstappenAdded = false;
  }

  vehiculoAparece = () => {
    // let verstappenAdded = false;
    // let gameInProgress = true;

    if ((this.gameInProgress && this.enemyCars.length === 0) || this.frames % 60 === 0) {
      if (this.enemyCars.length < 18 && !this.verstappenAdded) {
        const carName = "vehiculo " + (18 - this.enemyCars.length);
        const randomEnemyCar = new EnemyCar(carName, "./imagenes/mercedes.png", Math.random() * roadDiv.clientWidth);
        this.enemyCars.push(randomEnemyCar);
      } else if (!this.verstappenAdded) {
        const verstappen = new EnemyCar("Verstappen", "./imagenes/sergio-perez-red-bull-racing-r-1-removebg-preview.png", Math.random() * roadDiv.clientWidth);
        this.enemyCars.push(verstappen);
        this.verstappenAdded = true;
      }
    }
  };

  lineaCarreteraAparece() {
    if (this.roadDivisors.length === 0 || this.frames % 60 === 0) {
      const roadDivisor = new RoadDivisor()
      this.roadDivisors.push(roadDivisor)
    }
  }

  gameOver = () => {
    this.isGameOn = false;
    roadDiv.style.display = "none" // oculta la pantalla de juego
    gameOverNode.style.display = "flex";
  };

  gameWin = () => {
    this.isGameOn = false;
    roadDiv.style.display = "none" // oculta la pantalla de juego
    winGameNode.style.display = "flex"
  }

  colisionConVehiculos() {
    this.enemyCars.forEach((enemyCar) => {
      if (
        this.alonso.x < enemyCar.x + enemyCar.w &&
        this.alonso.x + this.alonso.w > enemyCar.x &&
        this.alonso.y < enemyCar.y + enemyCar.h &&
        this.alonso.y + this.alonso.h > enemyCar.y
      ) {
        console.log("colision,", this.alonso, enemyCar)
        this.gameOver();
      }
    });
  }

  alonsoAdelanta () {
    this.enemyCars.forEach((enemyCar) => {
      if (!enemyCar.hasBeenPassed && (enemyCar.y + enemyCar.h) < this.alonso.y) {
        this.alonso.pos -= 1
        clasifPos.innerHTML = this.alonso.pos
        enemyCar.hasBeenPassed = true
      }
    })
  }

  // Metodos de mi juego, siempre fuera del constructor
  // El primero metodo es el gameLoop, para iniciar el juego
  gameLoop = () => {
    this.frames++;
    
    this.lineaCarreteraAparece();
    this.roadDivisors.forEach((roadDivisor) => {
      roadDivisor.moveDown();
    });

    this.vehiculoAparece();
    this.enemyCars.forEach((enemyCar) => {
      enemyCar.moveDown();
    });

    // Alonso ha adelantado a Verstappen
    if (this.verstappenAdded && this.alonso.y > (this.enemyCars.find(car => car.name === "Verstappen")?.y + this.enemyCars.find(car => car.name === "Verstappen")?.h) * 3) {
      this.gameWin()
    }

    this.colisionConVehiculos();
    this.alonsoAdelanta();

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}

// ! Planificación
// Randomizar los coches, excepto el ultimo(check)
// Colisiones con los coches(check)
// Acción movimiento del coche(check)
// Contador de clasificación(check)
// Que el ultimo coche suelte una lara de RedBull
// Musica
// Lineas discontinuas en movimiento para dar sensación de velocidad(check)

// ! Propiedades
// Coche de alonso(check)
// Coches enemigos(check)
// Coche de verstappen(check)