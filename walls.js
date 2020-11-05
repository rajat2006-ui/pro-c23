class wall{
    constructor(x,y,width,height){
        this.sprite=createSprite(x,y,width,height);
        this.width=width;
        this.height=height;
    }

    display(){
        
       
        fill("red");
        rectMode(CENTER);
        rect(this.sprite.x,this.sprite.y,this.width,this.height);
    }
}