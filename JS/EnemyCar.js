
class EnemyCar {

    constructor(name, srcImage, x) {

        this.node = document.createElement("img");
        this.node.src = srcImage;
        roadDiv.append(this.node);
        
        this.gravitySpeed = 5;

        // Porpiedades del coche
        this.name = name;
        this.w = 70;
        this.h = 140;
        this.x = x;
        this.y = 0;

        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.style.position = 'absolute';
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
        this.node.style.zIndex = 999;
    }

    moveDown () {
        this.y += this.gravitySpeed;
        this.node.style.top = `${this.y}px`;
    }

}