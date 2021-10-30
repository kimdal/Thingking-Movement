class flare{
  constructor(){
    this.pos = createVector(0, 0);
    this.w =100;
  }


display(){
  fill(200, 50);
  strokeWeight(5);
  erase(40, 150);
  ellipse(this.pos.x, this.pos.y, this.w);
  noErase();
}

doubleClicked(){
  this.w = this.w*1.2;
  filter(BLUR, 1);

if (this.w > 200){
  this.w = this.w*-1.2;
  // fill(0);
  // erase(0, 0);
  // noErase();
  // filter(BLUR, 0);
}
}
}
