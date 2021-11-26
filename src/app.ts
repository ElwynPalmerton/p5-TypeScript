import P5 from "p5";
import "p5/lib/addons/p5.dom";
// import "p5/lib/addons/p5.sound";	// Include if needed
import "./styles.scss";


import MyCircle from "./MyCircle";
import Circle from "./Circles/Circle";
import ColorObject from "./color/ColorObject";
import colorDefaults from "./color/ColorData";
import CircleGroup from "./Circles/CircleGroup";


const sketch = (p5: P5) => {
	let circles: CircleGroup;

	// SETUP
	p5.setup = () => {

		circles = new CircleGroup(p5, 1, 1);

		p5.colorMode(p5.HSL);

		const canvas = p5.createCanvas(600, 600);
		canvas.parent("app");
	
		p5.background("white");
		
		
	};
	
	// The sketch draw method
	p5.draw = () => {
		
		p5.background(50);
		circles.update();
		circles.show();

	};
};


new P5(sketch);