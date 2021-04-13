class Chain{
    constructor(bodyA,pointB){
       var options={
            bodyA : bodyA,
            pointB : pointB,
            length : 150,
            stiffness : 0.2
        }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
        this.pointB = pointB;

    }
    display(){
        var pointB = this.pointB;
        var pointA = this.sling.bodyA.position;
        push()
        stroke(0);
        strokeWeight(3);
        line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop()
    }
}