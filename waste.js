class Waste{
    constructor(){
        var option={restitution:0.3,
                    density:1,
                    friction:0.5}
        this.body=Bodies.circle(200,600,30,option);
        World.add(world,this.body);
    }

    display(){
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,30,30);
    }
}