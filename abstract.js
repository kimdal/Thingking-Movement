class abstract{
  constructor(){
  this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-10, 10), random(-10, 10));
    this.acc = createVector();
    this.w = random(50, 100);
    this.topspeed = 10;
  }


  update(){
  let mouse = createVector(mouseX, mouseY);
  this.acc = p5.Vector.sub(mouse, this.pos);
  this.acc.setMag(50);
  this.vel.add(this.acc);
  this.vel.limit(this.topspeed);
  this.pos.add(this.vel);
  }

  display() {
  noFill();
  stroke(120, 50);
  strokeWeight(1);
  ellipse(this.pos.x, this.pos.y, this.w, this.w);
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
