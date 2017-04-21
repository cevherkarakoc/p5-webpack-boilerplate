import P5 from "p5";
// if you want P5 DOM
//import P5Dom from "p5/lib/addons/p5.dom";

const sketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(400,400);
  }

  p5.draw = () => {
    p5.background(51);
    p5.rectMode(p5.CENTER);
    p5.rect(200,200,50,50);
  }
}

const p5 = new P5(sketch);
