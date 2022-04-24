class Ball{
   
    constructor(x,y,r,c){
        var Ball_Opations = {
            restitution:0.95
        }
        this.ball= Bodies.circle(x,y,r,Ball_Opations)
        this.r = r
        this.c = c
World.add(world,this.ball)
    }

show(){
    push()
    fill(this.c)
    ellipse(this.ball.position.x,this.ball.position.y,this.r,this.r)
    pop()
}


}