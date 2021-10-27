class abstract{
  constructor(){
  this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.acc = createVector(random(-0.1, 0.1),random(-0.1, 0.1));
    this.w = random(-10, 50);
  }


  update(){

  this.acc.setMag(0.2);
  this.vel.add(this.acc);
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
