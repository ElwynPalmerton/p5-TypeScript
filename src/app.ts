import P5 from "p5";
import "p5/lib/addons/p5.dom";
// import "p5/lib/addons/p5.sound";	// Include if needed
import "./styles.scss";


import MyCircle from "./MyCircle";
import Circle from "./Circles/Circle";
import ColorObject from "./color/ColorObject";
import colorDefaults from "./color/ColorData";

// Creating the sketch itself
const sketch = (p5: P5) => {
	// DEMO: Prepare an array of MyCircle instances
	const circles: Circle[] = [];
	let circle: Circle;

	// The sketch setup method 
	p5.setup = () => {

	let colorObj = new ColorObject(p5, colorDefaults)

	p5.colorMode(p5.HSL);
	circle = new Circle(
		p5, 
		p5.createVector(100, 100),
		100,
		colorObj
	);
		const canvas = p5.createCanvas(200, 200);
		canvas.parent("app");
	
		p5.background("white");
		
		
	};
	
	// The sketch draw method
	p5.draw = () => {
		
		p5.background("white");
		circle.show();

	};
};

new P5(sketch);


