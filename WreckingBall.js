class WreckingBall {
    constructor(x,y){
        var options={
            density : 1,
            frictionAir : 0.005
        }
        this.body = Bodies.circle(x,y,50,options);
        World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        fill("red");
        ellipse(this.body.position.x,this.body.position.y,50,50);
    }
}