console.log("desde alonso")

class Alonso {

    constructor() {

       
        this.node = document.createElement("img");
        this.node.src = "../imagenes/alonso.jpg";
        gameBoxNode.append(this.node);

        // Porpiedades de Fernando
        this.x = 200;
        this.y = 50;
        this.w = 30;
        this.h = 40;
        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.style.position = "absolute";
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
    }



    // Metodos de Fernando


}