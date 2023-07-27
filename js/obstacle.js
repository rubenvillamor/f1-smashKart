
class Obstacle {

    constructor (x) {

        this.node = document.createElement("img");
        this.node.src = '../imagenes/redbull.jpg';
        roadDiv.append(this.node);
        
        this.gravitySpeed = 4;

        // Porpiedades del obstáculo
        this.w = 70;
        this.h = 70;
        this.x = x;
        this.y = roadDiv.clientHeight

        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.style.position = 'absolute';
        this.node.style.bottom = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
        this.node.style.zIndex = 999;
    }

    moveDown () {
        this.y -= this.gravitySpeed;
        this.node.style.bottom = `${this.y}px`;
    }

}