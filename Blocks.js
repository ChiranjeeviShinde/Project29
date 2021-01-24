class Block {
    constructor(x,y,width,height) {
      var options_blocks = {
          isStatic: false,
          restitution :0.4
      }
      this.body = Bodies.rectangle(x,y,width,height,options_blocks);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };