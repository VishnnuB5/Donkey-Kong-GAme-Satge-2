class Ball {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:0.4
      }
      this.body = Bodies.circle(x,y,r,options);
    this.r=r;
    this.image=loadImage("Img/ball.png");
  
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      var angle=this.body.angle;
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,85,85);
      pop();
    }
  };
