class wall{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
    }

    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
    }
}