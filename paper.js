class Paper{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:1.5,
            density:1.2
        }
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x,y,25,options);
        this.radius = 25;
        World.add(world,this.body);
    }
        display(){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            ellipseMode(RADIUS);
            fill("red");
            image(this.image,20,20,this.radius,this.radius);
            pop();
        }
    }
