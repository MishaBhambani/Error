class myBox{
    constructor(x, y, width, height){
        var bounce = {
            'restitution': 0.8, 'mass': 1
        }
        this.body = Bodies.rectangle(x, y, width, height, bounce);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }

}