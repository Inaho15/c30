class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body) {
    this.sling.bodyA = body;
    }
    
    display(){
        image(this.sling1, 200,20);
        image(this.sling2, 174,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if (pointA.x<210){
                strokeWeight(9);
                stroke(48,23,8);
                line(pointA.x - 20, pointA.y, pointB.x + 20, pointB.y);
                line(pointA.x- 20, pointA.y, pointB.x + 20, pointB.y);
                image(this.sling3,pointA.x - 30,pointA.y - 10,10,20);
            }
            else {
            strokeWeight(4);
            stroke(48,23,8);
            line(pointA.x - 20, pointA.y, pointB.x + 20, pointB.y);
            line(pointA.x- 20, pointA.y, pointB.x + 20, pointB.y);
            image(this.sling3,pointA.x - 30,pointA.y - 10,10,20);
            }
        }
    }
    
}