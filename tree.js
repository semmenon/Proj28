class tree {
    constructor (x,y, width, height)
    {
        var options={
            isStatic:true,
            restitution: 0,
            friction: 0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //Matter.Body.setAngle(this.body, angle);
        this.image=loadImage("images/tree.png")
        World.add(world, this.body)

    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}