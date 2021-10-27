class shape{
  constructor(){
  this.pos = createVector(width/2, height/2);
    this.vel = createVector(random(-2, 2), random(-2, 2));
    this.acc = createVector(random(-0.01, 0.01),random(-0.01, 0.01));
    this.w = 10;
    this.topspeed = 3;
  }
  
  update(){
  this.acc.setMag(0.2);
  this.vel.add(this.acc);
  this.vel.limit(this.topspeed);
  this.pos.add(this.vel);
  //this.acc.set(0, 0);
  }
  
  display() {
  fill(255);
  stroke(255);
  strokeWeight(1);
  ellipse(this.pos.x, this.pos.y, this.w, this.w);
    }
  
    miniEdges(){
    noFill();
    noStroke();
    //strokeWeight(2);
    rect(210, 100, 220, 160);
    if ((this.pos.y > 255) || (this.pos.y <95)) {
      this.vel.y = this.vel.y*-1;
    }
      if ((this.pos.x > 425)|| (this.pos.x <205)) {
        this.vel.x = this.vel.x*-1;
  }
}
}