class Ground{
    constructor(x,y,width,height){
        var options = {
        isStatic : true
    
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world, this.body)
        this.width = width;
        this.height = height

    }
    Display(){
        var pos = this.body.position
        rectMode(CENTER)
        fill(200)
        rect(pos.x,pos.y,this.width,this.height)

    }


}
