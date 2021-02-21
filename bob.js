class Bob{

    constructor(x, y){
        var options = {
            'isStatic': true,
           'restitution': 0.3,
            'friction': 0,
           // 'friction': 0.0,
            //'slop':1,
            //'inertia': Infinity
            'density': 1.2
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, 50, options);
        this.radius = 50;
        World.add(world, this.body);
 
     }
     display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("red");
        rotate(angle);
        ellipse(0,0, this.radius);
        pop();
    }



}