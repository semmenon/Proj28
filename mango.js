/*class mango {
    constructor (x,y,r)
    {
        var options={
            isStatic:true,
            restitution: 0,
            friction: 1,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("images/mango.png")
        this.body=Bodies.circle(this.x, this.y, this.r, options)
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
    }*/
class mango {
    constructor (x,y, width, height)
    {
        var options={
            isStatic:true,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //Matter.Body.setAngle(this.body, angle);
        this.image=loadImage("images/mango.png")
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