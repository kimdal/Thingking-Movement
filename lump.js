class lump{
  constructor(){
  this.pos = createVector(width/2, height/2);
  this.vel = createVector(random(-3, 3), random(-3, 3));
  this.acc = createVector();
  this.topspeed = 5;
  this.w = 20;
  }

  update(){
  let mouse = createVector(mouseX, mouseY);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(0.2);
  this.vel.add(this.acc);
  this.vel.limit(this.topspeed);
  this.pos.add(this.vel);

  }

  display(){
  fill(0, random(0, 250), random(0, 250));
  ellipse(this.pos.x, this.pos.y, this.w);
  }
  lumpEdges(){
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
keyReleased(){
  if(key == '1') this.w = random(-5, 5);
  if(key == '2') this.w = random(5, 10);
  if(key == '3') this.w = random(10, 20);
}
}
