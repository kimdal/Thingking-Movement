let Abstract = [];
let Shape = [];
let Lump = [];



function setup() {
  createCanvas(640, 360);
  
  for (let i=0; i < 50; i++){
  Abstract[i] = new abstract();
    
    for (let i=0; i < 100; i++){
  Shape[i] = new shape();
  }
}
  // for (let i=0; i < 50; i++){
  // Lump[i] = new lump();
  // }
}
  function mousePressed(){
    let L = new lump(mouseX, mouseY);
    Lump.push(L)
  }
 function keyPressed(){
   if (key == ' '){
     Lump.splice(0, 1);
   }
 }



function draw() {
  background(20, 5);
  for (let i=0; i < Abstract.length; i++){
  Abstract[i].update();
  Abstract[i].display();
  Abstract[i].edges();
  }
  for (let i=0; i < Shape.length; i++){
  Shape[i].update();
  Shape[i].display();
  Shape[i].miniEdges();
  }
  for (let i=0; i < Lump.length; i++){
  Lump[i].update();
  Lump[i].display();
  Lump[i].lumpEdges();
  }
  
}
