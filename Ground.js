class Ground{
    constructor(){
        var groundType={
            isStatic:true
          
          }
          this.body=Bodies.rectangle(400,350,800,20,groundType);
World.add(world,this.body);
    }
    display(){
        rectMode(CENTER); 
        fill('brown');
 rect(this.body.position.x,this.body.position.y,800,20);
    }
}