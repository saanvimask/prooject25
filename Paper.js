class Paper
{
    constructor(x,y,r)
    {
        var options=
        {
            'restitution':0.3,
            'isStatic':false,
            'friction':0.5,
            'density':1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        this.image = loadImage("Images/paper.png");
     
        
    }

    display()
    {
        var paperpos=this.body.position;
        push();
        fill("pink");
        translate(paperpos.x,paperpos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,33,33);
        pop();
    }
}
        
       