
const verstappenAppeared = false;

class Game {

    constructor () {
        // Propiedades de mi juego que se ven en la pantalla
        // Creacción coche de fernando Alonso
        this.alonso = new Alonso();
        this.enemyCars = [];
        this.roadDivisors = [];
        this.isGameOn = true;
        this.frames = 0;
    }
    
    // vehiculoAparece() {
    //     if (this.enemyCars.length === 0 || this.frames % 60 === 0) {
    //         if (this.enemyCars.length < 18) { // Corregido aquí
    //             const carName = "vehiculo " + (18 - this.enemyCars.length);
    //             const randomEnemyCar = new EnemyCar(carName, "../imagenes/f1-normal.jpg", Math.random() * roadDiv.clientWidth);
    //             this.enemyCars.push(randomEnemyCar);
    //         } else {
    //             const verstappen = new EnemyCar("Verstappen", "../imagenes/verstappen.jpg", Math.random() * roadDiv.clientWidth);
    //             this.enemyCars.push(verstappen);
    //         }
    //     }
    // }

    

    vehiculoAparece() {
  if (this.enemyCars.length === 0 || this.frames % 60 === 0) {
    if (this.enemyCars.length < 18) {
      const carName = "vehiculo " + (18 - this.enemyCars.length);
      const randomEnemyCar = new EnemyCar(carName, "../imagenes/f1-normal.jpg", Math.random() * roadDiv.clientWidth);
      this.enemyCars.push(randomEnemyCar);
    } else {
      // Si verstappen no ha aparecido aún, agrégalo y establece la variable a true.
      if (!verstappenAppeared) {
        const verstappen = new EnemyCar("Verstappen", "../imagenes/verstappen.jpg", Math.random() * roadDiv.clientWidth);
        this.enemyCars.push(verstappen);
        verstappenAppeared = true;
      }
    }
  }
}

    lineaCarreteraAparece () {
        if (this.roadDivisors.length === 0 || this.frames % 60 === 0) {
            const roadDivisor = new RoadDivisor()
            this.roadDivisors.push(roadDivisor)
        }
    }

    gameOver = () => {
        this.isGameOn = false;
        // gameScreenNode.style.display = "none" // oculta la pantalla de juego
        // gameOverScreenNode.style.display = "flex";
    }

    // colisionConVehiculos () {
    //     this.enemyCars.forEach((enemyCar) => {
    //         const prueba = this.alonso.x < enemyCar.x + enemyCar.w && this.alonso.x + this.alonso.w > enemyCar.x && this.alonso.y < enemyCar.y + enemyCar.h && this.alonso.y + this.alonso.h > enemyCar.y;
    //         console.log(this.alonso.x)
    //         console.log(enemyCar.x + enemyCar.w)
    //         if (this.alonso.x < enemyCar.x + enemyCar.w && 
    //             this.alonso.x + this.alonso.w > enemyCar.x && 
    //             this.alonso.y < enemyCar.x + enemyCar.w && 
    //             this.alonso.y + this.alonso.h > enemyCar.x) 
    //             {
    //                 this.gameOver();
    //         }
    //     })
    // }
    colisionConVehiculos() {
        this.enemyCars.forEach((enemyCar) => {
          // Coordenadas del jugador Alonso
          const alonsoLeft = this.alonso.x;
          const alonsoRight = this.alonso.x + this.alonso.w;
          const alonsoTop = this.alonso.y;
          const alonsoBottom = this.alonso.y + this.alonso.h;
      
          // Coordenadas del vehículo enemigo (enemyCar)
          const enemyCarLeft = enemyCar.x;
          const enemyCarRight = enemyCar.x + enemyCar.w;
          const enemyCarTop = enemyCar.y;
          const enemyCarBottom = enemyCar.y + enemyCar.h;
      
          // Verificar colisión
          if (
            alonsoLeft < enemyCarRight &&
            alonsoRight > enemyCarLeft &&
            alonsoTop < enemyCarBottom &&
            alonsoBottom > enemyCarTop
          ) {
            this.gameOver();
          }
        });
      }

    // Metodos de mi juego, siempre fuera del constructor
    // El primero metodo es el gameLoop, para iniciar el juego
    gameLoop = () => {
        this.frames++;
        this.lineaCarreteraAparece()
        this.roadDivisors.forEach((roadDivisor) => {
            roadDivisor.moveDown()
        })

        this.vehiculoAparece()
        this.enemyCars.forEach((enemyCar) => {
            enemyCar.moveDown()
        })

        this.colisionConVehiculos();

        if (this.isGameOn === true) {
            requestAnimationFrame ( this.gameLoop )
        }
    }
}

// ! Planificación
// Randomizar los coches, excepto el ultimo
// Colisiones con los coches
// Acción movimiento del coche(check)
// Contador de clasificación
// Que el ultimo coche suelte una lara de RedBull
// Musica
// Lineas discontinuas en movimiento para dar sensación de velocidad(check)

// ! Propiedades
// Coche de alonso(check)
// Coches enemigos(check)
// Coche de verstappen(check)


