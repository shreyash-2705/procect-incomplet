class Box{
    constructor(x,y,radius){
        var ball2Type={ 
            restitution:1.4}
          
          this.body=Bodies.circle(x,y,radius,ball2Type)
         //this.width=width
         this.radius=radius
          World.add(world,this.body)
          
          
    }
    display(){
        fill(random((0,255)));
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}