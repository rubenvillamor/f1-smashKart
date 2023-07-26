
class RoadDivisor {
    constructor() {
        this.node = document.createElement("div");
        this.node.id = "separator";
        roadDiv.append(this.node);

        this.w = 30;
        this.h = 100;
        this.x = 50;
        this.y = 0;

        this.gravitySpeed = 2;

        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.style.position = 'absolute';
        this.node.style.top = `${this.y}%`;
        this.node.style.left = `${this.x}%`;
        this.node.style.transform = 'translateX(-50%)';
        this.node.style.backgroundColor = 'white';
    }

    moveDown () {
        this.y += this.gravitySpeed;
        this.node.style.top = `${this.y}%`;
    }
}