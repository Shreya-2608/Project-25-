class DustBin{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.image = loadImage("Capture.JPG");
        this.thickness = 20;
        this.width  =200;
        this.height = 200;
       
        this.BottomBody = Bodies.rectangle(x,y,this.width,this.thickness,options);
        World.add(world,this.BottomBody);
        
        this.LeftBody = Bodies.rectangle(x-this.width/2,y-this.height/2,this.thickness,this.height,options);
        World.add(world,this.LeftBody);

        this.RightBody = Bodies.rectangle(x+this.width/2,y-this.height/2,this.thickness,this.height,options);
        World.add(world,this.RightBody);
    }
    display(){
        var posBottom = this.BottomBody.position;
        var posLeft = this.LeftBody.position;
        rectMode(CENTER);
        fill("green");
        image(this.image,posBottom.x-90,posLeft.y-90,this.width,this.height);

        
        rectMode(CENTER);
        fill("green");
        //rect(posLeft.x,posLeft.y,this.thickness,this.height);

        var posRight = this.RightBody.position;
        rectMode(CENTER);
        fill("green");
        //rect(posRight.x,posRight.y,this.thickness,this.height);
    }
}