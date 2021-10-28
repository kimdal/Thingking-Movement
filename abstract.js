class abstract{
  constructor(){
  this.pos = createVector(0, 0);
    this.vel = createVector(random(-10, 10), random(-10, 10));
    this.acc = createVector();
    //this.w = random(50, 100);
    this.topspeed = 10;
  }


  update(){
  //let mouse = createVector(mouseX, mouseY);
  //this.acc = p5.Vector.sub(mouse, this.pos);
  this.acc.setMag(10);
  this.vel.add(this.acc);
  this.vel.limit(this.topspeed);
  this.pos.add(this.vel);
  }

  display() {
  //noFill();
  stroke(0, random(0, 255), random(0, 255), 40);
  strokeWeight(0.5);
  line(this.pos.x, this.pos.y, this.pos.x*0.2, this.pos.y*0.2);
    }

  edges(){
    if ((this.pos.y > height) || (this.pos.y <0)) {
      this.vel.y = this.vel.y*-1;
    }
      if ((this.pos.x > width)|| (this.pos.x <0)) {
        this.vel.x = this.vel.x*-1;

    }
  }
}
