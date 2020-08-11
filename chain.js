class Chain{
    constructor(bodya,pointb){
        var options = {
            bodyA : bodya,
            pointB : pointb,
            lenght : 20,
            stiffness : 1

        }
    this.chain =  Matter.Constraint.create(options)
    World.add(world,this.chain)
    }
    display(){
        if(this.chain.bodyA){
            line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,
                this.chain.pointB.x,this.chain.pointB.y)  
        }
        
    }
    fly(){
        this.chain.bodyA = null
    }
}