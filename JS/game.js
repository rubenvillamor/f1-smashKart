


class Game {

    constructor () {
        // Propiedades de mi juego que se ven en la pantalla

        // Creacción coche de fernando Alonso
        this.alonso = new Alonso()




    }

    // Metodos de mi juego, siempre fuera del constructor

    // El primero metodo es el gameLoop, para iniciar el juego

    gameLoop = () => {

        requestAnimationFrame ( this.gameLoop ) 
        // console.log("Ejecutando gameLoop")

    }



}

// ! Planificación
// Randomizar los coches, excepto el ultimo
// Colisiones con los coches
// Acción movimiento del coche
// Contador de clasificación
// Que el ultimo coche suelte una lara de RedBull
// Musica
// Lineas discontinuas en movimiento para dar sensación de velocidad

// ! Propiedades
// Coche de alonso
// Coches enemigos
// Coche de verstappen


