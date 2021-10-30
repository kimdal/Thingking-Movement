class flare{
  constructor(){
    this.pos = createVector(0, 0);
    this.w =100;
  }


display(){
  fill(200);
  strokeWeight(5);
  erase(15, 150);
  ellipse(this.pos.x, this.pos.y, this.w);
  noErase();
}

doubleClicked(){
  this.w = this.w*1.2;
  filter(BLUR, 0.5);
}
}
