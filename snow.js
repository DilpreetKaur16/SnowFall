class Snow{
    constructor(x,y){
        this.snowfl = Bodies.circle(x,y,50);
        this.image= loadImage("imgsnow.png")
        this.image.scale=2;
        World.add(world, this.snowfl);
    }
  /*  updateY(){
        if(this.snowfl.position.y > height){
        Matter.Body.setPosition(this.snowfl , {x:random(0,1200), y:random(0,600)})

        }
    } */
    display(){
       var  pos = this.snowfl.position;
      //  ellipse( pos.x, pos.y ,20,20);
      image(this.image,pos.x, pos.y ,50,50 )
    }
}