class Alonso {

    constructor () {
        this.node = document.createElement("img");
        this.node.src = "./imagenes/alonso.jpg";
        roadDiv.append(this.node);

        // cómo que 33
        this.trophies = 33

        this.pos = 20

        // Porpiedades de Fernando
        this.w = 60;
        this.h = 120;
        this.x = 0;
        this.y = 0;

        this.backSpeed = 40
        this.normalSpeed = 50
        this.lateralSpeed = 40
        
        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.style.position = 'absolute';
        this.node.style.bottom = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
        this.node.style.zIndex = 999;
    }

    moveDown () {
        if (this.y > 0) {
            this.y -= this.backSpeed
            this.node.style.bottom = `${this.y}px`
        }
    }

    moveUp () {
        if (this.y + this.h < roadDiv.offsetHeight) {
            this.y += this.normalSpeed
            this.node.style.bottom = `${this.y}px`
        }
    }

    moveRight () {
        if (this.x + this.w < roadDiv.offsetWidth) {
            this.x += this.lateralSpeed
            this.node.style.left = `${this.x}px`
        }
    }

    moveLeft () {
        if (this.x > 0) {
            this.x -= this.lateralSpeed
            this.node.style.left = `${this.x}px`
        }
    }
}