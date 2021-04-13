class Building{
    constructor(x,y){
      var options={
            friction : 2,
            density : 0.5
        }
        this.body = Bodies.rectangle(x,y,100,100,options);
        World.add(world,this.body);
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("blue");
        rect(0,0,100,100);
        pop()
    }
}