class SlingShot{
    constructor(bodyA, pontoB){
        var options = {
            bodyA: bodyA,
            pointB: pontoB,
            stiffness: 0.04,
            length: 10
        }
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }

    display(){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.slingshot.pointB;
        strokeWeight(4);
       line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}